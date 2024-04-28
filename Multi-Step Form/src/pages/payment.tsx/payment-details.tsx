import React from "react";

const PaymentDetails: React.FC = () => {
  return(
  <div className="p-8">
    <div className="mb-3 font-bold text-xl">
        Payment
    </div>
    <div className="border-sky-400 w-2/5 rounded-lg border">
        <div className="p-8 font-bold text-lg flex items-center justify-center">
            Credit/Debit Card
        </div>
    </div>
  </div>
)};

export default PaymentDetails;
