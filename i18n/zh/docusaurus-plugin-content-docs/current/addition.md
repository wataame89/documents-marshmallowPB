---
sidebar_position: 4
---

# 附加功能。

### 头部碰撞器设置。
如果设置了 "胸部干扰其他玩家"，即使没有 Masyumaro PB 的玩家，Masyumaro PB 也会干扰默认的头部碰撞器。 不过，由于正常的头部碰撞器尺寸较小，难以干扰，因此通过更改 "头像描述符 "中的 "碰撞器 "项来增大碰撞器尺寸是有效的。
<img
  src={require('/img/head.png').default}
  style={{ width: '400px' }}
/>

### 如果您想使用原始 PB
如果只想使用 Masyumaro PB 的碾压功能，同时还想使用原始 PB，请打开 "只应用碾压功能（使用原始 PB）"设置项。 基本上，原始 PB 的动作保持不变，但按下时会被压碎。 使用抓取功能时，建议关闭 "允许抓取原始 PB"。

### 使用平行胸骨。
减少 "胸部旋转贡献值 "会使胸部平行移动。 接近平衡时，重量会增加，同时被穿透的可能性也会降低。 请注意，默认值为 0.8，因此会略微平行。

### 如何调整挤压动画
当 Masyumaro PB 被挤压时，会通过动画和重新缩放胸骨来使其变得粗壮。 如果您想更改挤压动画，请更改 "marshmallow_PB/Animation/MPB_L_Scale_squish 和 MPB_R_Scale_squish "中两个动画的缩放比例的 x 和 y 参数。

### 关闭抓取功能。
在 "设置 "部分关闭抓取功能。

### 如何添加头像预设
<img
  src={require('/img/preset.png').default}
  style={{ width: '400px' }}
/>
头像预设设置存在于 marshmallow_PB/Setup/Preset 文件夹中。 

设置  
路径。 
胸骨和碰撞器与头像的相对路径。 

乳房_L_位置、乳房_L_缩放比例  
分别是棉花糖_PB_L 的本地坐标和缩放比例。 请注意，棉花糖_PB_R 的坐标是通过反转 L 的坐标来设置的。 

（参数）_0，（参数）_100  
输入乳房混合形状为 0 或 100 时的值。 中间值由该参数补足。 每个参数都与 "设置 "部分中的 "PhysBone "参数相对应。 


要创建新的 "头像 "预设，请准备两个胸部混合形状分别为 0 和 100 的 "头像"，以与不符合要求的 "头像 "相同的方式分别设置 marshmallow_PB_L，并记录当时的局部坐标和比例。 预设文件夹中的预设 复制 0 并分别更改头像名称、路径、乳房_L_位置和乳房_L_比例。 其他参数基本上可以保持不变。 检查 "设置工具"，如果预设已添加，则大功告成。

如果您设置了不符合要求的头像，并愿意正式提供，请将其发送到 [Googlefrom here](https://forms.gle/9qfEqBHDyiEisy4G9).


### 如果您想手动安装（如 Prefab）。
如果您想不使用任何工具手动安装 Masyumaro PB，请参阅此视频。 (已废弃)
<iframe width="280" height="158" src="https://www.youtube.com/embed/pKpk3hQhihc?si=trFn__bA0hqWF_76" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>