Node *command line utility* specific [eslint](https://eslint.org) rule configuration - extends @maier/base, @maier/node


`eslintrc.js` example:

```js
module.exports = {
    root: true,
    extends: [
        '@maier/base',
        '@maier/node',
        '@maier/node-cmd'
    ],
    rules: {
        // ...additional project specific rules
    }
};
```
