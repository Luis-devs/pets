<template>
    <v-row justify="center" class="row-columna">
        <v-card elevation="0" rounded="0" class="z-i-999">
            <v-card-title style="height: 160px;">
                <v-row style="height: 100%;">
                    <v-col cols="2">
                        <v-btn
                            class="ma-2"
                            icon
                            color="#FAD04A!important"
                            @click="cerrarDialogo">
                            <v-icon>mdi-arrow-left-circle-outline</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="10" class="pl-0">
                        <v-img class="r-1 img-fluid mx-auto" src="@/assets/images/productos/ringo.png" lazy-src="@/assets/images/productos/ringo.png" height="150px" width="150px"></v-img>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-text class="mt-5">
                <v-container>
                    <v-row align="center">
                        <v-col
                            cols="3"
                            sm="11"
                            md="3" class="pr-0 pl-1">
                            <label class="fs-22 mb-0 text-dark text-adamina pb-0"><strong>Nombre</strong></label>
                        </v-col>
                        <v-col
                            cols="9"
                            sm="11"
                            md="9">
                            <div class="bg-azul rounded-1">
                                <p class="mb-0 text-default px-1 py-2 font-adamina l-h-1">Alimento Seco Para Perro</p>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col
                            cols="3"
                            sm="11"
                            md="3" class="pr-0 pl-1">
                            <label class="fs-22 mb-0 text-dark text-adamina pb-0"><strong>Marca</strong></label>
                        </v-col>
                        <v-col
                            cols="9"
                            sm="11"
                            md="9">
                            <div class="bg-azul rounded-1">
                                <p class="mb-0 text-default px-1 py-2 font-adamina l-h-1">Ringo</p>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col
                            cols="3"
                            sm="11"
                            md="3" class="pl-1 pr-0">
                            <label class="fs-22 mb-0 text-dark text-adamina pb-0"><strong>Tamaño</strong></label>
                        </v-col>
                        <v-col cols="9">
                            <v-row class="" no-gutters align="center">
                                <v-col cols="3">
                                    <div class="bg-azul rounded-1">
                                        <p class="mb-0 text-default px-1 py-2 font-adamina l-h-1">2kg</p>
                                    </div>
                                </v-col>
                                <v-col cols="9" class="d-flex align-items-center">
                                    <v-col cols="4" class="text-right">
                                        <span class="font-adamina fs-22 text-dark">$</span>
                                    </v-col>
                                    <v-col cols="8" class="pr-0 bg-azul mb-0 text-default l-h-1 rounded-1">
                                        <span class="font-timmana text-dark">
                                            <strong>$9.900</strong>
                                        </span>
                                    </v-col>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center" class="mb-1">
                        <v-col
                            cols="4"
                            sm="4"
                            md="4" class="pl-6 mr-2">
                            <label class="fs-22 mb-0 text-dark pl-2 ml-2 text-adamina pb-0"><strong>Cantidad</strong></label>
                        </v-col>
                        <v-col cols="4" class="text-default l-h-1">
                            <span class="px-4 py-3 bg-azul rounded-1 font-timmana text-dark">
                                <strong>1</strong>
                            </span>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center" class="mt-6">
                        <v-col cols="12" class="bg-azul rounded-1 pl-1">
                            <v-col cols="12">
                                <p class="font-adamina text-default mb-0 text-comentario">Descripción</p>
                            </v-col>
                            <v-col cols="12" class="pr-1">
                                <p class="mb-0 text-default font-adamina l-h-1 text-comentario">
                                    Ringo - Croquetas, satisface las necesidades nutricionales de los perros adultos. Es un alimento apto para perros de todas las razas, especialmente aquellos dedicados a las tareas del campo, ya que es una buena fuente de energía.
                                </p>
                            </v-col>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center" class="mt-6">
                        <v-col cols="12" class="bg-azul rounded-1 pl-1">
                            <v-col cols="12">
                                <p class="font-adamina text-default mb-0 text-comentario">Características</p>
                            </v-col>
                            <v-col cols="12" class="pr-1">
                                <p class="mb-0 text-default font-adamina l-h-1 text-comentario">
                                    Ringo - Croquetas, suministra proteínas a perros adultos de todas las razas, especial para perros de campo con alta actividad física, sus ingredientes ayuda a mejorar la digestión de tu mascota. Proteína mínimo 24%
                                </p>
                                <ul class="text-default font-adamina text-comentario">
                                    <li class="mb-1">Grasa mínimo 7%</li>
                                    <li class="mb-1">Fibra máximo 5%</li>
                                    <li class="mb-1">Cenizas máximo 10%</li>
                                    <li>Húmedad máximo 12%</li>
                                </ul>
                            </v-col>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center" class="mt-6">
                        <v-col cols="12" class="bg-azul rounded-1 pl-1">
                            <v-col cols="12">
                                <p class="font-adamina text-default mb-0 text-comentario">Modo de uso</p>
                            </v-col>
                            <v-col cols="12">
                                <ul class="text-default font-adamina text-comentario">
                                    <li class="mb-1">Determina la cantidad adecuada según las recomendaciones de RINGO o tu veterinario.</li>
                                    <li class="mb-1">Utiliza un recipiente limpio para las croquetas.</li>
                                    <li class="mb-1">Mide la cantidad necesaria y colócala en el recipiente.</li>
                                    <li class="mb-1">Establece horarios regulares de alimentación.</li>
                                    <li class="mb-1">Asegúrate de que tu perro tenga agua fresca disponible en todo momento.</li>
                                    <li class="mb-1">Supervisa a tu perro mientras come.</li>
                                    <li>Recuerda consultar con tu veterinario para obtener pautas específicas para tu perro.</li>
                                </ul>
                            </v-col>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center" class="mt-6">
                        <v-col cols="12" class="bg-azul rounded-1 pl-1">
                            <v-col cols="12">
                                <p class="font-adamina text-default mb-0 text-comentario">Calificaciones</p>
                            </v-col>
                            <v-col cols="12">
                                <v-row align="center">
                                    <v-col cols="5" class="pr-0">
                                        <p class="mb-0 text-default font-adamina l-h-1 text-comentario">Sebastian</p>
                                    </v-col>
                                    <v-col cols="7" class="px-1">
                                        <v-btn icon color="var(--bg-estrella)">
                                            <v-icon>mdi-star</v-icon>
                                        </v-btn>
                                        <v-btn icon color="var(--bg-estrella)">
                                            <v-icon>mdi-star</v-icon>
                                        </v-btn>
                                        <v-btn icon color="var(--bg-estrella)">
                                            <v-icon>mdi-star</v-icon>
                                        </v-btn>
                                        <v-btn icon color="var(--bg-estrella)">
                                            <v-icon>mdi-star</v-icon>
                                        </v-btn>
                                        <v-btn icon color="var(--bg-estrella)">
                                            <v-icon>mdi-star-half-full</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <p class="mb-0 text-default font-adamina l-h-1 text-comentario">
                                    Estoy muy impresionado con las croquetas para perros de esta aplicación. Mi perrito las encuentra irresistibles y su pelaje luce más brillante y saludable.
                                </p>
                            </v-col>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-row>
</template>
<script>

export default {
    props: { verDescripcionP: { type: Boolean, default: true } },
    data: () => ({
        dialog: false,
        datos: {
            nombre: null,
            celular: null,
            ciudad: null,
            direccion: null,
            correo: null,
            contrasena: null
        },
    }),
    methods: {
        cerrarDialogo() {
            this.$router.push('/dashboard/resultado');
            console.log('cerrando dialog');
            this.$emit('cerrar');
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