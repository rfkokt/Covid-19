<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="background-nav posisi">
            <div class="container">
                <b-navbar-brand to="/"><img src="./assets/corona.png" width="100" alt=""></b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto text-uppercase text-white">
                        <b-nav-item to="/contact">Contact |</b-nav-item>
                        <b-nav-item to="/about">About |</b-nav-item>
                        <b-nav-item to="/about">Donasi</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
        <div>
            <router-view/>
        </div>
        <div>
            <div>
                <v-card class="turun mx-auto text-center footerr">
                    <br>
                    <v-avatar
                            class="ma-3 mr-2"
                            size="20"
                            tile
                    >
                        <a href="https://www.facebook.com/ikkiieee/" target="_blank">
                        <img src="./assets/facebook.png" alt="">
                        </a>
                    </v-avatar>
                    <v-avatar
                            class="ma-3 mr-2"
                            size="20"
                            tile
                    >
                        <a href="https://www.instagram.com/rfkokt/" target="_blank" >
                        <img src="./assets/instagram.png" alt="">
                        </a>
                    </v-avatar>
                    <v-avatar
                            class="ma-3 mr-2"
                            size="20"
                            tile
                    >
                        <a href="https://github.com/rfkokt" target="_blank">
                        <img src="./assets/github-sign.png"  alt="">
                        </a>
                    </v-avatar>
                    <v-avatar
                            class="ma-3"
                            size="20"
                            tile
                    >
                        <a href="https://www.linkedin.com/in/rifkiokta/" target="_blank">
                        <img src="./assets/linkedin.png"  alt="">
                        </a>
                    </v-avatar>
                    <br><br>
                    <img src="./assets/starsone.png" width="150" alt="">
                    <br>
                    <br>
                    <p> Made with &#x2764; by Rifki Okta Pratama</p>
                </v-card>
            </div>
        </div>
    </div>
</template>


<script>

    export default {
        name: 'App',

        components: {},

        data: () => ({
            //
        }),
    };
</script>

<style>
    .background-nav {
        background: url("./assets/fusion-medical-animation-npjP0dCtoxo-unsplash.jpg");
    }

    .posisi {
        margin-bottom: -88px;
        background: rgba(0, 0, 0, 0);
    }

    .footerr {
        height: 200px;
    }
</style>