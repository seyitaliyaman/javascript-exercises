window.addEventListener("load", function () {
    initalDigits();
    setInterval(function () {
        var date = new Date();
        var hours = date.getHours()
        var minutes = date.getMinutes()
        var seconds = date.getSeconds();

        setNumber(Math.floor(hours / 10),"h0")
        setNumber(hours%10,"h1")

        setNumber(Math.floor(minutes / 10),"m0")
        setNumber(minutes%10,"m1")

        setNumber(Math.floor(seconds / 10),"s0")
        setNumber(seconds%10,"s1")
    }, 1000);


})

function initalDigits(){

    var clockDiv = document.getElementById("clock");
    var codes = ['h','m','s'];
    var codeIndex = 0;
    for(var i=0; i<6; i++){
        var digitDiv = document.createElement("div")
        digitDiv.className = "digit";
        digitDiv.style.width = "90px";
        digitDiv.style.height = "200px";
        digitDiv.style.position = "relative";
        digitDiv.style.display = "inline-block";
        for(var j=0; j<7; j++){
            var segmentDiv = document.createElement("div");
            segmentDiv.className = "segment";
            segmentDiv.style.background = "red";
            segmentDiv.style.borderRadius = "5px";
            segmentDiv.style.position = "absolute";
            segmentDiv.style.opacity = 0.20;

            segmentDiv.id = codes[codeIndex]+""+(i%2)+"d"+j;

            digitDiv.appendChild(segmentDiv);

        }
        clockDiv.appendChild(digitDiv);

        if(i%2 == 1){
            codeIndex++;
            var colonDiv = document.createElement("div");
            colonDiv.className= "colon";
            colonDiv.style.width = "20px";
            colonDiv.style.height = "20px";
            colonDiv.style.background = "red";
            colonDiv.style.display = "inline-block";
            colonDiv.style.position = "relative";
            colonDiv.style.top = "-90px";
            colonDiv.style.opacity = 1;
            colonDiv.style.borderRadius = "5px";

            if(i <5){
                clockDiv.appendChild(colonDiv);
            }
            
        }
    }
}

function setNumber(num, code){
    var digit = new Digit().getDigit(num);
    for(var i=0; i<7; i++){
        var d = document.getElementById(code+"d"+i);
        if(digit.digit[i] === 1){
            d.style.opacity = 1;
        }else{
            d.style.opacity = 0.15;
        }
    }
}

function Digit() {
    this.getDigit = function (index) {
        switch (index) {
            case 0:
                this.digit = new Digit0();
                return this.digit
                break;
            case 1:
                this.digit = new Digit1();
                return this.digit
                break;
            case 2:
                this.digit = new Digit2();
                return this.digit
                break;
            case 3:
                this.digit = new Digit3();
                return this.digit
                break;
            case 4:
                this.digit = new Digit4();
                return this.digit
                break;
            case 5:
                this.digit = new Digit5();
                return this.digit
                break;
            case 6:
                this.digit = new Digit6();
                return this.digit
                break;
            case 7:
                this.digit = new Digit7();
                return this.digit
                break;
            case 8:
                this.digit = new Digit8();
                return this.digit
                break;
            case 9:
                this.digit = new Digit9();
                return this.digit
                break;
        }
    }
}

function Digit0() {
    this.prototype = new Digit();
    this.digit = [1, 1, 1, 1, 1, 1, 0]
}

function Digit1() {
    this.prototype = new Digit();
    this.digit = [0, 1, 1, 0, 0, 0, 0];
}
function Digit2() {
    this.prototype = new Digit();
    this.digit = [1, 1, 0, 1, 1, 0, 1];

}
function Digit3() {
    this.prototype = new Digit();
    this.digit = [1, 1, 1, 1, 0, 0, 1];

}
function Digit4() {
    this.prototype = new Digit();
    this.digit = [0, 1, 1, 0, 0, 1, 1];

}
function Digit5() {
    this.prototype = new Digit();
    this.digit = [1, 0, 1, 1, 0, 1, 1];

}
function Digit6() {
    this.prototype = new Digit();
    this.digit = [1, 0, 1, 1, 1, 1, 1];

}
function Digit7() {
    this.prototype = new Digit();
    this.digit = [1, 1, 1, 0, 0, 0, 0];

}
function Digit8() {
    this.prototype = new Digit();
    this.digit = [1, 1, 1, 1, 1, 1, 1];
}
function Digit9() {
    this.prototype = new Digit();
    this.digit = [1, 1, 1, 1, 0, 1, 1];
}