import { BusinessInterface } from 'interfaces/business';
import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface PaymentInterface {
  id?: string;
  amount: number;
  payment_date: any;
  payment_status: string;
  business_id: string;
  customer_id: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  customer?: CustomerInterface;
  _count?: {};
}

export interface PaymentGetQueryInterface extends GetQueryInterface {
  id?: string;
  payment_status?: string;
  business_id?: string;
  customer_id?: string;
}
