(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{843:function(t,s,a){"use strict";a.r(s);var e=a(77),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://bstats.org/signatures/bukkit/MultiLoginR.svg",alt:"MultiLoginR"}})]),t._v(" "),a("h1",{attrs:{id:"功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),a("ul",[a("li",[t._v("多 Yggdrasil 共存")]),t._v(" "),a("li",[t._v("高度可配置的 Yggdrasil 方式， 支持市面上几乎所有类型的 Yggdrasil 账户验证服务器")]),t._v(" "),a("li",[t._v("账户安全机制\n"),a("ul",[a("li",[t._v("二次验证\n"),a("ul",[a("li",[t._v("限制只使用一种 Yggdrasil 登入方式，杜绝可能出现的重复 UUID 问题")])])]),t._v(" "),a("li",[t._v("用户名核查\n"),a("ul",[a("li",[t._v("阻止服务器内出现同名账户")]),t._v(" "),a("li",[t._v("可设置部分账户验证服务器下的玩家跳过重名检查")]),t._v(" "),a("li",[t._v("多 Yggdrasil 下分组设置的用户名正则匹配检查")])])]),t._v(" "),a("li",[t._v("支持多 Yggdrasil 下分组管理的白名系统")]),t._v(" "),a("li",[t._v("可设置占线登入机制")])])]),t._v(" "),a("li",[t._v("可控制和生成玩家在游戏内的 UUID")]),t._v(" "),a("li",[t._v("PlaceholderAPI 变量支持 (Bukkit)")]),t._v(" "),a("li",[t._v("自动修复多 Yggdrasil 情况下出现的皮肤问题")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"关于混合验证登入的安全性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于混合验证登入的安全性问题"}},[t._v("#")]),t._v(" 关于混合验证登入的安全性问题")]),t._v(" "),a("p",[t._v("混合验证登入下有可能会出现同 UUID 账户， 而原版机制下的服务器程序只认 UUID， 一旦出现这种情况将会导致玩家间数据混乱和丢失，并且极难排查原因。")]),t._v(" "),a("p",[t._v("MultiLogin 的二次验证就是专门来解决这个问题的，它能限制玩家只能通过其中一种 Yggdrasil 验证方式登入游戏， 杜绝了可能出现的重复 UUID 的问题，极大程度上保证了账户安全，理论上不会存在安全问题。")]),t._v(" "),a("br"),t._v(" "),a("h1",{attrs:{id:"如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("与同类型程序相比，MultiLogin 不需要修改或添加任何服务端启动参数"),a("code",[t._v("（不需要安装任何 authlib-injector 以及同类型前置 javaagent 程序）")]),t._v("， 只需将适合服务端的插件本体丢入 plugins(mods) 文件夹下即可。")]),t._v(" "),a("h2",{attrs:{id:"添加一个-yggdrasil-账户验证服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加一个-yggdrasil-账户验证服务器"}},[t._v("#")]),t._v(" 添加一个 Yggdrasil 账户验证服务器")]),t._v(" "),a("p",[t._v("插件现在支持添加几乎所有类型的 Yggdrasil 账户验证服务器，具体设置方法如下：")]),t._v(" "),a("h3",{attrs:{id:"模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板"}},[t._v("#")]),t._v(" 模板：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是一个示例配置：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 节点名称 'demo' 作为混合验证系统区分 Yggdrasil 验证服务器唯一性的凭据，设置好后请不要随意的去改动它，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 随意的更改节点名称将会导致二次验证系统无法验明用户身份而拒绝用户的登入请求。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以仿写此节点用来添加新的 Yggdrasil 账户验证服务器。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用该验证服务器。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 值为 'false' 时将不添加该 Yggdrasil 账户验证服务器到混合登入系统中去，将拒绝一切使用该 Yggdrasil 账户验证服务器的玩家登入游戏。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值 'true'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该账户验证服务器中的别称。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不用于父节点名称，此节点的值可以随意修改。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 必填值，在 Bukkit 服务端中作为变量传递。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Demo Yggdrasil"')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yggdrasil 账户验证服务器的基本属性和信息设置。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yggdrasil 账户验证服务器服务端 hasJoined 阶段部分验证请求链接设置。")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此节点必须指定完整的请求链接。")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其中 GET 请求中的占位变量 {username} 表示 username，占位变量 {serverId} 表示 serverId，")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        占位变量 {passIpContent} 表示 passIpContent 节点所设置的内容。")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求的 URL 对大小写敏感，设置需谨慎！")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一些例子:")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#      GET: "https://example.com/session/minecraft/hasJoined?username={username}&serverId={serverId}{passIpContent}"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#      GET: "https://example.com/session/minecraft/hasJoined?username={username}&serverId={serverId}"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#      POST: "https://example.com/session/minecraft/hasJoined"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 必填值")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com/session/minecraft/hasJoined?username={username}&serverId={serverId}"')]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hasJoined 阶段使用 POST 请求的方式验证账户身份。")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 绝大多数下， Yggdrasil 账户验证服务器 hasJoined 阶段都采用 GET 请求方式验证用户数据的，")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果你不了解当前 Yggdrasil 验证流程的话，请勿擅自改动它。")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值 'false'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("postMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hasJoined 阶段是否向 Yggdrasil 账户验证服务器传递用户 IP 信息，如果存在。")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值 'false'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("passIp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 url 节点 {passIpContent} 变量内容，")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其中，变量 {ip} 为所获取到的 IP 信息。")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仅当 passIp 节点为 true 时此节点有效。")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求的 URL 对大小写敏感，设置需谨慎！")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请留意字符串拼接的特殊值 '&' 和 ', '")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一些例子:")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#      GET: '&ip={ip}'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#      POST: \', "ip":"{ip}"\'')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值 '&ip={ip}'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("passIpContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&ip={ip}"')]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 post 的请求内容。")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其中 POST 请求中的占位变量 {username} 表示 username，占位变量 {serverId} 表示 serverId，")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        占位变量 {passIpContent} 表示 passIpContent 节点所设置的内容。")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求的 URL 对大小写敏感，设置需谨慎！")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一些例子:")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#        \'{"username":"{username}", "serverId":"{serverId}"{passIpContent}}\'')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#        \'{"username":"{username}", "serverId":"{serverId}"}\'')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 默认值 \'{"username":"{username}", "serverId":"{serverId}"}\'')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("postContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"username":"{username}", "serverId":"{serverId}"}\'')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置玩家首次登入后游戏内的 UUID 生成规则")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目前只支持以下值:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   DEFAULT   - 使用 Yggdrasil 账户证服务器提供的在线 UUID")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   OFFLINE   - 自动生成离线 UUID")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   RANDOM    - 随机 UUID")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请谨慎设置和修改此节点，避免增加日后维护的心智负担。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为避免触发 Paper 端的某些机制，强烈建议此值为 DEFAULT")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值 'DEFAULT'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("convUuid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DEFAULT\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当玩家首次登入时分配到的 UUID 已被使用，自动更正到随机的 UUID。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请尽量保持此值为 true ，除非您了解后果是什么。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值 'true'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("convRepeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 玩家允许设置的用户名正则。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 若不匹配将会拒绝当前玩家的登入请求")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果此值留空或未设置，则应用根节点下 'nameAllowedRegular' 节点值。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值 ''")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nameAllowedRegular")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否为当前验证服务器单独开启白名单。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当全局白名单为 true 时，此节点强制为 true。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值: false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("whitelist")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置占线登入机制，登入时游戏内存在有相同游戏内 UUID 的玩家时")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 若为 false 将把游戏内玩家踢出，允许验证中的玩家登入（原版默认）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 若为 true 则拒绝当前的登入请求")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值: false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("refuseRepeatedLogin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证错误重试次数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值: 1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authRetry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 绝对的ID使用权限")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 若为 'true', 则验证中的玩家将会跳过重名验证检查并且强制占有当前ID。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值 'false'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("safeId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 皮肤修复规则，用来解决不同 Yggdrasil 账户验证服务器下的皮肤不可见问题。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    比如使用 Minecraft 原版验证服务器的玩家无法看到使用第三方外置验证登入玩家的皮肤。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目前只支持设置以下值:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   OFF       - 关闭这个功能")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   LOGIN     - 占用登入时间进行皮肤修复操作（修复时间过长会导致登入超时）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   ASYNC     - 登入后修复（修复成功后需要重新连接服务器）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 系统将会自动过滤掉皮肤源域名为 '*.minecraft.net' 的情况")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 皮肤修复服务器来自 'mineskin.org'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值 'OFF'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skinRestorer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" OFF\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 皮肤修复错误重试次数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值: 2")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skinRestorerRetry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),a("ul",[a("li",[t._v("添加 Minecraft 原版验证服务器")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("official")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"正版"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://sessionserver.mojang.com/session/minecraft/hasJoined?username={username}&serverId={serverId}{passIpContent}"')]),t._v("\n")])])]),a("ul",[a("li",[t._v("添加 Blessing Skin 类型验证服务器")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("blessingSkin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Blessing Skin"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设当前 Blessing Skin 的 Yggdrasil api 地址为 {url}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{url}/sessionserver/session/minecraft/hasJoined?username={username}&serverId={serverId}{passIpContent}"')]),t._v("\n")])])]),a("ul",[a("li",[t._v("添加 统一通行证 账户验证服务器")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nide8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"统一通行证"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设当前服务器 UID 为 {uid}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://auth2.nide8.com:233/{uid}/sessionserver/session/minecraft/hasJoined?username={username}&serverId={serverId}{passIpContent}"')]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"命令和权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令和权限"}},[t._v("#")]),t._v(" 命令和权限")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("权限")]),t._v(" "),a("th",[t._v("简介")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("/multilogin reload")]),t._v(" "),a("td",[t._v("command.multilogin.reload")]),t._v(" "),a("td",[t._v("重新加载配置文件")])]),t._v(" "),a("tr",[a("td",[t._v("/whitelist add <name|uuid>")]),t._v(" "),a("td",[t._v("command.multilogin.whitelist.add")]),t._v(" "),a("td",[t._v("将 target 添加到白名单中")])]),t._v(" "),a("tr",[a("td",[t._v("/whitelist remove <name|uuid>")]),t._v(" "),a("td",[t._v("command.multilogin.whitelist.remove")]),t._v(" "),a("td",[t._v("移除 target 的白名单")])]),t._v(" "),a("tr",[a("td",[t._v("/whitelist list")]),t._v(" "),a("td",[t._v("command.multilogin.whitelist.list")]),t._v(" "),a("td",[t._v("获得白名单列表")])])])]),t._v(" "),a("br"),t._v(" "),a("h1",{attrs:{id:"placeholderapi-变量-仅限bukkit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#placeholderapi-变量-仅限bukkit"}},[t._v("#")]),t._v(" PlaceholderAPI 变量 (仅限Bukkit)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("变量")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("简介")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("%multilogin_currentname%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("玩家当前的游戏 ID")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("%multilogin_onlineuuid%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("玩家在线的 UUID")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("%multilogin_redirecteduuid%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("玩家在游戏内的 UUID")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("%multilogin_whitelist%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("玩家是否具有白名单")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("%multilogin_yggdrasilname%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("玩家所在的 Yggdrasil 账户验证服务器的名字")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("%multilogin_yggdrasilpath%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("玩家所在的 Yggdrasil 账户验证服务器的路径")])])])]),t._v(" "),a("br"),t._v(" "),a("h1",{attrs:{id:"贡献者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贡献者"}},[t._v("#")]),t._v(" 贡献者")]),t._v(" "),a("a-tooltip",{attrs:{placement:"bottom"}},[a("template",{slot:"title"},[t._v("\n\tCaaMoe\n  ")]),t._v(" "),a("a-avatar",{attrs:{src:"https://avatars.githubusercontent.com/u/70059785?v=4",size:54}})],2),t._v("\n \n"),a("a-tooltip",{attrs:{placement:"bottom"}},[a("template",{slot:"title"},[t._v("\n    ksqeib445\n  ")]),t._v(" "),a("a-avatar",{attrs:{src:"https://avatars.githubusercontent.com/u/28245341?v=4",size:54}})],2),t._v("\n \n"),a("a-tooltip",{attrs:{placement:"bottom"}},[a("template",{slot:"title"},[t._v("\n    BecodReyes\n  ")]),t._v(" "),a("a-avatar",{attrs:{src:"https://avatars.githubusercontent.com/u/35525491?v=4",size:54}})],2),t._v("\n \n"),a("a-tooltip",{attrs:{placement:"bottom"}},[a("template",{slot:"title"},[t._v("\n    SugiharaYoki\n  ")]),t._v(" "),a("a-avatar",{attrs:{src:"https://avatars.githubusercontent.com/u/80352861?v=4",size:54}})],2),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/CaaMoe/MultiLogin/pulls",target:"_blank",rel:"noopener noreferrer"}},[t._v("我也想为贡献者之一？"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("br"),a("br")]),t._v(" "),a("p",[t._v("如果你在使用这个插件时有任何的疑问或建议，欢迎加入我们的 QQ\n群互相讨论: "),a("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=WrOTGIC7",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/QQ%20group-832210691-yellow?style=flat-square",alt:"GitHub license"}}),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);s.default=n.exports}}]);