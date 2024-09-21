export type BankAccount = {
  id: string;
  bank_name: string;
  branch: string;
  account_type: string;
  account_number: string;
  account_holder: string;
  created_at: Date;
  updated_at: Date;
};

export type BankAccountFormData = Partial<BankAccount>;
