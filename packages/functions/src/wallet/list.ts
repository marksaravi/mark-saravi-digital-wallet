import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import service from "@mark-saravi-digital-wallet/core/services/walletService";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const userId: string = (event?.pathParameters?.userid || "");
  const response = service.getTransacgtionsHistory(userId)

  return response.statusCode == 200
    ? {
      statusCode: 200,
      body: JSON.stringify({
        userId,
        transactionHistory: response.transactionHistory
      }),
    }
    : {
      statusCode: 404,
      body: JSON.stringify({}),
    };
};