function f() {
    var f0 = 0, f1 = 1, f3;
    return function() {
        var result = f0;
        f3 = f0 + f1;
        f0 = f1;
        f1 = f3;
        return result;
    }
}
