import React, { useEffect, useState } from "react";
import CalculateSalary from "./CalculateSalary";
import DisplaySalary from "./DisplaySalary";
import {
  apit,
  employeeEPF,
  employerEPF,
  employerETF,
  grossDeduction,
  grossEarnings,
  grossSalaryForEPF,
  totalEarnings,
  totalEarningsForEPF,
} from "../helpers/salaryHelpers";
import { useDispatch, useSelector } from "react-redux";
import {
  employeeEpfDetails,
  employerEpfDetails,
  employerEtfDetails,
  grossDeductionDetails,
  grossSalaryforEpfDetails,
  saveSalaryDetails,
  totalEarningsDetails,
} from "../redux/salaryActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [earnings, setEarnings] = useState([
    { title: null, amount: null, checked: false },
  ]);
  const [isAddAllowanceBtnClicked, setIsAddAllowanceBtnClicked] =
    useState(false);

  const [deduction, setDeduction] = useState([{ title: null, amount: null }]);
  const [isDeductionBtnClicked, setIsDeductionBtnClicked] = useState(false);

  const [basicSalary, setBasicSalary] = useState(null);
  const [isChangedanyValue, setIsChangedanyValue] = useState(false);
  const salaryData = useSelector((state) => state.salary);
  const newSalaryData = { ...salaryData };

  useEffect(() => {
    if (isAddAllowanceBtnClicked) {
      setEarnings(earnings);
      setIsAddAllowanceBtnClicked(false);
    }
  }, [isAddAllowanceBtnClicked]);

  useEffect(() => {
    if (setIsDeductionBtnClicked) {
      setDeduction(deduction);
      setIsDeductionBtnClicked(false);
    }
  }, [isDeductionBtnClicked]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("earnings")))
      setEarnings(JSON.parse(localStorage.getItem("earnings")));
    if (JSON.parse(localStorage.getItem("deduction")))
      setDeduction(JSON.parse(localStorage.getItem("deduction")));
    if (salaryData.basicSalary) setBasicSalary(salaryData.basicSalary);
  }, [
    localStorage.getItem("earnings"),
    localStorage.getItem("deduction"),
    salaryData.basicSalary,
  ]);

  useEffect(() => {
    if (isChangedanyValue) {
      dispatch(saveSalaryDetails(basicSalary ? basicSalary : 0));
      dispatch(
        totalEarningsDetails(
          totalEarnings(basicSalary ? basicSalary : 0, [...earnings])
        )
      );
      dispatch(grossDeductionDetails(grossDeduction([...deduction])));
      dispatch(
        grossSalaryforEpfDetails(
          grossSalaryForEPF(
            totalEarningsForEPF(basicSalary ? basicSalary : 0, [...earnings]),
            grossDeduction([...deduction])
          )
        )
      );
      dispatch(
        employeeEpfDetails(
          employeeEPF(
            grossSalaryForEPF(
              totalEarningsForEPF(basicSalary ? basicSalary : 0, [...earnings]),
              grossDeduction([...deduction])
            )
          )
        )
      );
      dispatch(
        employerEpfDetails(
          employerEPF(
            grossSalaryForEPF(
              totalEarningsForEPF(basicSalary ? basicSalary : 0, [...earnings]),
              grossDeduction([...deduction])
            )
          )
        )
      );
      dispatch(
        employerEtfDetails(
          employerETF(
            grossSalaryForEPF(
              totalEarningsForEPF(basicSalary ? basicSalary : 0, [...earnings]),
              grossDeduction([...deduction])
            )
          )
        )
      );
      localStorage.setItem("earnings", JSON.stringify(earnings));
      localStorage.setItem("deduction", JSON.stringify(deduction));
      setIsChangedanyValue(false);
    }
  }, [isChangedanyValue]);

  // console.log(
  //   "totalEarnings",
  //   totalEarnings(basicSalary ? basicSalary : 0, earnings)
  // );
  // console.log(
  //   "TotalEarningsForEPF",
  //   totalEarningsForEPF(basicSalary ? basicSalary : 0, earnings)
  // );
  // console.log("grossDeduction", grossDeduction(deduction));

  // console.log(
  //   "grossEarnings",
  //   grossEarnings(
  //     totalEarnings(basicSalary ? basicSalary : 0, earnings),
  //     grossDeduction(deduction)
  //   )
  // );

  // console.log(
  //   "grossSalaryForEPF",
  //   grossSalaryForEPF(
  //     totalEarningsForEPF(basicSalary, earnings),
  //     grossDeduction(deduction)
  //   )
  // );

  // console.log(
  //   "employeeEPF",
  //   employeeEPF(
  //     grossSalaryForEPF(
  //       totalEarningsForEPF(basicSalary, earnings),
  //       grossDeduction(deduction)
  //     )
  //   )
  // );

  // console.log(
  //   "employerEPF",
  //   employerEPF(
  //     grossSalaryForEPF(
  //       totalEarningsForEPF(basicSalary, earnings),
  //       grossDeduction(deduction)
  //     )
  //   )
  // );

  // console.log(
  //   "employerETF",
  //   employerETF(
  //     grossSalaryForEPF(
  //       totalEarningsForEPF(basicSalary, earnings),
  //       grossDeduction(deduction)
  //     )
  //   )
  // );

  // console.log("APIT", apit(grossEarnings(
  //   totalEarnings(basicSalary ? basicSalary : 0, earnings),
  //   grossDeduction(deduction)
  // ),
  // grossDeduction(deduction)))

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
            setIsChangedanyValue={setIsChangedanyValue}
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
