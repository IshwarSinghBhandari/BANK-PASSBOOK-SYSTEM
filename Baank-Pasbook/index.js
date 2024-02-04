let keyCounter = 1;

document.querySelector('#submit').addEventListener('click', function () {
    let amount = document.querySelector('#floatingInput').value;
    let debit = document.querySelector('#flexRadioDefault1').checked;
    let credit = document.querySelector('#flexRadioDefault2').checked;
    let message = document.querySelector('#floatingTextarea2').value;
    let date = document.querySelector('#date').value;

    var aler1 = document.querySelector('#aler1');

    if (amount == '' || message == '' || date == '') {
        aler1.innerText = "! Can't be Empty !";
    } else {
        aler1.innerText = "";

        let uniqueKey = "myKey_" + keyCounter;

        store(amount, debit, credit, message, date, uniqueKey);

        keyCounter++;
    }
});

function store(amount, debit, credit, message, date, uniqueKey) {
    let myValue = {
        date: date,
        amount: amount,
        debit: debit,
        credit: credit,
        message: message,
    };

    localStorage.setItem(uniqueKey, JSON.stringify(myValue));
}



