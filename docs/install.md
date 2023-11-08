---
sidebar_position: 2
---

# 導入方法
こちらの動画を参照して下さい。

//

1.VRChat Creator Companion(VCC)を導入します。  
2.[Modular Avatar](https://modular-avatar.nadena.dev/ja/)のパッケージをVCCに導入します。([パッケージのリンクはこちら](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json))  
3.VCC上でプロジェクトのManage Projectから"**Gesture Manager**","**Modular Avatar**","**Non-Destructive Modular Framework**" の3点を追加します。  
4.プロジェクトを開き、ましゅまろPBをインポートします。   
5.アバターを右クリックし、Modular Avatar→MarshmallowPBをクリックします。  
6.生成されたmarshmallow_PB_Setupのプリセットを設定し、Gesture Managerで正常に動いていれば設定完了です。  

### 非対応アバターに設定したい場合
こちらの動画を参照してください。

//

プリセット無しで胸ボーンを設定した後、marshmallow_PB_Setup以下の"For Unsupported Avatar/marshmallow_PB_L"をオンにしてアバターの胸部分に移動・スケール調整してください。目安としては、真横から見たときに胸のカーブ(赤線部分)にピボット部分(XYZ方向に動かす部分)の中心が位置するように設定してください。その後、緑色の部分が胸に収まるようにスケールを変更してください。
<img
  src={require('/img/hitaioou.png').default}
  alt="hitaioou"
  style={{ width: '800px' }}
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

旧方式の説明書は[こちら](https://docs.google.com/document/d/1dvbHSSSIGPoFFt5rA9RUba8309XX7bLs-4dKND2Bam0/edit?usp=sharing)