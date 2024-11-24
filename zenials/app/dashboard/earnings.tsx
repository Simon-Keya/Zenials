import React from "react";

const Earnings: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Earnings</h1>
      <p className="text-gray-600">
        View your earnings breakdown and payment history here.
      </p>
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-11-01</td>
                <td>$200.00</td>
                <td>
                  <span className="badge badge-success">Paid</span>
                </td>
              </tr>
              <tr>
                <td>2024-10-01</td>
                <td>$150.00</td>
                <td>
                  <span className="badge badge-success">Paid</span>
                </td>
              </tr>
              <tr>
                <td>2024-09-01</td>
                <td>$120.00</td>
                <td>
                  <span className="badge badge-error">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
