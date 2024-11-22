function calculateScaling() {
    const referenceLength = parseFloat(document.getElementById('referenceInput').value);
    const measuredLength = parseFloat(document.getElementById('measuredInput').value);
  
    if (isNaN(referenceLength) || isNaN(measuredLength) || measuredLength === 0) {
      alert('Please enter valid numbers for both lengths.');
      return;
    }
  
    const scalingFactor = 100 * (referenceLength / measuredLength);
    document.getElementById('result').textContent = `Scaling Factor: ${scalingFactor.toFixed(3)}%`;
  }

document.addEventListener('DOMContentLoaded', function () {
    calculateScaling();
  });
