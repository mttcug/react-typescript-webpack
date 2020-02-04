# 项目所用到的技术栈
## react webpack typescript
## scss
## eslint + prettier



# 编程过程中所遇到的问题
## 1)webpack resolve.alias 无效的问题
> 因为使用了ts,需要在tsconfig中配置path与之对应才能生效
```javascript
  "baseUrl": "src",
  "paths": {
          "@asset/*": ["asset/*"],
          "@component/*": ["component/*"],
          "@constant/*": ["constant/*"],
          "@model/*": ["model/*"],
          "@page/*": ["page/*"],
          "@utils/*": ["utils/*"]
        }
```
> tsconfig中添加了path依然无效，检查webpack.config.js中配置，需要使用绝对路径path.resolve
```javascript
  resolve: {
          extensions: ['.tsx', 'ts', '.jsx', '.js'],
          alias: {
              '@': path.resolve(__dirname, '../src'),
              '@page': path.resolve(__dirname, '../src/page'),
              '@router': path.resolve(__dirname, '../src/router'),
              '@component': path.resolve(__dirname, '../src/component'),
              '@static': path.resolve(__dirname, '../src/static'),
              '@share': path.resolve(__dirname, '../src/share')
          }
      }
```

## 2) ts编译器的问题
#### babel和typescript是两个不同的编译器，babel把es678编译成es5,typescript是吧ts编译成js，webpack需要配置ts-loader，之后又出现了awesome-typescript-loader, 在线typescript也可以使用babel编译typescript了需要在babel中配置preset/babel-typescript
`.babelrc`
```javascript
  {
      "presets": [
          // 编译js -> es5
          ["@babel/preset-env",{"modules": false}],
          // 编译react -> js
          "@babel/preset-react",
          // 编译ts -> js
          "@babel/preset-typescript"
      ],
      "plugins": [
          "@babel/plugin-transform-runtime",
          // react热更新
          "react-hot-loader/babel"
      ]
  }
```

