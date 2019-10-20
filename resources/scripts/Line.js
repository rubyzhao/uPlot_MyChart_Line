
function prepData(packed) {
    console.time('prep');
    var loop=100;
    //130000000: ok and fast
    //140000000: Aw, snap! error
    let data = [
        Array(loop),  //x value
        Array(loop)     //y1 value
   ];
  for(var i = 0;i<loop;i++){
     var x = 2 * Math.PI * i / loop;  
        var y = Math.sin(x);
        data[0][i]=x; 
        data[1][i]=y;
    }
   return data;
}

function makeChart(data) {
    console.time('chart');
    const opts = {
        width: 1048,
        height: 600,
        cursor: true,
        scales: {
            'x': {
                type: "n",
                auto: false,
                range: (min, max) => [0, 6],
            },
        },
        series: {
            // x: [
            //     {    type: "n",
            //          scale: "x",
            //          value: v => v == null ? "-" : v*100,
                    
            //     }
            // ],
            y: [
                {     type: "n",
                     range: (min, max) => [-1.2, 1.2],
                     label: "Sin",
                     scale: "y",
                     //value: v => v == null ? "-" : v*100,
                     color: "red",
                }
            ],
        },
        axes: {
            // x: [
            //     {
            //          type: "n",
            //          scale: 'x',
            //          //values: (vals, space) => vals.map(v => v*100),
            //          min: 0,
            //          max: 10,
            //          space: 50,
            //     }
            // ],
            y: [
                {    type: "n",  //"t" is for time; "n" for number
                     scale: 'y',
                     //values: (vals, space) => vals.map(v => v*1),
                     range: (min, max) => [-1.2, 1.2],
                     space: 50,
                }
            ],
         }
    };

    let uplot = new uPlot(opts, data);
    document.body.appendChild(uplot.root);
    wait.textContent = "Done!";
    console.timeEnd('chart');
}

let wait = document.getElementById("wait");

    wait.textContent = "Preparing Data...";
    let data = prepData();
    wait.textContent = "Rendering...";
    setTimeout(() => makeChart(data), 0);
