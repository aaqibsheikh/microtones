<template>
    <div class="flex flex-col uppercase mt-2">
        <div class="border-l border-l-3 mb-3 relative" v-for="(list, key) in 3" :key="key" @mouseover.prevent="passValueToDonut(true)" @mouseleave.prevent="passValueToDonut(false)">
            <img src="../assets/images/l-shape.svg" alt="" class="absolute top-0 right-0" />
            <div class="hover:bg-[#262626] hover:rounded-tr-lg cursor-pointer pt-2 pb-2">
                <div class="bg-[#262626] mx-2 p-4 mb-2">
                    <div class="flex flex-wrap items-center justify-between">
                        <div class="flex items-center space-x-2 text-scent2 font-bold text-lg">
                            <div class="border border-scent2  px-2">
                                01
                            </div>
                            <p>現貨策略</p>
                        </div>
                        <div class="">$973.23K</div>
                    </div>
                    <div class="flex flex-wrap items-center justify-between xl:space-x-40 space-x-10 mt-3.5">
                        <div class="flex-1 bg-[#4A4D50]">
                            <div class="tones-progress-bar" style="width: 45%"></div>
                        </div>

                        <div class="text-tint-white normal-case">Ratio 37.21%</div>
                    </div>
                </div>

                <div class="bg-[#262626] mx-2 p-4">
                    <div class="flex items-center justify-between xl:space-x-10 space-x-5">
                        <img src="../assets/images/yellow.svg" alt="" />
                        <div class="flex flex-col">
                            <p class="font-bold text-lg normal-case">Earn</p>
                            <p class="font-bold xl:text-3xl text-lg">$33,261.11</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="font-bold text-lg">Apy</p>
                            <p class="font-bold xl:text-3xl text-lg text-[#18FE4B]">17.23%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    data() {
        return {
            hover: false,
        };
    },
    methods: {
        passValueToDonut(data) {
            this.$emit('showData', data)
        }
    },
}
</script>