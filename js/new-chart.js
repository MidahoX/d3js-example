function test() {
    //var vis = d3.select('#chart1').append('svg');

    var w = 400,
        h = 400;
    //vis.attr('width', w)
    //   .attr('height', h);

    //vis.text('The Graph').select('#chart1');

    //var nodes = [{ x: 30, y: 50 }, { x: 50, y: 80 }, { x: 90, y: 120 }];


    //vis.selectAll("circle .nodes")
    //   .data(nodes)
    //.enter()
    //.append("svg:circle")
    //.attr("class", "nodes")
    //.attr("cx", function (d) { return d.x })
    //.attr("cy", function (d) { return d.y });



    var svg = d3.select("#chart1")
        .append('svg')        
        .attr('width', w )
        .attr('height', h);

    var w_converter = d3.scale.linear()
        .range([0, w]);

    var h_converter = d3.scale.linear()
        .range([h, 0]);

    d3.tsv('data.tsv', function (data, error) {
        //Create list containing only field_goal_attempts
        var y_values_list = data.forEach(function (d) {
            return d.y
        });
        var x_values_list = data.forEach(function (d) {
            return d.x
        });

        w_converter.domain([0, d3.max(x_values_list)]);
        h_converter.domain([d3.max(y_values_list), 0]);


        var svg1 = d3.select('svg');
        svg1.selectAll('circle .nodes')
            .data(data)
            .enter()
            .append('svg:circle')
            .attr("class", "nodes")
            .attr('cx', function (d) {
                return w_converter(d.x);
            })
            .attr('cy', function (d) {
                return h - h_converter(d.y);
            });
    });

}


function make_y_axis() {
    return d3.svg.axis().scale(y).orient('left').ticks(5);
}



function test2() {
    var vis = d3.select('#chart1').append('svg');

    var w = 900,
        h = 400;
    vis.attr('width', w)
       .attr('height', h);

    vis.text('The Graph').select('#chart1');

    var nodes = [{ x: 30, y: 50 }, { x: 50, y: 80 }, { x: 90, y: 120 }];

    vis.selectAll("circle .nodes")
       .data(nodes)
    .enter()
    .append("svg:circle")
    .attr("class", "nodes")
    .attr("cx", function (d) { return d.x })
    .attr("cy", function (d) { return d.y });
}