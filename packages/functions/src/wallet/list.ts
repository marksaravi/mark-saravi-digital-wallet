import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { WalletService } from "@mark-saravi-digital-wallet/core/services/walletService";
import { WalletRepository } from "@mark-saravi-digital-wallet/core/repositories/walletRepository";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const repo = new WalletRepository();
  const service= new WalletService(repo);
  const user_id: string = (event?.pathParameters?.userid || "");
  const response = service.getTransacgtionsHistory(user_id)

  return response.statusCode == 200
    ? {
      statusCode: 200,
      body: JSON.stringify({
        user_id,
        transactionHistory: response.transactionHistory
      }),
    }
    : {
      statusCode: 404,
      body: JSON.stringify({}),
    };
};