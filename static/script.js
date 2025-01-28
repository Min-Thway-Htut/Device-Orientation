window.addEventListener("deviceorientation", (event) => {
    const alpha = event.alpha.toFixed(2);
    const beta = event.beta.toFixed(2);
    const gamma = event.gamma.toFixed(2);

    // Display the values in the HTML
    document.getElementById("alpha").textContent = `Alpha: ${alpha}`;
    document.getElementById("beta").textContent = `Beta: ${beta}`;
    document.getElementById("gamma").textContent = `Gamma: ${gamma}`;

    // Store values globally to send when button is clicked
    window.alpha = alpha;
    window.beta = beta;
    window.gamma = gamma;
});


function sendDataToServer(alpha, beta, gamma) {
    fetch('http://127.0.0.1:5001/send_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            alpha: alpha,
            beta: beta,
            gamma: gamma
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Server response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


document.getElementById('sendDataBtn').addEventListener('click', function() {
   
    if (window.alpha && window.beta && window.gamma) {
        sendDataToServer(window.alpha, window.beta, window.gamma);
    } else {
        console.error('Device orientation data is not available');
    }
});