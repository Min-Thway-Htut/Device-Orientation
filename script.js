window.addEventListener('deviceorientation', (evt) => {
    const alpha = evt.alpha.toFixed(2);
    const beta = evt.beta.toFixed(2);
    const gamma = evt.gamma.toFixed(2);
    console.log(beta);
    console.log(alpha);

    document.getElementById('alpha').textContent = `Alpha Value: ${alpha}`;
    document.getElementById('beta').textContent = `Beta Value: ${beta}`;
    document.getElementById('gamma').textContent = `Gamma Value: ${gamma}`;
})