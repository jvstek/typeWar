// Your code here!
function flexData(filename,functionType) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filename, true);
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            data = JSON.parse(this.responseText);
            console.log(data);
            functionType(data);
        }
    }
    xmlhttp.send();
}