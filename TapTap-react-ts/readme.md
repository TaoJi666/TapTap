### TapTap ts项目仿照   
   1. npm init vite  创建新项目  
     - TapTap-react-ts  前端    
        1. @types/react  react推出的类型声明文件 `React.FC<PropTypes>`     

        2. alias 在vite中配置  ts中需要安装@type/node --save-dev 
           ```js
            resolve:{
                alias:{
                "@":path.resolve(__dirname,'src')
                }
            }   
            ```   
            在tsx中支持alias  则在`tsconfig.json` 中配置  
            ```js  
                "baseUrl": ".",
                "paths": {
                "@/*": [
                    "src/*"
                ]
                }
            ```   
            3. 配置路由，创建Routes 文件   
            4. api：
                - config： 配置后端地址  
            5. 安装图标库和swiper  
            npm i font-awesome   
            npm i swiper  
    2. taptap-api  后端 数据接口   
        通过url 接口进行数据对接   
        - npm init -y 初始化   
        - npm i koa  安装koa框架  
        在package.json中加上 
        ```js 
          "dev": "nodemon index.js"
            nodemon  监听文件，编写后运行
        ```
        -  npm i koa-router 安装路由 
        - api 文件中放入接口  
            node-fetch 安装需指定版本2.6.1   
        - 创建data 文件夹，将数据存放在那里进行存储   

- 搜索建议链接
https://api.taptapdada.com/mix-search/v1/suggest-by-keyword?kw=%E5%95%8A&X-UA=V%3D1%26PN%3DTapTap%26VN_CODE%3D231013000%26LOC%3DCN%26LANG%3Dzh_CN%26CH%3Ddefault%26UID%3D7182fed0-4b82-468d-9715-9535d1c0c7b4%26NT%3D1%26SR%3D1080x2265%26DEB%3DXiaomi%26DEM%3DM2007J17C%26OSV%3D12   

搜索结果
https://api.taptapdada.com/search/v2/mix?referer=search%7Csuggest&limit=10&session_id=d3e1114e-4535-4329-ad2e-16cee50df236&X-UA=V%3D1%26PN%3DTapTap%26VN_CODE%3D231013000%26LOC%3DCN%26LANG%3Dzh_CN%26CH%3Ddefault%26UID%3D7182fed0-4b82-468d-9715-9535d1c0c7b4%26NT%3D1%26SR%3D1080x2265%26DEB%3DXiaomi%26DEM%3DM2007J17C%26OSV%3D12&from=0&kw=%E5%A4%A9%E8%B0%95&scene=suggest  

app
https://api.taptapdada.com/app/v1/whats-new?app_id=198294&X-UA=V%3D1%26PN%3DTapTap%26VN_CODE%3D231013000%26LOC%3DCN%26LANG%3Dzh_CN%26CH%3Ddefault%26UID%3D7182fed0-4b82-468d-9715-9535d1c0c7b4%26NT%3D1%26SR%3D1080x2265%26DEB%3DXiaomi%26DEM%3DM2007J17C%26OSV%3D12

发现页面后面数据
https://api.taptapdada.com/gate/v3/rec1?limit=5&session_id=3d25364e-b70f-41b5-9d88-19b5d0d0ffff&X-UA=V%3D1%26PN%3DTapTap%26VN_CODE%3D231013000%26LOC%3DCN%26LANG%3Dzh_CN%26CH%3Ddefault%26UID%3D7182fed0-4b82-468d-9715-9535d1c0c7b4%26NT%3D1%26SR%3D1080x2265%26DEB%3DXiaomi%26DEM%3DM2007J17C%26OSV%3D12&from=5