<script>
  import { Line } from 'vue-chartjs'
  import "chartjs-plugin-deferred";
  import "chartjs-plugin-crosshair";

  export default {
    extends: Line,
    props: {
      chartData: {
        type: Array,
        required: false
      },
      chartLabels: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        gradient: null,
        options: {
          showScale: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false,
                callback: (value) => {
                  return this.formatNumber(value)
                }
              },
              gridLines: {
                display: true,
                color: '#EEF0F4',
                // borderDash: [2, 4]
              }
            }],
            xAxes: [ {
              gridLines: {
                display: true,
                color: '#EEF0F4',
                // borderDash: [2, 4]
              }
            }]
          },
          tooltips: {
            mode: 'interpolate',
            intersect: false,
            backgroundColor: '#4F5565',
            titleFontStyle: 'normal',
            titleFontSize: 12,
            bodyFontFamily: "'Proxima Nova', sans-serif",
            cornerRadius: 3,
            bodyFontColor: '#20C4C8',
            bodyFontSize: 12,
            xPadding: 14,
            yPadding: 14,
            displayColors: false,
            callbacks: {
              title: tooltipItem => {
                return `🗓 ${tooltipItem[0].xLabel}`
              },
              label: (tooltipItem, data) => {
                let dataset = data.datasets[tooltipItem.datasetIndex]
                let currentValue = dataset.data[tooltipItem.index]
                return `📦 ${currentValue.toLocaleString()}`
              }
            }
          },
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            deferred: {
              xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
              yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
              delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
            },
            crosshair: {
              line: {
                color: '#F66',  // crosshair line color
                width: 1        // crosshair line width
              },
              sync: {
                enabled: true,            // enable trace line syncing with other charts
                group: 1,                 // chart group
                suppressTooltips: false   // suppress tooltips when showing a synced tracer
              },
              zoom: {
                enabled: true,                                      // enable zooming
                zoomboxBackgroundColor: 'rgba(66,133,244,0.2)',     // background color of zoom box 
                zoomboxBorderColor: '#48F',                         // border color of zoom box
                zoomButtonText: 'Reset Zoom',                       // reset zoom button text
                zoomButtonClass: 'reset-zoom',                      // reset zoom button class
              },
              callbacks: {
                beforeZoom: function() {                  // called before zoom, return false to prevent zoom
                  return true;
                },
                afterZoom: function() {                   // called after zoom
                }
              }
            }
          }
        }
      }
    },
    mounted () {
      this.gradient = this.$refs.canvas
        .getContext('2d');
        // .createLinearGradient(0, 0, 0, 450);

      // this.gradient.addColorStop(0, 'rgba(52, 217, 221, 0.6)')
      // this.gradient.addColorStop(0.5, 'rgba(52, 217, 221, 0.25)')
      // this.gradient.addColorStop(1, 'rgba(52, 217, 221, 0)')

      this.renderChart({
        labels: this.chartLabels,
        datasets: [
          {
            label: 'downloads',
            borderColor: '#249EBF',
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            pointHoverBorderColor: '#249EBF',
            pointHoverBackgroundColor: '#fff',
            pointHoverRadius: 4,
            pointHitRadius: 10,
            pointHoverBorderWidth: 2,
            borderWidth: 2,
            // backgroundColor: this.gradient,
            fill: false,
            data: this.chartData
          }
        ]
      }, this.options)
    },
    methods: {
      formatNumber(num) {
        let numString = Math.round(num).toString();
        let numberFormatMapping = [[6, 'm'], [3, 'k']];
        for (let [numberOfDigits, replacement] of numberFormatMapping) {
          if (numString.length > numberOfDigits) {
            let decimal = '';
            if (numString[numString.length - numberOfDigits] !== '0') {
              decimal = '.' + numString[numString.length - numberOfDigits];
            }
            numString = numString.substr(0, numString.length - numberOfDigits) + decimal + replacement;
            break;
          }
        }
        return numString;
      }
    }
  }
</script>
