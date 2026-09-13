/**
 * Omnichannel Notification Event Dispatch Engine
 * Dispatches transactional notifications via Email, SMS, and WhatsApp business APIs.
 */

export type NotificationChannel = 'EMAIL' | 'SMS' | 'WHATSAPP' | 'IN_APP_TOAST';

export type NotificationEventType = 
  | 'BOOKING_CONFIRMED'
  | 'PAYMENT_RECEIPT'
  | 'VISA_STATUS_UPDATE'
  | 'FOREX_DISPATCH_UPDATE'
  | 'FLIGHT_GATE_CHANGE'
  | 'CRM_LEAD_ASSIGNED'
  | 'REFUND_PROCESSED';

export interface NotificationPayload {
  eventId: string;
  eventType: NotificationEventType;
  channels: NotificationChannel[];
  recipientEmail: string;
  recipientPhone: string;
  recipientName: string;
  data: {
    bookingId?: string;
    pnr?: string;
    amount?: number;
    destinationName?: string;
    documentUrl?: string;
    customMessage?: string;
  };
  timestamp: string;
}

export interface NotificationDispatchResult {
  channel: NotificationChannel;
  status: 'SENT' | 'DELIVERED' | 'FAILED';
  providerMessageId: string;
  timestamp: string;
}

/**
 * Dispatch an omnichannel event
 */
export async function dispatchNotificationEvent(
  payload: NotificationPayload
): Promise<NotificationDispatchResult[]> {
  const results: NotificationDispatchResult[] = [];

  for (const channel of payload.channels) {
    // Simulate API dispatch latency to AWS SES / Twilio / WhatsApp Business API
    await new Promise((resolve) => setTimeout(resolve, 200));

    const msgId = `${channel.toLowerCase()}_${Math.random().toString(36).substring(2, 9)}`;

    if (channel === 'EMAIL') {
      console.log(`[EMAIL DISPATCH] Sent ${payload.eventType} to ${payload.recipientEmail}`);
      results.push({ channel: 'EMAIL', status: 'DELIVERED', providerMessageId: msgId, timestamp: new Date().toISOString() });
    } else if (channel === 'SMS') {
      console.log(`[SMS DISPATCH] Sent ${payload.eventType} to ${payload.recipientPhone}`);
      results.push({ channel: 'SMS', status: 'DELIVERED', providerMessageId: msgId, timestamp: new Date().toISOString() });
    } else if (channel === 'WHATSAPP') {
      console.log(`[WHATSAPP DISPATCH] Sent ${payload.eventType} with PDF ticket to ${payload.recipientPhone}`);
      results.push({ channel: 'WHATSAPP', status: 'DELIVERED', providerMessageId: msgId, timestamp: new Date().toISOString() });
    } else if (channel === 'IN_APP_TOAST') {
      results.push({ channel: 'IN_APP_TOAST', status: 'SENT', providerMessageId: msgId, timestamp: new Date().toISOString() });
    }
  }

  return results;
}

/**
 * Format notification template copy for WhatsApp / SMS
 */
export function formatNotificationCopy(eventType: NotificationEventType, data: NotificationPayload['data']): string {
  switch (eventType) {
    case 'BOOKING_CONFIRMED':
      return `🎉 Booking Confirmed! Your trip to ${data.destinationName || 'your destination'} (Booking ID: ${data.bookingId}, PNR: ${data.pnr}) is confirmed. Download your e-ticket here: ${data.documentUrl || 'https://wanderlustindia.com/account'}`;
    case 'FOREX_DISPATCH_UPDATE':
      return `💵 Forex Update: Your Borderless Card (Order ${data.bookingId}) has passed RBI KYC verification & is out for doorstep delivery today.`;
    case 'VISA_STATUS_UPDATE':
      return `✈️ Visa Update: Your Schengen Visa application status has been updated to SUBMITTED TO EMBASSY. Tracker ID: ${data.bookingId}.`;
    case 'FLIGHT_GATE_CHANGE':
      return `✈️ Alert: Gate for Flight ${data.pnr} has changed to Gate B12 at DEL Terminal 3.`;
    default:
      return `Updates on your booking ${data.bookingId || ''} from Wanderlust India.`;
  }
}
