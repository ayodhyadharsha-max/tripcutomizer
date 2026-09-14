'use client';

/**
 * Web3Forms Integration
 * Automatically sends instant email lead notifications to tripcustomizer@gmail.com
 * Access Key: c542ca79-b08a-4352-bf3e-1045518a0486
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
  const apiKey =
    payload.access_key ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    'c542ca79-b08a-4352-bf3e-1045518a0486';

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
    console.warn('Web3Forms email submission status:', error);
    return false;
  }
};
