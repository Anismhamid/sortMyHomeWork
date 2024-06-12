function calc() {
    var price = + document.getElementById('price').value;
    var discount = + document.getElementById('discount').value;

    if (isNaN(price) || isNaN(discount)) {
        document.getElementById("pr").innerText ="Please enter valid numbers for price and discount";
        return;
    }

    var discountedPrice = price - (price * discount) / 100;

        document.getElementById("pr").innerText = `Discounted Price: ${discountedPrice.toFixed(2)}`;
}

function reset() {
    document.getElementById('price').value = "";
    document.getElementById('discount').value = "";
}
