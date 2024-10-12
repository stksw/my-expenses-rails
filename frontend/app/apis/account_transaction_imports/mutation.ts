import { useMutation } from "@tanstack/react-query";
import { useAccountTransactionCache } from "@/(pages)/account_transactions/cache";
import { AccountTransactionImportApi } from "./api_functions";
import { AccountTransactionImportFormData } from "@/types/account_transaction";

export const usePostAccountTransactionImport = () => {
  const { invalidateList } = useAccountTransactionCache();

  return useMutation({
    mutationFn: (data: AccountTransactionImportFormData) => {
      return AccountTransactionImportApi.create(data);
    },
    onSuccess: () => {
      invalidateList();
    },
  });
};
