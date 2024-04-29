import React, { useState } from "react";
import { PaymentCard } from "baseui/payment-card";
import { SIZE } from "baseui/input";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Spinner from "../../components/spinner/spinner";
import constant from "../../constants";

type FormFields = {
  name: string;
  expiry: string;
  cvv: string;
};

const PaymentDetails: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/thanks");
  };

  const [value, setValue] = useState("");

  const [expirationDate, setExpirationDate] = useState("");

  const handleExpirationDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\D/g, "");

    if (inputValue.length > 2) {
      inputValue = inputValue.slice(0, 2) + "/" + inputValue.slice(2, 4);
    }
    setExpirationDate(inputValue);
  };
  return (
    <div className="flex flex-col p-8 gap-5">
      <div className="font-bold text-xl">{constant.PAYMENT}</div>
      <div className="border-sky-400 sm:w-3/5 rounded-lg border">
        <div className="p-8 cursor-pointer sm:font-bold sm:text-lg flex items-center justify-center">
          {constant.CARD_INFO}
        </div>
      </div>
      <div>
        <PaymentCard
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size={SIZE.large}
          clearOnEscape
          placeholder="Please enter your credit card number..."
        />
      </div>
      <form
        className="flex flex-col py-2 gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name", {
            required: "Holder name is required",
          })}
          className={errors.name ? "border-red-500" : ""}
          type="text"
          placeholder="Card Holder Name"
        />
        {errors.name && (
          <div className="iteams-start text-red-500 text-sm">
            {errors.name.message}
          </div>
        )}
        <div className="flex gap-10">
          <input
            {...register("expiry", {
              required: "Required Field",
            })}
            type="text"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            className={errors.expiry ? "border-red-500" : ""}
            placeholder="Expiration Date"
          />
          <input
            {...register("cvv", {
              required: "Required Field",
            })}
            type="password"
            className={errors.cvv ? "border-red-500" : ""}
            maxLength={3}
            placeholder="CVV"
          />
          {errors.cvv && (
            <div className="iteams-start text-red-500 text-sm">
              {errors.cvv.message}
            </div>
          )}
        </div>

        <div>
          {errors.expiry && (
            <div className="iteams-start text-red-500 text-sm">
              {errors.expiry.message}
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            className="px-4 rounded-xl bg-white text-gray-800 font-semibold hover:bg-slate-300"
            onClick={() => navigate("/")}
          >
            <div className="flex gap-2">
              <div>
                <img src="../../../public/assets/svg/arrow-left.svg" />
              </div>
              <div>{constant.PREV_BUTTON}</div>
            </div>
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
          >
            {isSubmitting ? <Spinner /> : "Proceed to Payment"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetails;
