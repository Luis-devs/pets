<template>
    <v-app id="inspire">
        <v-expand-x-transition>
            <v-overlay :value="overlay" class="loader" absolute>
                <v-row justify="center" class="row-columna abajo" no-gutters>
                    <p class="text-center text-adamina">"Amigos y aliados"</p>
                    <h2 class="text-center text-lemon px-2">PETS PALS</h2>
                    <span class="text-center italic text-default">Cargando...</span>
                </v-row>
                <v-img src="@/assets/images/fondo-loader.png" class="img-loader" lazy-src="@/assets/images/fondo-loader.png"></v-img>
            </v-overlay>
        </v-expand-x-transition>

        <div class="app-container">
            <router-view />
        </div>
    </v-app>
</template>
<script>
const default_layout = "default";

export default {
    data: () => ({
        overlay: true,
    }),
    methods: {
    },
    computed: {
        layout() {
            return (this.$route.meta.layout || default_layout) + '-layout';
        }
    },
    updated() {
        this.overlay = false;
    },
}
</script>

<style lang="scss">
/* .v-app {
    overflow-x: hidden;
} */

:root {
    --bs-yellow: #FAD04A;
    --bg-orange: #FFA800;
    --bg-orange-f: #FF9900;
    --bg-orange-37: rgba(255, 168, 0, 0.37);
    --bg-orange-25: rgba(255, 168, 0, 0.25);
    --bg-azul: rgba(12, 182, 171, 0.2);
    --bg-azul-14: rgba(12, 182, 171, 0.14);
    --bg-estrella: #0CB6AB;
    --bg-gray: rgba(217, 217, 217, 0.15);
    --bg-gray-60: rgba(217, 217, 217, 0.6);
    --bg-gray-65: rgba(0, 0, 0, 0.65);
    --bg-gray-100: rgba(217, 217, 217, 1);
    --bg-verde: #48C834;
}

.btn-pet {
    background-color: #FAD04A !important;
}

.bg-azul-14 {
    background-color: var(--bg-azul-14);
}

.cerrado {
    background-color: var(--bg-orange-f);
}

.fs-14px {
    font-size: 14px;
}

.el-elevation {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12) !important;
}

.bg-gray {
    background-color: var(--bg-gray-100);
}

.bg-white>.v-input__control>.v-input__slot,
.theme--light.v-text-field--solo.bg-white>.v-input__control>.v-input__slot {
    background-color: #FFFFFF !important;
}

.select-sinM>.v-input__control>.v-input__slot {
    margin-bottom: 0 !important;
}

.vh-100P {
    height: 100% !important;
}

.theme--light.v-text-field--solo>.v-input__control>.v-input__slot {
    background-color: #D9D9D9 !important;
    border-radius: 12px;
}

.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot {
    box-shadow: none !important;
}

.bg-azul {
    background-color: var(--bg-azul);
}

.text-black {
    color: #000000;
}

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

.z-i-9999 {
    z-index: 9999 !important;
}

.z-i-999 {
    z-index: 999;
}

.mdi.rotate-90::before {
    rotate: 90deg;
}

.linea {
    margin-bottom: 1px;
    margin-top: 1px;
}

.mdi.linea {
    width: 100% !important;
    background-color: #000000;
    line-height: 1px;
    height: 1px !important;
}

.mdi.linea::before {
    height: 1px;
    line-height: 1px;
    opacity: 0;
    width: 100%;
}

.v-sidebar-menu>.vsm-list>.vsm-item:nth-child(9) {
    height: 1px !important;
    padding: 0 !important;
}

.v-sidebar-menu .vsm-link {
    color: #000 !important;
}

.app-sidebar.text-darker .v-sidebar-menu .vsm-item.active-item>.vsm-link,
.app-sidebar.text-lighter .v-sidebar-menu .vsm-item.active-item>.vsm-link,
.v-sidebar-menu .vsm-link:hover,
.v-sidebar-menu .vsm-item.active-item>.vsm-link {
    background-color: var(--bs-yellow) !important;
}

@font-face {
    font-family: 'Lemon';
    src: url('assets/fonts/Lemon-Regular.ttf');
}

@font-face {
    font-family: 'Adamina';
    src: url('assets/fonts/Adamina/Adamina-Regular.ttf');
}

.text-lemon {
    font-family: 'Lemon', cursive;
    color: #000 !important;
    font-size: 58px;
    width: 100%;
    position: relative;
    top: -10px;
}

.font-lemon {
    font-family: 'Lemon', cursive;
}

.font-adamina {
    font-family: 'Adamina', serif;
}

.text-adamina {
    font-family: 'Adamina', serif;
    font-size: 34px;
    padding-bottom: 20px;
    margin-bottom: 8px;
}

.text-default {
    font-size: 23px;
    font-weight: bold;
}

.loader,
.v-overlay__content,
.img-loader {
    width: 100%;
    height: 100%;
}

.loader>.v-overlay__content>.img-loader {
    padding: 0 !important;
}

.row-columna {
    flex-direction: column;
    align-items: center;
}

.v-overlay__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end !important;
}

.abajo {
    width: 100%;
    z-index: 999999;
    position: absolute;
    color: #000 !important;
}

.fa {
    font-weight: 100 !important;
}

@import "assets/base.scss";
@import "scss/_dashboard.scss";

.app-sidebar-content {
    width: 100%;
}

.v-sidebar-menu {
    padding-left: 0.9rem;
}

/* .v-sidebar-menu .vsm-header {
    color: rgb(255, 255, 255);
}

.v-sidebar-menu .vsm-title {
    color: #FFFFFF;
}

.v-sidebar-menu .vsm-icon {
    color: #FFFFFF;
}

.v-sidebar-menu .vsm-link:hover {
    background-color: #ffffff70;

}


.v-sidebar-menu .vsm-item.active-item>.vsm-link {
    background-color: #ffffff70;
} */

.btn-app-bar {
    border-radius: 50px;
    padding: 6px;
    background-color: #a299a3c5;
}

.btn-app-bar:hover {
    border-radius: 50px;
    padding: 6px;
    background-color: #a299a3 !important;
}



/*    .body-component{
    background-image: url("./assets/fondo.png");
    background-size: cover;
    background-repeat: no-repeat;
    height:100vh;
    background-attachment: fixed;
    overflow: scroll;
  } */


.button-text {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}
</style>