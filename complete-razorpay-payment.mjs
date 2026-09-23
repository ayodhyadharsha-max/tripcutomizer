import https from 'https';
import fs from 'fs';
import Razorpay from 'razorpay';

// Read .env.local
const envContent = fs.readFileSync('.env.local', 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length >= 2) envVars[parts[0].trim()] = parts.slice(1).join('=').trim();
});

const key_id = envVars['RAZORPAY_KEY_ID'];
const key_secret = envVars['RAZORPAY_KEY_SECRET'];

const instance = new Razorpay({ key_id, key_secret });

async function createAndAuthorizeTestPayment() {
  try {
    // 1. Create order
    const order = await instance.orders.create({
      amount: 10000, // ₹100.00
      currency: 'INR',
      receipt: `test_receipt_${Date.now()}`,
      notes: { test: 'dashboard_verification' }
    });
    console.log('Created Order:', order.id);

    // 2. Submit payment directly to Razorpay Checkout API
    const auth = Buffer.from(`${key_id}:${key_secret}`).toString('base64');
    
    // Razorpay standard checkout payment payload for test card / UPI
    const paymentPayload = JSON.stringify({
      key_id: key_id,
      order_id: order.id,
      amount: 10000,
      currency: 'INR',
      email: 'test@tripcustomizer.com',
      contact: '7408763401',
      method: 'card',
      'card[number]': '4100280000001007',
      'card[expiry_month]': '12',
      'card[expiry_year]': '2026',
      'card[cvv]': '123',
      'card[name]': 'Test Traveler'
    });

    console.log('Submitting test payment request...');
    
    const req = https.request({
      hostname: 'api.razorpay.com',
      path: '/v1/payments/create/checkout',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(paymentPayload),
        'Authorization': 'Basic ' + auth
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log('HTTP Status Code:', res.statusCode);
        console.log('Razorpay Response:', data);
      });
    });

    req.on('error', (e) => console.error('Request Error:', e));
    req.write(paymentPayload);
    req.end();

  } catch (err) {
    console.error('Error:', err);
  }
}

createAndAuthorizeTestPayment();
