import api from "./axios";

/* groupId MUST be passed as argument */
export const getGroupExpenses = (groupId) => {
  return api.get(`/expenses/groups/${groupId}`);
};
