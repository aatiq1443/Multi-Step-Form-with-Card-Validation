import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { ButtonKind } from "../../types/button";
import { useNavigate } from "react-router-dom";


const UserDetails: React.FC = () => {

  const navigate = useNavigate();

  return(
  <div className="p-8">
    <div className="flex justify-center">Shopping</div>
    <div className="gap-3">
      <div className="p-3">
        Name
        <Input error={""} />
      </div>
      <div className="p-3">
        Email
        <Input error={""} />
      </div>
      <div className="p-3">
        Phone Number
        <Input type="number" error={"true"} />
      </div>
      <div className="p-3">
        Address
        <Input error={""} />
      </div>
      <div className="p-3 flex justify-end">
        <Button
          onClick={()=> navigate('payment-info')}
          kind={ButtonKind.TERTIARY}
          endEnhancer={
            <img
              src="../../../src/assets/svg/arrow-right.svg"
              alt="close-icon"
              className="fill-current"
            />
          }
        >
          Next
        </Button>
      </div>
    </div>
  </div>
  )};

export default UserDetails;
