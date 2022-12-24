---
home: true
actionText: 快速上手 →
actionLink: /guide/
footer: MIT Licensed | Page created by Becods
---

![MultiLoginR](https://bstats.org/signatures/bukkit/MultiLoginR.svg)

---

## 特性

* 支持设置多达 128 个 Yggdrasil 同时共存
* 支持配置市面上几乎所有类型的 Yggdrasil 服务器
* 以 Yggdrasil 分组管理的白名单系统
* 以 Yggdrasil 分组设置的名称正则约束
* 阻止服务器内出现重名和抢占名称的账户
* 支持控制玩家的 UUID 生成规则
* 支持设置玩家在游戏内的 UUID
* 支持设置多种登录方式登录到同一个游戏数据
* 可控制的重复（异地）登录机制
* 异步/同步皮肤修复机制
* 可在 mineskin.org 无法访问 Yggdrasil 提供的材质链接（皮肤站）下使用皮肤修复功能
* HTTP 请求异常重试机制
* 支持使用鉴权代理访问 HTTP 服务

## 前言

在 [authlib-injector](https://github.com/yushijinhun/authlib-injector) 及其 [技术规范](https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-服务端技术规范) 发布后， 出现了很多第三方的 Yggdrasil 服务器，但是它并不支持联合多个 Yggdrasil 服务器， 这将导致用户需要在游玩启用了 第三方Yggdrasil 服务器时需要使用指定的 Yggdrasil 服务器才能登录游戏。本项目就是为了实现多 Yggdrasil 共存而诞生的

## 共存后出现的一些问题

众所周知，Minecraft 开启了在线验证的服务端都是以从 Yggdrasil API 验证通过后传来的 UUID 作为主键来分发和记录用户数据的， Yggdrasil 服务端在这里起到维护用户 UUID 的唯一性的作用。 而第三方 Yggdrasil API 数据不共享，共存后难以确保 UUID 的唯一性，难免会产生 UUID 碰撞的问题。 而 UUID 重复往往将会造成用户数据混乱，甚至不明用户可以借助这一个漏洞使用超级管理员账户的 UUID 成功混入游戏， 这造成的损失并不是一般的维护者能承受得住的，这是实现共存后面临的最大且危害最严重的一个问题。

在共存的环境下也会产生同名账户，同名账户使得命令中的用户选择器失效，导致命令执行偏差。 然而很多 Yggdrasil API 提供商没有像 Mojang 那样拥有改名的冷却期和缓冲期，重名实现容易且代价很小， 潜在危害也是不可估量的。

由于 Mojang 对 Java 版材质（皮肤）安全问题的[更新](https://www.minecraft.net/en-us/article/minecraft-java-edition-skins-issue-update)，对 Mojang 认为安全的材质都将会附加一段签名字串， 使得原版 Minecraft 客户端只会显示具有 Mojang 签名的材质， 对此，authlib-injector 实现了个让原版和预设的 Yggdrasil API 材质公钥共存的做法， 这至少可以让共存后所有用户都能看到 Mojang 签名的材质，但是，未使用 authlib-injector （即使用 Mojang Yggdrasil API）的用户看不到第三方 Yggdrasil 下的用户的材质， 不同第三方 Yggdrasil 下的用户却互相看不到对方的材质，这就需要使用 [CustomSkinLoader](https://github.com/xfl03/MCCustomSkinLoader) 来帮忙了。

共存后，Mojang API 已经没有意义，白名单程序将会彻底失效，也会造成各种奇怪的问题。

## BUG 汇报

[832210691](https://jq.qq.com/?_wv=1027&k=WrOTGIC7) 点击此处，来加入 [QQ](https://jq.qq.com/?_wv=1027&k=WrOTGIC7) 交流群

[new issue](https://github.com/CaaMoe/MultiLogin/issues/new) 点击此处，提交你的问题

## 贡献者

<a href="https://github.com/CaaMoe/MultiLogin/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=CaaMoe/MultiLogin"  alt="作者头像"/>
</a>

[我也想为贡献者之一？](https://github.com/CaaMoe/MultiLogin/pulls)

## 其他

本项目使用 [![GitHub license](https://img.shields.io/github/license/CaaMoe/MultiLogin?style=flat-square)](https://github.com/CaaMoe/MultiLogin/blob/master/LICENSE) 协议开源

如果你在使用这个插件时有任何的疑问或建议，欢迎加入我们的 QQ
群互相讨论: [![GitHub license](https://img.shields.io/badge/QQ%20group-832210691-yellow?style=flat-square)](https://jq.qq.com/?_wv=1027&k=WrOTGIC7)