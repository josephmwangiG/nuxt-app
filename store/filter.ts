import { defineStore } from "pinia";

export const useFiltersStore = defineStore("filterStore", {
  state: () => ({
    filter: "filer",
  }),
});
