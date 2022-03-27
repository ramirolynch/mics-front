export interface VenueFace {
  id: number;
  venue_name: string;
  description: string;
  street_address: string;
  city: string;
  zip_code: string;
  state_code: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
