---
sidebar_position: 2
---

# 導入方法
こちらの動画を参照して下さい。

<iframe width="560" height="315" src="https://www.youtube.com/embed/17p4SnL1kus?si=og9SA6Ef8Rwkg3_-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

1.VRChat Creator Companion(VCC)を導入します。  
2.[Modular Avatar](https://modular-avatar.nadena.dev/ja/)のパッケージをVCCに導入します。([パッケージのリンクはこちら](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json))  
3.VCC上でプロジェクトのManage Projectから"**Gesture Manager**","**Modular Avatar**","**Non-Destructive Modular Framework**" の3点を追加します。  
4.プロジェクトを開き、**ver1.7.0以前、またはbeta版のましゅまろPBが入っている場合**は「marshmallow_PB/Setup/FX」内の生成済みFXを移動し、marshmallow_PBフォルダを削除します。(削除しない場合、エラーが発生します)   
5.[最新版のましゅまろPB](https://wataame89.booth.pm/items/4511536)をインポートします。  
6.アバターを右クリックし、メニューからwataameya→MarshmallowPBをクリックします。  
7.生成されたmarshmallow_PB_Setupのプリセットを設定します。  
8.画面上部のメニューバーからTools→Gesture Manager Emulatorを押します。  
9.Gesture Managerを起動し、正常に動いていれば設定完了です。  

ましゅまろPBを設定済みのアバターを設定したい場合は[こちらを参考にましゅまろPBを外してから設定して下さい。](https://wataame89.github.io/documents-marshmallowPB/trouble)

### 非対応アバターに設定したい場合
こちらの動画を参照してください。

<iframe width="560" height="315" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

プリセット無しで胸ボーンを設定した後、marshmallow_PB_Setup以下の"For Unsupported Avatar/marshmallow_PB_L"をオンにしてアバターの胸部分に移動・スケール調整してください。緑色の表示が見えない場合はScene上部のGizmosをクリックしてください。目安としては、真横から見たときに胸のカーブ(赤線部分)にピボット部分(XYZ方向に動かす部分)の中心が位置するように設定してください。その後、緑色の部分が胸に収まるようにスケールを変更してください。

<img
  src={require('/img/hitaioou2.png').default}
  alt="hitaioou"
  style={{ width: '450px' }}
/>


### Modular Avatarを使用しない方法(旧方式)
:::caution
アバターとFXレイヤーを複製して設定しているため、現在は非推奨です。  
特別な理由が無い場合は新方式を使用してください。
:::

こちらの動画を参照して下さい。

<iframe width="280" height="158" src="https://www.youtube.com/embed/739tyxA7PKo?si=FkVczSvkKsqLBcV9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


動作確認に専用のコンポーネント(Gesture Manager)を使用するため、VRChat Creator Companion(VCC)にのみ対応しています。  
(非推奨ですが、動作確認をVRChatでするのであればVCCでなくても正常に動作します)

[旧方式の説明書はこちら](https://docs.google.com/document/d/1dvbHSSSIGPoFFt5rA9RUba8309XX7bLs-4dKND2Bam0/edit?usp=sharing)