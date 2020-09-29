// eslint-disable-next-line import/no-extraneous-dependencies
const MetroConfig = require('@ui-kitten/metro-config');

const evaConfig = {
    evaPackage: '@eva-design/eva',
    customMappingPath: './styles/mapping.json',
};

module.exports = MetroConfig.create(evaConfig, {
    // Whatever was previously specified
});
