<script setup>
    import { defineProps, onMounted } from 'vue';    
    import { useCartStore } from '@/stores/cart.js'    

    import router from '@/router'   


    const emit = defineEmits(['buyClick']);

    const props = defineProps({
        id: { type: Number, required: false, default: 0 },
        productName: { type: String, required: false, default: 'Product1 ' },
        description: { type: String, required: false, default: 'The very best of all products.'},        
        price: { type: Number, required: false, default: 0 },
        priceOld: { type: Number, required: false, default: 0 }        
    });  

    const cartStore = useCartStore();    

    onMounted(() => {
        
    })

    async function buyItem(){
        await cartStore.addItem(props);
        router.push('/cart');
    }

    async function addItem(){
        await cartStore.addItem(props);
    }    

</script>


<template>

    <div class="col">
        <div class="card h-100">
            <img src="../assets/noimage_product.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h6 class="card-title">{{ props.productName }}</h6>
                <p class="card-text">
                    {{ props.description }}
                </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fw-bold text-primary fs-4">R$ {{ props.price.toFixed(2).replace(',','').replace('.',',') }}</li>                
            </ul>
            <div class="d-grid mx-2 my-3">
                <a @click="buyItem"  class="btn btn-primary mb-2">Comprar</a>                
                <a @click="addItem" class="btn btn-outline-primary">Adicionar ao carrinho</a>                
            </div>
        </div>
    </div>

</template>

<style scoped>
.card {
    border: none;
}

</style>