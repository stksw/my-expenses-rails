export type BankAccount = {
  id: number;
  bank_name: string;
  branch: string;
  account_type: string;
  account_number: string;
  account_holder: string;
  created_at: Date;
  updated_at: Date;
};

export type BankAccountForm = Omit<
  BankAccount,
  "id" | "created_at" | "updated_at"
>;
