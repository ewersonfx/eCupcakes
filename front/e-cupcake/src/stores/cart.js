import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useCartStore = defineStore('cart', ()=> {    
    const cartItems = reactive([]);

    const CountItems = computed(()=>{ 
        let sumField = 0;
        if (cartItems.length > 0) cartItems.map(x => sumField += x.qtd)
        return sumField;
    })

    const Subtotal = computed(()=>{ 
        let sumField = 0;
        if (cartItems.length > 0) cartItems.map(x => sumField += (x.qtd * x.price))
        return sumField;
    })

    async function itemExists(id){
        return cartItems.find(x=>x.id==id);
    }  

    async function addItem(item) {        
        let prodItem = await itemExists(item.id);

        if (prodItem == null)
        {            
            cartItems.push({ ...item, qtd: 1 });
        } 
        else 
        {
            prodItem.qtd += 1;
        }

        await commitLocal();
    }

    async function removeItem(index){    
        console.log('id to delete: ' + index);        
        cartItems.splice(index,1);
        await commitLocal();
    }

    async function commitLocal() {
        localStorage.setItem('CART', JSON.stringify(cartItems))
    }

    async function init() { await loadFromLocal(); }

    async function loadFromLocal() {        
        
        cartItems.slice(0, cartItems.length);

        let data = localStorage.getItem('CART');
        if (data==null) return;

        let itms = JSON.parse(data);

        cartItems.push(...itms);
    }    

    async function clear(){
        localStorage.clear();
        cartItems.clear();
    }

    return { cartItems, CountItems, Subtotal, addItem, removeItem, init, clear }
})