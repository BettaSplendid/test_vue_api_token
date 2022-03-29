import { defineStore } from "pinia";

export const usetoken_store = defineStore({
  id: "token_store",
  state: () => ({
    patient: {},
    patients: [],
  }),
  getters: {},
  actions: {},
});
