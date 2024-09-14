import React from "react";

function ActiveLoansTable() {
  return (
    <div className="bs-table">
      <table className="table-wrap">
        <thead>
          <th className="tbl-head">SL No</th>
          <th className="tbl-head">Loan Money</th>
          <th className="tbl-head">Left to repay</th>
          <th className="tbl-head">Duration</th>
          <th className="tbl-head">Interest rate</th>
          <th className="tbl-head">Installment</th>
          <th className="tbl-head">Repay</th>
        </thead>
        <tbody>
          <tr className="tbl-row">
            <td className="tbl-td">01.</td>
            <td className="tbl-td">$100,000</td>
            <td className="tbl-td">$40,500</td>
            <td className="tbl-td">8 Months</td>
            <td className="tbl-td">12%</td>
            <td className="tbl-td">$2,000 / month</td>
            <td className="tbl-td">
              <button className="bs-btn btn-primary">Repay</button>
            </td>
          </tr>
          <tr>
            <td className="tbl-td">02.</td>
            <td className="tbl-td">$500,000</td>
            <td className="tbl-td">$250,000</td>
            <td className="tbl-td">36 Months</td>
            <td className="tbl-td">10%</td>
            <td className="tbl-td">$8,000 / month</td>
            <td className="tbl-td">
              <button className="bs-btn btn-secondary">Repay</button>
            </td>
          </tr>
          <tr>
            <td className="tbl-td">03.</td>
            <td className="tbl-td">$900,000</td>
            <td className="tbl-td">$40,500</td>
            <td className="tbl-td">12 Months</td>
            <td className="tbl-td">12%</td>
            <td className="tbl-td">$5,000 / month</td>
            <td className="tbl-td">
              <button className="bs-btn btn-secondary">Repay</button>
            </td>
          </tr>
          <tr>
            <td className="tbl-td">04.</td>
            <td className="tbl-td">$50,000</td>
            <td className="tbl-td">$40,500</td>
            <td className="tbl-td">25 Months</td>
            <td className="tbl-td">5%</td>
            <td className="tbl-td">$2,000 / month</td>
            <td className="tbl-td">
              <button className="bs-btn btn-secondary">Repay</button>
            </td>
          </tr>
          <tr>
            <td className="tbl-td">05.</td>
            <td className="tbl-td">$50,000</td>
            <td className="tbl-td">$40,500</td>
            <td className="tbl-td">5 Months</td>
            <td className="tbl-td">16%</td>
            <td className="tbl-td">$10,000 / month</td>
            <td className="tbl-td">
              <button className="bs-btn btn-secondary">Repay</button>
            </td>
          </tr>
          <tr>
            <td className="tbl-td">06.</td>
            <td className="tbl-td">$80,000</td>
            <td className="tbl-td">$25,500</td>
            <td className="tbl-td">14 Months</td>
            <td className="tbl-td">8%</td>
            <td className="tbl-td">$2,000 / month</td>
            <td className="tbl-td">
              <button className="bs-btn btn-secondary">Repay</button>
            </td>
          </tr>
          <tr>
            <td className="tbl-td">07.</td>
            <td className="tbl-td">$12,000</td>
            <td className="tbl-td">$5,500</td>
            <td className="tbl-td">9 Months</td>
            <td className="tbl-td">13%</td>
            <td className="tbl-td">$500 / month</td>
            <td className="tbl-td">
              <button className="bs-btn btn-secondary">Repay</button>
            </td>
          </tr>
          <tr>
            <td className="tbl-td">08.</td>
            <td className="tbl-td">$160,000</td>
            <td className="tbl-td">$100,800</td>
            <td className="tbl-td">3 Months</td>
            <td className="tbl-td">12%</td>
            <td className="tbl-td">$900 / month</td>
            <td className="tbl-td">
              <button className="bs-btn btn-secondary">Repay</button>
            </td>
          </tr>
          <tr className="tbl-footer">
            <td className="tbl-td">Total</td>
            <td className="tbl-td">$125,0000</td>
            <td className="tbl-td">$750,000</td>
            <td className="tbl-td"></td>
            <td className="tbl-td"></td>
            <td className="tbl-td">$50,000 / month</td>
            <td className="tbl-td"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ActiveLoansTable;
