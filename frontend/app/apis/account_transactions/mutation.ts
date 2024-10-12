import { useMutation } from "@tanstack/react-query";
import { useAccountTransactionCache } from "@/(pages)/account_transactions/cache";
import { AccountTransactionApi } from "./api_functions";
import { AccountTransactionFormData } from "@/types/account_transaction";

export const usePostAccountTransaction = () => {
  const { invalidateList } = useAccountTransactionCache();

  return useMutation({
    mutationFn: (data: AccountTransactionFormData) => {
      if (data.id) {
        return AccountTransactionApi.update(data.id, data);
      }
      return AccountTransactionApi.create(data);
    },
    onSuccess: () => {
      invalidateList();
    },
  });
};

export const useDeleteAccountTransaction = () => {
  const { invalidateList } = useAccountTransactionCache();

  return useMutation({
    mutationFn: (id: string) => {
      return AccountTransactionApi.delete(id);
    },
    onSuccess: () => {
      invalidateList();
    },
  });
};
