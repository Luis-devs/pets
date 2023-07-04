<template>
    <v-navigation-drawer v-model="drawer" app class="fondo-sidebar" width="320px">
        <!-- <vuescroll :ops="ops"> -->
        <v-row class="row-columna">
            <div class="sidebar-header px-4 py-4">
                <v-col cols="12" class="mb-0 pb-0">
                    <v-row no-gutters>
                        <div>
                            <v-img src="@/assets/images/mascota/mascota.png" lazy-src="@/assets/images/mascota/mascota.png"></v-img>
                        </div>
                        <div>
                            <label>
                                <strong>Nombre de tu mascota</strong>
                            </label>
                        </div>
                    </v-row>
                    <div>
                        <label>
                            <strong>Tipo de mascota</strong>
                        </label>
                    </div>
                </v-col>
                <v-col cols="12" class="mt-0 pt-0">
                    <v-text-field
                        height="22px"
                        color="gray"
                        type="text"
                        label="Usuario"
                        solo class="mb-0 input-head" readonly disabled></v-text-field>
                </v-col>
            </div>
            <div class="app-sidebar-content">
                <!--<SidebarMenu :menu="menu" @item-click="onItemClick" /> -->
                <v-list>
                    <div v-for="(item, index) in menu"
                        :key="index">
                        <v-list-item link @click="navegar(item.href, item.lugar)" v-if="index != menu.length - 2">
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider class="linea" v-else></v-divider>
                    </div>
                </v-list>
            </div>
        </v-row>
        <!--</vuescroll> -->
    </v-navigation-drawer>
</template>

<script>
//import { SidebarMenu } from 'vue-sidebar-menu'
//import vuescroll from "vuescroll";


export default {
    components: {
        //SidebarMenu,
        //vuescroll
    },

    props: ['drawer'],
    data: () => ({

        ops: {
            scrollPanel: {
                initialScrollY: false,
                initialScrollX: false,
                scrollingX: false,
                scrollingY: true,
                speed: 300,
                easing: undefined,
                verticalNativeBarPos: 'right'
            },
            rail: {
                background: 'rgba(0, 0, 0, 0.158)',
                opacity: 1,
                size: '10px',
                specifyBorderRadius: false,
                gutterOfEnds: null,
                gutterOfSide: '2px',
                keepShow: false
            },
            bar: {
                showDelay: 500,
                onlyShowBarOnScroll: true,
                keepShow: false,
                background: '#0378a677',
                opacity: 1,
                hoverStyle: false,
                specifyBorderRadius: false,
                minSize: 0,
                size: '9px',
                disable: false
            },
        },

        links: [
            ['mdi-inbox-arrow-down', 'Inbox'],
            ['mdi-send', 'Send'],
            ['mdi-delete', 'Trash'],
            ['mdi-alert-octagon', 'Spam'],
        ],
        menu: [
            { title: 'Inicio', icon: 'mdi mdi-home-outline', href: '/dashboard/welcome', lugar: 0 },
            { title: 'Buscar', icon: 'mdi mdi-magnify', href: '/dashboard/buscar', lugar: 'f' },
            { title: 'Notificaciones', icon: 'mdi mdi-bell-outline' },
            { title: 'Mis compras', icon: 'mdi mdi-shopping-outline' },
            { title: 'Favoritos', icon: 'mdi mdi-heart-outline', href: '/dashboard/favoritos', lugar: 'f' },
            { title: 'Promociones', icon: 'mdi mdi-tag-multiple-outline rotate-90' },
            { title: 'Historial', icon: 'mdi mdi-clock-time-three-outline' },
            { title: 'Soporte', icon: 'mdi mdi-help-circle-outline' }
        ],
    }),
    methods: {
        navegar(ruta, lugar) {
            let actR = this.$route.path;
            switch (lugar) {
                case 0:
                    if (actR != '/dashboard/welcome') {
                        this.$emit('cerrarDrawer', ruta);
                        //this.$router.push(ruta);
                    }
                    else {
                        this.$emit('cerrarDrawer');
                    }
                    break;
                case 'f':
                    if (ruta == "/dashboard/buscar") {
                        this.$emit('full', { r: ruta, comp: 'buscar' });
                    }
                    else if (ruta == "/dashboard/favoritos") {
                        this.$emit('full', { r: ruta, comp: 'favorito' });
                    }
                    break;
                default:
                    break;
            }
        },
        onItemClick(event, item) {
            console.log(event, item);
            this.$emit('sidebar');
        }
    },
    mounted() {
        //this.menu = this.$store.state.userData.menu
    },
}
</script>
<style scoped>
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
    /* margin: 4px 12px 2px 20px; */
    margin-left: 20px;
    margin-right: 12px;
}

.sidebar-header {
    width: 100%;
    background-color: var(--bs-yellow);
}

.fondo-sidebar {
    /* background-image:url("../../assets/images/sidebar/abstract4.jpg");*/
    /* background-image: url("../../assets/fondosidebar.png");
    background-size: 100% 100%;
    background-attachment: fixed; */
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: 9999;
}

.letra {
    color: #FFFFFF;
    font-size: 20px;
    font-family: "Mystery Quest";
    font-weight: 400;

}
</style>