import api from "./axios";

export const getMyBalances = () => api.get("/balances");
export const settleBalance = (data) => api.post("/balances/settle", data);

// export const getMyBalances = () => api.get("/balances");
// export const settleBalance = (data) => api.post("/balances/settle", data);

