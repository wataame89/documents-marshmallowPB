---
sidebar_position: 2
---


# 도입 방법
아래 동영상을 참고하세요.

<iframe width="560" height="315" src="https://www.youtube.com/embed/17p4SnL1kus?si=og9SA6Ef8Rwkg3_-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

1. VRChat Creator Companion(VCC)에서 프로젝트를 엽니다.  
2. [Modular Avatar](https://modular-avatar.nadena.dev/ja/)의 패키지를 VCC에 도입한다. ([패키지 링크는 여기](vcc://vpm/addRepo?https://vpm.nadena.dev/vpm.json))  
3. VCC에서 프로젝트의 Manage Project에서 "**Gesture Manager**", "**Modular Avatar**", "**Non-Destructive Modular Framework**" 3가지를 추가합니다.  
4. 다시 프로젝트를 열고 **ver1.7.0 이전 또는 베타 버전의 마시멜로 PB가 들어있는 경우**는 'marshmallow_PB/Setup/FX' 내 생성된 FX를 이동하고 marshmallow_PB 폴더를 삭제합니다. (삭제하지 않으면 에러가 발생합니다.)   
5. [최신 버전의 마시멜로 PB](https://wataame89.booth.pm/items/4511536)를 불러옵니다.  
6. 아바타를 마우스 오른쪽 버튼으로 클릭하고, 메뉴에서 wataameya→MarshmallowPB를 클릭합니다.  
7. 생성된 marshmallow_PB_Setup의 프리셋을 설정합니다.  
8. 화면 상단의 메뉴바에서 Tools → Gesture Manager Emulator를 누른다.  
9. Gesture Manager를 실행하여 정상적으로 동작하면 설정이 완료됩니다.  

마쥬마로 PB가 설정된 아바타를 설정하고 싶다면 [여기를 참고하여 마쥬마로 PB를 제거한 후 설정하세요](https://wataame89.github.io/documents-marshmallowPB/trouble)

### 비지원 아바타로 설정하고 싶은 경우
이 동영상을 참고하세요.

<iframe width="560" height="315" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

1. 아바타를 마우스 오른쪽 버튼으로 클릭하고 메뉴에서 wataameya→MarshmallowPB를 클릭한다.  
2. 생성된 marshmallow_PB_Setup을 프리셋 없음으로 두고 가슴뼈를 설정합니다. 동영상에서는 켜져 있지만, 가슴 PB는 꺼두는 것이 좋습니다.  
3. marshmallow_PB_Setup 아래 "For Unsupported Avatar/marshmallow_PB_L"을 켭니다.
4. 녹색 캡슐 콜리더의 위치를 확인합니다. 보이지 않는다면 Scene 상단의 Gizmos를 클릭하세요.
5. 캡슐 콜리더를 아바타의 왼쪽 가슴 부분으로 이동 및 스케일 조정합니다. 기준은 바로 옆에서 봤을 때 가슴의 곡선(빨간색 선 부분)에 피벗 부분(XYZ 방향으로 움직이는 부분)의 중심이 위치하도록 설정합니다.  
6. 캡슐 콜리더 부분이 가슴에 맞게 스케일을 변경합니다.
7. Gesture Manager를 실행하여 정상적으로 동작하면 설정이 완료된 것입니다.

<img
  src={require('/img/hitaioou2.png').default}
  alt="hitaioou"
  style={{ width: '450px' }}
/>


### Modular Avatar를 사용하지 않는 방법(구 방식)
:::caution
아바타와 FX 레이어를 중복으로 설정하기 때문에 현재는 권장하지 않습니다.  
특별한 이유가 없다면 새로운 방식을 사용하시기 바랍니다.
::::: 참고

아래 동영상을 참고하세요.

<iframe width="280" height="158" src="https://www.youtube.com/embed/739tyxA7PKo?si=FkVczSvkKsqLBcV9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


동작 확인에 전용 컴포넌트(Gesture Manager)를 사용하기 때문에 VRChat Creator Companion(VCC)에서만 지원합니다.  
(비추천이지만, 동작 확인을 VRChat으로 할 경우 VCC가 아니어도 정상적으로 동작합니다.)

[구버전 설명서 바로가기](https://docs.google.com/document/d/1dvbHSSSIGPoFFt5rA9RUba8309XX7bLs-4dKND2Bam0/edit?usp=sharing)