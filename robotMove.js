
var startPos;
function createTheGrid(){
    createGrid();
       $("#gridCreate").attr("disabled", "disabled"); 

}

function resetTrigger(){
    document.getElementById("userMove").value = "";
}
function startTrigger(){
for(let i=0;i<1;i++){
        calculateNextMove($('#userMove')[0].value.split(""))
}
}
var direction;
function calculateNextMove(arr) {

   for(var i=0;i<arr.length;i++){
    if (arr[i] === 'R') {
        $("#" + startPos).empty();
        direction = (direction + 1) % 4;
        $("#" + startPos).append("<img src='arrow.png' id='arrowMark' class='rotate" + direction + "'>");
        console.log("right");
    } else if (arr[i] === 'L') {
        $("#" + startPos).empty();
        direction = (direction + 3) % 4;
        $("#" + startPos).append("<img src='arrow.png' id='arrowMark' class='rotate" + direction + "'>");
        console.log("left");
    } else if (arr[i] === 'F') {
        var newCoordinate = arrowChange();
        if (checkIfOutOfGrid(newCoordinate)) {
            alert("You are moving out of the grid");
        } else {
            $("#" + startPos).empty();
            startPos += newCoordinate;
            $("#" + startPos).append("<img src='arrow.png' id='arrowMark' class='rotate" + direction + "'>");
        }
    } else if (arr[i] === 'B') {
        var newCoordinate = -arrowChange();
        if (checkIfOutOfGrid(newCoordinate)) {
            alert("You are moving out of the grid");
        } else {
            $("#" + startPos).empty();
            startPos += newCoordinate;
            direction = (direction + 2) % 4;
            $("#" + startPos).append("<img src='arrow.png' id='arrowMark' class='rotate" + direction + "'>");
        } 
    } else {
        alert("Invalid");
    }
}
}

function checkIfOutOfGrid(extra) {
    var i;
    var tdChild = document.getElementsByTagName('td');
    var trRow = document.getElementsByTagName('tr');
    for(i=0;i<64;i++){
        if(tdChild[i].children.length === 1){
            if(i > -1 && i <8){
                 if(trRow[i].rowIndex === 0 && tdChild[i].cellIndex === 0){
                    if(direction === 2 || direction === 1){
                        break;  
                    }
                        return true;
                 }
                 else if(trRow[i].rowIndex === 0 && tdChild[i].cellIndex === 7){
                    if(direction === 2 || direction === 3){
                        break;
                    }
                    return true;
                }
            }else if(i>55 && i<65){
                if(trRow[i].rowIndex === 0 && tdChild[i].cellIndex === 0 ){
                    if(direction === 0 || direction === 3 ){
                        break;
                    }
                    return true;
                }
            }
        }
    }
    return false;
}

function arrowChange() {
    if (direction == 0) {
        return -10;
    } else if (direction == 1) {
        return 1;
    } else if (direction == 2) {
        return 10;
    } else if (direction == 3) {
        return -1;
    }
    return -10;
}

function createGrid() {
    for (let i = 1; i < 9; i++) {
        $("#roverTable").append(
            "<tr>" +
            "<td id='" + i + "1'></td>" +"<td id='" + i + "2'></td>" +"<td id='" + i + "3'></td>" + "<td id='" + i + "4'></td>" +"<td id='" + i + "5'></td>" +"<td id='" + i + "6'></td>" + "<td id='" + i + "7'></td>" +"<td id='" + i + "8'></td>" +
            "</tr>"
        );
    }
    startPos = 23;
    direction = 3;
    if($("#45")[0].childNodes.length === 1 ){
        $('#45').find('#arrowMark').remove();
        $("#45").append("<img src='arrow.png' id='arrowMark' class='rotate3'>");
     }else{
        $("#45").append("<img src='arrow.png' id='arrowMark' class='rotate3'>");
     }
   
}

