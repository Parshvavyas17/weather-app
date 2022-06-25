const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    messageOne.textContent = 'Loading forecast for ' + location + '. Please wait.';
    messageTwo.textContent = '';
    const url = 'http://localhost:3000/weather?address=' + location;
    fetch(url).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error;
                console.log(data.error);
                return;
            }
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        });
    });
});
