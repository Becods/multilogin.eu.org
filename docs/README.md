---
home: true
footer: Page created by BecodReyes
---

![MultiLoginR](https://bstats.org/signatures/bukkit/MultiLoginR.svg)

# 概述
MultiLogin 是一款能让您的服务器支持正版与多种外置登录共存服务端插件， 用来连接两个或两个以上外置验证服务器下的玩家

----

# 特性
* 支持两种以上的 Yggdrasil 共存，比 [YggdrasilOfficialProxy](https://github.com/YggdrasilOfficialProxy/YggdrasilOfficialProxy) 的还要多
* 支持配置市面上几乎所有类型的 Yggdrasil 服务器
    * 支持添加 [authlib-injector](https://github.com/yushijinhun/authlib-injector) 所规范的 Yggdrasil 服务器
    * 支持添加 [统一通行证](https://login2.nide8.com:233/) Yggdrasil 服务器
    * 支持添加畸形 Yggdrasil 服务器
* 限制账户仅能使用其中一种验证方式，杜绝重复 UUID 所造成的危害，保护账号安全
* 阻止服务器内出现重名账户
* 阻止强制登入 ID 已被注册的账户
* 可使用正则约束用户名命名方式
* 支持以 Yggdrasil 服务器分组管理的白名单系统
* 支持控制用户在游戏内的 UUID
* 可控制的重复登入机制
* 支持 PlaceholderAPI
* 自动修复皮肤签名问题
* 支持 Bukkit、Velocity、BungeeCord

----

# 介绍

----

## 前言

在 [authlib-injector](https://github.com/yushijinhun/authlib-injector) 及其 [技术规范](https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-服务端技术规范) 发布后， 出现了很多第三方的 Yggdrasil 服务器，但是它并不支持联合多个 Yggdrasil 服务器， 这将导致用户需要在游玩启用了 第三方Yggdrasil 服务器时需要使用指定的 Yggdrasil 服务器才能登录游戏。本项目就是为了实现多 Yggdrasil 共存而诞生的

----

## 共存后出现的一些问题

众所周知，Minecraft 开启了在线验证的服务端都是以从 Yggdrasil API 验证通过后传来的 UUID 作为主键来分发和记录用户数据的， Yggdrasil 服务端在这里起到维护用户 UUID 的唯一性的作用。 而第三方 Yggdrasil API 数据不共享，共存后难以确保 UUID 的唯一性，难免会产生 UUID 碰撞的问题。 而 UUID 重复往往将会造成用户数据混乱，甚至不明用户可以借助这一个漏洞使用超级管理员账户的 UUID 成功混入游戏， 这造成的损失并不是一般的维护者能承受得住的，这是实现共存后面临的最大且危害最严重的一个问题。

在共存的环境下也会产生同名账户，同名账户使得命令中的用户选择器失效，导致命令执行偏差。 然而很多 Yggdrasil API 提供商没有像 Mojang 那样拥有改名的冷却期和缓冲期，重名实现容易且代价很小， 潜在危害也是不可估量的。

由于 Mojang 对 Java 版材质（皮肤）安全问题的[更新](https://www.minecraft.net/en-us/article/minecraft-java-edition-skins-issue-update)，对 Mojang 认为安全的材质都将会附加一段签名字串， 使得原版 Minecraft 客户端只会显示具有 Mojang 签名的材质， 对此，authlib-injector 实现了个让原版和预设的 Yggdrasil API 材质公钥共存的做法， 这至少可以让共存后所有用户都能看到 Mojang 签名的材质，但是，未使用 authlib-injector （即使用 Mojang Yggdrasil API）的用户看不到第三方 Yggdrasil 下的用户的材质， 不同第三方 Yggdrasil 下的用户却互相看不到对方的材质，这就需要使用 [CustomSkinLoader](https://github.com/xfl03/MCCustomSkinLoader) 来帮忙了。

共存后，Mojang API 已经没有意义，白名单程序将会彻底失效，也会造成各种奇怪的问题。

----

# 快速上手

配置文件位于`multilogin/config.yml`

自定义语言文件请新建`multilogin/message.properties`

----

## 安装

与同类型程序相比，MultiLogin 不需要修改或添加任何服务端启动参数，也没有必须安装的前置依赖`（不需要安装任何 authlib-injector 以及同类型前置 javaagent 程序）`， 只需将适合服务端的插件本体丢入 plugins(mods) 文件夹下即可，初次使用 MultiLogin 将会花费一些时间来下载缺失文件

----

## 添加一个 Yggdrasil 账户验证服务器

插件现在支持添加几乎所有类型的 Yggdrasil 账户验证服务器，具体设置方法如下：

----

### 模板：
```yaml
# 这是一个示例配置：
# 节点名称 'demo' 作为混合验证系统区分 Yggdrasil 验证服务器唯一性的凭据，设置好后请不要随意的去改动它，
# 随意的更改节点名称将会导致二次验证系统无法验明用户身份而拒绝用户的登入请求。
# 可以仿写此节点用来添加新的 Yggdrasil 账户验证服务器。
demo:

    # 启用该验证服务器。
    # 值为 'false' 时将不添加该 Yggdrasil 账户验证服务器到混合登入系统中去，将拒绝一切使用该 Yggdrasil 账户验证服务器的玩家登入游戏。
    # 默认值 'true'
    enable: false

    # 该账户验证服务器中的别称。
    # 不用于父节点名称，此节点的值可以随意修改。
    # 必填值，在 Bukkit 服务端中作为变量传递。
    name: "Demo Yggdrasil"

    # Yggdrasil 账户验证服务器的基本属性和信息设置。
    body:

      # Yggdrasil 账户验证服务器服务端 hasJoined 阶段部分验证请求链接设置。
      # 此节点必须指定完整的请求链接。
      # 其中 GET 请求中的占位变量 {username} 表示 username，占位变量 {serverId} 表示 serverId，
      #        占位变量 {passIpContent} 表示 passIpContent 节点所设置的内容。
      # 请求的 URL 对大小写敏感，设置需谨慎！
      # 一些例子:
      #      GET: "https://example.com/session/minecraft/hasJoined?username={username}&serverId={serverId}{passIpContent}"
      #      GET: "https://example.com/session/minecraft/hasJoined?username={username}&serverId={serverId}"
      #      POST: "https://example.com/session/minecraft/hasJoined"
      # 必填值
      url: "https://example.com/session/minecraft/hasJoined?username={username}&serverId={serverId}"

      # hasJoined 阶段使用 POST 请求的方式验证账户身份。
      # 绝大多数下， Yggdrasil 账户验证服务器 hasJoined 阶段都采用 GET 请求方式验证用户数据的，
      # 如果你不了解当前 Yggdrasil 验证流程的话，请勿擅自改动它。
      # 默认值 'false'
      postMode: false

      # hasJoined 阶段是否向 Yggdrasil 账户验证服务器传递用户 IP 信息，如果存在。
      # 默认值 'false'
      passIp: false

      # 设置 url 节点 {passIpContent} 变量内容，
      # 其中，变量 {ip} 为所获取到的 IP 信息。
      # 仅当 passIp 节点为 true 时此节点有效。
      # 请求的 URL 对大小写敏感，设置需谨慎！
      # 请留意字符串拼接的特殊值 '&' 和 ', '
      # 一些例子:
      #      GET: '&ip={ip}'
      #      POST: ', "ip":"{ip}"'
      # 默认值 '&ip={ip}'
      passIpContent: "&ip={ip}"

      # 设置 post 的请求内容。
      # 其中 POST 请求中的占位变量 {username} 表示 username，占位变量 {serverId} 表示 serverId，
      #        占位变量 {passIpContent} 表示 passIpContent 节点所设置的内容。
      # 请求的 URL 对大小写敏感，设置需谨慎！
      # 一些例子:
      #        '{"username":"{username}", "serverId":"{serverId}"{passIpContent}}'
      #        '{"username":"{username}", "serverId":"{serverId}"}'
      # 默认值 '{"username":"{username}", "serverId":"{serverId}"}'
      postContent: '{"username":"{username}", "serverId":"{serverId}"}'

    # 设置玩家首次登入后游戏内的 UUID 生成规则
    # 目前只支持以下值:
    #   DEFAULT   - 使用 Yggdrasil 账户证服务器提供的在线 UUID
    #   OFFLINE   - 自动生成离线 UUID
    #   RANDOM    - 随机 UUID
    # 请谨慎设置和修改此节点，避免增加日后维护的心智负担。
    # 为避免触发 Paper 端的某些机制，强烈建议此值为 DEFAULT
    # 默认值 'DEFAULT'
    convUuid: DEFAULT

    # 当玩家首次登入时分配到的 UUID 已被使用，自动更正到随机的 UUID。
    # 请尽量保持此值为 true ，除非您了解后果是什么。
    # 默认值 'true'
    convRepeat: true

    # 玩家允许设置的用户名正则。
    # 若不匹配将会拒绝当前玩家的登入请求
    # 如果此值留空或未设置，则应用根节点下 'nameAllowedRegular' 节点值。
    # 默认值 ''
    nameAllowedRegular: ''

    # 是否为当前验证服务器单独开启白名单。
    # 当全局白名单为 true 时，此节点强制为 true。
    # 默认值: false
    whitelist: false

    # 设置占线登入机制，登入时游戏内存在有相同游戏内 UUID 的玩家时
    # 若为 false 将把游戏内玩家踢出，允许验证中的玩家登入（原版默认）
    # 若为 true 则拒绝当前的登入请求
    # 默认值: false
    refuseRepeatedLogin: false

    # 验证错误重试次数
    # 默认值: 1
    authRetry: 1

    # 绝对的ID使用权限
    # 若为 'true', 则验证中的玩家将会跳过重名验证检查并且强制占有当前ID。
    # 默认值 'false'
    safeId: false

    # 皮肤修复规则，用来解决不同 Yggdrasil 账户验证服务器下的皮肤不可见问题。
    #    比如使用 Minecraft 原版验证服务器的玩家无法看到使用第三方外置验证登入玩家的皮肤。
    # 目前只支持设置以下值:
    #   OFF       - 关闭这个功能
    #   LOGIN     - 占用登入时间进行皮肤修复操作（修复时间过长会导致登入超时）
    #   ASYNC     - 登入后修复（修复成功后需要重新连接服务器）
    # 系统将会自动过滤掉皮肤源域名为 '*.minecraft.net' 的情况
    # 皮肤修复服务器来自 'mineskin.org'
    # 默认值 'OFF'
    skinRestorer: OFF

    # 皮肤修复错误重试次数
    # 默认值: 2
    skinRestorerRetry: 2
```

----

## 例子

* 添加 Minecraft 原版验证服务器
```yaml
      official:
        name: "正版"
        body:
          url: "https://sessionserver.mojang.com/session/minecraft/hasJoined?username={username}&serverId={serverId}{passIpContent}"
```
* 添加 Blessing Skin 类型验证服务器
```yaml
      blessingSkin:
        name: "Blessing Skin"
        body:
            # 假设当前 Blessing Skin 的 Yggdrasil api 地址为 {url}
            url: "{url}/sessionserver/session/minecraft/hasJoined?username={username}&serverId={serverId}{passIpContent}"
```
* 添加 统一通行证 账户验证服务器
```yaml
      nide8:
        name: "统一通行证"
        body:
            # 假设当前服务器 UID 为 {uid}
            url: "https://auth2.nide8.com:233/{uid}/sessionserver/session/minecraft/hasJoined?username={username}&serverId={serverId}{passIpContent}"
```

----

# 命令、权限和变量

## 命令和权限

在 fabric 端中，所有权限值都为 op level == 4

| 命令 | 权限 | 简介 |
|  :---  | :---  | :--- |
| | command.multilogin.tab.complete | 补全命令时所需要的权限 |
| multilogin reload | command.multilogin.reload | 重新加载配置文件 |
| multilogin yggdrasil info <yggdrasil_path> | command.multilogin.yggdrasil.info | 获得 Yggdrasil 信息 |
| multilogin yggdrasil list | command.multilogin.yggdrasil.list | 获得 Yggdrasil 列表 |
| multilogin userdata info <online_uuid> | command.multilogin.userdata.info | 获得一条用户记录 |
| multilogin userdata modify yggdrasil <yggdrasil_path> <online_uuid> | command.multilogin.userdata.modify.yggdrasil | 更改某用户的登入方式 |
| multilogin userdata modify redirect <redirect_uuid> <online_uuid> | command.multilogin.userdata.modify.redirectUuid | 更改某用户的游戏内UUID |
| multilogin userdata remove <online_uuid> | command.multilogin.userdata.remove | 移除某用户的记录 |
| multilogin skinrestorer remove <online_uuid> | ommand.multilogin.skinrestorer.remove | 移除某用户的皮肤修复记录 |
| multilogin skinrestorer removeAll | command.multilogin.skinrestorer.remove.all | 移除所有用户的皮肤修复记录 |
| multilogin confirm | command.multilogin.confirm | 确认当前风险操作 |
| multilogin list | command.multilogin.list | 获得玩家列表 |
| multilogin update | command.multilogin.update | 检查更新 |
| whitelist add <name|uuid> | command.multilogin.whitelist.add | 白名单添加 |
| whitelist remove <name|uuid> | command.multilogin.whitelist.remove | 白名单移除 |
| whitelist list | command.multilogin.whitelist.list | 白名单列表 |
| whitelist clearCache | command.multilogin.whitelist.clearCache | 清除缓存白名单 |

----

# 变量

| 变量 | 作用 |
| :-----| :----- |
| %multilogin_currentname% | 玩家当前的游戏 ID |
| %multilogin_onlineuuid% | 玩家在线的 UUID |
| %multilogin_redirecteduuid% | 玩家在游戏内的 UUID |
| %multilogin_whitelist% | 玩家是否具有白名单 |
| %multilogin_yggdrasilname% | 玩家所在的 Yggdrasil 账户验证服务器的名字 |
| %multilogin_yggdrasilpath% | 玩家所在的 Yggdrasil 账户验证服务器的路径 |

----

# 构建

克隆这个项目，执行以下指令

```bash
./gradlew shadowJar
```

构建输出位于 `bukkit/loader/build/libs` `bungee/loader/build/libs` `velocity/loader/build/libs` 下

----

# 贡献者

<a-tooltip placement="bottom">
  <template slot="title">
	CaaMoe
  </template>
  <a-avatar src="https://avatars.githubusercontent.com/u/70059785?v=4" :size="54"/>
</a-tooltip>
&ensp;
<a-tooltip placement="bottom">
  <template slot="title">
    ksqeib445
  </template>
  <a-avatar src="https://avatars.githubusercontent.com/u/28245341?v=4" :size="54"/>
</a-tooltip>
&ensp;
<a-tooltip placement="bottom">
  <template slot="title">
    BecodReyes
  </template>
  <a-avatar src="https://avatars.githubusercontent.com/u/35525491?v=4" :size="54"/>
</a-tooltip>
&ensp;
<a-tooltip placement="bottom">
  <template slot="title">
    SugiharaYoki
  </template>
  <a-avatar src="https://avatars.githubusercontent.com/u/80352861?v=4" :size="54"/>
</a-tooltip>

[我也想为贡献者之一？](https://github.com/CaaMoe/MultiLogin/pulls)

----

## 其他

本项目使用 [![GitHub license](https://img.shields.io/github/license/CaaMoe/MultiLogin?style=flat-square)](https://github.com/CaaMoe/MultiLogin/blob/master/LICENSE) 协议开源

如果你在使用这个插件时有任何的疑问或建议，欢迎加入我们的 QQ
群互相讨论: [![GitHub license](https://img.shields.io/badge/QQ%20group-832210691-yellow?style=flat-square)](https://jq.qq.com/?_wv=1027&k=WrOTGIC7)
