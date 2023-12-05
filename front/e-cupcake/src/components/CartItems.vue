<script setup>
    
    import { useCartStore } from '@/stores/cart';
    import { onMounted } from 'vue';

    const props = defineProps({
        showDeleteItemButton: { type: Boolean, required: false, default: true },
        showInCheckout: { type: Boolean, required: false, default: false }
    })

    const cartStore = useCartStore();

    function handleDeleteCartItem(id){
        cartStore.removeItem(id);
    }

    onMounted(()=>{
        
    })

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="trash" viewBox="0 0 16 16">        
            <path fill-rule="evenodd" d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>        
        </symbol>
    </svg>
    

        <div v-if="cartStore.CountItems==0" class="d-block text-center">
            <div class="fs-3">O carrinho está vazio!</div>
            <router-link to="/" class="btn btn-outline-primary mt-3">Ir para lista de produtos</router-link>
        </div>
        <!-- {'col-lg-4': props.showInCheckout },{'col-lg-11': !props.showInCheckout },  -->
        <div v-if="cartStore.CountItems>0" :class="['col-md-5', (props.showInCheckout ? 'col-lg-4' : 'col-lg-11'), 'order-md-last']">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Meu carrinho</span>
            <span class="badge bg-primary rounded-pill">{{ cartStore.CountItems }}</span>
            </h4>
            <ul class="list-group mb-3">
                
                <li v-for="(prod, index) in cartStore.cartItems" :key="index" class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                        <h6 class="my-0">{{ prod.productName }}</h6>
                        <span class="text-body-secondary mx-2">{{ prod.qtd }} x R$ {{ prod.price.toFixed(2).replace(',','').replace('.',',') }}</span>                        
                    </div>                    
                    <div>
                        <span class="text-body-secondary mx-2 fw-medium">R$ {{ (prod.qtd * prod.price).toFixed(2).replace(',','').replace('.',',') }}</span>
                        
                        <a v-if="props.showDeleteItemButton" class="btn btn-sm btn-danger" @click="handleDeleteCartItem(index)">
                            <svg fill="white" width="16" height="16"><use xlink:href="#trash"/></svg>
                        </a>
                    </div>
                </li>
                
                <li class="list-group-item d-flex justify-content-between bg-body-tertiary d-none">
                    <div class="text-success">
                    <h6 class="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                    </div>
                    <span class="text-success">− R$ 5,00</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <span>Total à pagar</span>
                    <strong>R$ {{ cartStore.Subtotal.toFixed(2).replace(',','').replace('.',',') }}</strong>
                </li>
            </ul>

            <div class="card p-2">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Código promocional">
                    <button type="submit" class="btn btn-secondary">Resgatar</button>                    
                </div>                
            </div>

            <!-- <div class="d-block text-center mt-3">
                <router-link to="/checkout" class="btn btn-primary d-block">Finalizar compra</router-link>
                <router-link to="/" class="btn btn-outline-primary d-block mt-2">Continuar comprando</router-link>
            </div> -->
        </div>    
</template>