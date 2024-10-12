import { useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const useBankAccountCache = () => {
  const queryClient = useQueryClient();

  return useMemo(
    () => ({
      invalidateList: () =>
        queryClient.invalidateQueries({ queryKey: ["bank_account", "list"] }),
    }),
    [queryClient]
  );
};
