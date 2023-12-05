import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useCartStore = defineStore('cart', ()=> {

    const cartItems = reactive([]);

    const CountItems = computed(()=>{ return cartItems.length })

    function addItem(item) {
        cartItems.push(item);
    }

    function removeItem(item){
        //cartItems.slice(item);
        return 0;
    }

    return { cartItems, addItem }
})