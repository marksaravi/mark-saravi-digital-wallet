type TransactionType = "credit" | "debit";

type Transaction = {
    transactionType: TransactionType;
    amount: number;
    credit: number;
    createdAt: number;
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
    createStatus: number;
    updated: boolean;
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