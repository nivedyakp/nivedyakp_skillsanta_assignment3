function getSize(){
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    document.getElementById('wh').innerHTML =  "<h1>"+w + " * " + h +"</h1>";
}