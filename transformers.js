// 1. import default from the plugin module
const transformer = require('./transformer').default;

// 2. create a transformer;
// the factory additionally accepts an options object which described below

// 3. create getCustomTransformer function
const getCustomTransformers = () => ({ before: [transformer] });

// 4. export getCustomTransformers
module.exports = getCustomTransformers;
