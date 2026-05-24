// String utilities
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }
function truncate(str, len) { return str.length > len ? str.slice(0, len) + '...' : str; }
module.exports = { capitalize, truncate };