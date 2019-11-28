var currTerm;
var classes;
window.onload = function(){
    currTerm = 1;
    classes = [];
    classes.push({name: "CS-115", credits: 4});
    classes.push({name: "CS-146", credits: 3});

    document.getElementById('1').onclick = function(){termClick(1);};
    document.getElementById('2').onclick = function(){termClick(2);};
    document.getElementById('3').onclick = function(){termClick(3);};
    document.getElementById('4').onclick = function(){termClick(4);};
    document.getElementById('5').onclick = function(){termClick(5);};
    document.getElementById('6').onclick = function(){termClick(6);};
    document.getElementById('7').onclick = function(){termClick(7);};
    document.getElementById('8').onclick = function(){termClick(8);};
    document.getElementById('add').onclick = function(){addClass();};
}


var update_loop = setInterval(main, 50);
main();
function main(){
    buttonColor(currTerm);
};

function buttonColor(currTerm){
    for(var i=1; i <= 8; i++)
    {
        var term = document.getElementById(i.toString());
        if(term == null){
            console.log(i);
            continue;
        }
        if(currTerm == i)
            term.style.backgroundColor = "green";
        else
            term.style.backgroundColor = "grey";
    }
}

function termClick(termNum){
    currTerm = termNum;
};

function addClass(){
    var sel = document.getElementById('selector');
    var newClass = sel.options[sel.selectedIndex].text;
    
    for(var i=0; i < classes.length; i++){
        if(classes[i].name == newClass){
            createRow(classes[i].name, classes[i].credits);
            break;
        }
    }
};

function createRow(name, credits){
    var table = document.getElementById("term"+currTerm.toString());
    var row = table.insertRow(1);
    var empty = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var creditCell = row.insertCell(2);
    nameCell.innerHTML = name;
    creditCell.innerHTML = credits.toString();
    }