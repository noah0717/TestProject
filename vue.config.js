const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //transpileDependencies: true
  outputDir:"../../src/main/resources/static",//npm run build로 빌드시 파일이 생성되는 위치
  //devServer:{ SpringBoot의 내장 WAS 주소
  //  prot:8081,
  //  proxy: 'http://localhost:8080',
  //  disableHostCheck:true
  // },
})
