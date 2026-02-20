export interface TransactionDTO {
  created_at: string;
  withdraw_number: string;
  full_name: string;
  nominal: number;
  withdraw_method: {
    method: string;
    account: string;
  };
  status: string;
}
