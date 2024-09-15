import { ServerApi } from "../../providers/axios";
import { BankAccount } from "../../types/bank_account";

export const bankAccountsApi = async (): Promise<{
  data: BankAccount[];
  totalCount: number;
}> => {
  return await ServerApi.get(`/bank_accounts`).then((res) => res.data);
};
