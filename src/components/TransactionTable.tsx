import React from 'react';

type Transaction = {
    merchant: string;
    date: string;
    type: string;
    amount: number;
    status: string;
    transactionType: string;
};

const TransactionTable: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-left text-sm"> {/* 폰트 크기 조정 */}
                <thead className="bg-gray-100 text-gray-700 font-semibold">
                    <tr>
                        <th className="py-2 px-3 border border-gray-200">날짜</th> {/* 패딩 줄임 */}
                        <th className="py-2 px-3 border border-gray-200">금액</th>
                        <th className="py-2 px-3 border border-gray-200">항목</th>
                        <th className="py-2 px-3 border border-gray-200">비고</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="py-2 px-3 border border-gray-200">{transaction.date}</td>
                            <td
                                className={`py-2 px-3 border border-gray-200 ${transaction.transactionType === "expense" ? "text-red-500" : "text-green-500"
                                    }`}
                            >
                                {transaction.transactionType === "expense"
                                    ? `-${transaction.amount.toLocaleString()}`
                                    : `+${transaction.amount.toLocaleString()}`}
                            </td>
                            <td className="py-2 px-3 border border-gray-200">{transaction.type}</td>
                            <td className="py-2 px-3 border border-gray-200">{transaction.merchant}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;
