function updateLineStartIfParallel(line1, line2, x, y) {
    // Calculate the slopes of the lines
    let k0 = (line1[1][1] - line1[0][1]) / (line1[1][0] - line1[0][0]);
    let k1 = (line2[1][1] - line2[0][1]) / (line2[1][0] - line2[0][0]);

    // Check if the slopes are equal (lines are parallel)
    if (k0 === k1) {
        // Lines are parallel, update start point of line1
        var start = [line1[0][0] + x, line1[0][1] + y];
        console.log("Lines are parallel. New start point:", start);
    } else {
        console.log("Lines are not parallel.");
    }
}

// Example usage:
let line1 = [[0, 0], [2, 2]];
let line2 = [[1, 1], [3, 3]];
let x = 5;
let y = 5;

updateLineStartIfParallel(line1, line2, x, y);
