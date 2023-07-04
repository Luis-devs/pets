<template>
    <v-container class="body-component">
        <v-row class="row-columna">
            <v-sheet
                class="mx-auto"
                elevation="8"
                max-width="100%">
                <v-slide-group
                    v-model="model"
                    class="pa-4">
                    <v-slide-item
                        v-for="n in slide"
                        :key="n">
                        <v-card
                            color="grey lighten-1"
                            class="ma-4"
                            height="200"
                            width="100">
                            <v-img :src="n" :lazy-src="n" height="100%"></v-img>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-sheet>
            <div>
                <v-btn
                    class="ma-2 text-dark btn-default"
                    color="#FFF" elevation="3">
                    Detalles de envío
                </v-btn>
            </div>
            <div class="text-center d-flex" width="100%">
                <v-row no-gutters class="row-columna mx-2" justify="space-around" v-for="(of, index) in ofrece" :key="index" height="100px" width="100px">
                    <v-btn
                        fab
                        dark
                        x-large
                        color="#FFF" class="py-4 px-2" height="100px" width="100px" @click="cargarOfrece(of.href)">
                        <v-img :src="of.res" :lazy-src="of.res" class="img-fluid"></v-img>
                    </v-btn>
                    <span class="text-dark pt-2">{{ of.des }} </span>
                </v-row>
            </div>

        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        model: null,
        slide: [require('@/assets/images/slide/slide1.png'), require('@/assets/images/slide/slide2.png'), require('@/assets/images/slide/slide3.png')],
        ofrece: [{ des: 'Productos', res: require('@/assets/images/botones/producto.png'), href: '/dashboard/productos' },
        { des: 'Servicios', res: require('@/assets/images/botones/servicio.png'), href: '/dashboard/servicios' },
        { des: 'Atención', res: require('@/assets/images/botones/atencion.png'), href: '/dashboard/atencion' }
        ],
    }),
    methods: {
        cargarOfrece(ruta) {
            this.$router.push(ruta);
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