<template>
    <v-container class="body-component">
        <v-row class="row-columna align-items-start">
            <v-row no-gutters>
                <v-btn
                    class="ma-2"
                    icon
                    color="#FAD04A!important"
                    @click="volverInicio">
                    <v-icon>mdi-arrow-left-circle-outline</v-icon>
                </v-btn>
            </v-row>
            <v-row no-gutters justify="space-between" class="px-2 pb-15">
                <v-col v-for="(prod, index) in servicioF" :key="prod.des" cols="5" class="mb-1" style="max-width: 221px; width: 220px;">
                    <v-img @click="verDetalle(prod.des)" :src="prod.res" :class="{ 'img-fluid': true, 'mb-4': index > servicioF.length - 3 }" :lazy-src="prod.res"></v-img>
                </v-col>
            </v-row>
        </v-row>
        <ServiciosDetalles :verDetalle="vDetalle" :mostrar="vMostrar" />
    </v-container>
</template>
<script>
import ServiciosDetalles from './ServiciosDetalles.vue';
export default {
    components: { ServiciosDetalles },
    data: () => ({
        vDetalle: true,
        vMostrar: 'veterinario',
        servicioF: [{ des: 'Veterinario', res: require('@/assets/images/productos/servicios/veterinario.png') },
        { des: 'Spa', res: require('@/assets/images/productos/servicios/spa.png') },
        { des: 'Peluqueria', res: require('@/assets/images/productos/servicios/peluqueria.png') },
        { des: 'Paseador', res: require('@/assets/images/productos/servicios/paseador.png') },
        { des: 'Entrenador', res: require('@/assets/images/productos/servicios/entrenador.png') },
        { des: 'Lovepet', res: require('@/assets/images/productos/servicios/lovepet.png') },
        ],
    }),
    methods: {
        volverInicio() {
            this.$router.push('/dashboard/welcome');
        },
        verDetalle(ver) {
            this.vMostrar = ver.toLowerCase();
            localStorage.tabD = this.vMostrar;
            this.vDetalle = false;
        }
    },
}
</script>
<style></style>