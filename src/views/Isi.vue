<template>
    <div>
        <v-card class="naik mx-auto container">
            <div class="text-center">
                <h1>Coronavirus Global & Indonesia Live Data</h1>
                <p> Sumber data : Kementerian Kesehatan & JHU. Update terakhirs :
                    <span>{{ new Date() | moment("Do MMMM YYYY, H:mm:ss") }}</span> WIB</p>
            </div>
            <b-row>
                <b-col sm="12" md="6" lg="6" class="text-white">
                    <v-card
                            dark
                            class="mx-auto indonesia"
                    >
                        <b-row class="mx-auto">
                            <b-col sm="7" md="12" lg="7">
                                <v-card-title class="headline ">Total Positif</v-card-title>
                                <h1 class="headline ml-3 orang">{{indonesia.confirmed}} </h1>
                                <h5 class="orang">Orang</h5>

                            </b-col>
                            <b-col sm="5" md="12" lg="5" class="text-center">

                                <v-avatar
                                        class="ma-3"
                                        size="150"
                                        tile
                                >
                                    <img src="../assets/indonesia.png" alt="">
                                </v-avatar>
                            </b-col>
                        </b-row>
                    </v-card>
                </b-col>
                <b-col sm="12" md="6" lg="6" class="text-white">
                    <v-card
                            dark
                            class="mx-auto sembuh"
                    >
                        <b-row class="mx-auto">
                            <b-col sm="7" md="12" lg="7">
                                <v-card-title class="headline ">Total Sembuh</v-card-title>
                                <h1 class="headline ml-3 orang">{{indonesia.recovered}} </h1>
                                <h5 class="orang">Orang</h5>

                            </b-col>
                            <b-col sm="5" md="12" lg="5" class="text-center">

                                <v-avatar
                                        class="ma-3"
                                        size="150"
                                        tile
                                >
                                    <img src="../assets/smile.png" alt="">
                                </v-avatar>
                            </b-col>
                        </b-row>
                    </v-card>
                </b-col>
                <b-col sm="12" md="6" lg="6" class="text-white">
                    <v-card
                            dark
                            class="mx-auto meniggal"
                    >
                        <b-row class="mx-auto">
                            <b-col sm="7" md="12" lg="7">
                                <v-card-title class="headline ">Total Meninggal</v-card-title>
                                <h1 class="headline ml-3 orang">{{indonesia.deaths}} </h1>
                                <h5 class="orang">Orang</h5>

                            </b-col>
                            <b-col sm="5" md="12" lg="5" class="text-center">

                                <v-avatar
                                        class="ma-3"
                                        size="150"
                                        tile
                                >
                                    <img src="../assets/sad.png" alt="">
                                </v-avatar>
                            </b-col>
                        </b-row>
                    </v-card>
                </b-col>
                <b-col sm="12" md="6" lg="6" class="text-white">
                    <v-card
                            dark
                            class="mx-auto dunia"
                    >
                        <b-row class="mx-auto">
                            <b-col sm="7" md="12" lg="7">
                                <v-card-title class="headline ">Data Global Positif</v-card-title>
                                <h1 class="headline ml-3 orang">{{global.confirmed.value}} </h1>
                                <h5 class="orang">Orang</h5>

                            </b-col>
                            <b-col sm="5" md="12" lg="5" class="text-center">

                                <v-avatar
                                        class="ma-3"
                                        size="150"
                                        tile
                                >
                                    <img src="../assets/globe.png" alt="">
                                </v-avatar>
                            </b-col>
                        </b-row>
                    </v-card>
                </b-col>
            </b-row>
        </v-card>
    </div>
</template>

<script>
    import axios from 'axios'
    // import moment from "moment";

    export default {
        name: "Isi",
        data() {
            return {
                indonesia: [],
                global : []
            }
        },
        async mounted() {
            const response = await axios.get('https://covid19.mathdro.id/api/countries/ID/confirmed')
            this.indonesia = response.data[0]
            console.log(response.data[0])

            const res = await axios.get('https://covid19.mathdro.id/api/')
            this.global = res.data
            console.log(res.data)
        },
    }
</script>


<style scoped>
    .naik {
        margin-top: -120px;
    }

    .indonesia {
        background: rgb(255, 33, 0);
        background: linear-gradient(90deg, rgba(255, 33, 0, 1) 0%, rgba(255, 33, 0, 1) 50%, rgba(255, 255, 240, 1) 100%);
    }

    .sembuh {
        background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(50, 172, 109, 1) 0%, rgba(209, 251, 155, 1) 100.2%);;
    }

    .meniggal {
        background-image: linear-gradient(111.1deg, rgba(0, 40, 70, 1) -4.8%, rgba(255, 115, 115, 1) 82.7%, rgba(255, 175, 123, 1) 97.2%);
    }

    .orang {
        display: inline;
    }

    .dunia {
        background-image: radial-gradient(circle farthest-corner at 12.3% 19.3%, rgba(85, 88, 218, 1) 0%, rgba(95, 209, 249, 1) 100.2%);
    }
</style>