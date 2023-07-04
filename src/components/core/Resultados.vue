<template>
    <div height="100%">
        <v-card class="z-i-999" max-width="100%" height="100%" elevation="0" rounded="0">
            <v-card elevation="3">
                <v-row class="py-2 px-2" align="center" no-gutters>
                    <p class="text-gray mb-0">2 Resultados</p>
                </v-row>
            </v-card>
            <v-container>
                <v-row class="mt-2" no-gutters>
                    <v-col cols="4" class="px-2 py-1" @click="verDescripcion">
                        <v-img class="r-1" src="@/assets/images/productos/ringo.png" lazy-src="@/assets/images/productos/ringo.png" height="100%" width="100%"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-row no-gutters justify="space-between">
                            <v-col cols="9" class="px-0 py-0">
                                <p class="font-adamina">Alimento seco para perro RINGO 2kg</p>
                            </v-col>
                            <v-col cols="3" class="px-0 py-0">
                                <v-btn icon>
                                    <v-icon>mdi-heart-outline</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>

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
                        <v-row no-gutters justify="end" class="mt-3">
                            <v-btn height="20px"
                                tile
                                color="var(--bg-orange-25)" elevation="0" class="text-default">
                                <span class="font-adamina">Agregar al carrito</span>
                                <v-icon right>
                                    mdi-cart-outline
                                </v-icon>
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="mt-2" no-gutters>
                    <v-col cols="4" class="px-2 py-1">
                        <v-img class="r-1" src="@/assets/images/productos/ringo.png" lazy-src="@/assets/images/productos/ringo.png" height="100%" width="100%"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-row no-gutters justify="space-between">
                            <v-col cols="9" class="px-0 py-0">
                                <p class="font-adamina">Alimento seco para perro RINGO 2kg</p>
                            </v-col>
                            <v-col cols="3" class="px-0 py-0">
                                <v-btn icon>
                                    <v-icon>mdi-heart-outline</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>

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
                        <v-row no-gutters justify="end" class="mt-3">
                            <v-btn height="20px"
                                tile
                                color="var(--bg-orange-25)" elevation="0" class="text-default">
                                <span class="font-adamina">Agregar al carrito</span>
                                <v-icon right>
                                    mdi-cart-outline
                                </v-icon>
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-container>
        </v-card>
    </div>
</template>
<script>

export default {
    data: () => ({
        cantidad: 1,
        toggle_none: null,
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
        verDescripcion() {
            this.$router.push('/dashboard/descripcion');
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

.text-default {
    text-transform: initial;
}

.op-1 {
    opacity: 0.7;
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

.z-i-999 {
    z-index: 99;
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