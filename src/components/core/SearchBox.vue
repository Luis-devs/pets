<template>
    <v-dialog
        v-model="verBuscar"
        persistent
        scrollable
        fullscreen class="diag">
        <v-card
            max-width="100%" height="100%">
            <v-card>
                <v-row class="bg-yellow h-32px" no-gutters>
                </v-row>
                <v-row no-gutters>
                    <v-btn
                        class="ma-2 mb-2 btn-gray"
                        icon
                        color="gray" @click="cerrarBuscar">
                        <v-icon>mdi mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-text-field
                        type="text"
                        placeholder="Buscar en PetPals"
                        class="input-white pt-0 sin-linea"></v-text-field>
                </v-row>
            </v-card>
            <v-container>
                <v-row dense align="center" class="text-gray">
                    <v-col cols="1">
                        <v-btn
                            class="btn-gray"
                            icon
                            color="gray">
                            <v-icon>mdi-clock-time-three-outline</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="9" class="my-0 mx-0 text-left">
                        <p class="mb-0 ml-2 pl-1">Ringo 5kg</p>
                    </v-col>
                    <v-col cols="2">
                        <v-btn
                            class="btn-gray"
                            icon
                            color="gray" @click="verProductos('Ringo 5kg')">
                            <v-icon>mdi-arrow-top-left</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="mt-2 h-150px" no-gutters>
                    <v-col cols="4" class="px-2 py-1">
                        <v-img class="r-1" src="@/assets/images/productos/ringo.png" lazy-src="@/assets/images/productos/ringo.png" height="100%" width="100%"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <p class="font-adamina">Alimento seco para perro RINGO 2kg</p>
                        <span class="font-timmana fs-19">
                            <strong>$9.900</strong>
                        </span>
                        <div>
                            <span class="font-adamina mt-3 bg-orange">
                                <strong>Más vendido</strong>
                            </span>
                        </div>
                        <v-row class="mt-1" align="center">
                            <v-col cols="8" height="30px" class="pr-1">
                                <v-btn-toggle v-model="toggle_none" width="100%" height="100%">
                                    <v-btn height="30px" @click="cantidad++">
                                        <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                    <v-text-field height="30px" class="pt-0 sin-linea text-center mt-0 bg-gray completo" type="number" min="1" v-model="cantidad" :value="cantidad" placeholder="1"></v-text-field>
                                    <v-btn height="30px" @click="() => { if (cantidad > 1) cantidad--; }">
                                        <v-icon>mdi-minus</v-icon>
                                    </v-btn>
                                </v-btn-toggle>
                            </v-col>
                            <span class="font-adamina">Cantidad</span>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>
<script>

export default {
    props: { verBuscar: { type: Boolean, default: true } },
    data: () => ({
        cantidad: 1,
        toggle_none: null,
        //verBuscar: true,
        items: [
            {
                color: '#1F7087',
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: 'Supermodel',
                artist: 'Foster the People',
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
            },
        ],
    }),
    methods: {
         cerrarBuscar() {
             console.log('cerr b');
             //this.$router.replace('/dashboard/welcome');
             this.$emit('cerrarFullB', 'b');
             //this.$router.push('/dashboard/welcome');
         },
         verProductos(prod) {
             console.log('viendo p');
             this.$emit('busqueda', prod);
             //this.$router.push('/dashboard/resultado')
         }
    },
    watch: {
        cantidad: function () {
            this.cantidad = this.cantidad < 1 ? 1 : this.cantidad;
        }
    }
}
</script>
<style>
@font-face {
    font-family: 'Timmana';
    src: url('@/assets/fonts/Timmana/Timmana-Regular.ttf');
}

.completo>.v-input__control>.v-text-field__details {
    display: none !important;
}

.completo>.v-input__control>.v-input__slot {
    margin: 0 !important;
    height: 100%;
}

.completo>.v-input__control {
    height: 100%;
}

.completo>.v-input__control>.v-input__slot>.v-text-field__slot {
    height: 100% !important;

}

.completo>.v-input__control>.v-input__slot>.v-text-field__slot>input {
    text-indent: 37%;
    padding-top: 0 !important;
}

.bg-gray {
    background-color: #D9D9D9;
    height: auto;
}

.font-timmana {
    font-family: 'Timmana', sans-serif;
}

.r-1 {
    border-radius: 10px;
}

.fs-19 {
    font-size: 19px;
}

.bg-orange {
    background-color: var(--bg-orange);
}

.btn-gray,
.text-gray {
    color: gray;
}

.bg-yellow {
    background-color: var(--bs-yellow);
}

.h-32px {
    height: 25px !important;
    width: 100%;
}

.h-150px {
    height: 150px !important;
}

.sin-linea>.v-input__control>.v-input__slot::before,
.sin-linea>.v-input__control>.v-input__slot::after {
    display: none !important;
}

.sin-linea input {
    padding-bottom: 0 !important;
    padding-top: 12px !important;
}
</style>