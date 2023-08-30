<template>
  <NuxtPage></NuxtPage>
</template>
<script setup>

import { useFiltersStore } from "~/store/filter"
const store = useFiltersStore()

console.log(store.filter);

</script>
<style lang="">
  
</style>