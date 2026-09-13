// Forex Provider Service Adapter Interface

export interface ExchangeRate {
  currencyCode: string;
  currencyName: string;
  flag: string;
  buyRate: number;
  sellRate: number;
  lastUpdated: string;
}

export interface ForexQuoteResult {
  currencyCode: string;
  foreignAmount: number;
  exchangeRate: number;
  estimatedInrAmount: number;
  serviceFee: number;
  gstAmount: number;
  totalPayableInr: number;
  isIndicativeRate: boolean;
}

export interface IForexRateProvider {
  getLiveRates(): Promise<ExchangeRate[]>;
  calculateQuote(currencyCode: string, amount: number, action: 'BUY' | 'SELL' | 'RELOAD'): Promise<ForexQuoteResult>;
}

export class MockForexRateProvider implements IForexRateProvider {
  private rates: Record<string, ExchangeRate> = {
    USD: { currencyCode: 'USD', currencyName: 'US Dollar', flag: '🇺🇸', buyRate: 83.75, sellRate: 84.45, lastUpdated: new Date().toISOString() },
    EUR: { currencyCode: 'EUR', currencyName: 'Euro', flag: '🇪🇺', buyRate: 91.20, sellRate: 92.10, lastUpdated: new Date().toISOString() },
    GBP: { currencyCode: 'GBP', currencyName: 'British Pound', flag: '🇬🇧', buyRate: 108.50, sellRate: 109.80, lastUpdated: new Date().toISOString() },
    AED: { currencyCode: 'AED', currencyName: 'UAE Dirham', flag: '🇦🇪', buyRate: 22.75, sellRate: 23.10, lastUpdated: new Date().toISOString() },
    SGD: { currencyCode: 'SGD', currencyName: 'Singapore Dollar', flag: '🇸🇬', buyRate: 63.80, sellRate: 64.60, lastUpdated: new Date().toISOString() },
    THB: { currencyCode: 'THB', currencyName: 'Thai Baht', flag: '🇹🇭', buyRate: 2.42, sellRate: 2.52, lastUpdated: new Date().toISOString() },
    CAD: { currencyCode: 'CAD', currencyName: 'Canadian Dollar', flag: '🇨🇦', buyRate: 61.30, sellRate: 62.10, lastUpdated: new Date().toISOString() },
    AUD: { currencyCode: 'AUD', currencyName: 'Australian Dollar', flag: '🇦🇺', buyRate: 55.40, sellRate: 56.20, lastUpdated: new Date().toISOString() },
  };

  async getLiveRates(): Promise<ExchangeRate[]> {
    return Object.values(this.rates);
  }

  async calculateQuote(currencyCode: string, amount: number, action: 'BUY' | 'SELL' | 'RELOAD'): Promise<ForexQuoteResult> {
    const rateInfo = this.rates[currencyCode] || this.rates['USD'];
    const rate = action === 'BUY' || action === 'RELOAD' ? rateInfo.buyRate : rateInfo.sellRate;
    const baseInr = amount * rate;
    const serviceFee = Math.min(250, baseInr * 0.005);
    const gstAmount = serviceFee * 0.18;
    const totalPayableInr = baseInr + serviceFee + gstAmount;

    return {
      currencyCode: rateInfo.currencyCode,
      foreignAmount: amount,
      exchangeRate: rate,
      estimatedInrAmount: Math.round(baseInr),
      serviceFee: Math.round(serviceFee),
      gstAmount: Math.round(gstAmount),
      totalPayableInr: Math.round(totalPayableInr),
      isIndicativeRate: true,
    };
  }
}

export const forexRateService = new MockForexRateProvider();
