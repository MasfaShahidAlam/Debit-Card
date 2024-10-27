function updateCardNumber() {
    const cardNumber = document.getElementById('input-number').value;
    document.getElementById('card-num').textContent = cardNumber || '1234 5678 9012 3456'; 
}

function updateCardHolder() {
    const cardHolder = document.getElementById('input-holder').value;
    document.getElementById('card-holder').textContent = cardHolder.toUpperCase() || 'John Doe';
}

function updateExpiryDate() {
    const expiryDate = document.getElementById('input-expiry').value;
    document.getElementById('expiry').textContent = `Valid Thru: ${expiryDate}` || 'Valid Thru: 12/26'; 
}