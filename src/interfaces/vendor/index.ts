import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VendorInterface {
  id?: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface VendorGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  user_id?: string;
}
