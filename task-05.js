function logger() {
    var data = [];
    return {
        init: function(cb, ...args) {
            if (!(typeof cb === 'function')) {
                throw new Error('first parameter type should be a function');
            };
            var result, er, erStack, erMessage, erName, erResult;
            try {
                if (args.length === 0) {
                    result = cb();
                } else {
                    result = cb.apply(null, args);
                }
            }
            catch(err) {
                erStack = err.stack;
                erMessage = err.message;
                erName = err.name;
                erResult = err;
            }
            if (erResult === void(1)) {
                data.push({name: cb.name, in: args, out: result});
            } else {
                data.push({name: cb.name, in: args, out: result, error:  {name: erName, message: erMessage, stack: erStack}});
            }
            
            return result;
        },
        print: function() {
           console.log(data);
        }
    }
}