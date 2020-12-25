window.addEventListener("load", function () {
    var graph = new BarGraph("test", "trial");
    graph.addBar(20, "green", "a");
    graph.addBar(30, "blue", "c");
    graph.addBar(60, "yellow", "x");
    graph.addBar(80, "cyan", "j");
    graph.addBar(100, "red", "k");
    graph.addBar(23, "purple", "t");
    graph.createBarGraph();
})

function BarGraph(title, yAxisTitle) {
    this.graphTitle = title;
    this.yAxisTitle = yAxisTitle;
    this.graphDatas = [];
    this.createBarGraph = function () {
        var container = document.getElementById("graph");
        var valueDiv = document.createElement("div");

        var dv = document.createElement("div");
        dv.style.borderRight = "2px solid black";
        dv.style.width = "10px"
        dv.style.display = "table-cell"

        var valArr = [];

        container.appendChild(dv);
        for (var data of this.graphDatas) {
            var cell = document.createElement("div");
            cell.classList.add("bar-cell");
            var value = document.createElement("span");
            value.innerHTML = data.value;
            value.color = "black";
            var bar = document.createElement("div");
            bar.innerHTML = data.title;
            bar.classList.add("graph-bar");
            bar.style.color = "white"
            bar.style.fontSize = "20px"
            bar.style.backgroundColor = data.color;
            bar.style.height = (data.value - 10) + "%";
            bar.style.width = "70px"
            bar.style.borderBottom = "2px solid black"

            valArr.push(data.value);


            cell.appendChild(bar);
            container.appendChild(cell);
            valueDiv.appendChild(value);
        }
        valArr.sort((a, b) => a - b)

        let unique = [];
        for (let i = valArr.length - 1; i >= 0; i--){
            var n = valArr[i]-(valArr[i]%10);
            if (unique.indexOf(n) === -1) {
                unique.push(n)
            }
        }
        for (var num of unique) {
            var titleD = document.createElement("p");
            var n = num % 10;
            titleD.innerHTML = num;
            titleD.style.marginTop = "30px"
            dv.style.marginTop = (num) + "px";
            dv.appendChild(titleD)
        }
    }
    this.addBar = function (value, color, title) {

        var data = new GraphData(value, color, title);
        this.graphDatas.push(data);
    }
}


function GraphData(value, color, title) {
    this.value = value;
    this.color = color;
    this.title = title;
}