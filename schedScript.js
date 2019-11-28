var currTerm;
var classes;
window.onload = function(){
    currTerm = 1;
    classes = [];
    classes.push({name: "CS-115", credits: 4});
    classes.push({name: "CS-135", credits: 4});
    classes.push({name: "CS-146", credits: 3});
    classes.push({name: "CS-284", credits: 4});
    classes.push({name: "CS-306", credits: 4});
    classes.push({name: "CS-334", credits: 3});
    classes.push({name: "CS-347", credits: 3});
    classes.push({name: "CS-383", credits: 3});
    classes.push({name: "CS-385", credits: 4});
    classes.push({name: "CS-392", credits: 3});
    classes.push({name: "CS-423", credits: 3});
    classes.push({name: "CS-424", credits: 3});
    classes.push({name: "CS-442", credits: 3});
    classes.push({name: "CS-485", credits: 1});
    classes.push({name: "CS-492", credits: 3});
    classes.push({name: "CS-496", credits: 3});
    classes.push({name: "CS-511", credits: 3});

    classes.push({name: "MA-121", credits: 2});
    classes.push({name: "MA-122", credits: 2});
    classes.push({name: "MA-123", credits: 2});
    classes.push({name: "MA-124", credits: 2});
    classes.push({name: "MA-222", credits: 3});
    classes.push({name: "MA-331", credits: 3});
    classes.push({name: "BT-353", credits: 3});

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