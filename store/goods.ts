import axios from 'axios'
import { defineStore } from 'pinia';
import type { CatalogTypes } from "~/types/catalog";


interface State {
    goodsList:  CatalogTypes[]
}
export const useGoodStore = defineStore('good', {
    state: function (){
        return {
            goodsList: [] as CatalogTypes[],
        }
    },
    getters: {
        getState : (state) => state.goodsList
    },
    actions: {
        async allGoods(){
            try{
                const goods = await axios.get('http://localhost:9100/api/goods')
                    .then((res) => {
                        console.log(res.data)
                        this.goodsList.push(res.data)
                    })
            }catch (err){
                console.log(err)
            }
        },
        async addGood(name:string, category:string, article:string, manufacturer:string,warranty:string, description: string, price: number, image:any, certificate:any, passport:any){
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
                await axios.post("http://localhost:9100/api/goods/add", data,{
                    headers: {
                        'Content-Type': 'application/octate-stream'
                    }
                })
                    .then(res => res.data)
            }catch(err){
                console.log(err);
            }
        }
    }
});