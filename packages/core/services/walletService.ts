import { TransactionResponse, TransactionsResponse, TransactionType, WalletResponse } from "@mark-saravi-digital-wallet/core/wallet/wallets";
import repo, { WalletRepository } from "@mark-saravi-digital-wallet/core/repositories/walletRepository";

class WalletService {
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
        const response = this.repo.getWallet(userId);
        if (response.statusCode == 404) {
            return {
                statusCode: response.statusCode,
                transactionHistory: []
            }
        }
        const transactionHistory = response.wallet?.transactionHistory
        return {
            statusCode: 200,
            transactionHistory: transactionHistory ? transactionHistory : []
        }
    }
}

const service=new WalletService(repo);

export { WalletService };
export default service;