displayAdvice();

document.getElementById('dice-container').addEventListener('click', () => {
    displayAdvice();
    // location.reload();
});


function displayAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        document.getElementById('number').innerHTML = '#' + data.slip.id;
        document.getElementById('advice').innerHTML = '"' + data.slip.advice + '"';
    }); 
}