function formatTime(time) {
    var H = 60, D = 8 * H, W = 5 * D, M = 4 * W, Y = 52 * W; // careful with months.
    var h = "h", d = "d", w = "w", m = "m", y = "y";
    if (time < H) {
        return 1 + h;
    }
    
    if (time < D) {
        return allowHalfs(time / H) + h;
    }
    
    if (time < W) {
        return allowHalfs(time / D) + d;
    }
    
    if (time < 6 * W) {
        return allowHalfs(time / W) + w;
    }
    
    if (time < 11 * M) {
        return allowHalfs(time / M) + m;
    }
    
    return allowHalfs(time / Y) + y;
}

function allowHalfs(num) {
    return Math.round(((num % 1) + Math.floor(num)) * 2) / 2;
}
        
console.log(formatTime(1 * 5 * 8 * 60), 2);