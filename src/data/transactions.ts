import { TransactionType } from "../enums/TransactionType";
import { TransactionCategory } from "../enums/TransactionCategory";

export interface Transaction {
  merchant: string;
  date: string;
  type: TransactionType; // 거래 항목 Enum
  amount: number;
  transactionType: TransactionCategory; // 수입/지출 Enum
  status: string;
}

export const transactions: Transaction[] = [
  {
    merchant: "기아화성",
    date: "2024.04.12",
    type: TransactionType.Installment,
    amount: 620087,
    transactionType: TransactionCategory.Expense, // 지출
    status: "",
  },
  {
    merchant: "우디마트",
    date: "2024.06.12",
    type: TransactionType.Groceries,
    amount: 9980,
    transactionType: TransactionCategory.Expense,
    status: "",
  },
  {
    merchant: "세외수입_KICC(인터넷) 성동구도시관리",
    date: "2024.06.12",
    type: TransactionType.Parking,
    amount: 9300,
    transactionType: TransactionCategory.Expense,
    status: "",
  },
  {
    merchant: "하하약국",
    date: "2024.06.13",
    type: TransactionType.Medical,
    amount: 16400,
    transactionType: TransactionCategory.Expense,
    status: "",
  },
  {
    merchant: "(주)다이소아성산업",
    date: "2024.06.13",
    type: TransactionType.Groceries,
    amount: 14000,
    transactionType: TransactionCategory.Expense,
    status: "",
  },
  {
    merchant: "육전국밥 군자역점",
    date: "2024.06.13",
    type: TransactionType.Dining,
    amount: 31000,
    transactionType: TransactionCategory.Expense,
    status: "",
  },
  {
    merchant: "카카오T일반택시_0",
    date: "2024.06.13",
    type: TransactionType.PublicTransport,
    amount: 4800,
    transactionType: TransactionCategory.Expense,
    status: "",
  },
  {
    merchant: "기타 상점",
    date: "2024.06.18",
    type: TransactionType.Etc,
    amount: 24700,
    transactionType: TransactionCategory.Expense,
    status: "",
  },
];
