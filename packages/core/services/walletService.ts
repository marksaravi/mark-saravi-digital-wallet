import { TransactionResponse, TransactionsResponse, TransactionType, WalletResponse } from "@mark-saravi-digital-wallet/core/wallets";
import { WalletRepository } from "@mark-saravi-digital-wallet/core/repositories/walletRepository";

export class WalletService {
    repo: WalletRepository;

    constructor(repo: WalletRepository) {
        this.repo = repo;
    }

    updateWallet(userId: string, amount: number, transactionType: TransactionType): TransactionResponse {
        return this.repo.updateWallet(userId, amount, transactionType);
    }

    getWallet(userId: string): WalletResponse {
        return this.repo.getWallet(userId);
    }

    getTransacgtionsHistory(userId: string): TransactionsResponse {
        const response = this.repo.getWalletTransactions(userId);
        const {statusCode, transactionHistory} = response;
        return {
            statusCode,
            userId,
            transactionHistory
        }
    }
}
