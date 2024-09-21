import { HttpStatusCode } from "axios";
import { ServerApi } from "../../providers/axios";
import { BankAccount, BankAccountFormData } from "../../types/bank_account";

const path = "bank_accounts";

export const BankAccountApi = {
  create: async (data: BankAccountFormData): Promise<BankAccount> => {
    return await ServerApi.post(path, data).then((res) => res.data);
  },

  update: async (
    id: string,
    data: BankAccountFormData
  ): Promise<BankAccount> => {
    return await ServerApi.put(`${path}/${id}`, data).then((res) => res.data);
  },

  delete: async (id: number): Promise<HttpStatusCode> => {
    return await ServerApi.delete(`${path}/${id}`).then((res) => res.data);
  },
};
