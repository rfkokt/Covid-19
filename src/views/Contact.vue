<template>
    <b-jumbotron class="background">
        <div class="container">
            <b-row>
                <b-col sm="12" md="6">
                    <h1 class="display-4 text-white"> Together we can fight Covid 19.</h1>
                    <p>
                        Coronavirus adalah suatu kelompok virus yang dapat menyebabkan penyakit pada hewan atau
                        manusia. Beberapa jenis coronavirus diketahui menyebabkan infeksi saluran nafas pada
                        manusia mulai dari batuk pilek hingga yang lebih serius seperti Middle East Respiratory
                        Syndrome (MERS) dan Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru
                        yang ditemukan menyebabkan penyakit COVID-19.
                    </p>
                    <b-button variant="primary" href="#">Do Something</b-button>
                </b-col>
                <b-col sm="12" md="6">
                </b-col>
            </b-row>
        </div>
    </b-jumbotron>
</template>

<script>
    // @ is an alias to /src


    export default {
        name: "Home",
        components: {},
    };
</script>

<style>
    .background {
        background: url("../assets/fusion-medical-animation-npjP0dCtoxo-unsplash.jpg");
        background-size: cover;
        min-height: 650px;
    }

    .margin{
        margin-bottom: 2000px;
    }
</style>