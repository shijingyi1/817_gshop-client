module.exports = {

    lintOnSave: false, //关闭ESLint的规则检查
    //lintOnSave: 'warning',  //输入错误，但项目继续运行

    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.01.0.1',
                changeOrigin: true
            }
        }
    }

}