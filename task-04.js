function logger() {
    var data = [];
    return {
        init: function(cb, ...args) {
            if (!(typeof cb === 'function')) {
                throw new Error('first parameter type should be a function');
            };
            var result;
            if (args.length === 0) {
                result = cb();
            } else {
                result = cb.apply(null, args);
            }
            
            data.push({name: cb.name, in: args, out: result});
            return result;
        },
        print: function() {
           console.log(data);
        }
    }
}