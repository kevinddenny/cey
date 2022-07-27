const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        protocol: 'wss',
        port: 443
      }
    }
  }
})