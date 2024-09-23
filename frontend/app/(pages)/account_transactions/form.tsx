import { useEffect } from "react";
import { Button, Flex, Text, TextField, Dialog } from "@radix-ui/themes";
import { useFormAccountTransaction } from "@/hooks/use-form-account-transaction";
import { AccountTransactionFormData } from "@/types/account_transaction";
import { useDeleteAccountTransaction } from "@/apis/account_transactions/mutation";

export const AccountTransactionForm = ({
  data,
}: {
  data: AccountTransactionFormData;
}) => {
  const { onSubmit, handleSubmit, register, setValue, reset } =
    useFormAccountTransaction();
  const deleteAccountTransaction = useDeleteAccountTransaction();

  useEffect(() => {
    if (data.id !== "") {
      setValue("id", data.id);
      setValue("recorded_at", data.recorded_at);
      setValue("description", data.description);
      setValue("type", data.type);
      setValue("amount", data.amount);
    } else {
      reset();
    }
  }, [data]);

  return (
    <Dialog.Content maxWidth="480px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dialog.Title>口座取引の追加・編集</Dialog.Title>

        <Flex direction="column" gap="3" pt="2">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              取引日
            </Text>
            <TextField.Root
              placeholder={new Date().toISOString()}
              {...register("recorded_at")}
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              支店
            </Text>
            <TextField.Root
              placeholder="◯◯◯株式会社"
              {...register("description")}
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              取引種別
            </Text>
            <TextField.Root placeholder="入金 or 出金" {...register("type")} />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              取引金額
            </Text>
            <TextField.Root
              placeholder="100000"
              {...register("amount")}
            />
          </label>

        </Flex>
        <Flex mt="4">
          {data.id && (
            <Flex gap="3" mt="4">
              <Dialog.Close>
                <Button
                  type="button"
                  color="ruby"
                  variant="solid"
                  onClick={() => deleteAccountTransaction.mutateAsync(data.id!)}
                >
                  削除
                </Button>
              </Dialog.Close>
            </Flex>
          )}
          <Flex gap="3" mt="4" ml="auto" justify="end">
            <Dialog.Close>
              <Button color="gray" variant="outline">
                キャンセル
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button type="submit" color="indigo" aria-label="Close">
                保存
              </Button>
            </Dialog.Close>
          </Flex>
        </Flex>
      </form>
    </Dialog.Content>
  );
};
