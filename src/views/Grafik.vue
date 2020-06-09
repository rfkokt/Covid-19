<template>
    <div>
        <v-card class="turun mx-auto container" v-if="arrPositive.length > 0">
            <div class="text-center">
                <h1>Statistik Indonesia Live Data</h1>
                <p> Sumber data : Kementerian Kesehatan & JHU. Update terakhirs :
                    <span>{{ new Date() | moment("Do MMMM YYYY, H:mm:ss") }}</span> WIB</p>
            </div>
            <line-chart
                    :chartData="arrPositive"
                    :options="chartOptions"
                    :chartColors="positiveChartColors"
                    label="Positive"
            />
        </v-card>
    </div>
</template>

<script>
    import axios from "axios";
    import moment from 'moment';
    import LineChart from "../components/LineChart";

    export default {
        name: "Grafik",
        components: {
            LineChart
        },
        data() {
            return {
                arrPositive: [],
                positiveChartColors: {
                    borderColor: "#000000",
                    pointBorderColor: "#ff0000",
                    pointBackgroundColor: "#ff0000",
                    backgroundColor: "rgba(255,255,255,0)"
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend:false
                }
            }
        },

        async created() {
            const { data } =
                await axios.get("https://api.covid19api.com/dayone/country/indonesia/status/confirmed/live");

            data.forEach(d => {
                const date = moment(d.Date).format("DD/MM");

                const {
                    Cases,
                } = d;
                console.log(date)
                this.arrPositive.push({ date, total: Cases });
            });
        }
        // async created() {
        //     const {data} = await axios.get('https://api.covid19api.com/dayone/country/indonesia/status/confirmed')
        //     console.log(data)
        //     // const graf = data.data
        //     data.forEach(d => {
        //         const date = moment(d.Date).format("MM/DD");
        //         const {
        //             Cases
        //         } = d;
        //         console.log(this.arrPositive)
        //         console.log(this.arrPositive.push({date, total: Cases}))
        //         // this.tanggal.push({date, total: Cases})
        //     })
        //
        // }
    }
</script>
<style>
    .turun {
        margin-top: 25px;
    }
</style>