<template>
    <v-row justify="center">
        <v-dialog
            v-model="verLogin"
            persistent
            fullscreen scrollable class="diag">
            <v-card height="100%" width="100%">
                <v-img
                    height="100%"
                    width="100%"
                    src="@/assets/images/fondo-sesion2.png" lazy-src="@/assets/images/fondo-sesion2.png" class="img-fluid">
                    <v-card-title>
                        <div class="w-100">
                            <v-btn
                                class="ma-2 mb-2"
                                icon
                                color="#FAD04A!important"
                                @click="cerrarDialogoLogin">
                                <v-icon>mdi-arrow-left-circle-outline</v-icon>
                            </v-btn>
                        </div>
                    </v-card-title>
                    <v-card-text class="mt-6 pt-5">
                        <v-container>
                            <v-row>
                                <v-col cols="11">
                                    <v-text-field
                                        type="email"
                                        label="Correo electrónico"
                                        class="input-white"
                                        solo v-model="datos.correo"></v-text-field>
                                </v-col>
                                <v-col
                                    cols="11"
                                    sm="11">
                                    <v-text-field class="input-white" type="password" solo label="Contraseña" v-model="datos.contrasena">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="row-columna">
                                <div class="my-3">
                                    <span>O</span>
                                </div>
                                <div class="google">
                                    <v-btn
                                        elevation="3"
                                        rounded
                                        color="white"
                                        class="px-1" @click="iniciar">
                                        <span>Continuar con Google</span>
                                        <v-img src="@/assets/images/google.png" lazy-src="@/assets/images/google.png" class="img-fluid img-google"></v-img>
                                    </v-btn>
                                </div>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions class="row-columna">
                        <v-btn
                            elevation="3"
                            rounded
                            class="btn-pet"
                            dark @click="iniciar">
                            Ingresar
                        </v-btn>
                    </v-card-actions>
                </v-img>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>

export default {
    props: ['verLogin'],
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
        cerrarDialogoLogin() {
            this.$emit('cerrarLogin');
        },
        iniciar() {
            this.$router.push('/dashboard/welcome');
        },
    }
}
</script>
<style>
/* .theme--light.v-text-field--solo>.v-input__control>.v-input__slot {
    background-color: #FFF !important;
} */
.input-white.v-text-field--solo>.v-input__control>.v-input__slot {
    background-color: #FFF !important;
}
</style>