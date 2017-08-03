## React redux generator

方便建立 redux application。

- eslint 搭配 airbnb config，並修正一些較嚴格的設定，可以到 `.eslintrc` 修改
- stylelint 搭配 standard config，並修正一些較嚴格的設定，可以到 `.stylelintrc` 修改

### Future TODOs

[] 更新 react 版本至 16
[] 搭配比較客製化的 yeoman 設定
[] 使用 react-hot-loader 代替 react-hmr

### Webpack setting

#### 如何開啟 devServer

- run `npm run webpack-dev-server`
詳細設定可以到 `webpack.config.js` 查看
- 到 `localhost:8080` 進行開發，publicPath 為 `/bundle`

#### Webpack build

- 到 `webpack.parts.js` 查看相關設定

#### 使用的 module

- babel
  - es2015
  - react
  - react-hmr
  - 相關設定在 babelrc
- postcss
  - autoprefixer
  - cssnano
  - 相關設定在 postcssrc
- eslint
- stylelint
- react
  - react-dom
  - react-redux
  - redux
  - redux-logger
- ramda


## License

MIT
