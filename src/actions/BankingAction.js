
export const deposit = (amount) => {
  return {
    type: "DEPOSIT",
    amount: parseInt(amount),
  };
};
export const withdraw = (amount) => {
  return { type: "WITHDRAW", amount: parseInt(amount) };
};
export const collectIntrest = () => {
  return { type: "COLLECT_INTREST" };
};
export const deleteAcc = () => {
  return { type: "DELETE_ACCOUNT" };
};
