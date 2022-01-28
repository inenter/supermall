module.exports = {
  configureWebpack: {
    resolve: {
      // extensions: []  //设置可以省略的拓展名
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
