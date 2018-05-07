window.onload = function () {

	var person = new Array();
	person.push(["Jill", "Smith", "50"]);
	person.push(["Steve", "Jobs", "55"]);
	person.push(["Bill", "Gates", "45"]);

	for (var i = 0; i < person.length; i++) {
		addRow(person[i][0], person[i][1], person[i][2]);
	}
}

var add = document.getElementById("add");
add.addEventListener('click', function () {
	addRow("", "", "")
});



function addRow(fName, sName, age) {
	var tbody = document.getElementById("myTable").getElementsByTagName("tbody")[0];

	var row = document.createElement("tr");
	var td1 = document.createElement("td");
	td1.innerHTML = fName;
	var td2 = document.createElement("td");
	td2.innerHTML = sName;
	var td3 = document.createElement("td");
	td3.innerHTML = age;
	var td4 = document.createElement("td");
	td4.setAttribute("contentEditable", "false");

	var btnRemove = document.createElement("INPUT");
	btnRemove.type = "button";
	btnRemove.value = "Remove";
	btnRemove.setAttribute("class", "delbtn");
	btnRemove.setAttribute("onclick", "remove(this)");
	td4.appendChild(btnRemove);


	row.appendChild(td1);
	row.appendChild(td2);
	row.appendChild(td3);
	row.appendChild(td4);
	tbody.appendChild(row);
}

function remove(button) {
	//Determine the reference of the Row using the Button.
	var row = button.parentNode.parentNode;
	var name = row.getElementsByTagName("TD")[0].innerHTML;
	if (confirm("Do you want to delete: " + name)) {

		//Get the reference of the Table.
		var table = document.getElementById("myTable");

		//Delete the Table row using it's Index.
		table.deleteRow(row.rowIndex);
	}
};
