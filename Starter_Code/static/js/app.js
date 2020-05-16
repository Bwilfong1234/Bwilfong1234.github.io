function buildMetadata(sample) {

   
    var md = d3.select("#sample-metadata");
    d3.json(`/metadata/${sample}`).then((mdata) => {
        // console.log(datad);
        md.html(" ");
        var alldata = Object.entries(mdata);
        alldata.forEach((alldata) => {
            md.append("p").text(alldata[0] + ": " + alldata[1]);
            console.log(alldata);
        });


    })
}










function getcovid() {

    var json = "/Starter_Code/static/js/samples.json";
    d3.json(json).then(function(data) {
        var d = (data);
        var x = data["names"]
        var v = data["samples"]
            // console.log(d)

        r = []
        for (itr in v) {
            var g = v[itr]
            r.push(g)
                // console.log(r)

        }
        var h = []
        for (var i = 0; i < 153; i++) {
            var j = r[i]
                // console.log(j)
            h.push(j)



        }
        // console.log(h)
        // function buildTable(x, o, h) {
        //     var table = d3.select("#summary-table");
        //     var tbody = table.select("tbody");
        //     var trow;
        //     for (var i = 0; i < 12; i++) {
        //         trow = tbody.append("tr");
        //         trow.append("td").text(d[i]);
        //         trow.append("td").text(o[i]);
        //         trow.append("td").text(h[i]);
        // trow.append("td").text(l[i]);
        // trow.append("td").text(c[i]);
        // trow.append("td").text(v[i]);
        // var pp = g["sample_values"]
        // var trace1 = [{
        //         y: g["sample_values"],
        //         x: [0, 50, 100, 150],
        //         type: "bar",
        //         orientation: "h"
        //     }
        // var layout = {
        //     title: "",
        //     xaxis: { title: "Title" },
        //     yaxis: { title: "Metascore (Critic) Rating"}
        //       };

        // ]


        var trace1 = {
            x: j["otu_ids"],
            y: j["sample_values"],
            mode: 'markers',
            marker: {
                color: j["otu_ids"],
                opacity: [1, 0.8, 0.6, 0.4],
                size: j["sample_values"]
            }
        };

        var datas = [trace1];

        var layout = {
            title: 'Marker Size and Color',
            showlegend: false,

        };

        Plotly.newPlot("bubble", datas, layout);

    })






    // var name = Object.values(data.metadata[id]);
    // var META = Object.values(ddata["metadata"]);
    // d3.selectAll("#selDataset").on("change", samplemetadata);

    // // This function is called when a dropdown menu item is selected
    // function samplemetadata() {
    //     // Use D3 to select the dropdown menu
    //     var dropdownMenu = d3.select("#selDataset");
    //     // Assign the value of the dropdown menu option to a variable
    //     var dataset = dropdownMenu.property(name);

    //     // Initialize x and y arrays
    //     var data = []

    //     if (dataset == 'name') {
    //         data = META;
    //     }
    //     // Call function to update the chart
    //     samplemetadata();
    // }

    // init();
}
getcovid();

function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    d3.json("/names").then((sampleNames) => {
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });

        // Use the first sample from the list to build the initial plots
        const firstSample = sampleNames[0];
        // console.log(firstSample);
        buildCharts(firstSample);
        buildMetadata(firstSample);
    });
}

function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
    buildMetadata(newSample);
}

// Initialize the dashboard
init();
// function buildPlot() {
//     var json = "/Starter_Code/static/js/samples.json"
//     d3.json(json).then(function(data) {
//                 var d = data
//                     //     var otu_ids = data.otu_ids;
//                     //     var stock = data.dataset.dataset_code;
//                     //     var startDate = data.dataset.start_date;
//                     //     var endDate = data.dataset.end_date;
//                     //     var dates = unpack(data.dataset.data, 0);
//                     //     var openingPrices = unpack(data.dataset.data, 1);
//                     //     var highPrices = unpack(data.dataset.data, 2);
//                     //     var lowPrices = unpack(data.dataset.data, 3);
//                     //     var closingPrices = unpack(data.dataset.data, 4);    


//                 //     var trace1 = {
//                 //         y: data.otu_ids,
//                 //         x: data.sample_values,
//                 //         type: 'bar',
//                 //         orientation: 'h'
//                 // }
//                 console.log(data)
//                     // var layout = {
//                     //     title: '',
//                     //     showlegend: false
//                     // }

//                 // Plotly.newPlot("bar", data, layout)

//             }
