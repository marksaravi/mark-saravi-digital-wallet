import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const userId = event?.pathParameters?.userid;

  return {
    statusCode: 200,
  };
};