import service from "@mark-saravi-digital-wallet/core/services/walletService";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const userId: string = (event?.pathParameters?.userid || "");
  const data = JSON.parse(event.body || "{}");
  const amount = data.amount || 0;
  const response=service.updateWallet(userId, amount, "credit");

  const { statusCode, credit} = response;
  return {
    statusCode,
    body: JSON.stringify({
      userId,
      credit,
    })
  };
};