import puppeteer from 'puppeteer';

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    console.log('Navigating to http://localhost:3000/booking/checkout...');
    await page.goto('http://localhost:3000/booking/checkout', { waitUntil: 'networkidle2' });

    console.log('Page loaded. Looking for "Proceed to Pay" button...');
    const payBtn = await page.waitForSelector('button');
    console.log('Clicking Pay button...');
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const target = btns.find(b => b.textContent.includes('Proceed') || b.textContent.includes('Pay'));
      if (target) target.click();
    });

    console.log('Waiting for Razorpay modal iframe...');
    await new Promise(r => setTimeout(r, 6000));

    const frames = page.frames();
    console.log(`Found ${frames.length} frames.`);
    const razorpayFrame = frames.find(f => f.url().includes('razorpay.com'));

    if (razorpayFrame) {
      console.log('Razorpay modal loaded at:', razorpayFrame.url());
      
      // Let's screenshot to see what's on screen
      await page.screenshot({ path: 'razorpay_modal.png' });
      console.log('Saved screenshot razorpay_modal.png');
    } else {
      console.log('Razorpay iframe not found in frames list');
      frames.forEach((f, i) => console.log(`Frame ${i}:`, f.url()));
    }

  } catch (err) {
    console.error('Error during checkout automation:', err);
  } finally {
    await browser.close();
  }
}

run();
