import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  // const note = notes[event.pathParameters.userid];
  const userId = event?.pathParameters?.userid;
  return true
    ? {
        statusCode: 202,
        body: JSON.stringify({
          userId
        }),
      }
    : {
        statusCode: 200,
        body: JSON.stringify({
          userId
        }),
      };
};