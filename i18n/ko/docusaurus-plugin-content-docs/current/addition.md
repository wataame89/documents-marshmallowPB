---
sidebar_position: 4
---


# 추가 기능

### 머리 콜리더 설정
마쥬마로 PB는 '다른 플레이어와의 가슴 간섭'을 설정하면 마쥬마로 PB를 넣지 않은 플레이어도 머리의 기본 콜리더와 간섭을 일으킬 수 있습니다. 하지만 일반 머리 콜리더는 크기가 작아 간섭이 잘 일어나지 않기 때문에 Avatar Descripter의 Colliders 항목을 변경하여 콜리더의 크기를 크게 설정하면 효과적입니다.
<img
  src={require('/img/head.png').default}
  style={{ width: '400px' }}
/> /> ### ### ### 원래의 PB를 사용하고 싶다면

### 원본 PB를 사용하고 싶은 경우
기존 PB를 그대로 사용하면서 마쥬마로 PB의 찌그러짐 기능만 사용하고 싶다면 설정 항목의 '찌그러짐 기능만 적용(기존 PB 사용)'을 켜주세요. 기본적으로 원래 PB의 움직임을 그대로 유지하지만, 누를 경우 찌그러집니다. 잡기 기능을 사용할 경우, 원래 PB의 Allow Grabbing은 해제하는 것을 권장합니다.

### 평행 가슴뼈 사용
'가슴의 회전 기여도'를 낮추면 가슴이 평행하게 움직이게 됩니다. 평형에 가까워지면 무게감이 증가함과 동시에 관통이 어려워집니다. 참고로 기본값은 0.8로 약간 평행하게 설정되어 있습니다.

### 쭈그러짐 애니메이션 조정 방법
마쥬마로 PB는 찌그러질 때 가슴뼈를 애니메이션으로 스케일 변경하여 쫄깃쫄깃하게 만듭니다. 쪼개짐 애니메이션을 변경하려면 'marshmallow_PB/Animation/MPB_L_Scale_squish・MPB_R_Scale_squish'의 2가지 애니메이션의 Scale의 x와 y 파라미터를 변경해 주세요.

### 잡기 기능을 끄고 싶은 경우
설정 항목의 움켜쥐기 기능을 끄십시오.

### 아바타 프리셋을 추가하는 방법
<img
  src={require('/img/preset.png').default}
  style={{ width: '400px' }}
/> /> 아바타 프리셋 설정
아바타 프리셋 설정은 marshmallow_PB/Setup/Preset 폴더에 존재합니다.  

설정 항목  
Path  
가슴뼈와 콜리더의 아바타로부터의 상대적인 경로입니다.  

breast_L_position, breast_L_scale  
각각 marshmallow_PB_L의 로컬 좌표와 스케일입니다. 참고로 marshmallow_PB_R의 좌표는 L의 좌표를 뒤집어서 설정합니다.  

(Parameter)_0, (Parameter)_100  
가슴의 blendshape가 0, 100일 때의 값을 넣습니다. 중간 값은 이 파라미터에서 보완됩니다. 각 파라미터는 설정 항목의 PhysBone의 파라미터에 해당한다.  


새로운 아바타의 프리셋을 만들려면 가슴의 blendshape가 0과 100인 두 개의 아바타를 준비하여 각각 비지원 아바타와 동일하게 marshmallow_PB_L을 설정하고, 이때의 로컬 좌표, 스케일을 기록합니다. 0을 복제하고 아바타 이름, Path, breast_L_position, breast_L_scale을 각각 변경합니다. 다른 파라미터는 그대로 두어도 기본적으로 문제가 없습니다. 설정 도구에서 확인하여 프리셋이 추가되었다면 완료입니다.

만약 비지원 아바타를 설정하여 공식적으로 제공해도 괜찮다면 [여기 Googlefrom](https://forms.gle/9qfEqBHDyiEisy4G9)으로 보내주시기 바랍니다.


### 수동으로 도입하고 싶은 경우(Prefab 등)
마쥬마로 PB를 툴을 사용하지 않고 수동으로 도입하고 싶으시다면 이 동영상을 참고하세요. (비추천)
<iframe width="280" height="158" src="https://www.youtube.com/embed/pKpk3hQhihc?si=trFn__bA0hqWF_76" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>