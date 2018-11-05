const account = state => {
  return state.account;
};
const customPaths = state => {
  return state.customPaths;
};
const ens = state => {
  return state.ens;
};
const Errors = state => {
  return state.Errors;
};
const ethDonationAddress = state => {
  return state.ethDonationAddress;
};
const gasPrice = state => {
  return state.gasPrice;
};
const Networks = state => {
  return state.Networks;
};
const network = state => {
  return state.network;
};
const notifications = state => {
  return state.notifications;
};
const online = state => {
  return state.online;
};
const transactions = state => {
  return state.transactions;
};
const wallet = state => {
  return state.wallet;
};
const web3 = state => {
  return state.web3;
};

export default {
  account,
  customPaths,
  ens,
  Errors,
  ethDonationAddress,
  gasPrice,
  Networks,
  network,
  notifications,
  online,
  transactions,
  wallet,
  web3
};
