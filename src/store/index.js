import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            listTypesFeedback: [
                {
                    name: 'Problema',
                    img: {
                        src: 'problem.png',
                        alt: 'Imagem para feedback de problema'
                    },
                    placeholder: 'Reporte um problema...',
                    titleWidget: ''
                },
                {
                    name: 'Ideia',
                    img: {
                        src: 'idea.png',
                        alt: 'Imagem para feedback de ideia'
                    },
                    placeholder: 'Nos digue uma ideia...',
                    titleWidget: ''
                },
                {
                    name: 'Outro',
                    img: {
                        src: 'other.png',
                        alt: 'Imagem para feedback de outro'
                    },
                    placeholder: 'Qual seria o seu feedback...',
                    titleWidget: ''
                },
            ],
            typeChosenUser: '',
            feedbackUser: {
                type: '',
                message: ''
            },
        }
    },
    mutations: {
        CHANGE_TYPE_FEEDBACK(state, payload) {
            state.typeChosenUser = payload
        }
    }
})