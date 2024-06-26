// @ts-check

// Import types
/** @typedef {import("@rspack/core").Compilation} WebpackCompilation */
/** @typedef {ReturnType<WebpackCompilation['getLogger']>} WebpackLogger */

/**
 * Returns the favicon webpack logger instance
 * @see https://webpack.js.org/api/logging/
 *
 * @param {WebpackCompilation} compilation
 * @returns {WebpackLogger}
 */
const webpackLogger = (compilation) =>
  compilation.getLogger('favicons-webpack-plugin');

module.exports = { webpackLogger };
