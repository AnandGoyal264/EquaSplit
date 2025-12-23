import api from "./axios";

/* groupId MUST be passed as argument */
export const getGroupExpenses = (groupId) => {
  api.get(`/expenses/groups/${groupId}`);
};
