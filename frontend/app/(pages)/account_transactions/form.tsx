import { Dialog } from "@radix-ui/themes";
import { AccountTransactionFormData } from "@/types/account_transaction";
import { ImportForm } from "./import_form";
import { SingleForm } from "./single_form";

export const AccountTransactionForm = ({
  data,
}: {
  data: AccountTransactionFormData;
}) => {
  return (
    <Dialog.Content maxWidth="480px">
      {data.import ? <ImportForm /> : <SingleForm data={data} />}
    </Dialog.Content>
  );
};
