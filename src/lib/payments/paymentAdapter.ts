/**
 * Payment Gateway State Machine & Unified Adapter Engine
 * Supports Razorpay, HDFC PG, UPI QR Instant Pay, NetBanking, EMI & Multicurrency Cards
 */

export type PaymentMethod = 
  | 'RAZORPAY' 
  | 'HDFC_PG' 
  | 'UPI_QR' 
  | 'CREDIT_CARD' 
  | 'NET_BANKING' 
  | 'NO_COST_EMI' 
  | 'TRAVEL_WALLET';

export type PaymentState = 
  | 'CREATED'
  | 'INITIATED'
  | 'AUTHENTICATING_2FA'
  | 'PROCESSING'
  | 'SUCCESS'
  | 'FAILED'
  | 'REFUNDED'
  | 'PARTIALLY_REFUNDED';

export interface PaymentTransaction {
  transactionId: string;
  orderId: string;
  amount: number;
  currency: 'INR' | 'USD' | 'EUR' | 'GBP';
  method: PaymentMethod;
  state: PaymentState;
  customerEmail: string;
  customerPhone: string;
  gatewayRef?: string;
  failureReason?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Initialize a new transaction
 */
export function createPaymentTransaction(
  orderId: string,
  amount: number,
  method: PaymentMethod,
  customerEmail: string,
  customerPhone: string,
  currency: 'INR' | 'USD' | 'EUR' | 'GBP' = 'INR'
): PaymentTransaction {
  const timestamp = new Date().toISOString();
  return {
    transactionId: `TXN-${Math.floor(10000000 + Math.random() * 90000000)}`,
    orderId,
    amount,
    currency,
    method,
    state: 'CREATED',
    customerEmail,
    customerPhone,
    gatewayRef: `GW-${Math.floor(100000 + Math.random() * 900000)}`,
    createdAt: timestamp,
    updatedAt: timestamp
  };
}

/**
 * Simulate state machine transitions with verification
 */
export async function processPaymentStateTransition(
  txn: PaymentTransaction,
  targetState: PaymentState,
  failureReason?: string
): Promise<PaymentTransaction> {
  // Simulate network delay for realistic gateway verification
  await new Promise((resolve) => setTimeout(resolve, 800));

  const validTransitions: Record<PaymentState, PaymentState[]> = {
    CREATED: ['INITIATED', 'FAILED'],
    INITIATED: ['AUTHENTICATING_2FA', 'PROCESSING', 'FAILED'],
    AUTHENTICATING_2FA: ['PROCESSING', 'SUCCESS', 'FAILED'],
    PROCESSING: ['SUCCESS', 'FAILED'],
    SUCCESS: ['REFUNDED', 'PARTIALLY_REFUNDED'],
    FAILED: ['INITIATED'], // Retry attempt
    REFUNDED: [],
    PARTIALLY_REFUNDED: ['REFUNDED']
  };

  if (!validTransitions[txn.state].includes(targetState)) {
    throw new Error(`Invalid payment state transition from ${txn.state} to ${targetState}`);
  }

  return {
    ...txn,
    state: targetState,
    failureReason: failureReason || txn.failureReason,
    updatedAt: new Date().toISOString()
  };
}

/**
 * Simulated Webhook Payload Validator for Razorpay / HDFC PG
 */
export function verifyGatewaySignature(
  orderId: string,
  paymentId: string,
  signature: string,
  secret: string = 'WANDERLUST_PG_SECRET_2026'
): boolean {
  // Mock HMAC verification for simulation engine
  return signature.length > 10 && orderId.length > 0 && paymentId.length > 0;
}
