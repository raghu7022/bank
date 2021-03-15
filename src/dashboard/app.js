accountHolder = {
    name: "Raghavendra",
    City: "Chitguppa",
    phoneNumber: "+9187586585",
    Email: "test@test.com",
    accounts: [account1={accountNumber:123212424, balance: 50000 }, account2={accountNumber:7878945465, balance: 60000 }]
}

console.log(accountHolder.accounts[0].balance);

var Balance = 5000;
var NetBalance = 0;
var currentBalance = 0;


document.getElementById("balbutton").onclick = function () { mybalance() };

function mybalance() {
    document.getElementById("demo").innerHTML = "hello!! Raghu your Balance is   " + Balance;
}



document.getElementById("wdr").onclick = function () { mywithdraw() };

function mywithdraw() {
    var wdramt = document.getElementById("amtwdr").value;
    if (wdramt > 0) {
        NetBalance = Balance - wdramt;
        if (NetBalance > -1) {


            document.getElementById("demo1").innerHTML = "Raghu your Netbalance is   " + NetBalance;
            Balance = NetBalance;
        }
        else {
            alert("Insufficent balance");
        }
    }
    else {
        alert("Enter valid withdraw amount");
    }
}

document.getElementById("dpt").onclick = function () { mydpt() };

function mydpt() {
    var dptamt = document.getElementById("amtdpt").value;
    if (dptamt > 0) {
        var currentBalance = parseInt(Balance) + parseInt(dptamt);
        document.getElementById("demo2").innerHTML = "Raghu your Netbalance is   " + currentBalance;
        Balance = currentBalance;
    }
    else {
        alert("Enter valid deposite amount");
    }
}

