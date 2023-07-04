<template>
    <v-app id="inspire">
        <Header @handrawer="actualiza()" @mostrarCarrito="verCarrito" @full="fullVista" />
        <Sidebar :drawer="drawerD" @cerrarDrawer="cerrarDrawer" @full="fullVista" />
        <v-main>
            <v-container class="px-0 py-0">
                <v-row no-gutters height="100%">
                    <v-col cols="12">
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <v-footer class="z-i-9999"
            padless
            fixed
            app height="61px">
            <v-card
                width="100%" height="100%"
                color="var(--bs-yellow)">
                <v-card-text>
                    <v-row justify="space-around">
                        <v-btn
                            v-for="(icon, index)  in  icons"
                            :key="index"
                            icon class="mx-3" @click="() => { if (index == 1) { fullVista({ comp: 'favorito' }) } }">
                            <v-icon v-if="icon.type == 'icon'" size="40px" color="#000" class="icon-black">
                                {{ icon.res }}
                            </v-icon>
                            <v-img v-else-if="icon.type == 'image'" :src="icon.res" :lazy-src="icon.res" height="40px" width="40px" class="img-fluid"></v-img>
                        </v-btn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-footer>
        <SearchBox :verBuscar="vBuscar" @cerrarFullB="cerrarF" @busqueda="verBusqueda" />
        <Favoritos :verFavorito="vFavorito" @cerrarFull="cerrarF" @mostrarCarrito="verCarrito" />
        <Carrito :verCarrito="vCarrito" @cerrarCarrito="cerrarF" />
    </v-app>
</template>

<script>
import Favoritos from '../components/core/Favoritos.vue';
import Header from '../components/core/Header.vue';
import Sidebar from '../components/core/Sidebar.vue';
import SearchBox from '../components/core/SearchBox.vue';
import Carrito from '../components/core/Carrito.vue';
export default {
    components: { Header, Sidebar, Favoritos, SearchBox, Carrito },
    data: () => ({
        vBuscar: false,
        vFavorito: false,
        vCarrito: false,
        icons: [
            { type: 'image', res: require('@/assets/images/footer/corona.png') },
            { type: 'icon', res: 'mdi-heart' },
            { type: 'image', res: require('@/assets/images/footer/huella.png') },
            { type: 'image', res: require('@/assets/images/footer/paseador.png') },
        ],
        drawerD: false,

    }),
    methods: {
        actualiza() {
            console.log("actualizado");
            this.drawerD = true;
        },
        cerrarDrawer(ruta) {
            if (ruta) {
                this.$router.push(ruta);
            }
            this.drawerD = false;
        },
        fullVista(datos) {
            if (datos.comp == "buscar") {
                this.vBuscar = true;
                this.vFavorito = false;
                this.drawerD = false;
            }
            else if (datos.comp == "favorito") {
                this.vFavorito = true;
                this.vBuscar = false;
                this.drawerD = false;
            }
            else if (datos.comp == "resultado") {
                this.vFavorito = false;
                this.vBuscar = false;
                this.drawerD = false;
            }
            //$route.push(datos.r);
        },
        cerrarF(comp) {
            console.log(comp);
            switch (comp) {
                case 'b':
                    this.drawerD = true;
                    this.vBuscar = false;
                    break;
                case 'f':
                    this.drawerD = true;
                    this.vFavorito = false;
                    break;
                case 'resultado':
                    this.drawerD = false;
                    this.vBuscar = false;
                    this.vFavorito = false;
                    break;
                case 'carrito':
                    this.drawerD = false;
                    this.vBuscar = false;
                    this.vFavorito = false;
                    this.vCarrito = false;
                    break;
                default:
                    break;
            }
            console.log(this.vBuscar);
        },
        verBusqueda(prod) {
            console.log(prod);
            this.drawerD = false;
            this.vBuscar = false;
            this.vFavorito = false;
            this.$router.push('/dashboard/resultado')
        },
        verCarrito() {
            this.drawerD = false;
            this.vCarrito = true;
        }
    },
    mounted() {
        this.drawerD = false;
    },
}
</script>

<style>
.completo>.v-input__control>.v-text-field__details {
    display: none !important;
}

.completo>.v-input__control>.v-input__slot {
    margin: 0 !important;
    height: 100%;
}

.completo>.v-input__control {
    height: 100%;
}

.completo>.v-input__control>.v-input__slot>.v-text-field__slot {
    height: 100% !important;

}

.completo>.v-input__control>.v-input__slot>.v-text-field__slot>input {
    text-indent: 37%;
    padding-top: 0 !important;
}

.input-head.v-text-field--solo>.v-input__control>.v-input__slot {
    border-radius: 56px !important;
}

.icon-black {
    color: #000 !important;
}

.text-default {
    text-transform: initial;
}

.v-btn--icon.v-size--default .v-icon,
.v-btn--fab.v-size--default .v-icon {
    height: 38px !important;
    width: 38px !important;
    font-size: 38px !important;
}

.input-white.v-text-field--solo>.v-input__control>.v-input__slot {
    background-color: #FFF !important;
    border-radius: 12px;
}

.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot {
    box-shadow: none !important;
}

.v-text-field.v-text-field--solo .v-input__control {
    height: 48px !important;
}
</style>