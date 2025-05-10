import axios from 'axios'
import { defineStore } from 'pinia';
import type { User } from '@/types/user';


export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            name: '',
            surname: '',
            patronymics: '',
            id: 0,
            cart_id: 0,
            email: '',
            phone: '',
            auth: false,
            role: '',
        } as User,
        auth: false,
    }),
    getters: {
        getAuth: (state) => state.auth,
        getRole: (state) => state.user.role,
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
                                state.auth = true
                                state.user.role = req.data.role
                            })
                        })
                }catch(err){
                    console.log(err)
                }
        },

        async logout() {
            localStorage.clear()
            this.$state.auth = false
            this.$state.user.role = ''
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
                                state.user.name = req.data.data.name
                                state.user.surname = req.data.data.surname
                                state.user.patronymics = req.data.data.patronymics
                                state.user.id = req.data.data.id
                                state.user.cart_id = req.data.data.id
                                state.user.email = req.data.data.email
                                state.user.phone = req.data.data.phone
                                state.user.role = req.data.data.role
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