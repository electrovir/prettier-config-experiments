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
     * - Prettier-plugin-organize-imports
     * - Prettier-plugin-jsdoc
     *
     * Successfully formats tsconfig.json
     */
    plugins: basePrettierConfig.plugins.filter(
        (plugin) =>
            plugin.includes('json') ||
            plugin.includes('toml') ||
            plugin.includes('jsdoc') ||
            plugin.includes('imports'),
    ),
};

console.log(prettierConfig.plugins);

module.exports = prettierConfig;
