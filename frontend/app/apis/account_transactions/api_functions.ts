import { HttpStatusCode } from "axios";
import { ServerApi } from "@/providers/axios";
import {
  AccountTransaction,
  AccountTransactionFormData,
} from "@/types/account_transaction";

const path = "account_transactions";

export const AccountTransactionApi = {
  list: async (): Promise<{
    data: AccountTransaction[];
    totalCount: number;
  }> => {
    return await ServerApi.get(path).then((res) => res.data);
  },

  create: async (
    data: AccountTransactionFormData
  ): Promise<AccountTransaction> => {
    return await ServerApi.post(path, data).then((res) => res.data);
  },

  update: async (
    id: string,
    data: AccountTransactionFormData
  ): Promise<AccountTransaction> => {
    return await ServerApi.put(`${path}/${id}`, data).then((res) => res.data);
  },

  delete: async (id: string): Promise<HttpStatusCode> => {
    return await ServerApi.delete(`${path}/${id}`).then((res) => res.data);
  },
};
