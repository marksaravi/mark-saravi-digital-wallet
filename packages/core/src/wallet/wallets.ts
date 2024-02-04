type Transaction = {
    transactionType: "credit" | "debit";
    amount: number;
}

type Wallet = {
    userId: string;
    currentCredit: number;
    transactionHistory: Transaction[];
}

type Wallets = {
    [userId: string]: Wallet;
}

const wallets: Wallets = {};
export { Transaction, Wallet, Wallets }
export default wallets;