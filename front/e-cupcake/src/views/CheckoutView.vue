<script setup>
    import CartItems from '@/components/CartItems.vue';
    import { onMounted } from 'vue';


    onMounted(()=>{        

    })

    function onSubmit(event){     
        alert(ValidateForm(event));
        //return ValidateForm(event);        
    }

    function ValidateForm(event){
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
        
        //form.addEventListener('submit', event => {
            
            if (!form.checkValidity()) {
                //return false;
               event.preventDefault();
               event.stopPropagation();
            }

            form.classList.add('was-validated');

        //}, false)
        })
    }

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
      <symbol id="check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </symbol>
    </svg>    

    
    <div class="container">
    <main>
        <div class="py-5 text-center">
        <!-- <img class="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
        <h2>Checkout</h2>
        <p class="lead">Informe os dados corretamente antes de clicar em concluir a venda.</p>
        </div>

        <div class="row g-5">                        
            
            <CartItems :showDeleteItemButton="false" :showInCheckout="true" />

            <div class="col-md-7 col-lg-8">
                <h4 class="mb-3">Endereço de faturamento</h4>
                <form @submit.prevent="onSubmit" class="needs-validation" novalidate>
                    <div class="row g-3">
                        <div class="col-sm-12">
                        <label for="fullName" class="form-label">Nome completo</label>
                        <input type="text" class="form-control" id="fullName" placeholder="" value="" required>
                        <div class="invalid-feedback">
                            Informar nome completo!
                        </div>
                        </div>            

                        <!-- <div class="col-12">
                        <label for="username" class="form-label">Username</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input type="text" class="form-control" id="username" placeholder="Username" required>
                        <div class="invalid-feedback">
                            Your username is required.
                            </div>
                        </div>
                        </div> -->

                        <div class="col-12">
                        <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                        <input type="email" class="form-control" id="email" placeholder="voce@exemplo.com">
                        <div class="invalid-feedback">
                            Informar email válido para receber atualizações e tatus dos pedidos.
                        </div>
                        </div>

                        <div class="col-10">
                            <label for="address" class="form-label">Endereço</label>
                            <input type="text" class="form-control" id="address" placeholder="Rua Floriano Peixoto, 9999" required>
                            <div class="invalid-feedback">
                                Informe seu endereço para entrega.
                            </div>
                        </div>

                        <div class="col-2">
                            <label for="number" class="form-label">Número</label>
                            <input type="text" class="form-control" id="number" placeholder="Ex: 9999" required>
                            <div class="invalid-feedback">
                                Informe seu endereço para entrega.
                            </div>
                        </div>

                        <div class="col-12">
                        <label for="neighborHood" class="form-label">Bairro</label>
                        <input type="text" class="form-control" id="neighborHood" placeholder="Nome do Bairro">
                        </div>

                        <div class="col-md-7">
                        <label for="city" class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="city" placeholder="Nome da Cidade">
                        </div>

                        <div class="col-md-2">
                        <label for="state" class="form-label">UF</label>
                        <select class="form-select" id="state" required>
                            <option value="">Escolher...</option>
                            <option>PB</option>
                            <option>PB</option>
                        </select>
                        <div class="invalid-feedback">
                            Please provide a valid state.
                        </div>
                        </div>

                        <div class="col-md-3">
                        <label for="zip" class="form-label">CEP</label>
                        <input type="text" class="form-control" id="zip" placeholder="" required>
                        <div class="invalid-feedback">
                            Zip code required.
                        </div>
                        </div>
                    </div>

                    <hr class="my-4">

                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="same-address">
                        <label class="form-check-label" for="same-address">Endereço de entrega é o mesmo do de cobrança</label>
                    </div>

                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="save-info">
                        <label class="form-check-label" for="save-info">Salve essas informações para próxima vêz</label>
                    </div>

                    <hr class="my-4">

                    <h4 class="mb-3">Pagamento</h4>

                    <div class="my-3">
                        <div class="form-check">
                        <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
                        <label class="form-check-label" for="credit">Cartão</label>
                        </div>
                        <div class="form-check">
                        <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
                        <label class="form-check-label" for="debit">Pix</label>
                        </div>                    
                    </div>

                    <div class="row gy-3">
                        <div class="col-md-6">
                        <label for="cc-name" class="form-label">Nome proprietário</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required>
                        <small class="text-body-secondary">Nome completo conforme escrito no cartão.</small>
                        <div class="invalid-feedback">
                            Nome do escrito no cartão é requerido.
                        </div>
                        </div>

                        <div class="col-md-6">
                        <label for="cc-number" class="form-label">Número do cartão</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required>
                        <div class="invalid-feedback">
                            Número do cartão de crédito é requerido!
                        </div>
                        </div>

                        <div class="col-md-3">
                        <label for="cc-expiration" class="form-label">Expiração</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                        <div class="invalid-feedback">
                            Data de expiração do cartão é requerida!
                        </div>
                        </div>

                        <div class="col-md-3">
                        <label for="cc-cvv" class="form-label">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                        <div class="invalid-feedback">
                            Código de segurança requerido!
                        </div>
                        </div>
                    </div>

                    <hr class="my-4">

                    <button class="w-100 btn btn-primary btn-lg" type="submit">Processar pagamento</button>
                </form>
            </div>        
        </div>
    </main>

    <footer class="my-5 pt-5 text-body-secondary text-center text-small">
        <p class="mb-1">&copy; 2017–2023 Company Name</p>
        <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Privacy</a></li>
        <li class="list-inline-item"><a href="#">Terms</a></li>
        <li class="list-inline-item"><a href="#">Support</a></li>
        </ul>
    </footer>
    </div>
</template>