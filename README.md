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
(```)
    function fun(){
         echo "这是一句非常牛逼的代码";
    }
    fun();
(```)