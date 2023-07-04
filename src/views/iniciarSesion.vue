<template>
    <v-row class="row-columna text-center py-2" align-content="center" no-gutters>
        <div class="titulo py-2">
            <h1 class="text-lemon py-0 mb-0">PET PALS</h1>
            <p class="text-center mb-0">"Amigos y aliados"</p>
        </div>
        <div class="img mx-auto mt-2">
            <v-img lazy-src="@/assets/images/login.png" src="@/assets/images/login.png" class="img-fluid"></v-img>
        </div>
        <div class="btn-actions pt-6 text-dark mt-6">
            <v-btn
                elevation="3"
                rounded
                class="btn-pet"
                dark @click="login = !login">
                Iniciar sesión
            </v-btn>
            <div class="registro mt-4">
                <v-btn
                    elevation="3"
                    rounded
                    class="btn-pet"
                    dark @click="registro = !registro">
                    Regístrate
                </v-btn>
            </div>
            <div class="my-3">
                <span>O</span>
            </div>
            <div class="google">
                <v-btn
                    elevation="3"
                    rounded
                    color="gray"
                    class="px-1">
                    <span>Continuar con Google</span>
                    <v-img src="@/assets/images/google.png" lazy-src="@/assets/images/google.png" class="img-fluid img-google"></v-img>
                </v-btn>
            </div>
        </div>
        <registrar :ver="registro" @cerrar="registro = !registro" />
        <Iniciar :verLogin="login" @cerrarLogin="login = !login" />
    </v-row>
</template>
<script>
import registrar from '../components/core/Registrar';
import Iniciar from '../components/core/Iniciar.vue';
export default {
    components: { registrar, Iniciar },
    name: 'App',
    data: () => ({
        registro: false,
        login: false,
        active: 'home',
        dialog: false,
        usuario: "",
        noti: null,
        contrasena: "",
        error: false,
        msg: "",
        isBusy: false,
        prueba: 0,
        array: [],
        rolMenu: []
    }),

    methods: {

        login() {

            this.$router.push('dashboard/welcome');

        }
    },
}
</script>
<style>
.btn-actions,
.v-btn {
    color: #000 !important;
    text-transform: initial;
    width: 220px;
}

.btn-actions>* {
    width: 100%;
}

.btn-pet {
    background-color: #FAD04A !important;
}

.pet {
    font-family: lemon;
}

.titulo>p {
    color: #000;
    font-weight: 400;
    position: relative;
    top: -22px;
    font-family: 'Roboto';
}

.img {
    width: 235px !important;
    height: 234px !important;
}

.v-btn__content {
    width: 100% !important;
    height: 100% !important;
    text-transform: initial !important;
}

.google>.v-btn>.v-btn__content {
    justify-content: flex-start !important;
}

.img-google {
    right: 10px;
    position: absolute;
}
</style>