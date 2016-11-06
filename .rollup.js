import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

export default {
  entry: 'src/index.js',
  dest: 'dist/build.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'mobx-react': [ 'observer' ],
        'react-hyperscript-helpers': [ 'h' ],
      }
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'transform-flow-strip-types' ],
      presets: [ 'es2015-rollup' ]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  format: 'umd'
}

