import { SubmitHandler, useController, useForm } from "react-hook-form";
import { BankAccountForm } from "../types/bank_account";
import { BankAccountApi } from "../(pages)/bank_accounts/fetch";

export const useFormBankAccount = () => {
  const {
    handleSubmit,
    setValue,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm<BankAccountForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<BankAccountForm> = async (data) => {
    try {
      await BankAccountApi.create(data);
      // reset();
    } catch (error) {
      console.error(error);
      alert("エラーが発生しました");
    }
  };

  return {
    onSubmit,
    handleSubmit,
    setValue,
    reset,
    register,
  };
};
