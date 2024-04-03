const signin =document.getElementById('signInForm');
signin.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const imageUrl = document.getElementById('image').value;
    const price = document.getElementById('price').value;

    const cardDisplay = document.getElementById('cardDisplay');
    cardDisplay.innerHTML = `
        <img src="${imageUrl}" alt="card image">
        <h3>${name}</h3>
        <p>${description}</p>
        <p>${price}
    `;
});