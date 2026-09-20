export interface CountryCode {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  example: string;
}

export const COUNTRY_CODES: CountryCode[] = [
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', example: '9876543210' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', example: '2025550143' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', example: '7911123456' },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪', example: '501234567' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', example: '81234567' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾', example: '123456789' },
  { code: 'TH', name: 'Thailand', dialCode: '+66', flag: '🇹🇭', example: '812345678' },
  { code: 'ID', name: 'Indonesia (Bali)', dialCode: '+62', flag: '🇮🇩', example: '81234567890' },
  { code: 'VN', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳', example: '912345678' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', example: '412345678' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', example: '4165550143' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦', example: '512345678' },
  { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦', example: '33123456' },
  { code: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲', example: '91234567' },
  { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼', example: '91234567' },
  { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭', example: '36123456' },
  { code: 'NP', name: 'Nepal', dialCode: '+977', flag: '🇳🇵', example: '9812345678' },
  { code: 'LK', name: 'Sri Lanka', dialCode: '+94', flag: '🇱🇰', example: '712345678' },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩', example: '1712345678' },
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰', example: '3001234567' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', example: '15123456789' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', example: '612345678' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹', example: '3123456789' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸', example: '612345678' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱', example: '612345678' },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭', example: '781234567' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵', example: '9012345678' },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷', example: '1012345678' },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳', example: '13812345678' },
  { code: 'HK', name: 'Hong Kong', dialCode: '+852', flag: '🇭🇰', example: '91234567' },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿', example: '211234567' },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦', example: '821234567' },
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬', example: '1001234567' },
  { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷', example: '5012345678' },
  { code: 'AZ', name: 'Azerbaijan', dialCode: '+994', flag: '🇦🇿', example: '501234567' },
  { code: 'GE', name: 'Georgia', dialCode: '+995', flag: '🇬🇪', example: '555123456' },
  { code: 'KZ', name: 'Kazakhstan', dialCode: '+7', flag: '🇰🇿', example: '7011234567' },
  { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺', example: '9123456789' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', example: '11912345678' },
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽', example: '5512345678' },
  { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭', example: '9171234567' },
  { code: 'MV', name: 'Maldives', dialCode: '+960', flag: '🇲🇻', example: '7712345' },
  { code: 'MU', name: 'Mauritius', dialCode: '+230', flag: '🇲🇺', example: '57123456' },
  { code: 'SC', name: 'Seychelles', dialCode: '+248', flag: '🇸🇨', example: '2512345' },
  { code: 'KH', name: 'Cambodia', dialCode: '+855', flag: '🇰🇭', example: '12345678' },
];

export const DEFAULT_COUNTRY = COUNTRY_CODES[0];
