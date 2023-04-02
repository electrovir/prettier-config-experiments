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
     *
     * - Prettier-plugin-toml
     * - Prettier-plugin-sort-json
     * - Prettier-plugin-packagejson
     * - Prettier-plugin-multiline-arrays
     * - Prettier-plugin-organize-imports
     * - Prettier-plugin-jsdoc
     * - Prettier-plugin-interpolated-html-tags
     *
     * FAILS to format tsconfig.json
     */
};

console.log(prettierConfig.plugins);

module.exports = prettierConfig;
