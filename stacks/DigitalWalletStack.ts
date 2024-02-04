import { Api, StackContext } from "sst/constructs";

export function DigitalWalletStack({ stack }: StackContext) {
  const api = new Api(stack, "Api", {
    routes: {
      "GET /wallet/{userid}": "packages/functions/src/get.handler",
      "GET /wallet/{userid}/transactions?type=credit,debit,all": "packages/functions/src/wallet/list.handler",
      "POST /wallet/{userid}/credit": "packages/functions/src/wallet/update.handler",
      "POST /wallet/{userid}/debit": "packages/functions/src/wallet/update.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}