# 项目所用到的技术栈
## react webpack typescript
## scss
## eslint + prettier


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

# 编程过程中所遇到的问题
## webpack resolve.alias 无效的问题
>>> 因为使用了ts,需要在tsconfig中配置path与之对应才能生效
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

