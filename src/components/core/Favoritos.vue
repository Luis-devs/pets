<template>
    <v-dialog
        v-model="verFavorito"
        persistent
        fullscreen class="diag">
        <v-card
            max-width="100%" height="100%">
            <v-card>
                <v-row class="bg-yellow h-32px" no-gutters>
                </v-row>
                <v-row no-gutters align="center">
                    <v-btn
                        class="ma-2"
                        icon
                        color="#FAD04A!important"
                        @click="cerrarFavorito">
                        <v-icon>mdi-arrow-left-circle-outline</v-icon>
                    </v-btn>
                    <p class="mb-0 text-dark text-default font-adamina">Favoritos</p>
                    <v-btn
                        class="ma-2"
                        icon
                        color="#FAD04A!important">
                        <v-icon>mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-col cols="2" class="ml-auto">
                        <v-btn
                            class="ma-2"
                            icon
                            color="black" @click="irCarrito">
                            <v-icon>mdi-cart-outline</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <v-container>
                <v-row no-gutters>
                    <div class="w-370px">
                        <v-tabs
                            v-model="tab"
                            background-color="var(--bg-gray)"
                            color="black"
                            grow
                            dark>
                            <v-tab href="#productos">
                                Productos
                            </v-tab>
                            <v-tab href="#servicio" class="font-adamina">
                                Servicios
                            </v-tab>
                        </v-tabs>

                        <v-tabs-items touchless v-model="tab">
                            <v-tab-item value="productos">
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
                                <v-divider></v-divider>
                            </v-tab-item>
                            <v-tab-item value="servicio">
                                <p class="font-adamina text-default-text-dark">Servicios</p>
                            </v-tab-item>
                        </v-tabs-items>
                    </div>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>
<script>

export default {
    props: { verFavorito: { type: Boolean, default: true } },
    data: () => ({
        tab: null,
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
        cerrarFavorito() {
            this.$emit('cerrarFull', 'f');
        },
        irCarrito(){
            this.$emit('mostrarCarrito');
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
.w-370px {
    width: 370px;
}

.v-tab.v-tab--active {
    background-color: var(--bg-gray-60);
}

.v-tab {
    font-family: 'Adamina', serif;
    text-decoration: none !important;
    color: #000 !important;
}

.theme--dark.v-tabs .v-tab--active:hover::before,
.theme--dark.v-tabs .v-tab--active::before {
    opacity: 0 !important;
}

.v-tabs-slider-wrapper {
    display: none;
    height: 0;
    width: 0;
}
</style>