<script>

import { mapMutations, mapState } from 'vuex';
import { store } from '../store/index'

    export default {
        name: String,
        props: {
            type: {
                name: String,
                img: {
                    src: String,
                    alt: String
                },
                placeholder: String,
                titleWidget: String
            },
            currentTypeIndex: Number
        },
        methods: {
            ...mapMutations(['CHANGE_TYPE_FEEDBACK']),
            nextStep() {
                this.CHANGE_TYPE_FEEDBACK(this.currentTypeIndex)
            }
        }
    }
</script>

<template>
    <div 
        class="flex flex-col items-center gap-2 grow bg-zinc-700 border-2 border-transparent rounded-lg p-3 hover:border-rose-300 transition" 
        role="button"
        @click="nextStep"
    >
        <img :src="`src/assets/imgs/${type.img.src}`" :alt="type.img.alt" width="30">
        <span class="text-sm font-medium text-white">{{ type.name }}</span>
    </div>
</template>