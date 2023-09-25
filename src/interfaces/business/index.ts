import { FinanceInterface } from 'interfaces/finance';
import { PaymentInterface } from 'interfaces/payment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  finance?: FinanceInterface[];
  payment?: PaymentInterface[];
  user?: UserInterface;
  _count?: {
    finance?: number;
    payment?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
