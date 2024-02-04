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
    wallet?: Wallet;
}

type TransactionResponse = {
    statusCode: number;
    updated: boolean;
    credit: number;
    error: string;
}
type TransactionsResponse = {
    statusCode: number;
    transactionHistory: Transaction[];
}

type Wallets = {
    [userId: string]: Wallet;
}

const wallets: Wallets = {};

export { Transaction, TransactionResponse, TransactionsResponse, TransactionType, Wallet, Wallets, WalletResponse }
export default wallets;