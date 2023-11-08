---
sidebar_position: 4
---

# 追加機能

### つぶれアニメーションの調整方法
ましゅまろPBはつぶれる際に胸ボーンをアニメーションでスケール変更することでもっちりさせています。胸が大きい場合はデフォルトのアニメーションだと不自然になる場合があります。つぶれアニメーションを変更したい場合はMPB_L_ScaleとMPB_R_Scaleの2つのアニメーションのxとyのパラメータを変更してください。通常は1→1.3→1.35のように設定されています。この値を小さくするとつぶれ具合が緩やかになります。(例:1→1.2→1.25)
<img
  src={require('/img/tubure.png').default}
  style={{ width: '800px' }}
/>


### 掴み機能をオフにしたい場合
掴み機能をオフにしたい場合はGrabbing_LとGrabbing_RのAllow Grabbingの項目をFalseにして下さい。

### アバタープリセットの追加
<img
  src={require('/img/preset.png').default}
  style={{ width: '400px' }}
/>
アバターのプリセット設定はmarshmallow_PB/Setup/Presetフォルダに存在します。  

設定項目  
Path:胸ボーンやコライダーのアバターからの相対パスです。  
breast_L_position、breast_L_scale:それぞれmarshmallow_PB_Lのローカル座標とスケールです。なお、marshmallow_PB_Rの座標はLの座標を反転して設定されます。  
Parameter(_0、_100):対応する胸のblendshapeに応じた値を入れます。中間の値はこのパラメータから補完されます。各パラメータ名はセットアップツール上での設定項目に対応しています。  


アバターのプリセットを作る場合は胸のblendshapeが0と100の2つのアバターに対して、非対応アバターと同様にしてmarshmallow_PB_Lを設定し、そのローカル座標、スケールを記録します。Presetフォルダ内のプリセット0をコピーし、アバター名、Path、breast_L_position、breast_L_scaleをそれぞれ変更します。他のパラメータはそのままでも基本的に問題ありません。セットアップツールで確認してプリセットが追加されていれば完了です。


### 手動で導入したい場合(Prefabなど)
ましゅまろPBをツールを用いずに手動で導入したい場合はこちらの動画を参照してください。
<iframe width="280" height="158" src="https://www.youtube.com/embed/pKpk3hQhihc?si=trFn__bA0hqWF_76" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>