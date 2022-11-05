<template>
    <div class="flex xl:flex-row flex-col xl:space-x-3">
        <div class="flex xl:w-1/2 w-full h-18 mt-2">
            <img class="mr-1 h-20" src="../assets/images/circle.svg" alt="" />
            <div class="px-2 py-2 bg-[#091E2E] uppercase font-bold text-lg flex-1">
                <span>Apy</span>
                <br/>
                <span class="text-scent2">25.31%</span>
            </div>
        </div>

        <div class="flex xl:w-1/2 w-full h-18 mt-2">
            <img class="mr-1 h-20" src="../assets/images/arrow.svg" alt="" />
            <div class="px-2 py-2 bg-[#091E2E] font-bold text-lg flex-1">
                <span>Max Drawdown</span>
                <br/>
                <span class="text-scent2">5.76%</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Stats',
}
</script>