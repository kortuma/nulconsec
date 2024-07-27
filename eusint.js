// Example object s with properties invert and invertExtent
const s = {
    invert: true,
    invertExtent: [0, 100]
};

// Define invertRange and invertRangeExtent functions
function invertRange(s) {
    return `Inverting range for ${s}`;
}

function invertRangeExtent(s) {
    return `Inverting range extent for ${s}`;
}

// Setting invertRange based on conditions
s.invertRange = s.invert
    ? invertRange(s)
    : s.invertExtent
        ? invertRangeExtent(s)
        : undefined;

console.log(s.invertRange); // Output: Inverting range for [object Object] (based on example)
