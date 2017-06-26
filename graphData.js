const Graph = document.getElementById("graph").getContext('2d');
let lineGraph = new Chart(Graph,{
  type: 'line',
  data: {
     labels: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
     datasets: [
       {
         label:"Ardiunograph",
         fill: false, //no need of bg color
         lineTension: 0.1, //responsible for smoothness of curve if this removed it'll be totally curvy
         //backgroundColor:"rgba(75,192,192,0.4)",
         borderColor:"rgba(152,0,70,1)", //border is the line itself
         borderCapStyle:'butt' ,
         borderDash: [],
         borderDashOffset: 0.0,
         borderJoinStyle:'miter',
         pointBorderColor:"rgba(75,192,192,1)",
         pointBackgroundColor: "#fff",
         pointBorderWidth: 1,
         pointHoverRadius:5,
         pointRadius: 1,
         pointHitRadius: 10,
         data: [43,23,54,57,23,54],

       }
     ]
   },
   options: {
     scales: {
       yAxes:
      [{
        ticks: {
          beginAtZero: true
        }
      }
      ]
    },
    responsive: true,
    maintainAspectRatio: true
}
});
