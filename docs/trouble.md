---
sidebar_position: 5
---

# 困ったときは
### 貫通してしまう場合
仕様上、どうしても服によっては貫通してしまいます。問題のない服であれば素体の体をシェイプキーで消したり、胸の大きさをシェイプキーで小さくしたりすることで対策出来ます。また、ましゅまろPBの押し込み具合を小さくすることによっても対策できます。押し込み具合を制限しているパラメータはLImitAngleとLimitColliderPositionです。LimitAngleは値を小さく、LimitColliderPositionは値を大きくすると押し込みの制限が強くなり、貫通しにくくなります。なお、ぴっちりとしたスーツ系の服はウェイトにもよりますが、どうしても貫通する場合があります。

### セットアップしたアバターを元に戻したい場合(新方式)
新方式は非破壊的導入であるため、marshmallow_PB_Setupを削除すれば導入前に戻ります。

### セットアップしたアバターを元に戻したい場合(旧方式)
旧方式で設定したアバターの場合は複製されるものの、アバターとFXも元の状態に戻すには作業が必要です。ましゅまろPBは複製した同名のボーンに既存の胸ボーンを入れています(例:Chest/breast_L/breast_L/…)。そのため、2つ並んだ同名の親子ボーンのうち、子ボーンを取り出し、親ボーンを削除すると元に戻ります。更に、他のmarshmallowと名のついたオブジェクトを消し、FXレイヤーを元のアバターのものに変更してください。最後にアバター末尾の「_MPB」を削除すれば完了です。(アバターやFXの名前の末尾が_MPBのままだとセットアップツールで弾かれます)  
詳細は動画をご覧ください。
<iframe width="560" height="315" src="https://www.youtube.com/embed/Nh1pLiSWz6I?si=6jGZxrHTBik8gz7L" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

### ブレが大きい場合
ましゅまろPBは押した際にブレが発生することがあります。ブレの大きさはPhysBone設定のPullとMomentumの大きさに比例します。つまり、硬めの設定であるほどブレやすくなります。気になる場合は柔らかめのプリセットを使用したり、PullとMomentumを小さくするとブレが軽減されます。

### 勝手に胸がつぶれてしまう場合
//工事中

### ましゅまろPBの動きがおかしい場合
//工事中

### ましゅまろPBが適用されない場合
//工事中

### 注意
・Quest版VRChatには対応していません。  
・PBの固定は出来ません。  
・商品の仕様上、服によっては貫通することがあります。  
・動かし方によってはブレが生じることがあります。   
・公序良俗を守ってお使いください。  

### 既知の不具合
・ルーシュカ Rushkaを設定する場合に2回目の設定をするとエラーが発生する不具合(1回目は正常に設定できるため、設定ごとに生成されたRushka用のFXを削除してください)

### 不具合が起きた場合
[Booth](https://wataame89.booth.pm)、[Twitter](https://twitter.com/wataameya_vr)にてご連絡ください。