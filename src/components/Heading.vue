<template>
    <div>
        <div class="flex uppercase mt-24">
            <img class="mr-2" src="../assets/images/target.svg" />
            <p class="font-bold text-xl">{{text}}</p>
        </div>
        <div class="border border-light-white mt-3 relative">
            <div class="absolute -top-1 left-0 border border-2 border-white w-10"></div>
            <div class="absolute -top-1 right-0 border border-2 border-scent w-4"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Heading',
  props: ['text']
}
</script>