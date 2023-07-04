<template>
    <v-row justify="center" no-gutters :class="{ 'd-none': ver }">
        <v-col cols="12">
            <v-btn
                class="ma-2"
                icon
                color="#FAD04A!important"
                @click="volverEntrenadores">
                <v-icon>mdi-arrow-left-circle-outline</v-icon>
            </v-btn>
        </v-col>
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-img class="img-fluid rounded-lg" :src="imgH" :lazy-src="imgH"></v-img>
            </v-col>
            <v-col cols="1">
                <v-btn icon>
                    <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="11">
                <p class="font-adamina mb-5">{{ nombre }}</p>
                <p class="font-adamina pl-6">{{ descExp }}</p>
                <p class="font-adamina mb-5">Experiencia: {{ exp }}</p>
                <v-col cols="12" class="bg-azul-14 rounded-lg">
                    <p class="font-adamina">{{ sobreEl }}</p>
                </v-col>
                <v-col cols="12">
                    <p class="font-adamina mb-0">Calificaciones</p>
                    <v-col cols="12" class="mt-0 pt-0">
                        <v-btn v-for="i  in  estrellasC" :key="i + 'c'" icon color="var(--bg-estrella)">
                            <v-icon>mdi-star</v-icon>
                        </v-btn>
                        <v-btn v-for="i  in  estrellasM" :key="i + 'm'" icon color="var(--bg-estrella)">
                            <v-icon>mdi-star-half-full</v-icon>
                        </v-btn>
                    </v-col>
                </v-col>
            </v-col>
        </v-row>
    </v-row>
</template>
<script>
export default {
    props: { ver: { type: Boolean, default: false }, datos: { type: Object, default: () => ({}) } },
    data: () => ({
        nombre: '',
        descExp: '',
        exp: '',
        sobreEl: '',
        estrellasC: 0,
        estrellasM: 0,
        imgH: require('@/assets/images/productos/servicios/entrenador/hombre.png'),

    }),
    methods: {
        volverEntrenadores() {
            this.$router.push('/dashboard/serviciosDetalle');
        }
    },
    mounted() {
        if (localStorage.entrenador && !this.ver) {
            let tJs = JSON.parse(localStorage.entrenador);
            this.imgH = tJs.img;
            this.nombre = tJs.nombre;
            this.descExp = tJs.descExp;
            this.exp = tJs.exp;
            this.sobreEl = tJs.sobreEl;
            this.estrellasC = tJs.estrellasC;
            this.estrellasM = tJs.estrellasM;
            this.datos.nombre = tJs.nombre;
            this.datos.descExp = tJs.descExp;
            this.datos.exp = tJs.exp;
            this.datos.sobreEl = tJs.sobreEl;
            this.datos.estrellasC = tJs.estrellasC;
            this.datos.estrellasM = tJs.estrellasM;
        }
    },
}
</script>