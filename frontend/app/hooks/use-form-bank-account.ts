import { SubmitHandler, useController, useForm } from "react-hook-form";
import { BankAccountFormData } from "../types/bank_account";
import { BankAccountApi } from "../(pages)/bank_accounts/fetch";

export const useFormBankAccount = () => {
  const {
    handleSubmit,
    setValue,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm<BankAccountFormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<BankAccountFormData> = async (data) => {
    try {
      (await data.id)
        ? BankAccountApi.update(String(data.id), data)
        : BankAccountApi.create(data);
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
