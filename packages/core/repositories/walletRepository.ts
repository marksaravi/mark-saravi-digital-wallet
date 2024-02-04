import wallets, { TransactionResponse, TransactionType, Wallet, Wallets, WalletResponse } from "@mark-saravi-digital-wallet/core/wallet/wallets";

export class WalletRepository {
    wallets: Wallets;
    constructor(wallets: Wallets) {
        this.wallets = wallets;
    }

    createWallet(userId: string): number {
        if (userId in this.wallets) {
            return 200;
        } else {
            this.wallets[userId] = {
                userId,
                credit: 0,
                transactionHistory: []
            }
            return 202;
        }
    }

    // This transaction must be done by Atomicity https://www.postgresql.org/docs/current/tutorial-transactions.html
    updateWallet(userId: string, amount: number, transactionType: TransactionType): TransactionResponse {
        const createStatus = this.createWallet(userId);
        const user = this.wallets[userId];
        const newCredit = transactionType == 'credit' ? user.credit + amount : user.credit - amount
        if (newCredit < 0) {
            return {
                createStatus,
                updated: false,
                error: "not enough credit"
            };
        }
        user.credit = newCredit;
        user.transactionHistory.push({
            transactionType,
            amount,
            credit: user.credit,
            createdAt: Date.now()
        });
        this.wallets[userId] = user;
        return {
            createStatus,
            updated: true,
            error: "",
        };
    }

    getWallet(userId: string): WalletResponse {
        if (userId in this.wallets) {
            const wallet = this.wallets[userId];
            return { statusCode: 200, wallet };
        } else {
            return { statusCode: 404 };
        }
    }
}

const repo = new WalletRepository(wallets);
export default repo;