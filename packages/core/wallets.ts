type Transaction = {
    user_id: string;
    transaction_id: string;
    amount: number;
    credit: number;
    created_at: string;
    updated_at: string;
}


type Wallet = {
    user_id: string;
    credit: number;
    created_at: string;
    updated_at: string;
    transactionHistory: Transaction[];
}

type WalletResponse = {
    statusCode: number;
    user_id: string;
    credit: number;
    created_at: string;
    updated_at: string;
    error: string;
}

type TransactionResponse = {
    statusCode: number;
    transaction_id: string;
    user_id: string;
    credit: number;
    updated_at: string;
    error: string;
}

type TransactionsHistoryResponse = {
    statusCode: number;
    user_id: string;
    transactionHistory: Transaction[];
    error: string;
}

type Wallets = {
    [user_id: string]: Wallet;
}

export { Transaction, TransactionResponse, TransactionsHistoryResponse, WalletResponse, Wallet, Wallets }
const wallets: Wallets = {
    "mark": {
        "user_id": "mark",
        "credit": 0,
        "created_at": "2024-02-04",
        "updated_at": "",
        "transactionHistory": []
    },
    "carol": {
        "user_id": "carol",
        "credit": 25,
        "created_at": "2024-02-04",
        "updated_at": "",
        "transactionHistory": [
            {
                "user_id": "carol",
                "transaction_id": "59f1cb10-0202-0138-225b-028e897a70a5",
                "amount": 10,
                "credit": 10,
                "created_at": "2024-02-04",
                "updated_at": "2024-02-04",
            },
            {
                "user_id": "carol",
                "transaction_id": "69f1cb10-0202-0138-225b-028e897a70a5",
                "amount": 15,
                "credit": 25,
                "created_at": "2024-02-05",
                "updated_at": "2024-02-05",
            }
        ]
    }
};
export default wallets;