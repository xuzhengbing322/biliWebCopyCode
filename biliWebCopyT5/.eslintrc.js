module.exports = {
  env: {
    // ESlint不允许使用未在页面内声明的成员，而开发中会用到一些运行环境自带的api。env字节就是使这些变量不报错，browse浏览器，commonjs是nodejs，es2021是es2021
    browser: true,
    commonjs: true,
    es2021: true
  },
  // 自己声明某些全局变量
  globals: {
    $: true
  },
  // 检查用那一套规则
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // （1）不使用extend节点配置整套规范，而是在rules节点中直接配置。（2）使用extend节点配置整套的规范，在rules节点中修改部分规范的配置。
  rules: {
    semi: 1 // 0:关闭，1：警告，2：报错
  },
  parser: '@typescript-eslint/parser',
  // eslint-disable-next-line no-dupe-keys
  parserOptions: {
    parser: 'babel-eslint'
  }
}
