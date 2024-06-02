import React from "react";
import {
  handleDeleteListItem,
  handleListItems,
  onChangeValue,
} from "../helpers/helper";

const CalculateSalary = ({
  earnings,
  setEarnings,
  setIsAddAllowanceBtnClicked,
  deduction,
  setDeduction,
  setIsDeductionBtnClicked,
  basicSalary,
  setBasicSalary,
}) => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <h1 className="font-bold text-xl inter text-[#000000]">
          Calculate Your Salary
        </h1>
        <div className="flex justify-end items-center gap-[2px] cursor-pointer">
          <div>
            <img src="https://i.ibb.co/Vtkr1LG/reset.png" alt="reset" />
          </div>
          <p className="inter font-medium text-sm text-[#0052EA] ">Reset</p>
        </div>
      </div>
      <div className="flex flex-col mt-6 gap-2">
        <div className="font-semibold text-base inter text-[#000000]">
          Basic Salary
        </div>
        <div className="">
          <input
            type="number"
            id="amount1"
            class="border rounded-[4px] bg-[#FFFFFF] text-[#000000] text-base font-normal inter block w-full md:w-[356px] py-[12px] px-[15px]"
            required
            onChange={(e) => setBasicSalary(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="flex flex-col mt-6 gap-2">
        <h1 className="font-semibold text-base inter text-[#000000]">
          Earnings
        </h1>
        <p className="font-normal text-xs inter text-[#757575]">
          Allowance, Fixed Allowance, Bonus and etc.
        </p>
      </div>

      {[...earnings].map((value, index) => (
        <div className="grid grid-cols-12 gap-2 mt-2" key={index}>
          <div className="col-span-4">
            <input
              type="text"
              id="Name"
              className="border rounded-[4px] bg-[#FFFFFF] text-[#000000] text-base font-normal inter block w-full py-[12px] px-[15px]"
              placeholder="Pay Details (Title)"
              onChange={(e) => {
                onChangeValue(
                  index,
                  earnings,
                  setEarnings,
                  e.target.value,
                  "title"
                );
                setIsAddAllowanceBtnClicked(true);
              }}
              value={{ ...value }.title}
            />
          </div>
          <div className="col-span-3">
            <input
              type="number"
              id="amount"
              className="border rounded-[4px] bg-[#FFFFFF] text-[#000000] block w-full text-base font-normal inter py-[12px] px-[15px]"
              placeholder="Amount"
              onChange={(e) => {
                onChangeValue(
                  index,
                  earnings,
                  setEarnings,
                  parseFloat(e.target.value),
                  "amount"
                );
                setIsAddAllowanceBtnClicked(true);
              }}
              value={{ ...value }.amount}
            />
          </div>
          <div
            className="grid content-center cursor-pointer"
            onClick={() => {
              handleDeleteListItem(index, earnings, setEarnings);
              setIsAddAllowanceBtnClicked(true);
            }}
          >
            <img
              src="https://i.ibb.co/9ZPHpy0/cross.png"
              className="rounded-full bg-[#EFEFEF] lg:p-[10px] md:p-[6px] p-[4px]"
            />
          </div>
          <div className="col-span-4 grid content-center">
            <div class="flex items-center text-center">
              <input
                id="checkbox-2"
                type="checkbox"
                class="w-4 h-4 bg-[#FFFFFF] b rounded-[4px]"
                onClick={(e) => {
                  onChangeValue(
                    index,
                    earnings,
                    setEarnings,
                    e.target.checked,
                    "checked"
                  );
                  setIsAddAllowanceBtnClicked(true);
                }}
                value={{ ...value }.checked}
              />
              <label
                for="checkbox-2"
                class="ms-2 text-base font-normal text-[#000000] inter mt-[6px]"
              >
                EPF/ETF
              </label>
            </div>
          </div>
        </div>
      ))}

      <div
        className="flex items-center text-center gap-2 cursor-pointer mt-[26px]"
        onClick={() => {
          handleListItems(earnings, setEarnings, "earnings");
          setIsAddAllowanceBtnClicked(true);
        }}
      >
        <img src="https://i.ibb.co/hL5WnWc/plus.png" />
        <p className="font-medium text-sm inter text-[#0052EA]">
          Add New Allowance
        </p>
      </div>
      <hr className="mt-[16px]" />

      <div className="flex flex-col mt-6 gap-2">
        <h1 className="font-semibold text-base inter text-[#000000]">
          Deductions
        </h1>
        <p className="font-normal text-xs inter text-[#757575]">
          Salary Advances, Loan Deductions and all
        </p>
      </div>

      {[...deduction].map((value, index) => (
        <div className="grid grid-cols-12 gap-2 mt-2" key={index}>
          <div className="col-span-4">
            <input
              type="text"
              id="Name"
              className="border rounded-[4px] bg-[#FFFFFF] text-[#000000] text-base font-normal inter block w-full  py-[12px] px-[15px]"
              placeholder="Pay Details (Title)"
              onChange={(e) => {
                onChangeValue(
                  index,
                  deduction,
                  setDeduction,
                  e.target.value,
                  "title"
                );
                setIsDeductionBtnClicked(true);
              }}
              value={{ ...value }.title}
            />
          </div>
          <div className="col-span-3">
            <input
              type="number"
              id="amount"
              className="border rounded-[4px] bg-[#FFFFFF] text-[#000000] text-base font-normal inter block w-full  py-[12px] px-[15px]"
              placeholder="Amount"
              onChange={(e) => {
                onChangeValue(
                  index,
                  deduction,
                  setDeduction,
                  parseFloat(e.target.value),
                  "amount"
                );
                setIsDeductionBtnClicked(true);
              }}
              value={{ ...value }.amount}
            />
          </div>
          <div
            className=" grid content-center cursor-pointer"
            onClick={() => {
              handleDeleteListItem(index, deduction, setDeduction);
              setIsDeductionBtnClicked(true);
            }}
          >
            <img
              src="https://i.ibb.co/9ZPHpy0/cross.png"
              className="rounded-full bg-[#EFEFEF] lg:p-[10px] md:p-[6px] p-[4px]"
            />
          </div>
        </div>
      ))}

      <div
        className="flex items-center text-center gap-2 cursor-pointer mt-[26px]"
        onClick={() => {
          handleListItems(deduction, setDeduction, "deduction");
          setIsDeductionBtnClicked(true);
        }}
      >
        <img src="https://i.ibb.co/hL5WnWc/plus.png" />
        <p className="font-medium text-sm inter text-[#0052EA]">
          Add New Deduction
        </p>
      </div>
    </div>
  );
};

export default CalculateSalary;
