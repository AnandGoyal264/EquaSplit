import api from "./axios";
import {useState} from 'react'

export const getGroupExpenses = (groupId) =>
  api.get(`/expenses/group/${groupId}`);
