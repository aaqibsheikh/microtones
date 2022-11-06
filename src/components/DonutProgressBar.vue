<template>
    <div class="mt-10 w-full h-full">
        <div class="relative w-full h-full flex items-center justify-center">
            <img src="@/assets/images/side1.svg" alt="" class="absolute top-0 left-0" />
            <img src="@/assets/images/arrow-up.svg" alt="" class="absolute top-10 right-20" />
            <img src="@/assets/images/side2.svg" alt="" class="absolute bottom-0 right-0" />
            <img src="@/assets/images/ring.svg" alt="" class="" />
            <img src="@/assets/images/deco-donut.svg" alt="" class="absolute" />
            <div class="absolute">
                <circle-counter size="21rem" dash-spacing="0.00" stroke-width="4" active-width="4"
                    dash-count="100" active-count="30" stroke="#333333" active-stroke="#FFFFFF" text="">
                </circle-counter>
            </div>
            <div class="absolute">
                <circle-counter size="29rem" dash-spacing="0.02" stroke-width="20" active-width="20" dash-count="3"
                    active-count="1" active-stroke="#17FFA6" text="">
                </circle-counter>
            </div>
        </div>
    </div>
</template>

<script>
import CircleCounter from '@/components/CircleCounter.vue'
export default {
    name: 'DonutProgressBar',
    components: {
        CircleCounter
    }
}
</script>