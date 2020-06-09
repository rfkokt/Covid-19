<template>
    <div>
        <b-jumbotron class="background">
            <div class="container">
                <b-row>
                    <b-col sm="12" md="6" class="text-white">
                        <h1 class="display-4 text-white judul"> Together we can fight Covid 19.</h1>
                        <p>
                            Coronavirus adalah suatu kelompok virus yang dapat menyebabkan penyakit pada hewan atau
                            manusia. Beberapa jenis coronavirus diketahui menyebabkan infeksi saluran nafas pada
                            manusia mulai dari batuk pilek hingga yang lebih serius seperti Middle East Respiratory
                            Syndrome (MERS) dan Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru
                            yang ditemukan menyebabkan penyakit COVID-19.
                        </p>
                        <b-button variant="danger" href="https://www.youtube.com/watch?v=kdl4D1RFMo8">
                            <font-awesome-icon icon="play"/>
                            Cara Pencegahan
                        </b-button>
                        <br>
                        <br>
                        <br>
                    </b-col>
                    <b-col sm="12" md="6">
                        <img src="../assets/coba.png" alt="">
                    </b-col>
                </b-row>
            </div>
        </b-jumbotron>
        <Isi/>
        <Grafik/>
        <Table/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Isi from './Isi'
    import Grafik from "./Grafik";
    import Table from "./Table";

    export default {
        name: "Home",
        components: {Table, Grafik, Isi},
    };
</script>

<style scoped>
    .background {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("../assets/fusion-medical-animation-npjP0dCtoxo-unsplash.jpg");
        background-size: cover;
        min-height: 550px;
    }

    .judul {
        font-family: "Montserrat SemiBold";
    }

    .gambar {
        margin-top: 20px;
    }
</style>