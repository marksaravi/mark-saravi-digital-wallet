import { SSTConfig } from "sst";
import { DigitalWalletStack } from "./stacks/DigitalWalletStack";

export default {
  config(_input) {
    return {
      name: "mark-saravi-digital-wallet",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(DigitalWalletStack);
  }
} satisfies SSTConfig;
