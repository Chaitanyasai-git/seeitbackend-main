/**
 * Generates a random 5 character ID containing letters and numbers
 * Example output: "8Fx3m", "aB2Yz", "12Kpw"
 * @returns {string} 5 character alphanumeric ID
 */
function generateProductId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

module.exports = {
    generateProductId
};

