const {
    basePrettierConfig,
    getPluginPathFromName,
} = require('virmator/base-configs/base-prettierrc.js');

// Succeeds to sort tsconfig.json but fails to format arrays
const plugins1 = [
    'prettier-plugin-multiline-arrays',
    'prettier-plugin-toml',
    'prettier-plugin-sort-json',
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-imports',
    'prettier-plugin-jsdoc',
    'prettier-plugin-interpolated-html-tags',
].map((pluginName) => {
    return getPluginPathFromName(pluginName);
});

// Succeeds to sort tsconfig.json but fails to format arrays
const plugins2 = [
    'prettier-plugin-toml',
    'prettier-plugin-multiline-arrays',
    'prettier-plugin-sort-json',
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-imports',
    'prettier-plugin-jsdoc',
    'prettier-plugin-interpolated-html-tags',
].map((pluginName) => {
    return getPluginPathFromName(pluginName);
});

// Fails to sort tsconfig.json but fails to format arrays
const plugins = [
    'prettier-plugin-toml',
    'prettier-plugin-sort-json',
    // here's the problem: multiline-arrays is overwriting sort-json's parser or printer or something
    'prettier-plugin-multiline-arrays',
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-imports',
    'prettier-plugin-jsdoc',
    'prettier-plugin-interpolated-html-tags',
].map((pluginName) => {
    return getPluginPathFromName(pluginName);
});

/**
 * @typedef {import('prettier-plugin-multiline-arrays').MultilineArrayOptions} MultilineOptions
 *
 * @typedef {import('prettier').Options} PrettierOptions
 * @type {PrettierOptions & MultilineOptions}
 */
const prettierConfig = {
    ...basePrettierConfig,
    plugins,
};

console.log(prettierConfig.plugins);

module.exports = prettierConfig;
