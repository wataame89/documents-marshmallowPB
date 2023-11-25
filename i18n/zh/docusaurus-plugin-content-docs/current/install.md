---
sidebar_position: 2
---

# 如何介绍。
请看这段视频。

<iframe width="560" height="315" src="https://www.youtube.com/embed/17p4SnL1kus?si=og9SA6Ef8Rwkg3_-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

1. 在 VRChat Creator Companion (VCC) 中打开您的项目。 
2. 在 VCC 中安装 [Modular Avatar](https://modular-avatar.nadena.dev/ja/) 软件包。 ([此处链接到软件包](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json))  
3. 在 VCC 的管理项目中添加 "**姿态管理器**"、"**模块化头像**"和 "**非破坏性模块化框架**"。 
4. 重新打开项目，如果其中包含**ver1.7.0 或更早版本或测试版的棉花糖 PB**，请将生成的特效移至 "marshmallow_PB/Setup/FX"，并删除 marshmallow_PB 文件夹。 (如果未删除，将出现错误） 5.   
5. 导入 [最新版本的 Marshmallow PB](https://wataame89.booth.pm/items/4511536)。 
6. 右键单击头像，然后从菜单中单击 wataameya → MarshmallowPB。 
7. 设置生成的 Marshmallow_PB_Setup 预设值。 
8. 从屏幕顶部的菜单栏中按 "工具"→"手势管理器模拟器"。 
9. 启动手势管理器，如果运行正常，则配置完成。 

如果您想设置一个已经设置了 Masyumaro PB 的头像，[请参阅此处在设置前移除 Masyumaro PB]。 (https://wataame89.github.io/documents-marshmallowPB/trouble)

### 如果要设置不支持的头像。
请参考此视频。

<iframe width="560" height="315" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

1. 右键单击头像，然后从菜单中单击 wataameya→MarshmallowPB。 
2. 将生成的 marshmallow_PB_Setup 设置为无预设，并设置胸骨。 建议关闭胸部 PB，尽管在视频中是打开的。 
3. 打开 marshmallow_PB_Setup 下的 "For Unsupported Avatar/marshmallow_PB_L"（对于不支持的头像/marshmallow_PB_L）。
检查绿色胶囊碰撞器的位置。 如果看不到，请单击场景顶部的 Gizmos。
将胶囊对撞器移动并缩放至头像的左胸区域。 根据经验，将枢轴部分（在 XYZ 方向上移动的部分）的中心设置在从侧面看的胸部曲线（红线）上。 
改变比例，使胶囊碰撞器部分与胸部相吻合。
7. 启动手势管理器，如果运行正常，则设置完成。

<img
  src={require('/img/hitaioou2.png').default}
  alt="hitaioou"
  style={{ width: '450px' }}
/>


### 如何不使用模块化头像（旧方法）
:::caution
由于头像和特效层设置重复，目前已被弃用。 
如果没有特殊原因，请使用新方法。
:::

请参阅此视频。

<iframe width="280" height="158" src="https://www.youtube.com/embed/739tyxA7PKo?si=FkVczSvkKsqLBcV9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


仅与 VRChat Creator Companion (VCC) 兼容，因为它使用专用组件（手势管理器）来检查其操作。 
（它已被弃用，但如果使用 VRChat 来检查操作，即使没有 VCC 也能正常工作）。

[旧方法的说明可在此处找到](https://docs.google.com/document/d/1dvbHSSSIGPoFFt5rA9RUba8309XX7bLs-4dKND2Bam0/edit?usp=sharing)