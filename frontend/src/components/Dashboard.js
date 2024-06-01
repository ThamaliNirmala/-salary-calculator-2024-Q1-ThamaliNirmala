import React from "react";

const Dashboard = () => {
  return (
    <div className="container ">
      <div className="md:grid grid-cols-7 gap-6 pt-[142px]">
        <div className="col-span-4 border-solid border border-[#E0E0E0] bg-[#FAFAFA] p-6 rounded-lg">
          <div className="grid grid-cols-2">
            <h1 className="font-bold text-xl">Calculate Your Salary</h1>
            <div className="flex justify-end">
              <div>
                <img src="assets/reset.png" alt="reset" />
              </div>
              <div>reset</div>
            </div>
          </div>
          <div className="flex flex-col mt-6 gap-2">
            <div className="font-semibold text-base">Basic Salary</div>
            <div className="">
              <input
                type="text"
                id="first_name"
                class="border rounded-[4px] bg-[#FFFFFF] text-gray-900 text-sm block w-full md:w-[356px] py-[12px] px-[15px]"
                placeholder="John"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mt-6 gap-2">
            <h1 className="font-semibold text-base">Earnings</h1>
            <p className="font-normal text-xs text-[#757575]">
              Allowance, Fixed Allowance, Bonus and etc.
            </p>
          </div>
          <div className="grid grid-cols-12">
            <div className="md:col-span-4">
              <input
                type="text"
                id="first_name"
                class="border rounded-[4px] bg-[#FFFFFF] text-gray-900 text-sm block py-[12px] px-[15px]"
                placeholder="John"
                required
              />
            </div>
            <div className="md:col-span-2">
              <input
                type="text"
                id="first_name"
                class="border rounded-[4px] bg-[#FFFFFF] text-gray-900 text-sm block py-[12px] px-[15px]"
                placeholder="John"
                required
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 border-solid border border-[#E0E0E0] bg-[#FAFAFA] p-6 rounded-lg">
          <h1 className="font-bold text-xl"> Your salary</h1>
          <div className="grid grid-cols-2">
            <h1>Items</h1>
            <h1 className="flex justify-end">Amount</h1>
          </div>
          <div className="grid grid-cols-2">
            <h1>Basic Salary</h1>
            <h1 className="flex justify-end">150,000.00</h1>
          </div>
          <div className="grid grid-cols-2">
            <h1>Gross Earning</h1>
            <h1 className="flex justify-end">160,000.00</h1>
          </div>
          <div className="grid grid-cols-2">
            <h1>Gross Deduction</h1>
            <h1 className="flex justify-end">- 8,000.00</h1>
          </div>
          <div className="grid grid-cols-2">
            <h1>Employee EPF (8%)</h1>
            <h1 className="flex justify-end">- 12,160.00</h1>
          </div>
          <div className="grid grid-cols-2">
            <h1>APIT</h1>
            <h1 className="flex justify-end">- 3,740.00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
