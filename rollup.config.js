import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

/*****************************************************************************
 * Node Libs
 *****************************************************************************/
const path = require('path');
const fs = require('fs');

/*****************************************************************************
 * Consts
 *****************************************************************************/
const NODE_ENV = process.env.NODE_ENV || 'development';
const pathSrc = 'src';

/*****************************************************************************
 * Default Export
 *****************************************************************************/
export default {
  input: {
    index: 'src',
    ...exportFolder('component'),
    ...exportFolder('helper'),
    ...exportFolder('theme'),
  },
  output: [
    {
      dir: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    alias({
      entries: [
        ...['component', 'helper', 'theme'].map(dir => ({
          find: dir,
          replacement: path.join(__dirname, 'src', dir),
        })),
      ],
      resolve: ['.jsx', '.js'],
    }),
    resolve({ extensions: ['.js', '.jsx'] }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      rootMode: 'upward',
      presets: [['@babel/preset-env', { modules: false }]],
    }),
    commonjs(),
  ],
};

/*****************************************************************************
 * Helpers
 *****************************************************************************/
function exportFolder(name) {
  const dir = `${pathSrc}/${name}`;
  const files = fs.readdirSync(dir);

  return files.reduce((acc, cur) => {
    const [filename] = cur.split('.');
    acc[`${name}/${filename}`] = `${dir}/${filename}`;
    return acc;
  }, {});
}
