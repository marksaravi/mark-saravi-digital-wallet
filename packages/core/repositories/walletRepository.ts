import wallets, { TransactionResponse, TransactionType, Wallet, Wallets, WalletResponse, TransactionsResponse } from "@mark-saravi-digital-wallet/core/wallets";

export class WalletRepository {
    createWallet(userId: string): number {
        if (userId in wallets) {
            return 200;
        } else {
            wallets[userId] = {
                userId,
                credit: 0,
                transactionHistory: []
            }
            return 202;
        }
    }

    // This transaction must be done by Atomicity https://www.postgresql.org/docs/current/tutorial-transactions.html
    updateWallet(userId: string, amount: number, transactionType: TransactionType): TransactionResponse {
        const statusCode = this.createWallet(userId);
        const user = wallets[userId];
        const newCredit = transactionType == 'credit' ? user.credit + amount : user.credit - amount
        if (newCredit < 0) {
            return {
                statusCode,
                updated: false,
                credit: user.credit,
                error: "not enough credit"
            };
        }
        user.credit = newCredit;
        const creationDate = new Date(Date.now());
        const createdAt = creationDate.toISOString()
        user.transactionHistory.push({
            transactionType,
            amount,
            credit: user.credit,
            createdAt
        });
        wallets[userId] = user;
        return {
            statusCode,
            updated: true,
            credit: user.credit,
            error: "",
        };
    }

    getWallet(userId: string): WalletResponse {
        if (userId in wallets) {
            const user = wallets[userId];
            return {
                statusCode: 200,
                userId,
                credit: user.credit
            };
        } else {
            return {
                statusCode: 404,
                userId,
                credit: 0
            };
        }
    }

    getWalletTransactions(userId: string): TransactionsResponse {
        if (wallets[userId]) {
            const wallet = wallets[userId];
            return { statusCode: 200, transactionHistory: wallet.transactionHistory, userId };
        } else {
            return { statusCode: 404, transactionHistory: [], userId };
        }
    }
}

