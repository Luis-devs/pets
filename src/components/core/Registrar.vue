<template>
    <v-row justify="center">

        <v-dialog
            v-model="ver"
            persistent
            fullscreen>
            <v-card>
                <v-card-title>
                    <div class="w-100">
                        <v-btn
                            class="ma-2"
                            icon
                            color="#FAD04A!important"
                            @click="cerrarDialogo">
                            <v-icon>mdi-arrow-left-circle-outline</v-icon>
                        </v-btn>
                    </div>
                    <div class="w-100 text-center">
                        <h1 class="roboto">¡Regístrate!</h1>
                    </div>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                                cols="11"
                                sm="11"
                                md="11">
                                <v-text-field
                                    v-model="datos.nombre"
                                    label="Nombre"
                                    solo></v-text-field>
                            </v-col>
                            <v-col
                                cols="11"
                                sm="11"
                                md="11">
                                <v-text-field
                                    type="tel"
                                    label="Celular"
                                    solo v-model="datos.celular"></v-text-field>
                            </v-col>
                            <v-col
                                cols="11"
                                sm="11"
                                md="11">
                                <v-text-field
                                    label="Ciudad"
                                    solo v-model="datos.ciudad"></v-text-field>
                            </v-col>
                            <v-col cols="11" sm="11" md="11">
                                <v-text-field
                                    label="Dirección"
                                    solo v-model="datos.direccion"></v-text-field>
                            </v-col>
                            <v-col cols="11">
                                <v-text-field
                                    type="email"
                                    label="Correo electrónico"
                                    solo v-model="datos.correo"></v-text-field>
                            </v-col>
                            <v-col
                                cols="11"
                                sm="11">
                                <v-text-field type="password" solo label="Contraseña" v-model="datos.contrasena">
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions class="row-columna">
                    <v-btn
                        elevation="3"
                        rounded
                        class="btn-pet"
                        dark>
                        Crear cuenta
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>

export default {
    props: ['ver'],
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
            console.log('cerrando dialog');
            this.$emit('cerrar');
        }
    }
}
</script>
<style>
.roboto {
    font-family: 'Roboto';
    font-weight: bold;
}

.theme--light.v-text-field--solo>.v-input__control>.v-input__slot {
    background-color: #D9D9D9 !important;
    border-radius: 12px;
}

.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot {
    box-shadow: none !important;
}

.v-text-field.v-text-field--solo .v-input__control {
    height: 48px !important;
}

.v-btn--icon.v-size--default .v-icon,
.v-btn--fab.v-size--default .v-icon {
    height: 37px !important;
    width: 37px !important;
    font-size: 37px !important;
}
</style>