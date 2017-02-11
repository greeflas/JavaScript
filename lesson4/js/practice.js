// Task 1
var table = document.body.children[0];

for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = "black";
    table.rows[i].cells[i].style.color = "white";
}

// Task 2
var li = document.getElementsByTagName('li');
for (var i = 0; i < li.length; i++) {
    var current = li[i].getElementsByTagName('li');
    console.log("<li> value: " + li[i].firstChild.data.trim());
    console.log("<li> count: " + current.length);
}