function addRecordInList(){
    var num1, num2, operation, result, record;

    num1 = parseInt(document.getElementById("first_number").value);
    num2 = parseInt(document.getElementById("second_number").value);
    operation = document.getElementById("operation").value;

    if (operation == '+') {
            result = num1 + num2;
        } else if (operation == '-') {
            result = num1 - num2;
        } else if (operation == '*') {
            result = num1 * num2;
        } else if (operation == '/') {
            result = num1 / num2;
        }

    document.getElementById("result").value = result;

    record = num1 + " " + operation + " " + num2 + " = " + result;


    //dohvaćanje liste
    var historyList = document.getElementById("historyList");

    //stvaranje novog list itema
    var listItem = document.createElement("li");

    listItem.textContent = record;

    // dodavanje zapisa u list item
    historyList.appendChild(listItem);


}