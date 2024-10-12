import { ServerApi } from "@/providers/axios";
import {
  AccountTransaction,
  AccountTransactionImportFormData,
} from "@/types/account_transaction";

const path = "account_transaction_imports";

export const AccountTransactionImportApi = {
  create: async (
    data: AccountTransactionImportFormData
  ): Promise<AccountTransaction> => {
    const params = new FormData();
    params.append("file", data.file);
    return await ServerApi.post(path, params, {
      headers: { "Content-Type": data.file.type },
    }).then((res) => res.data);
  },
};
