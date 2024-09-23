import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

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
