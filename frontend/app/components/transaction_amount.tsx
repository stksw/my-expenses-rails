import { AccountTransaction } from "@/types/account_transaction";
import { Text } from "@radix-ui/themes";

export const TransactionAmount = ({
  transaction,
}: {
  transaction: AccountTransaction;
}) => {
  return (
    <>
      {transaction.type === "deposit" ? (
        <Text color="blue">{Number(transaction.amount).toLocaleString()}</Text>
      ) : (
        <Text color="red">-{Number(transaction.amount).toLocaleString()}</Text>
      )}
    </>
  );
};
