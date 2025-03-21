// postcss.config.js
const config = {
  plugins: {
    // 配置参考https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
    'postcss-px-to-viewport': {
      // 视觉稿的宽度,一般为750px
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 750, // UI设计稿的宽度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ['wrap', /PC/], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      landscape: false, // 是否处理横屏情况
      // 不能配置node_modules,会影响vant组件的样式
      exclude: [/node_modules\/vant/i], // 添加vant组件的排除规则
    },
    // 添加第二个postcss-px-to-viewport配置，专门处理vant组件
    'postcss-px-to-viewport-8-plugin': {
      unitToConvert: 'px',
      viewportWidth: 375, // vant组件使用375px设计稿
      unitPrecision: 6,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['wrap', /PC/],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      landscape: false,
      exclude: [/^(?!.*node_modules\/vant)/], // 排除vant以外的所有文件
    },
  },
}

export default config
