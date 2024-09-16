import { Button, Flex, Text, TextField, Dialog } from "@radix-ui/themes";
import { useFormBankAccount } from "../../hooks/use-form-bank-account";

export const BankAccountForm = () => {
  const { onSubmit, handleSubmit, register } = useFormBankAccount();

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="indigo">口座の追加</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="480px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Dialog.Title>口座の追加・編集</Dialog.Title>

          <Flex direction="column" gap="3" pt="2">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                金融機関名
              </Text>
              <TextField.Root
                placeholder="◯◯◯銀行"
                {...register("bank_name")}
              />
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

          <Flex gap="3" mt="4" justify="end">
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
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
