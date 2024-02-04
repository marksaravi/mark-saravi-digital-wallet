import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { WalletService } from "@mark-saravi-digital-wallet/core/services/walletService";
import { WalletRepository } from "@mark-saravi-digital-wallet/core/repositories/walletRepository";


export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const repo = new WalletRepository();
  const service= new WalletService(repo);
  const userId: string = (event?.pathParameters?.userid || "");
  const response = service.getWallet(userId)
  const { statusCode, credit } = response;

  return {
    statusCode: statusCode,
    body: JSON.stringify({
      userId,
      credit
    }),
  }
};