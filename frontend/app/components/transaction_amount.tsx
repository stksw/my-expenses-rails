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
        <Text color="blue">{transaction.amount}</Text>
      ) : (
        <Text color="red">-{transaction.amount}</Text>
      )}
    </>
  );
};
