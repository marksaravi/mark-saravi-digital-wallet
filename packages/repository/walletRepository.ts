import wallets, { Wallets } from "@mark-saravi-digital-wallet/core/wallet/wallets";

export class WalletRepository {
    wallets: Wallets;
    constructor(wallets: Wallets) {
        this.wallets=wallets;
    }

    createWallet(userId: string): number {
        if (userId in this.wallets) {
            return 200;
        } else {
            this.wallets[userId]={
                userId,
                currentCredit: 0,
                transactionHistory: []
            }
            return 202;
        }
    }
}

export default function CreatweWalletRepository(): WalletRepository {
    return new WalletRepository(wallets);
}