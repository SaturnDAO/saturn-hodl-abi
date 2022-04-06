/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Hodl, HodlInterface } from "../Hodl";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "sold",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "active",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addy",
        type: "address",
      },
      {
        name: "toBeInvested",
        type: "uint256",
      },
    ],
    name: "sizeMultipliers",
    outputs: [
      {
        name: "m",
        type: "uint256",
      },
      {
        name: "d",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "etherCollected",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "ref",
        type: "address",
      },
    ],
    name: "instantBuy",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addy",
        type: "address",
      },
    ],
    name: "totalRefferred",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "ref",
        type: "address",
      },
    ],
    name: "longBuy",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "latestOrderId",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addy",
        type: "address",
      },
    ],
    name: "totalInvested",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "tokenAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "isClaimed",
    outputs: [
      {
        name: "claimed",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "endPresale",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "ref",
        type: "address",
      },
    ],
    name: "mediumBuy",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "lockupOf",
    outputs: [
      {
        name: "timestamp",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "",
        type: "bytes",
      },
    ],
    name: "tokenFallback",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "tokensRemaining",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "investor",
        type: "address",
      },
      {
        name: "investment",
        type: "uint256",
      },
    ],
    name: "tokensIfInvest",
    outputs: [
      {
        name: "instant",
        type: "uint256",
      },
      {
        name: "short",
        type: "uint256",
      },
      {
        name: "medium",
        type: "uint256",
      },
      {
        name: "long",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "investors",
        type: "address[]",
      },
      {
        name: "etherInvested",
        type: "uint256[]",
      },
    ],
    name: "setInitialInvestedAmount",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "ref",
        type: "address",
      },
    ],
    name: "shortBuy",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "buyerOf",
    outputs: [
      {
        name: "orderadmin",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "amountOf",
    outputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "investors",
        type: "address[]",
      },
    ],
    name: "setVips",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addy",
        type: "address",
      },
    ],
    name: "isVIP",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "hardCap",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "token",
        type: "address",
      },
      {
        name: "ethRecepient",
        type: "address",
      },
      {
        name: "presaleHardCap",
        type: "uint256",
      },
      {
        name: "basePrice",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "time",
        type: "uint256",
      },
    ],
    name: "Activated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "time",
        type: "uint256",
      },
    ],
    name: "Finished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "purchaser",
        type: "address",
      },
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        name: "etherPaid",
        type: "uint256",
      },
      {
        indexed: false,
        name: "purchasedAt",
        type: "uint256",
      },
      {
        indexed: false,
        name: "redeemAt",
        type: "uint256",
      },
      {
        indexed: false,
        name: "hodltype",
        type: "string",
      },
    ],
    name: "Purchase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "purchaser",
        type: "address",
      },
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
];

export class Hodl__factory {
  static readonly abi = _abi;
  static createInterface(): HodlInterface {
    return new utils.Interface(_abi) as HodlInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Hodl {
    return new Contract(address, _abi, signerOrProvider) as Hodl;
  }
}
