import React from "react";
import TransactionTable from "../components/TransactionTable";
import { transactions } from "../data/transactions";

const TransactionPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-6">거래 내역</h1>
                <TransactionTable transactions={transactions} />
            </div>
        </div>
    );
};

export default TransactionPage;
