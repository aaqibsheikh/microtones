<template>
  <div class="home xl:px-10 xl:pt-8 px-6 pt-6">
    <Logo />
    <div class="flex xl:flex-row flex-col xl:space-x-20 space-x-0">
      <div class="flex flex-col xl:w-1/2 w-full">
        <Heading text="PORTFOLIO RATIO OVERVIEW" />
        <Stats />
        <DonutText />
      </div>
      <div class="flex flex-col xl:w-1/2 w-full">
        <Heading text="PORTFOLIO DETAILS" />
        <Card />
      </div>

    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue"
import Heading from "@/components/Heading.vue"
import Stats from "@/components/Stats.vue"
import Card from "@/components/Card.vue"
import DonutText from "@/components/DonutText.vue"
export default {
  name: 'HomeView',
  components: {
    Logo,
    Heading,
    Stats,
    Card,
    DonutText
  }
}
</script>
