import { Api, StackContext } from "sst/constructs";

export function DigitalWalletStack({ stack }: StackContext) {
  const api = new Api(stack, "Api", {
    routes: {
      "GET /wallet/{userid}": "packages/functions/src/wallet/get.handler",
      "GET /wallet/{userid}/transactions": "packages/functions/src/wallet/list.handler",
      "POST /wallet/credit": "packages/functions/src/wallet/update.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}