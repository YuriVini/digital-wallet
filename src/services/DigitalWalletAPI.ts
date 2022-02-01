import axios from "axios";
import { DIGITAL_WALLET_API } from "./consts";

export type GetMyBalance = {
  saldo: number;
};

export type GetMyTransactions = {
  id: number;
  descricao: string;
  dataTransacao: string;
  tipoTransacao: string;
  valorTransacao: number;
  tipoLancamento: string;
  cartaoMascarado: string;
  finalCartao: string;
  nomePortador: string;
};

const digitalWalletAPI = axios.create({
  baseURL: DIGITAL_WALLET_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getMyBalance = () =>
  digitalWalletAPI.get<GetMyBalance>("/balance");

export const getMyTransactions = () =>
  digitalWalletAPI.get<GetMyTransactions[]>("/transactions");

export const postLogin = (username: string, password: string) =>
  digitalWalletAPI.post("/login", {
    username,
    password,
  });
