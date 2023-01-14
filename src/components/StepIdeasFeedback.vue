<script>

import CardOptions from './CardOptions.vue';
import { store } from '../store/index'

export default {
    name: 'StepIdeasFeedback',
    components: {
        CardOptions
    },
    computed: {
        typesFeedback() {
            return store.state.listTypesFeedback
        }
    }
}

</script>

<template>
    <div class="grid grid-cols-3 gap-2 rounded-lg px-5 pb-4">

        <card-options 
            v-for="(typeFeedback, currentType) in typesFeedback" 
            :type="typeFeedback" 
            :currentTypeIndex="currentType"
        />
        
    </div>
</template>

<style scoped>
</style>