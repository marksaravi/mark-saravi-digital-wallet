import wallets, { TransactionResponse, TransactionsHistoryResponse, WalletResponse, Wallet, Wallets } from "@mark-saravi-digital-wallet/core/wallets";

function isoDate(): string {
    const creationDate = new Date(Date.now());
    return creationDate.toISOString();
}

function auDollarToCent(amount: number): number {
    return amount*100
}
export class WalletRepository {
    createWallet(user_id: string): WalletResponse {
        let statusCode = 200;
        if (!(user_id in wallets)) {
            statusCode = 202;
            wallets[user_id] = {
                user_id,
                credit: 0,
                created_at: isoDate(),
                updated_at: isoDate(),
                transactionHistory: []
            }
        }
        const { credit, created_at, updated_at } = wallets[user_id];
        return {
            statusCode,
            user_id,
            credit,
            created_at,
            updated_at,
            error: ""
        };
    }

    // This transaction must be done by Atomicity https://www.postgresql.org/docs/current/tutorial-transactions.html
    updateWallet(params: { user_id: string, transaction_id: string, amount: number, created_at: string, updated_at: string }): TransactionResponse {
        const { user_id, transaction_id, amount, created_at, updated_at } = params;
        const amountInCent=auDollarToCent(amount);
        const walletResponse = this.createWallet(user_id);
        const { statusCode } = walletResponse;
        const user = wallets[user_id];
        user.credit = user.credit + amountInCent;
        user.updated_at = updated_at;
        user.transactionHistory.push({
            user_id,
            transaction_id,
            amount: amountInCent,
            credit: user.credit,
            created_at,
            updated_at,
        });
        wallets[user_id] = user;
        return {
            statusCode,
            user_id,
            transaction_id,
            updated_at,
            credit: user.credit,
            error: "",
        };
    }

    getWallet(user_id: string): WalletResponse {
        if (user_id in wallets) {
            const user = wallets[user_id];
            return {
                statusCode: 200,
                user_id,
                credit: user.credit,
                created_at: user.created_at,
                updated_at: user.updated_at,
                error: "",
            };
        } else {
            return {
                statusCode: 404,
                user_id,
                credit: 0,
                created_at: "",
                updated_at: "",
                error: "user not found",
            };
        }
    }

    getWalletTransactions(user_id: string): TransactionsHistoryResponse {
        if (wallets[user_id]) {
            const wallet = wallets[user_id];
            return { statusCode: 200, transactionHistory: wallet.transactionHistory, user_id, error: "" };
        } else {
            return { statusCode: 404, transactionHistory: [], user_id, error: "user not found" };
        }
    }
}
