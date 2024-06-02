import React from 'react'

const DisplaySalary = () => {
  return (
    <div>
         <h1 className="font-bold text-xl inter text-[#a98e8e]">
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
  )
}

export default DisplaySalary