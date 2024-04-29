import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import constant from "../../constants";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  address: z.string(),
});

type FormFields = z.infer<typeof schema>;

const UserDetails: React.FC = () => {
  const navigate = useNavigate();

  const [digit, setDigit] = useState();

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\D/g, "");
    inputValue = inputValue.slice(0, 10);
    setDigit(inputValue);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/payment-info");
  };

  return (
    <div className="p-8">
      <div className="mb-3 flex font-bold text-2xl">
        {constant.SHOPPING_DETAILS}
      </div>
      <form
        className="flex flex-col  py-2 gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input {...register("name")} type="text" placeholder="Full Name" />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <input
          {...register("phoneNumber")}
          type="text"
          value={digit}
          placeholder="Phone Number"
          onChange={handleNumberChange}
          className={errors.phoneNumber ? "border-red-500" : ""}
        />
        {errors.phoneNumber && (
          <div className="text-red-500">{errors.phoneNumber.message}</div>
        )}
        <input
          {...register("address")}
          type="text"
          placeholder="Full Address"
        />
        <div className="p-3 flex justify-end">
          <button
            disabled={isSubmitting}
            type="submit"
            className="px-4 py-3 rounded-xl bg-white text-gray-800 font-semibold hover:bg-slate-300"
          >
            {isSubmitting ? (
              "Loading ..."
            ) : (
              <div className="flex items-center gap-2">
                <div className="text-lg ">{constant.NEXT_BUTTON}</div>
                <div>
                  <img src="../../../public/assets/svg/arrow-right.svg" />
                </div>
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
