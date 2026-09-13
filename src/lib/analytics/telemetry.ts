/**
 * Analytics & E-Commerce Event Telemetry Tracker Engine
 * Tracks Web Vitals, conversion funnel steps, search telemetry, and customer interactions.
 */

export type EventCategory = 
  | 'NAVIGATION'
  | 'SEARCH'
  | 'ECOMMERCE'
  | 'FOREX'
  | 'LEAD_GEN'
  | 'PERFORMANCE';

export interface AnalyticsEvent {
  eventId: string;
  eventName: string;
  category: EventCategory;
  params?: Record<string, any>;
  timestamp: string;
  sessionId: string;
  url: string;
}

// In-memory telemetry log buffer for debugging & export
let telemetryQueue: AnalyticsEvent[] = [];

/**
 * Initialize tracking session ID
 */
export function getSessionId(): string {
  if (typeof window !== 'undefined') {
    let sid = sessionStorage.getItem('wl_session_id');
    if (!sid) {
      sid = `SES-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      sessionStorage.setItem('wl_session_id', sid);
    }
    return sid;
  }
  return 'SES-SERVER-SIDE';
}

/**
 * Track custom analytics event
 */
export function trackEvent(
  eventName: string,
  category: EventCategory,
  params: Record<string, any> = {}
): void {
  const event: AnalyticsEvent = {
    eventId: `EVT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    eventName,
    category,
    params,
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    url: typeof window !== 'undefined' ? window.location.href : 'server'
  };

  telemetryQueue.push(event);

  if (process.env.NODE_ENV === 'development') {
    console.log(`[ANALYTICS TELEMETRY] ${category} :: ${eventName}`, params);
  }
}

/**
 * Pre-configured E-Commerce Funnel Tracking Functions
 */
export const trackEcommerce = {
  searchQuery: (query: string, productType: string, resultsCount: number) => {
    trackEvent('search_query', 'SEARCH', { query, productType, resultsCount });
  },

  viewItem: (itemId: string, itemName: string, price: number, category: string) => {
    trackEvent('view_item', 'ECOMMERCE', { itemId, itemName, price, category });
  },

  beginCheckout: (cartValue: number, itemsCount: number, promoCodeApplied?: string) => {
    trackEvent('begin_checkout', 'ECOMMERCE', { cartValue, itemsCount, promoCodeApplied });
  },

  purchaseSuccess: (orderId: string, totalAmount: number, paymentMethod: string) => {
    trackEvent('purchase', 'ECOMMERCE', { orderId, totalAmount, paymentMethod });
  },

  leadSubmitted: (leadType: string, destination: string) => {
    trackEvent('lead_submission', 'LEAD_GEN', { leadType, destination });
  },

  forexKycUploaded: (orderId: string, documentsCount: number) => {
    trackEvent('forex_kyc_uploaded', 'FOREX', { orderId, documentsCount });
  }
};

/**
 * Flush telemetry log queue (for backend batch sync)
 */
export function getTelemetryLogs(): AnalyticsEvent[] {
  return [...telemetryQueue];
}
