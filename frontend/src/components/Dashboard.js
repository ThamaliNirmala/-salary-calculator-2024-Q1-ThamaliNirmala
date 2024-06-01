import React from "react";

const Dashboard = () => {
  return (
    <div className="container ">
      <div className="md:grid grid-cols-7 gap-6 pt-[142px]">
        <div className="col-span-4 border-solid border border-[#E0E0E0] bg-[#FAFAFA] p-6 rounded-lg">
          <div className="grid grid-cols-2">
            <h1 className="font-bold text-xl inter text-[#000000]">
              Calculate Your Salary
            </h1>
            <div className="flex justify-end items-center gap-[2px]">
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
          <div className="grid grid-cols-12 gap-2 mt-2">
            <div className="col-span-4">
              <input
                type="text"
                id="Name"
                className="border rounded-[4px] bg-[#FFFFFF] text-[#000000] text-base font-normal inter block w-full py-[12px] px-[15px]"
                placeholder="Pay Details (Title)"
              />
            </div>
            <div className="col-span-3">
              <input
                type="number"
                id="amount"
                className="border rounded-[4px] bg-[#FFFFFF] text-[#000000] block w-full text-base font-normal inter py-[12px] px-[15px]"
                placeholder="Amount"
              />
            </div>
            <div className="grid content-center ">
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
                  value=""
                  class="w-4 h-4 bg-[#FFFFFF] b rounded-[4px]"
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

          <div className="flex items-center text-center gap-2 cursor-pointer mt-[26px]">
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
          <div className="grid grid-cols-12 gap-2 mt-2">
            <div className="col-span-4">
              <input
                type="text"
                id="Name"
                className="border rounded-[4px] bg-[#FFFFFF] text-[#000000] text-base font-normal inter block w-full  py-[12px] px-[15px]"
                placeholder="Pay Details (Title)"
              />
            </div>
            <div className="col-span-3">
              <input
                type="text"
                id="amount"
                className="border rounded-[4px] bg-[#FFFFFF] text-[#000000] text-base font-normal inter block w-full  py-[12px] px-[15px]"
                placeholder="Amount"
              />
            </div>
            <div className=" grid content-center ">
              <img
                src="https://i.ibb.co/9ZPHpy0/cross.png"
                className="rounded-full bg-[#EFEFEF] lg:p-[10px] md:p-[6px] p-[4px]"
              />
            </div>
          </div>
          <div className="flex items-center text-center gap-2 cursor-pointer mt-[26px]">
            <img src="https://i.ibb.co/hL5WnWc/plus.png" />
            <p className="font-medium text-sm inter text-[#0052EA]">
              Add New Deduction
            </p>
          </div>
        </div>

        <div className="md:col-span-3 border-solid border border-[#E0E0E0] bg-[#FFFFFF] p-6 rounded-lg">
          <h1 className="font-bold text-xl inter text-[#000000]">
            {" "}
            Your salary
          </h1>
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
              150,000.00
            </p>
          </div>
          <div className="grid grid-cols-2 mt-[8px]">
            <h1 className="inter font-normal text-base text-[#000000]">
              Gross Earning
            </h1>
            <p className="flex justify-end inter font-normal text-base text-[#000000]">
              160,000.00
            </p>
          </div>
          <div className="grid grid-cols-2 mt-[8px]">
            <h1 className="inter font-normal text-base text-[#000000]">
              Gross Deduction
            </h1>
            <p className="flex justify-end inter font-normal text-base text-[#000000]">
              -8,000.00
            </p>
          </div>
          <div className="grid grid-cols-2 mt-[8px]">
            <h1 className="inter font-normal text-base text-[#000000]">
              Employee EPF
            </h1>
            <p className="flex justify-end inter font-normal text-base text-[#000000]">
              -12,160.00
            </p>
          </div>
          <div className="grid grid-cols-2 mt-[8px]">
            <h1 className="inter font-normal text-base text-[#000000]">APIT</h1>
            <p className="flex justify-end inter font-normal text-base text-[#000000]">
              -3,740.00
            </p>
          </div>

          <div className="grid grid-cols-2 border-solid border border-[#E0E0E0] p-4 my-[24px]">
            <h1 className="inter font-semibold text-base text-[#000000]">
              Net Salary (Take Home)
            </h1>
            <h1 className="flex justify-end inter font-semibold text-base text-[#000000]">
              136,100.00
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
              18,240.00
            </h1>
          </div>
          <div className="grid grid-cols-2 mt-[8px]">
            <h1 className="inter font-normal text-base text-[#000000]">
              Employeer ETF (3%)
            </h1>
            <p className="flex justify-end inter font-normal text-base text-[#000000]">
              4,560.00
            </p>
          </div>

          <div className="grid grid-cols-2 mt-[32px]">
            <h1 className="inter font-normal text-base text-[#000000]">
              CTC (Cost to Company)
            </h1>
            <h1 className="flex justify-end inter font-normal text-base text-[#000000]">
              174,800.00
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
