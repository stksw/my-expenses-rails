import { useEffect } from "react";
import { Button, Flex, Text, TextField, Dialog } from "@radix-ui/themes";
import { useFormBankAccount } from "../../hooks/use-form-bank-account";
import { BankAccountFormData } from "../../types/bank_account";
import { BankAccountApi } from "../../apis/bank_accounts/fetch";

export const BankAccountForm = ({ data }: { data?: BankAccountFormData }) => {
  const { onSubmit, handleSubmit, register, setValue, reset } =
    useFormBankAccount();

  useEffect(() => {
    if (data) {
      setValue("id", data.id);
      setValue("bank_name", data.bank_name);
      setValue("branch", data.branch);
      setValue("account_type", data.account_type);
      setValue("account_number", data.account_number);
      setValue("account_holder", data.account_holder);
    } else {
      reset();
    }
  }, [data]);

  const handleDelete = async (id: string) => {
    await BankAccountApi.delete(id!);
  };

  return (
    <Dialog.Content maxWidth="480px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dialog.Title>口座の追加・編集</Dialog.Title>

        <Flex direction="column" gap="3" pt="2">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              金融機関名
            </Text>
            <TextField.Root placeholder="◯◯◯銀行" {...register("bank_name")} />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              支店
            </Text>
            <TextField.Root placeholder="◯◯◯支店" {...register("branch")} />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              口座種別
            </Text>
            <TextField.Root
              placeholder="普通, 当座, 貯蓄等"
              {...register("account_type")}
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              口座番号
            </Text>
            <TextField.Root
              placeholder="1234567"
              {...register("account_number")}
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              口座名義
            </Text>
            <TextField.Root
              placeholder="ヤマダタロウ"
              {...register("account_holder")}
            />
          </label>
        </Flex>
        <Flex mt="4">
          {data && (
            <Flex gap="3" mt="4">
              <Dialog.Close>
                <Button
                  type="button"
                  color="ruby"
                  variant="solid"
                  onClick={() => handleDelete(data.id!)}
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
