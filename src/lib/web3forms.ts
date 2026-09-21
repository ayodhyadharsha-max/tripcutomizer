'use client';

/**
 * Web3Forms Instant Direct Email Integration for tripcustomizer@gmail.com
 * Access Key: c542ca79-b08a-4352-bf3e-1045518a0486
 */

export interface Web3FormPayload {
  access_key?: string;
  subject?: string;
  name: string;
  email?: string;
  phone?: string;
  destination?: string;
  travel_date?: string;
  travelers_count?: number | string;
  budget?: string;
  message?: string;
  from_name?: string;
  [key: string]: any;
}

export const sendWeb3FormLead = async (payload: Web3FormPayload): Promise<boolean> => {
  const apiKey =
    payload.access_key ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
    'c542ca79-b08a-4352-bf3e-1045518a0486';

  const customerName = payload.name || 'Valued Customer';
  const destinationName = payload.destination || 'Custom Holiday';
  const formattedSubject = payload.subject || `🚨 NEW TRIP ENQUIRY: ${customerName} — ${destinationName}`;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const formattedMessage = `
========================================
🚨 NEW TRIP ENQUIRY DETAILS
========================================
• Customer Full Name: ${customerName}
• Phone Number: ${payload.phone || 'Not Provided'}
• Email Address: ${payload.email || 'Not Provided'}
• Destination: ${destinationName}
• Travel Date: ${payload.travel_date || payload.travelDates || 'Flexible'}
• Total Travelers & Budget: ${payload.travelers_count || 1} Travelers | ${payload.budget || 'Custom Quote'}
• Submission Time: ${timestamp}
========================================
${payload.message ? `Additional Notes: ${payload.message}` : ''}
`.trim();

  // Run asynchronously without blocking UI form submission thread
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        access_key: apiKey,
        to_email: 'tripcustomizer@gmail.com',
        from_name: 'tripcustomizer Direct Lead Alert',
        subject: formattedSubject,
        name: customerName,
        email: payload.email || 'no-reply@tripcustomizer.com',
        phone: payload.phone || '',
        destination: destinationName,
        travel_date: payload.travel_date || payload.travelDates || 'Flexible',
        total_travelers_and_budget: `${payload.travelers_count || 1} Travelers | ${payload.budget || 'Custom Quote'}`,
        submission_time: timestamp,
        message: formattedMessage,
      }),
    });

    const data = await res.json();
    return data.success === true;
  } catch (error) {
    console.warn('[Web3Forms Direct Email] Notice:', error);
    return false;
  }
};
