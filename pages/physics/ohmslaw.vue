<template>
    <v-container>
        <v-row>
      
            <v-col cols="4">
                      <h1>Ohms Law Graph Voltage vs Resistance</h1>
    <v-subheader>Voltage {{voltage}} volts</v-subheader>

    <v-card-text>
      <v-slider
        v-model="voltage"
        :max="100"
        :min="0"
      ></v-slider>
    </v-card-text>
    <v-subheader>Resistance {{resistance}} Ohm</v-subheader>

    <v-card-text>
      <v-slider
        v-model="resistance"
        :max="10"
        :min="0"
      ></v-slider>
      <h3>Current is {{current}} A</h3>
    </v-card-text>
            </v-col>
            <v-col cols="8">
                 <!--plotly :data="gdata" :layout="layout" :displayModeBar="true"></plotly-->
                  <apexchart  ref="realtimeChart" width="80%" type="line" :options="chartOptions" :series="series"></apexchart>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { Plotly } from 'vue-plotly'
const trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
};


export default {
  display: 'Scatter',
  components:{
      Plotly
  },
  watch:{
      voltage(n,o){
          if(this.resistance != 0){
              var d = parseFloat(n/this.resistance);
              this.series[0].data[1] = d;
                this.current = d;
                this.$refs.realtimeChart.updateSeries([{
                    data: this.series[0].data,
                }], false, true);
          }else{
              this.series[0].data[1] = 0;
              this.current = 0;
               this.$refs.realtimeChart.updateSeries([{
                    data: this.series[0].data,
                }], false, true);
          }
          
             
      },
      resistance(n,o){
           if(this.n != 0){
              var d = parseFloat(this.voltage/n);
              this.series[0].data[1] = d;
              this.current = d;
                this.$refs.realtimeChart.updateSeries([{
                    data: this.series[0].data,
                }], false, true);
          }else{
              this.series[0].data[1] = 0;
              this.current = 0;
               this.$refs.realtimeChart.updateSeries([{
                    data: this.series[0].data,
                }], false, true);
          }
      }
  },
  computed: {
     
      
  },
  data() {
      return {
          voltage:0,
          resistance:0,
          current:0,
          gdata: [{
                x: [0,45],
                y: [0,16],
                mode: 'lines',
                type: 'lines'

                }],
          layout: {
                attr: { displayModeBar: true },
                layout: {
                xaxis:"Resistance",
                yaxis:"Voltage",
                plot_bgcolor: '#d3d3d3',
                title:"Voltage vs Resistance",
                showlegend: true,

                },
            },
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
           caption: "Countries With Most Oil Reserves [2017-18]",   //Set the chart caption
      subCaption: "In MMbbl = One Million barrels",            //Set the chart subcaption
      xAxisName: "Country",             //Set the x-axis name
      yAxisName: "Reserves (MMbbl)", 
          xaxis: {
            min: 0,
            max: 12,
          },
          yaxis: {
            min: 0,
            max: 100,
          }
        },
        series: [{
          name: 'Current',
          data: [0,0]
        }],
      }
  },
};
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>