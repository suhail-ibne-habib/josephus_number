function calculateJosephus() {
    const n = parseInt(document.getElementById('totalPeople').value);

    if (isNaN(n) || n < 1) {
        alert("Please enter a valid number for n.");
        return;
    }

    const result = josephusK2(n);
    document.getElementById('output').textContent = `The safe position is: ${result}`;
}

// Corrected special case for k = 2
function josephusK2(n) {
    // Find the largest power of 2 less than or equal to n
    const largestPowerOf2 = Math.pow(2, Math.floor(Math.log2(n)));
    // Calculate the safe position
    return 2 * (n - largestPowerOf2) + 1;
}