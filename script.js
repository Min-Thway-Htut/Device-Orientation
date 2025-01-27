window.addEventListener('deviceorientation', (evt) => {
    const alpha = evt.alpha.toFixed(2);
    const beta = evt.beta.toFixed(2);
    const gamma = evt.gamma.toFixed(2);
    console.log(beta);
    console.log(alpha);

    document.getElementById('alpha').textContent = `Alpha Value: ${alpha}`;
    document.getElementById('beta').textContent = `Beta Value: ${beta}`;
    document.getElementById('gamma').textContent = `Gamma Value: ${gamma}`;
});

document.getElementById('sendData').addEventListener('click', () => {

    const alpha = document.getElementById('alpha').textContent;
    const beta = document.getElementById('beta').textContent;
    const gamma = document.getElementById('gamma').textContent;
    
    fetch('/send_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({alpha, beta, gamma})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    })
})