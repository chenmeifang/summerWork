# vuxproject

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##点击Tabbar 展示对应的组件
##点击Tabbar中的路由链接，展示对应的路由组件（好像要先改造Tabbar为router-link）
    1.先创建四个组件
    2.四个组件有了之后，应该把路由和组件做一下对应关系，在路由里面配置
        在router.js里面导入对应的路由组件 