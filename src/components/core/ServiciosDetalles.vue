<template>
    <v-row justify="center" :class="{ 'row-columna': true, 'd-none': verDetalle }">
        <v-card elevation="0" rounded="0" width="100%" class="">
            <v-card-title class="pb-0 mb-1">
                <v-row style="height: 100%;">
                    <v-col cols="2">
                        <v-btn
                            class="ma-2"
                            icon
                            color="#FAD04A!important"
                            @click="irServicio">
                            <v-icon>mdi-arrow-left-circle-outline</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="10" class="pl-0" style="height: 297px;">
                        <v-img class="r-1 img-fluid mx-auto" height="297px" width="232px" :src="imgDetalle" :lazy-src="imgDetalle"></v-img>
                        <v-tabs
                            v-model="tabDetalle">
                        </v-tabs>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pt-2">
                <v-tabs-items touchless v-model="tabDetalle">
                    <v-tab-item value="veterinario">
                        <v-row v-for="(vD, index) in  veteDatos " :key="index" class="mt-2 mb-3" no-gutters>
                            <v-col cols="4" class="px-2 py-1">
                                <v-img class="r-1" :src="vD.img" :lazy-src="vD.img" height="100%" width="100%"></v-img>
                            </v-col>
                            <v-col cols="8">
                                <v-row no-gutters>
                                    <v-col cols="12" class="px-0 py-0 mb-0">
                                        <p class="font-adamina text-uppercase">{{ vD.lugar }}</p>
                                    </v-col>
                                    <v-col cols="12" class="px-0 py-0 mb-0">
                                        <span class="font-adamina">{{ vD.direccion }}</span>
                                    </v-col>
                                    <v-col cols="12" class="mt-2 mb-4 d-flex">
                                        <span :class="{ 'font-adamina py-1 px-3 mr-1 cinta': true, 'verde': vD.estado == 'Abierto', 'cerrado': vD.estado != 'Abierto' }"> {{ vD.estado }}</span>
                                        <span class="font-adamina cinta py-1 px-3">{{ vD.cierre }}</span>
                                    </v-col>
                                    <v-col cols="12" class="my-2">
                                        <v-btn v-for="i  in  vD.estrellasC" :key="i + 'c'" icon color="var(--bg-estrella)">
                                            <v-icon>mdi-star</v-icon>
                                        </v-btn>
                                        <v-btn v-for="i  in  vD.estrellasM" :key="i + 'm'" icon color="var(--bg-estrella)">
                                            <v-icon>mdi-star-half-full</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12">
                                <v-divider class="linea"></v-divider>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <v-tab-item value="spa">
                        <p class="font-adamina text-dark">Sin servicios de SPA</p>
                    </v-tab-item>
                    <v-tab-item value="peluqueria">
                        <p class="font-adamina text-dark">Sin servicios de peluqueria</p>
                    </v-tab-item>
                    <v-tab-item value="paseador">
                        <p class="font-adamina text-dark">Sin servicios de paseador</p>
                    </v-tab-item>
                    <v-tab-item value="entrenador">
                        <v-row v-for="(eD, index) in  entreDatos" :key="index" class="mt-2 mb-3" no-gutters>
                            <v-col cols="5" class="px-2 py-1">
                                <v-img class="r-1" :src="eD.img" :lazy-src="eD.img" height="100%" width="100%"></v-img>
                            </v-col>
                            <v-col cols="7">
                                <v-row no-gutters>
                                    <v-col cols="12" class="px-0 py-0 mb-0">
                                        <p class="font-adamina text-uppercase">{{ eD.nombre }}</p>
                                    </v-col>
                                    <v-col cols="12" class="px-0 py-0 mb-0">
                                        <span class="font-adamina">Experiencia: {{ eD.exp }}</span>
                                    </v-col>
                                    <v-col cols="12" class="mt-1 mb-4 pl-4">
                                        <span class="font-adamina">{{ eD.descExp }}</span>
                                    </v-col>
                                    <v-col cols="12" class="my-2">
                                        <v-btn v-for="i  in  eD.estrellasC" :key="i + 'c'" icon color="var(--bg-estrella)">
                                            <v-icon>mdi-star</v-icon>
                                        </v-btn>
                                        <v-btn v-for="i  in  eD.estrellasM" :key="i + 'm'" icon color="var(--bg-estrella)">
                                            <v-icon>mdi-star-half-full</v-icon>
                                        </v-btn>
                                        <v-btn @click="masDetalleEnt(index)" icon color="var(--bg-orange-f)">
                                            <v-icon>mdi mdi-arrow-right</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12">
                                <v-divider class="linea"></v-divider>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <v-tab-item value="lovepet"></v-tab-item>
                </v-tabs-items>
            </v-card-text>
        </v-card>
    </v-row>
</template>
<script>

export default {
    components: {},
    props: { verDetalle: { type: Boolean, default: false }, mostrar: { type: String, default: 'veterinario' } },
    data: () => ({
        vEntre: true,
        vEntreDatos: {},
        imgDetalle: require('@/assets/images/productos/servicios/veterinario.png'),
        tabDetalle: 'veterinario',
        veteDatos: [],
        spaDatos: [],
        peluDatos: [],
        paseDatos: [],
        entreDatos: [],
        loveDatos: [],
    }),
    methods: {
        irServicio() {
            this.$router.push('/dashboard/servicios');
        },
        masDetalleEnt(ent) {
            this.vEntreDatos = this.entreDatos[ent];
            let Jstr = JSON.stringify(this.entreDatos[ent]);
            localStorage.entrenador = Jstr;
            this.$router.push('/dashboard/entrenadorDetalle');
        }
    },
    watch: {
        verDetalle() {
            if (!this.verDetalle) {
                this.$router.push('/dashboard/serviciosDetalle');
            }
        }
    },
    mounted() {
        if (localStorage.tabD) {
            switch (localStorage.tabD) {
                case 'veterinario':
                    this.imgDetalle = require('@/assets/images/productos/servicios/veterinario.png');
                    this.veteDatos.push(
                        { img: require('@/assets/images/productos/servicios/veterinario/carro.png'), lugar: 'MONTERRICO', direccion: 'Cl. 40 #14-103 Montería, Córdoba', estado: 'Abierto', cierre: 'Cierra a las 18:00', estrellasC: 5, estrellasM: 0 },
                        { img: require('@/assets/images/productos/servicios/veterinario/casa.png'), lugar: 'PREMIUMVET', direccion: 'Cra. 14 #37a 03 Montería, Córdoba', estado: 'Cerrado', cierre: 'Cierra a las 12:00', estrellasC: 4, estrellasM: 1 },
                        { img: require('@/assets/images/productos/servicios/veterinario/valla.png'), lugar: 'VIDA ANIMAL', direccion: 'Carrera 1B #4336 Montería, Córdoba', estado: 'Cerrado', cierre: 'Cierra a las 12:00', estrellasC: 5, estrellasM: 0 },
                    );

                    break;
                case 'spa':
                    this.imgDetalle = require('@/assets/images/productos/servicios/spa.png');

                    break;
                case 'peluqueria':
                    this.imgDetalle = require('@/assets/images/productos/servicios/peluqueria.png');
                    break;
                case 'paseador':
                    this.imgDetalle = require('@/assets/images/productos/servicios/paseador.png');
                    break;
                case 'entrenador':
                    this.imgDetalle = require('@/assets/images/productos/servicios/entrenador.png');
                    this.entreDatos.push(
                        { imgR: '@/assets/images/productos/servicios/entrenador/hombre.png', img: require('@/assets/images/productos/servicios/entrenador/hombre.png'), nombre: 'ROBERTO PERÉZ', exp: '4 Años', descExp: 'Especialización en obediencia canina', estrellasC: 4, estrellasM: 1, sobreEl: 'Roberto Pérez es un reconocido entrenador de perros con amplia experiencia en la enseñanza de comandos de obediencia básica y avanzada. Su enfoque se centra en desarrollar una comunicación efectiva entre los perros y sus dueños, fomentando la obediencia y el comportamiento adecuado.' },
                        { imgR: '@/assets/images/productos/servicios/entrenador/mujer.png', img: require('@/assets/images/productos/servicios/entrenador/mujer.png'), nombre: 'CAROLINA GARCIA', exp: '2 Años', descExp: 'Especialización en terapia asistida por perros', estrellasC: 5, estrellasM: 0, sobreEl: '' },
                        { imgR: '@/assets/images/productos/servicios/entrenador/hombrePerro.png', img: require('@/assets/images/productos/servicios/entrenador/hombrePerro.png'), nombre: 'FRANCISCO LOPEZ', exp: '5 Años', descExp: 'Especialización en agility', estrellasC: 5, estrellasM: 0, sobreEl: '' },
                    );
                    break;
                case 'lovepet':
                    this.imgDetalle = require('@/assets/images/productos/servicios/lovepet.png');
                    break;
                default:
                    this.imgDetalle = require('@/assets/images/productos/servicios/veterinario.png');
                    break;
            }
            this.tabDetalle = localStorage.tabD;
        }
    }
}
</script>
<style>
.text-comentario {
    font-weight: 500;
    color: #000000;
    opacity: 0.9;
}

.cinta.verde {
    background-color: var(--bg-verde);
}

.cinta:not(.verde):not(.cerrado) {
    background-color: var(--bg-orange-37);
}

.rounded-1 {
    border-radius: 9px;
}

.l-h-1 {
    line-height: 1.1;
}

.fs-19 {
    font-size: 19px;
}

.fs-22 {
    font-size: 22px;
}

.fs-27 {
    font-size: 27px;
}
</style>