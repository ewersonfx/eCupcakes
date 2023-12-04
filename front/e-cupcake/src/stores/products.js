import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', () => {
  
    const products = reactive([])  

    const filter = computed(()=>{
        return products.filter(x=>x.id);
    })
    
    function append(items) {
        products.push(...items);
    }

    function load(){
        const prods = [{
            id: 1,
            productImage: "~/img/products/cupcakes.png",
            productName: "Tradicional Sabor chocolate",            
            description: "Cupcake artesanal feito com ingredientes de primeira quálidade.",
            price: 15.50,
        },
        {
            id: 2,
            productImage: "~/img/products/cupcakes2.png",
            productName: "Tradicional Sabor Morango",            
            description: "Cupcake artesanal feito com ingredientes de primeira quálidade.",
            price: 16.80,
        },
        {
            id: 3,
            productImage: "~/img/products/cupcakes.png",
            productName: "Tradicional Sabor balnilha",            
            description: "Cupcake artesanal feito com ingredientes de primeira quálidade.",
            price: 15.50,
        },
        {
            id: 4,
            productImage: "~/img/products/cupcakes2.png",
            productName: "Tradicional Sabor Morango",            
            description: "Cupcake artesanal feito com ingredientes de primeira quálidade.",
            price: 14.30,
        }];

        append(prods);
    }

    return { products, load, filter }
})
