import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface FinanceInterface {
  id?: string;
  budget: number;
  expense: number;
  income: number;
  profit: number;
  business_id: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface FinanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  business_id?: string;
}
