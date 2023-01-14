<script>
import { mapMutations, mapState } from 'vuex';


export default {
    data() {
        return {
            message: '',
            loading: false
        }
    },
    computed: {
        ...mapState(['listTypesFeedback', 'typeChosenUser']),
        typeFeedback() {
            return this.listTypesFeedback[this.typeChosenUser]
        }
    },
    methods: {
        ...mapMutations(['CHANGE_TYPE_FEEDBACK']),
        newFeedback() {

            this.loading = !this.loading
            
            const feedback = {
                type: this.typeFeedback.name,
                message: this.message

            }

            localStorage.setItem('feedback', JSON.stringify(feedback))


            setTimeout(() => {
                this.loading = !this.loading
                this.CHANGE_TYPE_FEEDBACK('')
                alert('Olha o localstorage')
            }, 1000)
            
        }
    }
}

</script>

<template>
    
    <div v-if="loading" class="flex flex-col justify-center items-center p-8">
        <div class="lds-roller"><div></div><div></div><div></div></div>
        <span class="text-white">Salvando seu feedback...</span>
    </div>

    <div v-if="!loading" class="px-5 pb-4">
        <form>

            <textarea 
                class="w-full bg-zinc-700 rounded-lg outline-none border-2 border-transparent focus:border-rose-300 transition text-white p-2 text-sm"
                :placeholder="typeFeedback.placeholder"
                v-model="message"
            ></textarea>

            <button class="w-full bg-rose-300 mt-3 py-2 rounded-sm text-white font-medium text-sm hover:scale-95 transition"
                @click.prevent="newFeedback"
            >
                🚀 Enviar feedback
            </button>
        </form>
    </div>
</template>

<style scoped>

.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>