function selectnames(cd) {
    var json = "/Starter_Code/static/js/samples.json";


    d3.json(json).then((sampleData) => {
        console.log(sampleData)
        var metadata = sampleData.metadata

        m = metadata.filter(meta => meta.id.toString() === cd)[0];
        // Use d3 to select the panel for metadata
        var bloodata = d3.select("#sample-metadata");

        //clear existing metadata
        bloodata.html("")

        Object.entries(m).forEach((key) => {
            bloodata.append("h6").text(key[0] + ": " + key[1] + "\n");
        })

    })
}



function barnames(cd) {
    var json = "/Starter_Code/static/js/samples.json";
    d3.json(json).then((sampleames) => {
        // console.log(sampleames.samples)

        var a = sampleames.samples.filter(r => r.id.toString() === cd)[0];
        console.log(a)

        var tt = (a.sample_values.slice(0, 10)).reverse()
        var hhh = (a.otu_ids.slice(0, 10)).reverse()
        var yy = a.otu_labels
        var ddd = hhh.map(s => "OTU " + s)


        // console.log(`Sample Values: ${tt}`)
        // console.log(`Id Values: ${hhh}`)
        // }

        var trace1 = {
            x: tt,
            y: ddd,
            text: yy,
            type: "bar",
            orientation: "h"
        }
        var tr = [trace1]
        var layout = {
            title: "",
            yaxis: {
                tickmode: "linear",
            }
        }

        Plotly.newPlot("bar", tr, layout)
    })
}





function optionChanged(cd) {
    selectnames(cd);
    barnames(cd);
}

function init() {
    var selector = d3.select("#selDataset");
    var json = "/Starter_Code/static/js/samples.json"
    d3.json(json).then((sampleNames) => {


        var j = sampleNames.names

        j.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        })
        selectnames(sampleNames.names[0]);
        barnames(sampleNames.names[0]);

    })
}
init();

function getcovid() {

    var json = "/Starter_Code/static/js/samples.json";
    d3.json(json).then(function(data) {
        var f = (data);
        var w = data["names"]
        var p = data["samples"]
            // console.log(d)

        r = []
        for (itr in p) {
            var g = p[itr]
            r.push(g)


        }

        for (var i = 0; i < 153; i++) {
            var k = r[i]



        }
        var trace2 = {
            x: k["otu_ids"],
            y: k["sample_values"],
            mode: 'markers',
            marker: {
                color: k["otu_ids"],
                opacity: [1, 0.8, 0.6, 0.4],
                size: k["sample_values"]
            }
        }

        var datas = [trace2];
        var layouts = {
            title: 'Marker Size and Color',
            showlegend: false,
        }
        Plotly.newPlot("bubble", datas, layouts);

    })

}

getcovid();