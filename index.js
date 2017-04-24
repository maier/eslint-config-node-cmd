// node eslint rule configuration

'use strict';


module.exports = {
    env: {
        es6  : true,
        node : true
    },
    parserOptions: {
        ecmaVersion : 6,
        sourceType  : 'script'
    },
    rules: {
        'no-process-env'  : 'off',
        'no-process-exit' : 'off',
        'no-sync'         : 'off'
    }
};
