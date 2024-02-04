var amo = 0;

// Create an array of keys from localStorage and sort them
var sortedKeys = Object.keys(localStorage).sort();

for (let i = 0; i < sortedKeys.length; i++) {
    let uniqueKey = sortedKeys[i];

    let storedData = localStorage.getItem(uniqueKey);

    if (storedData !== null) {
        let parsedData = JSON.parse(storedData);

        let amount = parsedData.amount;
        let debit = parsedData.debit;
        let credit = parsedData.credit;
        let message = parsedData.message;
        let date = parsedData.date;

        totalamo(amount, credit);
        printdata(i + 1, amount, debit, credit, message, date); // Adding 1 to index for display purposes
    } else {
        // Handle the case where the data is null
    }
}

function totalamo(amount, credit) {
    if (credit) {
        amo = amo + +amount;
    } else {
        amo = amo - +amount;
    }
    console.log(amo);
}

function printdata(i, amount, debit, credit, message, date) {
    var tbody = document.querySelector('tbody');
    var balance = document.querySelector('#tota');

    var tr = document.createElement('tr');
    var tdIndex = document.createElement('td');
    var tdDate = document.createElement('td');
    var tdAmount = document.createElement('td');
    var tdMode = document.createElement('td');
    var tdMessage = document.createElement('td');
    var tdTotal = document.createElement('td');

    tdIndex.textContent = i;
    tdDate.textContent = date;
    tdAmount.textContent = amount;
    tdMode.textContent = debit ? 'Debit' : credit ? 'Credit' : '';
    tdMessage.textContent = message;
    tdTotal.textContent = +amo;
    balance.innerHTML = `RS: ${amo}`;

    tr.appendChild(tdIndex);
    tr.appendChild(tdDate);
    tr.appendChild(tdAmount);
    tr.appendChild(tdMode);
    tr.appendChild(tdMessage);
    tr.appendChild(tdTotal);

    tbody.appendChild(tr);
}
