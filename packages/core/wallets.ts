type TransactionType = "credit" | "debit";

type Transaction = {
    transactionType: TransactionType;
    amount: number;
    credit: number;
    createdAt: string;
}


type Wallet = {
    userId: string;
    credit: number;
    transactionHistory: Transaction[];
}

type WalletResponse = {
    statusCode: number;
    userId: string;
    credit: number;
}

type TransactionResponse = {
    statusCode: number;
    updated: boolean;
    credit: number;
    error: string;
}
type TransactionsResponse = {
    statusCode: number;
    userId: string;
    transactionHistory: Transaction[];
}

type Wallets = {
    [userId: string]: Wallet;
}

export { Transaction, TransactionResponse, TransactionsResponse, TransactionType, Wallet, Wallets, WalletResponse }
const wallets: Wallets={};
export default wallets;