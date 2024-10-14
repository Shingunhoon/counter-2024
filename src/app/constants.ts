import { getContract } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";
const contractAddress = "0x5CFe39bc956f21b2ef96E71629F6322E268c0BCe";
export const CONTRACT = getContract({
  client: client,
  chain: sepolia,
  address: contractAddress,
});
