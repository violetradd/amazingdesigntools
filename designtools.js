function calculateScaling() {
    const referenceLength = parseFloat(document.getElementById('referenceInput').value);
    const measuredLength = parseFloat(document.getElementById('measuredInput').value);
  
    if (isNaN(referenceLength) || isNaN(measuredLength) || measuredLength === 0) {
      alert('Please enter valid numbers for both lengths.');
      return;
    }
  
    const scalingFactor = 100 * (referenceLength / measuredLength);
    document.getElementById('scaleresult').textContent = `Scaling Factor: ${scalingFactor.toFixed(3)}%`;
  }

  function updateUnits(inputType) {
    // Get the value from the input field that triggered the event
    const inputValue = parseFloat(document.getElementById(inputType + 'Input').value);
  
    // Clear other fields and return if the input is not a number
    if (isNaN(inputValue)) {
      clearOtherFields(inputType);
      return;
    }
  
    const conversionFactors = {
      millimeters: { 
        centimeters: 1 / 10, 
        meters: 1 / 1000,
        inches: 1 / 25.4,
        feet: 1 / (25.4 * 12),
        yards: 1 / (25.4 * 36) 
      },
      centimeters: { 
        millimeters: 10, 
        meters: 1 / 100,
        inches: 1 / 2.54,
        feet: 1 / (2.54 * 12),
        yards: 1 / (2.54 * 36)
      },
      meters: { 
        millimeters: 1000, 
        centimeters: 100,
        inches: 100 / 2.54,
        feet: 100 / (2.54 * 12),
        yards: 100 / (2.54 * 36)
      },
      inches: { 
        feet: 1 / 12, 
        yards: 1 / 36,
        millimeters: 25.4,
        centimeters: 2.54,
        meters: 2.54 / 100
      },
      feet: { 
        inches: 12, 
        yards: 1 / 3,
        millimeters: 25.4 * 12,
        centimeters: 2.54 * 12,
        meters: (2.54 * 12) / 100
      },
      yards: { 
        inches: 36, 
        feet: 3,
        millimeters: 25.4 * 36,
        centimeters: 2.54 * 36,
        meters: (2.54 * 36) / 100
      }
    };
  
    // Get the relevant conversion factors for the current input type
    const factors = conversionFactors[inputType];
  
    // Update other fields with calculated and rounded values
    for (const outputType in factors) {
      const outputValue = inputValue * factors[outputType];
      document.getElementById(outputType + 'Input').value = roundToThousandth(outputValue);
    }
  }
  
  function clearOtherFields(inputType) {
    const inputTypes = ["millimeters", "centimeters", "meters", "inches", "feet", "yards"];
  
    // Clear fields for all types except the current input type
    inputTypes.forEach(type => {
      if (type !== inputType) {
        document.getElementById(type + 'Input').value = '';
      }
    });
  }

function roundToThousandth(num) {
  return Math.round(num * 1000) / 1000;
}

document.addEventListener('DOMContentLoaded', function () {
  calculateScaling();
});