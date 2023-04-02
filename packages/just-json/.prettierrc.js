const {basePrettierConfig} = require('virmator/base-configs/base-prettierrc.js');

/**
 * @typedef {import('prettier-plugin-multiline-arrays').MultilineArrayOptions} MultilineOptions
 *
 * @typedef {import('prettier').Options} PrettierOptions
 * @type {PrettierOptions & MultilineOptions}
 */
const prettierConfig = {
    ...basePrettierConfig,
    /**
     * Includes:
     * prettier-plugin-sort-json
     * prettier-plugin-packagejson
     *
     * successfully formats tsconfig.json
     */
    plugins: basePrettierConfig.plugins.filter((plugin) => plugin.includes('json')),
};

console.log(prettierConfig.plugins);

module.exports = prettierConfig;
