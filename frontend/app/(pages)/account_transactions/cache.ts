import { useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const useAccountTransactionCache = () => {
  const queryClient = useQueryClient();

  return useMemo(
    () => ({
      invalidateList: () =>
        queryClient.invalidateQueries({
          queryKey: ["account_transactions", "list"],
        }),
    }),
    [queryClient]
  );
};
