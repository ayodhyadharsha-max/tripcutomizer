'use client';

/**
 * Web3Forms Helper Integration
 * Allows sending instant email alerts for leads and customer inquiries
 * powered by https://web3forms.com (1 Access Key covers all site forms!)
 */

export interface Web3FormPayload {
  access_key?: string;
  subject: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  from_name?: string;
  [key: string]: any;
}

export const sendWeb3FormLead = async (payload: Web3FormPayload): Promise<boolean> => {
  const apiKey = payload.access_key || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'demo-access-key';

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: apiKey,
        from_name: 'tripcustomizer Platform Alert',
        ...payload,
      }),
    });

    const data = await res.json();
    return data.success === true;
  } catch (error) {
    console.warn('Web3Forms email submission note:', error);
    return false;
  }
};
