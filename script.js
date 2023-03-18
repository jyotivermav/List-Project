var selectedRow = null ;
function onSubmitForm(e){
    event.preventDefault();
    var data = readUserData();


    console.log(data);

    if(selectedRow == null){
        insertData(data);
    }
    else{
        updateData(data);
    }
    
     reset();

}


// Retrieve Data
function readUserData() {
    var formData = {}
    formData['name'] = document.getElementById('name').value
    formData['email'] = document.getElementById('email').value
    formData['number'] = document.getElementById('number').value
    formData['message'] = document.getElementById('message').value
    return formData ;
}

/*   var object = {}
console.log(object)
object['name'] = "jyoti"
object['age'] = "20"
object['dob'] = "23-07-2002"
console.log(object)  */

// Insert data
function insertData(data){
    var table = document.getElementById('storeList').getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.number;
    cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.message;
    cell5 = newRow.insertCell(4)
    cell5.innerHTML = `<button onclick="editData(this)">Edit</button>
    <button onclick="deleteData(this)"> Delete </button>`


}

// var a = [2,4,6,8]
// console.log(a);
// console.log(a.length)


//Edit Data
function editData(td){
   selectedRow = td.parentElement.parentElement;
   document.getElementById('name').value = selectedRow.cells[0].innerHTML
   document.getElementById('email').value = selectedRow.cells[1].innerHTML
   document.getElementById('number').value = selectedRow.cells[2].innerHTML
   document.getElementById('message').value = selectedRow.cells[3].innerHTML
}

function updateData(formData){
    selectedRow.cells[0].innerHTML = formData.name
    selectedRow.cells[1].innerHTML = formData.email
    selectedRow.cells[2].innerHTML = formData.number
    selectedRow.cells[3].innerHTML = formData.message
    selectedRow = null;

}


// this
// let obj = {
// name : "jyoti" ,
// age : "20" ,
// gender : "female" ,
// printData : function(){
// console.log("My Name Is " + this.Name ) }
//}
// obj.Name
// obj.printData()


//Reset
function reset(){
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('number').value = ""
    document.getElementById('message').value = ""

}
 // Delete Data
 function deleteData(td){
    if(confirm("Are You Sure You Want To Delete This Data")){
        var row =td.parentElement.parentElement
        document.getElementById('storeList').deleteRow(row.rowIndex)
        reset()
    }
 }
