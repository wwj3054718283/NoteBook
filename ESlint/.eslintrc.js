module.exports = {
  // 1.在env配置的对象其属性在 开发时不需要重新定义
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  //  2.全局对象中 只要设置了变量 开发时就不需要重新定义 true是可改参数 false是可读参数
  globals: {
    $: true,
  },
  //   3.es检查时 用的规范
  //   extends: [
  //     'standard'
  //   ],
  extends: [
    'airbnb-base',
  ],
  // 4.检查项目时 指定项目用的es版本
  parserOptions: {
    ecmaVersion: 'latest',
  },
  //   5.自定义规范
  //    5.1可作为全局统一规则，在eslint init时自定义规则
  //    5.2可改变extends中已有规则
  rules: {
    //   末尾分号
    semi: 0, // 0-关闭 1-警告 2-报错
  },
}
