import resolve from "@rollup/plugin-node-resolve";
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup'

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

import glob from 'glob';

export default {
  input: glob.sync("src/index.tsx"),
  output: [
    {
      format: 'es',
      dir: 'dist',
      exports: 'auto',
      preserveModules: true,
      preserveModulesRoot: 'src',
      compact: true,
      plugins: [terser(), visualizer()],
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ moduleDirectories: ['src'] }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({ minimize: true }),
    json({ compact: true }),
    babel({ include: ['src/**'], babelHelpers: 'bundled' }),
    del({ targets: ['dist/*'] }),
    image(),
    svgr(),
  ]
};