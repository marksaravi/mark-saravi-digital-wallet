import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const userId = event?.pathParameters?.userid;
  return true
    ? {
        statusCode: 200,
        body: JSON.stringify({
          userId
        }),
      }
    : {
        statusCode: 404,
        body: JSON.stringify({ 
          userId,
          error: true 
        }),
      };
};