import { TransactionResponse, TransactionsHistoryResponse, WalletResponse } from "@mark-saravi-digital-wallet/core/wallets";
import { WalletRepository } from "@mark-saravi-digital-wallet/core/repositories/walletRepository";

export class WalletService {
    repo: WalletRepository;

    constructor(repo: WalletRepository) {
        this.repo = repo;
    }

    updateWallet(params: { user_id: string, transaction_id: string, amount: number, created_at: string, updated_at: string }): TransactionResponse {
        return this.repo.updateWallet(params);
    }

    getWallet(user_id: string): WalletResponse {
        return this.repo.getWallet(user_id);
    }

    getTransacgtionsHistory(user_id: string): TransactionsHistoryResponse {
        const response = this.repo.getWalletTransactions(user_id);
        const { statusCode, transactionHistory } = response;
        return {
            statusCode,
            user_id,
            transactionHistory,
            error: ""
        }
    }
}
