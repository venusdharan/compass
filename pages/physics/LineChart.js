import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props:{
    options: {
    type: Object,
    responsive: true,
    default: null,
    scales: {
          yAxes: [{
          ticks: {
            min: 0,
            max: 300,
            labelString:"hh",
            stepSize: 100,
            reverse: false,
            beginAtZero: true
          }
        }]
      }
    }
  },
  
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
}