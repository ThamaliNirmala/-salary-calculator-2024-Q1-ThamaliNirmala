import React, { useEffect, useState } from "react";
import CalculateSalary from "./CalculateSalary";
import DisplaySalary from "./DisplaySalary";

const Dashboard = () => {
  const [earnings, setEarnings] = useState([
    { title: null, amount: null, checked: false },
  ]);
  const [isAddAllowanceBtnClicked, setIsAddAllowanceBtnClicked] =
    useState(false);

  const [deduction, setDeduction] = useState([{ title: null, amount: null }]);
  const [isDeductionBtnClicked, setIsDeductionBtnClicked] = useState(false);

  const [basicSalary, setBasicSalary] = useState(null);

  console.log("earnings", earnings);
  console.log("deduction", deduction);

  useEffect(() => {
    setEarnings(earnings);
    setIsAddAllowanceBtnClicked(false);
  }, [isAddAllowanceBtnClicked]);

  useEffect(() => {
    setDeduction(deduction);
    setIsDeductionBtnClicked(false);
  }, [isDeductionBtnClicked]);

  return (
    <div className="container ">
      <div className="md:grid grid-cols-7 gap-6 pt-[142px]">
        <div className="col-span-4 border-solid border border-[#E0E0E0] bg-[#FAFAFA] p-6 rounded-lg">
          <CalculateSalary
            earnings={earnings}
            setEarnings={setEarnings}
            setIsAddAllowanceBtnClicked={setIsAddAllowanceBtnClicked}
            deduction={deduction}
            setDeduction={setDeduction}
            setIsDeductionBtnClicked={setIsDeductionBtnClicked}
            basicSalary={basicSalary}
            setBasicSalary={setBasicSalary}
          />
        </div>
      
        <div className="md:col-span-3 border-solid border border-[#E0E0E0] bg-[#FFFFFF] p-6 rounded-lg">
          <DisplaySalary />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
