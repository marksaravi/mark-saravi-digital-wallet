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
const wallets: Wallets = {
    "mark": {
        "userId": "mark",
        "credit": 0,
        "transactionHistory": []
    },
    "carol": {
        "userId": "carol",
        "credit": 25,
        "transactionHistory": [
            {
                "amount": 10,
                "credit": 10,
                "createdAt": "2024-02-04",
                "transactionType": "credit"
            },
            {
                "amount": 15,
                "credit": 25,
                "createdAt": "2024-02-04",
                "transactionType": "credit"
            }
        ]
    }
};
export default wallets;