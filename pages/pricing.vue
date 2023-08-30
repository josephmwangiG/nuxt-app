<template>
  <NuxtLayout>
    <main class="">

      <div class="sect2 my-10 px-4 lg:px-0 lg:w-4/5 mx-auto">

        <div class="cards text-sm grid grid-cols-1 lg:grid-cols-3 my-16 gap-10">
          <div
            class="card p-5 shadow-md lg:shadow-xl shadow-slate-300 rounded-lg bg-white hover:shadow-lg lg:hover:shadow-2xl">
            <div class="flex justify-between">
              <img class="w-12" src="~/assets/img/img7.png" alt="" />
            </div>
            <p class="text-gray-500 py-5 text-left">
              The myCast platform allows fans to speculatively select who
              should play characters in their favorite stories by proposing
              actors, commenting on other individuals’ ideas, and voting for
              their favorite suggestions.
            </p>
          </div>
          <div
            class="card p-5 shadow-md lg:shadow-xl shadow-slate-300 rounded-lg bg-white hover:shadow-lg lg:hover:shadow-2xl">
            <div class="flex justify-between">
              <img class="w-12" src="~/assets/img/img8.png" alt="" />
            </div>
            <p class="text-gray-500 py-5 text-left">
              BreachBits works to empower organizations by helping them
              understand what attackers see, think, and do.
            </p>
          </div>
          <div
            class="card p-5 shadow-md lg:shadow-xl shadow-slate-300 rounded-lg bg-white hover:shadow-lg lg:hover:shadow-2xl">
            <div class="flex justify-between">
              <img class="w-12" src="~/assets/img/img9.png" alt="" />
            </div>
            <p class="text-gray-500 py-5 text-left">
              Easysize is an AI-powered clothing fit and size platform. They
              provide a plugin for fashion shops that allows customers to find
              their perfect size by answering a few simple questions.
            </p>
          </div>
        </div>

        <div class="cards grid grid-cols-1 lg:grid-cols-3 my-16 gap-10 relative">

          <div class="absolute flex">

          </div>

          <div
            class="card overflow-hidden shadow-md lg:shadow-xl shadow-slate-300 rounded-lg bg-white hover:shadow-lg lg:hover:shadow-2xl">
            <div class="flex justify-between">
              <img src="~/assets/img/img4.jpeg" alt="" />
            </div>
            <div class="p-5 flex flex-col">
              <p class="text-gray-500 py-5 text-left flex-1">
                The myCast platform allows fans to speculatively select who
                should play characters in their favorite stories by proposing
                actors, commenting on other individuals’ ideas, and voting for
                their favorite suggestions.
              </p>
              <p class="text-blue-600">
                Learn more
              </p>
            </div>
          </div>
          <div
            class="card overflow-hidden shadow-md lg:shadow-xl shadow-slate-300 rounded-lg bg-white hover:shadow-lg lg:hover:shadow-2xl">
            <div class="flex justify-between">
              <img src="~/assets/img/img5.png" alt="" />
            </div>
            <div class="p-5 flex flex-col">
              <p class="text-gray-500 py-5 text-left flex flex-1">
                BreachBits works to empower organizations by helping them
                understand what attackers see, think, and do.
              </p>
              <p class="text-blue-600">
                Learn more
              </p>
            </div>
          </div>
          <div
            class="card overflow-hidden shadow-md lg:shadow-xl shadow-slate-300 rounded-lg bg-white hover:shadow-lg lg:hover:shadow-2xl">
            <div class="flex justify-between">
              <img src="~/assets/img/img6.jpeg" alt="" />
            </div>
            <div class="p-5 flex flex-col">
              <p class="text-gray-500 py-5 text-left flex-1">
                Easysize is an AI-powered clothing fit and size platform. They
                provide a plugin for fashion shops that allows customers to
                find their perfect size by answering a few simple questions.
              </p>
              <p class="text-blue-600">
                Learn more
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>
<script setup>
useHead({
  title: 'MY APP | Pricing',
})
</script>
<style lang="">
  
</style>
  