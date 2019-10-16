// import babel from 'rollup-plugin-babel';
import pkg from './package.json'

export default [
  {
    input: 'index.js',
    output: [
      {
        name: 'SplitWord',
        file: pkg.browser,
        format: 'umd'
      },
      // { file: pkg.module, format: 'es' },
      { file: pkg.main, format: 'cjs' }
    ],
    plugins: [
      // babel({
      //   babelrc: true,
      // })
    ]
  }
]
