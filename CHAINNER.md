# chaiNNer 阅读超分

在设置的“图像识别”分组中，将“超分后端”选为 **chaiNNer 本机超分**，
开启图像放大，填写本机服务地址和访问令牌，点击“测试连接”。
chaiNNer 后端不依赖图像识别总开关，也不需要浏览器支持 WebGPU。
默认地址 `http://127.0.0.1:5004`，默认预处理后续 2 张，支持 0–8 张。

先在 [chaiNNer 定制版](https://github.com/dahaox3/chaiNNer/tree/gfisrv2-support)
连接并运行：

```text
Receive Image → Upscale Image → 可选的图像处理 → Return Image
       └──────────────── Request ID ────────────────────┘
```

倍率、模型、FP16、分块尺寸在 chaiNNer 中设置。4 倍模型输出 2 倍时，
chaiNNer 仍先做 4 倍推理再缩小。工作流运行期间持续接收图片，停止后关闭端口；
修改工作流或替换模型后要重新运行。不要公开分享个人令牌或含令牌的工作流。

## 阅读行为

- 优先当前可见图片，再处理后续张数范围；翻页时提升当前页任务优先级。
- 离开范围的任务取消排队，已经执行的 GPU 任务可完成并缓存；迟到的响应不会覆盖新页面。
- 处理时继续显示源图。连接失败、推理失败均回退源图，用“重新连接／重试”恢复。
- 偶尔使用原翻译功能时，先显示译图，再将译图送入超分。翻译服务继续使用原地址，通常为 5003。
- 原图和译图的结果分开保存。关闭超分、隐藏阅读器、切章或离开预处理范围时释放对应 Blob URL。
- 布局与裁边始终使用原图坐标，不会因替换高分辨率图片改变单双页或卷轴比例。
- 浏览器内只保存阅读窗口附近的结果；长期缓存由 chaiNNer 管理。刷新页面会重新上传原文件以验证内容，缓存命中时省去模型推理。
- “清理磁盘缓存”清理服务节点指定目录里的结果。GPU 仍在处理时会提示等待完成后再清理。

本版本以 Windows 桌面浏览器的油猴脚本、本机 chaiNNer 为支持范围。
使用 Fork 时停用原版或旧 Reline 脚本，避免两个阅读器同时接管同一网页。
两者的名称空间和更新地址不同；定制版更新来自本仓库 `chainner-upscale` 分支。

## 开发和上游合并

`master` 是干净的上游镜像，`chainner-upscale` 为定制分支。原 Fork 的
Reline 改动已保存在 `legacy-reline`，不混入新桥接实现。

```sh
git fetch upstream
git switch master
git merge --ff-only upstream/master
git push origin master
git switch chainner-upscale
git merge master
pnpm check
pnpm test --run
```

核心代码集中在 `actions/chainner`。`client.ts` 使用现有 request/downloadImg
发送 multipart 图片、轮询结果并取消任务；`queue.ts` 独立管理阅读窗口、
请求代次与 Blob 生命周期；`index.ts` 对接 Solid 状态及原翻译流程。
服务协议和缓存语义见 chaiNNer 的 `COMICREAD.md`。

新增设置使用 `upscaleProvider` 和 `chainner` 配置；默认后端仍为浏览器，
原设置继续兼容。新图片状态仅用于当前阅读，不写进长期用户设置。
CI 不需要真实网站 Cookie、模型权重或 GPU。

构建请使用隔离副本，避免清空开发中的 dist；将 `dist/index.js` 复制为
根目录 `ComicRead.user.js`，`dist/adguard.js` 复制为 `ComicRead-AdGuard.user.js`。
保留上游 AGPL-3.0-or-later 许可证与作者署名。
