<template>
    <v-row justify="center">
        <v-dialog
            v-model="verCarrito"
            persistent
            scrollable
            fullscreen class="diag vh-100P" width="100%" max-width="100%">
            <v-card class="pb-8"
                max-width="100%" height="100%" rounded="0">
                <v-card-title class="px-0 pt-0 el-elevation z-i-999">
                    <v-row class="bg-yellow h-32px" no-gutters>
                    </v-row>
                    <v-row no-gutters align="center">
                        <v-btn
                            class="ma-2"
                            icon
                            color="#FAD04A!important"
                            @click="cerrarCarrito">
                            <v-icon>mdi-arrow-left-circle-outline</v-icon>
                        </v-btn>
                        <p class="mb-0 text-dark text-default font-adamina">Carrito</p>
                        <v-btn
                            class="ma-2"
                            icon
                            color="#FAD04A!important">
                            <v-icon>mdi-cart-outline</v-icon>
                        </v-btn>
                    </v-row>
                </v-card-title>
                <v-card-text>
                    <v-container class="px-1 mb-3">
                        <v-row no-gutters>
                            <v-row class="mt-2 h-150px" no-gutters>
                                <v-col cols="4" class="pl-0 pr-1 py-1 vh-100P" height="100%">
                                    <v-img class="r-1" src="@/assets/images/productos/ringo.png" lazy-src="@/assets/images/productos/ringo.png" height="100%" width="100%"></v-img>
                                </v-col>
                                <v-col cols="7">
                                    <p class="font-adamina">Alimento seco para perro RINGO 2kg</p>
                                    <span class="font-timmana fs-19">
                                        <strong>$9.900</strong>
                                    </span>
                                    <div>
                                        <span class="font-adamina mt-3 bg-orange">
                                            <strong>Más vendido</strong>
                                        </span>
                                    </div>
                                    <v-row class="mt-1" align="center" no-gutters>
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
                                <v-col class="d-flex align-items-center" cols="1">
                                    <v-btn icon color="black" width="100%">
                                        <v-icon>fa-regular fa-trash-can</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row no-gutters>
                            <v-list width="100%">
                                <v-list-group
                                    v-model="activePago"
                                    no-action>
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title class="font-timmana text-dark text-default">Pago Online</v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                    <v-list-item>
                                        <v-list-item-content class="justify-space-between">
                                            <v-radio-group v-model="modoPago" v-for="(radio, index) in radioItems" :key="index">
                                                <!-- <v-col cols="6"></v-col> -->
                                                <v-radio color="var(--bs-yellow)" :value="radio.modoPago">
                                                    <template v-slot:label>
                                                        <v-img :src="radio.img" :lazy-src="radio.img"></v-img>
                                                    </template>
                                                </v-radio>
                                                <!-- <v-radio value="Duckduckgo">
                                            <template v-slot:label>
                                                <div>Definitely <strong class="primary--text">Duckduckgo</strong></div>
                                            </template>
                                        </v-radio> -->
                                            </v-radio-group>
                                            <v-row class="row-columna text-left align-items-start" no-gutters>
                                                <p class="mb-0 text-default text-black">Pago contra entrega</p>
                                                <p class="mb-0 text-default text-black">Pago 100% seguro <v-btn icon color="success">
                                                        <v-icon>fas fa-solid fa-lock</v-icon>
                                                    </v-btn>
                                                </p>
                                            </v-row>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-group>
                            </v-list>
                            <v-row no-gutters class="flex-column">
                                <v-row no-gutters class="mt-0">
                                    <v-col
                                        cols="3"
                                        sm="4" class="">
                                        <v-select
                                            :items="tipoCC"
                                            label="CC"
                                            dense height="100%"
                                            class="select-sinM"
                                            solo append-icon="fas fa-chevron-down" color="var(--bg-gray)"></v-select>
                                    </v-col>
                                    <v-col
                                        cols="9"
                                        sm="8" class="pl-2">
                                        <v-text-field type="number" min="0" solo placeholder="Número de documento" color="var(--bg-gray)"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters class="mt-2">
                                    <v-col
                                        cols="12"
                                        sm="12">
                                        <v-select
                                            :items="tipoPersona"
                                            placeholder="Tipo persona"
                                            dense height="100%"
                                            solo append-icon="fas fa-chevron-down" color="var(--bg-gray)"></v-select>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters class="mt-2">
                                    <v-col
                                        cols="12"
                                        sm="12">
                                        <v-select
                                            :items="bancos"
                                            placeholder="Seleccione su banco"
                                            dense height="100%"
                                            solo append-icon="fas fa-chevron-down" color="var(--bg-gray)"></v-select>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters class="mt-1">
                                    <p class="text-black text-default mb-0">Cupón de descuento</p>
                                    <v-col
                                        cols="8"
                                        sm="8" class="bg-gray d-flex rounded-lg align-items-center py-2 px-2">
                                        <v-text-field solo placeholder="Ingresa código" class="bg-white mr-2"></v-text-field>
                                        <v-btn color="var(--bg-estrella)" class="text-white text-default">Validar</v-btn>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters class="mt-1">
                                    <div class="bg-gray px-3 py-1 rounded-lg">
                                        <span class="text-white">TOTAL</span>
                                    </div>
                                </v-row>
                            </v-row>
                        </v-row>
                        <v-row align-content="center" justify="center">
                            <v-btn
                                elevation="3"
                                class="btn-pet text-default"
                                dark>
                                Realizar pedido
                            </v-btn>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>

export default {
    props: { verCarrito: { type: Boolean, default: true } },
    data: () => ({
        activePago: true,
        tab: null,
        modoPago: null,
        cantidad: 1,
        toggle_none: null,
        radioItems: [{ modoPago: 'tarjeta', img: require('@/assets/images/pago/tarjeta.png') }, { modoPago: 'transferencia', img: require('@/assets/images/pago/transferencia.png') }],
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
        tipoCC: ['CC', 'TI', 'Registro civil', 'Pasaporte'],
        tipoPersona: ['Persona natural', 'Persona jurídica'],
        bancos: ['Bancolombia', 'Banco Agrario', 'Banco de Bogotá', 'Banco Colpatria', 'Banco de Occidente', 'Davivienda', 'Daviplata', 'Nequi'],
    }),
    methods: {
        cerrarCarrito() {
            this.$emit('cerrarCarrito', 'carrito');
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
.v-list-item {
    min-height: 20px;
}

.v-list-item__content {
    padding-top: 4px;
    padding-bottom: 0;
}

.v-list-group>.v-list-item>.v-list-item__icon {
    color: var(--bg-gray-65) !important;
}

.v-application--is-ltr .v-list-group--no-action>.v-list-group__items>.v-list-item {
    padding-left: 30px;
}

.v-list-group>.v-list-item__content {
    padding-top: 0;
}

.v-input--selection-controls {
    margin-top: 0 !important;
}
</style>