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
            <v-row no-gutters justify="space-between">
                <v-col v-for="prod in productosF" :key="prod.des" cols="5" class="mb-1" style="height: 270px; max-width: 221px; width: 220px;">
                    <v-img :src="prod.res" class="img-fluid" :lazy-src="prod.res"></v-img>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        productosF: [{ des: 'Alimentos', res: require('@/assets/images/productos/logos/alimentos.png') },
        { des: 'Accesorios', res: require('@/assets/images/productos/logos/accesorios.png') },
        { des: 'Juguetes', res: require('@/assets/images/productos/logos/juguetes.png') },
        { des: 'Higiene', res: require('@/assets/images/productos/logos/higiene.png') },
        { des: 'Medicamentos', res: require('@/assets/images/productos/logos/medicamentos.png') },
        ],
    }),
    methods: {
        volverInicio() {
            this.$router.push('/dashboard/welcome');
        }
    },
}
</script>
<style scoped>
.btn-default {
    text-transform: initial;
    border-radius: 9px;
}

.row {
    align-items: center;
    justify-content: center;
}

.img {
    height: 500px;
    width: 500px;
}

h3 {
    padding-top: 0px;
}

.logo {
    height: 100px;
    width: 400px;
    margin: 0;
    padding: 0;
}
</style>