import axios from 'axios'
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null
    }),

    actions: {
        async registration(email: string, phone: string, password: string){
            const user = await axios.post('http://localhost:9100/api/users/registration', {
                email: email,
                phone:phone,
                password: password
            })
        },
        // async login(email: string, password: string) {
        //     const user = await axios.post()
        // },
        async logout() {

        },
    }
});