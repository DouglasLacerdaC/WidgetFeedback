<script>

import CardOptions from './CardOptions.vue';
import { mapState } from 'vuex';

export default {
    name: 'StepIdeasFeedback',
    components: {
        CardOptions
    },
    computed: {
        ...mapState(['listTypesFeedback'])
    }
}

</script>

<template>
    <div class="grid grid-cols-3 gap-2 rounded-lg px-5 pb-4">

        <card-options v-for="(typeFeedback, currentType) in listTypesFeedback" :type="typeFeedback"
            :currentTypeIndex="currentType" />

    </div>
</template>

<style scoped>

</style>