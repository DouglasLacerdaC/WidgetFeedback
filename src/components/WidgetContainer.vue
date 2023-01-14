<script>

import StepIdeasFeedback from './StepIdeasFeedback.vue'
import StepMessageFeedback from './StepMessageFeedback.vue'

import { mapMutations, mapState } from 'vuex'

export default {
    components: {
        StepIdeasFeedback,
        StepMessageFeedback,
    },
    data() {
        return {
            stepActive: 'StepIdeasFeedback',
            comeBack: true,
            modalIsOpen: false
        }
    },
    computed: {
        ...mapState(['typeChosenUser']),
        stepFeedback() {
            this.comeBack = !this.comeBack

            if (this.typeChosenUser !== '') return this.stepActive = 'StepMessageFeedback'
            return this.stepActive = 'StepIdeasFeedback'

        },
    },
    methods: {
        ...mapMutations(['CHANGE_TYPE_FEEDBACK']),
        comeBackHome() {
            this.CHANGE_TYPE_FEEDBACK('')
        },
    }
}

</script>

<template>

    <div class="fixed bottom-7 right-7">

        <div class="relative">
            <button @click="modalIsOpen = !modalIsOpen"
                class="bg-rose-300 mt-3 py-2 px-10 rounded-sm text-white font-medium text-sm hover:scale-95 transition">
                Deixe um feedback
            </button>

            <Transition>

                <div v-if="modalIsOpen" class="w-80 bg-zinc-800 rounded-lg absolute -bottom-1 -right-1">

                    <div class="flex justify-between items-center py-2 px-5">
                        <button @click="comeBackHome" v-if="comeBack">
                            <span class="text-zinc-600 text-3xl leading-none hover:text-white transition">
                                &#8592
                            </span>
                        </button>
                        <h4 class="grow font-medium text-center text-rose-300 text-sm">Área de feedback</h4>
                        <button @click="modalIsOpen = !modalIsOpen">
                            <span class="text-zinc-600 text-3xl leading-none hover:text-white transition">
                                &times;
                            </span>
                        </button>
                    </div>
                    <component :is="stepFeedback"></component>
                </div>

            </Transition>

        </div>

    </div>

</template>

<style scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>