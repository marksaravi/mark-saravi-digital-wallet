import { v4 as uuidv4 } from "uuid";
import { WalletService } from "@mark-saravi-digital-wallet/core/services/walletService";
import { WalletRepository } from "@mark-saravi-digital-wallet/core/repositories/walletRepository";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const repo = new WalletRepository();
  const service = new WalletService(repo);
  const transactions = JSON.parse(event.body || "{}");
  const { id, amount, created_at, updated_at } = transactions["transactions"];
  const transaction_id = uuidv4();
  const response = service.updateWallet({ user_id: id, transaction_id, amount, created_at, updated_at });

  const { statusCode, credit } = response;
  return {
    statusCode,
    body: JSON.stringify({
      user_id: id,
      transaction_id,
      credit,
      updated_at
    })
  };
};