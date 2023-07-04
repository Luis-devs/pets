<template>
    <v-app-bar
        app
        elevation="8"
        relative height="120px">
        <v-app-bar-nav-icon class="btn text-dark" dark @click="procesa()"></v-app-bar-nav-icon>
        <v-toolbar-title class="mr-1">
            <v-text-field readonly type="search" ref="buscarH" @click="verBusqueda" label="Buscar" append-icon="mdi-magnify" class="input-white input-head" solo></v-text-field>
        </v-toolbar-title>
        <v-btn
            icon
            color="black" @click="verCarrito">
            <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        items: [
            { text: 'Perfil', icon: 'mdi-clock' },
            { text: 'Salir', icon: 'mdi-account' },
        ],
    }),
    methods: {
        procesa() {
            console.log("generado");
            this.$emit('handrawer');
        },
        verCarrito() {
            this.$emit('mostrarCarrito');
        },
        verBusqueda() {
            this.$refs.buscarH.blur();
            this.$emit('full', { r: '/dashboard/buscar', comp: 'buscar' });
        }
    },
}
</script>
<style lang="scss" scoped>
.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: #FAD04A;
}

.v-toolbar__title {
    width: 70%;
}



.letra {
    color: #FFFFFF;
    font-size: 30px;
    font-family: "Mystery Quest", cursive;
    font-weight: 500;
}
</style>
