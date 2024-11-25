let cartQuantity = 0;

displayQuantity();

function updateCartQuantity(change){
  if (cartQuantity + change > 10){
    return alert('The cart is full')
  }

  if (cartQuantity + change < 0){
    return alert('Not enough items in the cart')
  }

  cartQuantity += change;
  alert(`Cart quantity: ${cartQuantity}`);
}

function displayQuantity(){
  document.querySelector('.js-display-quantity').innerHTML 
    = `Cart quantity: ${cartQuantity}`;
}