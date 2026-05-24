// Number utilities
function clamp(num, min, max) { return Math.min(Math.max(num, min), max); }
function random(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
module.exports = { clamp, random };