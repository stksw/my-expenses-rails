import { ServerApi } from "../../providers/axios";
import { BankAccount, BankAccountForm } from "../../types/bank_account";

const path = "bank_accounts";

export const BankAccountApi = {
  create: async (data: BankAccountForm): Promise<BankAccount> => {
    return await ServerApi.post(path, data).then((res) => res.data);
  },

  update: async (id: number, data: BankAccountForm): Promise<BankAccount> => {
    return await ServerApi.put(`${path}/${id}`, data).then((res) => res.data);
  },

  delete: async (id: number): Promise<any> => {
    return await ServerApi.delete(`${path}/${id}`).then((res) => res.data);
  },
};
