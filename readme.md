# 框架介绍
本框架使用Cypress工具，采用PO设计模式，实现Web的UI自动化测试。

由于考虑不同项目的情况，为保持灵活性，本框架对于用例编写部分并未进行更多的封装，使用本框架仍需要一些Js编码基础

# 框架详细介绍

![](https://github.com/fengyibo963/DemoUITestCypress/blob/master/docs/%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95.png)

## 用例分层概念介绍
该框架分层使用PO设计模式，BDD理念
* Element（元素）：封装用到的cypress操作元素的方法
* Page（页面）：封装页面为类，并且封装所有操作
* Suite（套件）：封装动作(行为)（例如下拉框选择需要三步"点击下拉框、选择选项、点击确认"，为了更好的复用可以将三步合为一个行为直接调用）
* TestCase（用例）：使用动作(行为)拼接工作流，并且对于所有动作可以进行断言

由于某些操作自身就可以定义为动作，因为TestCase既可以使用Suite拼接，也可以使用Page进行拼接（或混合拼接）。

如果为了更好的理解分层，同时增强TestCase脚本的可读性，可以封装所有动作仅使用Suite拼接TestCase（单同时代码量、维护成本会相应的增高）

TestCase拼接为简单关键字驱动模式，使用动作的函数名或类型作为关键字，并且Python语言自身按照顺序执行的机制，达到直接拼接的效果

## 简单数据驱动介绍
对于所有输入参数均进行高度参数化，将需要的所有参数进行参数化，这样使得操作代码的复用性、维护性提高

所有对于不同的测试场景，仅直接通过不同的测试数据组合实现

## 数据生成器介绍
接口需要的参数有一些并不能固定设置，例如时间戳、UUID等不可重复参数，或者因为业务需要不能重复的手机号等等参数。

为了做到真正的自动化扩展使用数据生成器，使用生成器按照规则生成想要的数据字典，在编写TestCase的使用直接调用生成器并提取参数即可

## 项目结构详细介绍

![](https://github.com/fengyibo963/DemoUITestCypress/blob/master/docs/%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95.png)
```
|-- cypress
|    -- common    # 通用函数
|        -- checkpoint.js    # cypress检查点方法
|        -- element.js    # cypress元素操作方法
|    -- fixtures    # 外部静态数据
|        -- example.json    # 静态数据文件
|        -- dataCreate.js    # 数据生成器
|    -- integration    # 测试文件，支持.js .jsx .coffee .cjsx
|        -- pages
|            -- xxxPage.js    # 该产品某一页面
|        -- suites
|            -- xxxSuite.js    # 该产品通用封装的模块
|        -- testcases
|            -- xxx_spec.js    # 测试用例文件
|    -- plugin    # 插件文件
|        -- index.js    # cypress将会在每个spec文件运行之前默认自动包含插件文件 index.js
|    -- screenshots    # 执行截图
|    -- support    # 支持文件（可以理解为hooks钩子）
|        -- index.js    #  cypress会默认自动包含支持文件 index.js
|    -- videos    # 执行录像
|-- docs  # 文档存放
|-- node_modules  # 安装的cypress包
|-- cypress.json  # cypress配置文件、环境变量
|-- package.json  # 项目信息，用于CI打包
|-- package-clok.json  # cypress版本信息
```


# 环境/使用介绍
Cypress提供[官网文档](https://docs.cypress.io/zh-cn/guides/overview/why-cypress.html#)、API[拓展文档](https://example.cypress.io/)查看使用

## 操作系统
* Mac OS 10.9+ (Mavericks+), 仅提供64位二进制文件
* Linux Ubuntu 12.04+, Fedora 21, Debian 8的64位二进制文件
* Windows 7+
## 安装NodeJs环境
由于Cypress是基于js语言的工具，操作系统需要安装NodeJs环境。
Mac[安装参考](https://blog.csdn.net/yst19910702/article/details/89714544)、Linux[安装参考](https://blog.csdn.net/baidu_36943075/article/details/90666681)、Windows[安装参考](https://blog.csdn.net/cai454692590/article/details/86093297)
## 安装Cypress
cypress需要安装至你的项目文件夹下，因此每个新的项目需要安装一次（或复制旧包）
```
cd xxx/xxxx/xxx   # 手动创建你的项文件夹并进入该文件夹
npm install cypress --save-dev  # 安装cypress
```
## 启动Cypress
* 直接启动
	```
	cd xxx/xxxx/xxx   # 进入项目根目录
	./node_modules/.bin/cypress open  # 启动cypress
	```
* 添加启动脚本
在根目录添加文件package.json，并写入如下内容
	```
	{
	  "scripts": {
	    "cypress:open": "cypress open"
	  }
	}
	```
	```
	cd xxx/xxxx/xxx   # 进入项目根目录
	npm run cypress:open  # 启动cypress
	```
## 命令行执行测试
* 配置执行命令，package.json文件添加执行命令
	```
	{
	    "scripts": {
	      "cypress:open": "cypress open",
	      "cy:run": "cypress run"  // 添加运行命令
	    }
	  }
	```
* 命令行执行
	```
	// 指定使用chrome浏览器，运行指定路径测试文件，不设定chrome会默认使用自带无头浏览器
	npm run cy:run -- --browser chrome --spec "cypress/integration/testcases/test_spec.js"
	```
	命令参数可以参考官网文档，默认录制执行视频存在于/cypress/videos文件夹中，以及进行屏幕截图存放于/cypress/screenshots文件夹中