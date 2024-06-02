import React from "react";
import { useSelector } from "react-redux";
import { apit, costToCompany, netSalary } from "../helpers/salaryHelpers";

const DisplaySalary = () => {
  const salaryData = useSelector((state) => state.salary);
  return (
    <div>
      <h1 className="font-bold text-xl inter text-[#a98e8e]"> Your salary</h1>
      <div className="grid grid-cols-2 mt-[25px]">
        <h1 className="font-semibold inter text-sm text-[#757575]">Item</h1>
        <h1 className="flex justify-end font-semibold inter text-sm text-[#757575]">
          Amount
        </h1>
      </div>
      <div className="grid grid-cols-2 mt-[16px]">
        <h1 className="inter font-normal text-base text-[#000000]">
          Basic Salary
        </h1>
        <p className="flex justify-end inter font-normal text-base text-[#000000]">
          {salaryData.basicSalary.toFixed(2)}
        </p>
      </div>
      <div className="grid grid-cols-2 mt-[8px]">
        <h1 className="inter font-normal text-base text-[#000000]">
          Gross Earning
        </h1>
        <p className="flex justify-end inter font-normal text-base text-[#000000]">
          {(salaryData.totalEarnings - salaryData.grossDeduction).toFixed(2)}
        </p>
      </div>
      <div className="grid grid-cols-2 mt-[8px]">
        <h1 className="inter font-normal text-base text-[#000000]">
          Gross Deduction
        </h1>
        <p className="flex justify-end inter font-normal text-base text-[#000000]">
          -{salaryData.grossDeduction.toFixed(2)}
        </p>
      </div>
      <div className="grid grid-cols-2 mt-[8px]">
        <h1 className="inter font-normal text-base text-[#000000]">
          Employee EPF
        </h1>
        <p className="flex justify-end inter font-normal text-base text-[#000000]">
          -{salaryData.employeeEPF.toFixed(2)}
        </p>
      </div>
      <div className="grid grid-cols-2 mt-[8px]">
        <h1 className="inter font-normal text-base text-[#000000]">APIT</h1>
        <p className="flex justify-end inter font-normal text-base text-[#000000]">
          -{apit(salaryData.totalEarnings - salaryData.grossDeduction).toFixed(2)}
        </p>
      </div>

      <div className="grid grid-cols-2 border-solid border border-[#E0E0E0] p-4 my-[24px]">
        <h1 className="inter font-semibold text-base text-[#000000]">
          Net Salary (Take Home)
        </h1>
        <h1 className="flex justify-end inter font-semibold text-base text-[#000000]">
          {netSalary(
            salaryData.totalEarnings - salaryData.grossDeduction,
            salaryData.employerEPF,
            apit(salaryData.totalEarnings - salaryData.grossDeduction)
          ).toFixed(2)}
        </h1>
      </div>

      <h1 className="text-[#757575] inter font-semibold text-sm">
        Contribution from the Employer
      </h1>

      <div className="grid grid-cols-2 mt-[12px]">
        <h1 className="inter font-normal text-base text-[#000000]">
          Employeer EPF (12%)
        </h1>
        <h1 className="flex justify-end inter font-normal text-base text-[#000000]">
          {salaryData.employerEPF.toFixed(2)}
        </h1>
      </div>
      <div className="grid grid-cols-2 mt-[8px]">
        <h1 className="inter font-normal text-base text-[#000000]">
          Employeer ETF (3%)
        </h1>
        <p className="flex justify-end inter font-normal text-base text-[#000000]">
          {salaryData.employerETF.toFixed(2)}
        </p>
      </div>

      <div className="grid grid-cols-2 mt-[32px]">
        <h1 className="inter font-normal text-base text-[#000000]">
          CTC (Cost to Company)
        </h1>
        <h1 className="flex justify-end inter font-normal text-base text-[#000000]">
          {costToCompany(
            salaryData.totalEarnings - salaryData.grossDeduction,
            salaryData.employerEPF,
            salaryData.employerETF
          ).toFixed(2)}
        </h1>
      </div>
    </div>
  );
};

export default DisplaySalary;
