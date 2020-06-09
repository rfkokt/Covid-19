<template>
    <div>
        <v-card class="container turun">
            <v-card-title>
                Negara
                <v-spacer></v-spacer>
                <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                    :headers="headers"
                    :items="datanegara"
                    :search="search"
            >
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Table",
        data() {
            return {
                search: '',
                headers: [

                    {
                        text: 'ID',
                        align: 'start',
                        sortable: false,
                        value: 'iso2',
                    },
                    {
                        text: 'Negara',
                        align: 'start',
                        sortable: false,
                        value: 'countryRegion',
                    },
                    {text: 'Positif', value: 'confirmed'},
                    {text: 'Sembuh', value: 'recovered'},
                    {text: 'Meninggal', value: 'deaths'},
                    {text: 'Dirawat', value: 'active'},
                ],
                datanegara: [],
            }
        },
        async mounted() {
            const response = await axios.get('https://covid19.mathdro.id/api/confirmed')
            this.datanegara = response.data
            console.log(response.data)
        },
    }
</script>

<style scoped>
    .bawahmargin {
        margin-bottom: 30px;
    }
</style>