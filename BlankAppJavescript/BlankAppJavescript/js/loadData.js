// Your code here!
function flexData(filename, functionType, info) {

    return new Promise(function (resolve, error) {

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", filename, true);
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                data = JSON.parse(this.responseText);
                //console.log(data);
                functionType(data, info);
                //return data;
                resolve(data);
            }
        }
        xmlhttp.send();
    });
}