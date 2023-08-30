<template>
  <NuxtLayout>
    <main class="">
      <div class="hero" style="
              background-image: url('/img/bg1.jpg');
              height: 100vh;
              background-repeat: no-repeat;
              background-size: cover;
              background-position: top;
            ">
        <div class="w-4/5 lg:w-1/2 mx-auto">
          <p class="pt-32">
            <img class="w-56" src="~/assets/img/svg1.svg" alt="" />
          </p>
          <p class="my-11 text-4xl lg:text-6xl text-white text-center">
            Where the next generation of startups grow
          </p>
          <p class="lg:w-4/5 font-bold text-lg text-white text-center mx-auto">
            Hatch is our global startup program that provides the cloud
            infrastructure startups like yours need to scale their businesses
          </p>
          <p class="lg:w-4/5 my-11 font-bold text-lg text-center mx-auto">
            <span class="bg-green-300 rounded p-3"> Apply for Hatch </span>
          </p>
        </div>
      </div>
      <div class="sect2 my-10 px-4 lg:px-0 lg:w-4/5 mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="lg:pr-36">
            <p class="text-2xl font-bold lg:pt-16">
              Grow your startup with our powerful and easy-to-use
              infrastructure
            </p>
            <p class="my-4 text-gray-500">
              We designed Hatch to power your startup – giving you the cloud
              infrastructure you need to grow quickly.
            </p>
            <p class="text-blue-500 font-bold">Apply now</p>
          </div>
          <div class="overflow-hidden">
            <img class="object-cover h-64 rounded-3xl mt-8 :lg-mt-0" src="~/assets/img/img1.jpg" alt="" />
          </div>
        </div>
        <div class="help w-[60%] :w-[50%] mx-auto mt-12 lg:mt-16">
          <p class="text-xl lg:text-4xl font-bold text-center">
            How do we support startups?
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 mt-8 lg:mt-16 gap-10">
          <div class="flex">
            <div class="icon shrink-0">
              <img class="w-12 pt-4" src="~/assets/img/svg2.svg" alt="" />
            </div>
            <div class="content pl-5">
              <h3 class="font-bold text-lg">Infrastructure credit</h3>
              <p class="text-gray-600 py-4">
                Startups can receive 12 months of infrastructure credit
                (amount varies by partner organization).
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="icon shrink-0">
              <img class="w-12 pt-4" src="~/assets/img/svg3.svg" alt="" />
            </div>
            <div class="content pl-5">
              <h3 class="font-bold text-lg">Training</h3>
              <p class="text-gray-600 py-4">
                Get access to one-on-one meetings with our Product Managers,
                Solutions Engineers, Developer Advocates, and other experts in
                their field.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="icon flex-shrink-0">
              <img class="w-12 pt-4" src="~/assets/img/svg4.svg" alt="" />
            </div>
            <div class="content pl-5">
              <h3 class="font-bold text-lg">Prioritized support</h3>
              <p class="text-gray-600 py-4">
                Where your tickets get moved up the queue. We support you with
                24/7/365 technical support and a 99.99% uptime SLA for all
                services.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="icon shrink-0">
              <img class="w-12 pt-4" src="~/assets/img/svg5.svg" alt="" />
            </div>
            <div class="content pl-5">
              <h3 class="font-bold text-lg">A community of builders</h3>
              <p class="text-gray-600 py-4">
                We bring together other founders, investors, and influencers
                to connect online and meet in-person at Hatch events.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div
            class="overflow-hidden bg-[rgb(0,105,255)] text-white rounded lg:rounded-3xl lg:my-28 my-12 grid lg:grid-cols-3 grid-cols-1">
            <div class="content lg:w-2/3 pl-12 pt-6 lg:col-span-2">
              <p class="text-2xl font-bold">Member perks</p>
              <p class="py-4">
                Receive exclusive benefits from our perk partners. Exclusive
                discounts, access to beta products, and mentorship and
                support.
              </p>
            </div>

            <div class="img col-span-1 hidden lg:block">
              <img class="w-full h-40 object-cover" src="~/assets/img/img2.png" alt="" />
            </div>
          </div>
        </div>

        <div class="community text-center">
          <p class="text-4xl font-bold">A thriving community</p>
          <p class="text-gray-600 py-4 lg:w-3/5 mx-auto">
            Join, learn, and share with more than 2,000 organizations using
            the Hatch program to help build and scale companies and deliver
            innovative projects that are changing the world.
          </p>

          <p class="text-blue-500 font-bold">
            Apply to the Hatch Program Now
          </p>
        </div>

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
const { $api } = useNuxtApp()
useHead({
  title: 'MY APP | Home',
})

const data = await $api.get('hello')

console.log(data);
</script>
<style lang="">
  
</style>
  