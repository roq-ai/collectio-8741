import { PaymentInterface } from 'interfaces/payment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  payment?: PaymentInterface[];
  user?: UserInterface;
  _count?: {
    payment?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  user_id?: string;
}
