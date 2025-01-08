import axios from 'axios'
import { defineStore } from 'pinia';
import { type CatalogTypes } from "~/types/CatalogTypes";

interface State {
    oneGood: {},
    goodsList: CatalogTypes[]
}

export const useGoodStore = defineStore('good', {
    state: (): State => {
        return {
            oneGood: {},
            goodsList: [] as CatalogTypes[]
        }
    },
    getters: {
        getState : (state) => state.goodsList,
        getOne:state => state.oneGood
    },
    actions: {
        async allGoods(){
            try{
                await axios.get('http://localhost:9100/api/goods')
                    .then((res) => {
                        console.log(res.data)
                        this.goodsList.push(res.data)
                    })
            }catch(err){
                console.log(err)
            }
        },
        async addGood(name:string, category:string, article:string,total_quantity:number, manufacturer:string,warranty:string, description: string, price: number, image:any, certificate:any, passport:any){
            try{
                const data = new FormData();
                console.log(image.files[0].name)
                data.append('image', image.files[0]);
                data.append('certificate', certificate.files[0]);
                data.append('passport', passport.files[0]);
                data.append('name', name);
                data.append('category', category);
                data.append('article', article);
                data.append('manufacturer', manufacturer);
                data.append('warranty', warranty);
                data.append('description', description);
                data.append('price', JSON.stringify(price));
                data.append('total_quantity', JSON.stringify(total_quantity));
                await axios.post("http://localhost:9100/api/goods/add", data,{
                    headers: {
                        'Content-Type': 'application/octet-stream'
                    }
                })
                    .then(res => res.data)
                navigateTo('/')
            }catch(err){
                console.log(err);
            }
        },
        async getOneGood(id:number){
            try{
                await axios.post('http://localhost:9100/api/goods/one',{
                    id: id
                })
                    .then((good) => this.oneGood = good.data)

            }catch(err){
                console.log(err)
            }
        }
    }
});