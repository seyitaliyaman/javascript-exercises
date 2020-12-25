window.addEventListener("load", function() {
    var imgs = document.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.position = "absolute";
        imgs[i].style.left = "0px";
        imgs[i].style.top = "0px";
    }
});

function slayt(elem) {
    var imgs = document.getElementsByTagName("img");
    if (imgs[0].style.left == "0px" && imgs[1].style.left == "0px" && imgs[2].style.left == "0px" && imgs[3].style.left == "0px")
        moveImg();

    function moveImg() {
        elem.style.left = (parseInt(elem.style.left) + 1) + "px";
        var a;
        a = setTimeout(moveImg, 5);
        if (parseInt(elem.style.left) + "px" == "710px") {
            clearTimeout(a);
            var div1 = document.getElementById("div1");
            if (div1.childNodes[7] != null)
                div1.removeChild(div1.childNodes[7]);
            else
                div1.removeChild(div1.childNodes[3]);
            div1.insertBefore(elem, div1.childNodes[0]);
            elem.style.position = "absolute";
            elem.style.left = "0px";
            elem.style.top = "0px";
        }
    }
}