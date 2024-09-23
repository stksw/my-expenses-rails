export type AccountTransaction = {
  id: string;
  recorded_at: Date;
  description: string;
  type: string;
  amount: string;
  large_category: string;
  middle_category: string;
  created_at: Date;
  updated_at: Date;
};

export type AccountTransactionFormData = Partial<AccountTransaction>;

export const emptyAccountTransaction: AccountTransactionFormData = {
  recorded_at: new Date(),
  description: "",
  type: "",
  amount: "",
  large_category: "",
  middle_category: "",
};
