import axios from 'axios'
import { defineStore } from 'pinia';

interface State {
    role: string,
    auth: boolean,
}


export const useUserStore = defineStore('user', {
    state: (): State => {
        return {
            role: " ",
            auth: false,
        }
    },
    getters: {
        getRole:(state) => state.role,
        getAuth: (state) => state.auth
    },
    actions: {
        async registration(email: string, phone: string, password: string, name:string, surname:string,patronymics:string) {
            try {
                await axios.post('http://localhost:9100/api/users/registration', {
                    email: email,
                    phone: phone,
                    password: password,
                    name: name,
                    surname: surname,
                    patronymics: patronymics,
                })
                    .then((payload) => {
                        localStorage.setItem('token', payload.data.token)
                        console.log(payload.data.id)
                        axios.post('http://localhost:9100/api/cart/create',{
                            id: payload.data.id
                        })
                    })
            } catch (err) {
                console.log(err)
            }
        },

        async login(email: string, password: string) {
                try{
                    await axios.post('http://localhost:9100/api/users/login', {
                        email: email,
                        password: password
                    })
                        .then((req) => {
                            alert(req.data.text)
                            localStorage.clear()
                            localStorage.setItem('token', req.data.token)
                            this.$patch((state) => {
                                state.role = req.data.role
                                state.auth = true
                            })
                        })
                }catch(err){
                    console.log(err)
                }
        },

        async logout() {
            localStorage.clear()
            this.$state.auth = false
            this.$state.role = ''
        },

        async checkAuth() {
            try{
                const myToken = localStorage.getItem('token')
                await axios.post('http://localhost:9100/api/users/auth', {
                    token: myToken
                })
                    .then((req) => {
                        console.log(req.data.data.id)
                        if(req.data.data.id){
                            this.$patch((state) => {
                                state.role = req.data.data.role
                                state.auth = true
                            })
                        }
                    })
            }catch (err){
                console.log(err)
            }
        },
    }
});