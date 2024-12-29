import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Koincity Ninja Boys"
  export const SYMBOL: string = "KCMB";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 75;
  export const URI: string = "https://koincity.com/storage/nft/kcmb/ed-3/metadata/";
  export const OWNER: Uint8Array = Base58.decode("1BHnZrZnFTo17TnqiWnP7iLDHtnDgBSgQr");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("");
}
