---
sidebar_position: 4
---

# additional features

### Head collider setting
When Masyumaro PB is set to "chest interference with other players", even players without Masyumaro PB can interfere with the default head collider. However, since the normal head collider is small in size and difficult to interfere with, it is effective to increase the size of the collider by changing the "Colliders" item in Avatar Descripter.
<img
  src={require('/img/head.png').default}
  style={{ width: '400px' }}
/>

### If you want to use the original PB
If you want to use the original PB and use only the Masyumaro PB's blurring function, turn on the "Apply only blurring function (using the original PB)" setting item. Basically, the original PB will remain in motion, but it will be squashed when pressed. When using the grabbing function, it is recommended that Allow Grabbing of the original PB be turned off.

### Using Parallel Breast Bone
Decreasing the "Breast Rotation Contribution" will cause the chest to move parallel. The closer to equilibrium, the more weight and at the same time the less likely it is to penetrate. Note that the default value is 0.8, so it is slightly parallelized.

### How to adjust the crush animation
Masyumaro PB is made chunky by animating and rescaling the breast bone when it is collapsed. If you want to change the crush animation, change the x and y parameters of Scale in the two animations "marshmallow_PB/Animation/MPB_L_Scale_squish and MPB_R_Scale_squish".

### To turn off the grab function
Please turn off the grabbing function in the settings item.

### How to add avatar preset
<img
  src={require('/img/preset.png').default}
  style={{ width: '400px' }}
/>
The avatar preset settings exist in the marshmallow_PB/Setup/Preset folder.  

Settings  
Path  
The path of the breast bone and collider relative to the avatar.  

breast_L_position, breast_L_scale  
Local coordinates and scale of marshmallow_PB_L, respectively. Note that the coordinates of marshmallow_PB_R are set by inverting the coordinates of L.  

(Parameter)_0, (Parameter)_100  
The values are set when the blendshape of the breast is 0 or 100. The intermediate values are complemented from this parameter. Each parameter corresponds to a PhysBone parameter in the settings section.  


To create a new avatar preset, prepare two avatars with chest blendshape of 0 and 100, set marshmallow_PB_L for each of them in the same way as for the non-compliant avatar, and record the local coordinates and scale at that time. preset in the Preset folder 0 and change avatar name, Path, breast_L_position, and breast_L_scale respectively. The other parameters can basically be left as they are. Check the setup tool and if the preset has been added, you are done.

If you set up a non-compliant avatar and are willing to provide it officially, please send it to [Googlefrom here](https://forms.gle/9qfEqBHDyiEisy4G9).


### If you want to install manually (e.g. Prefab)
If you want to install Masyumaro PB manually without using tools, please refer to this video. (Deprecated)
<iframe width="280" height="158" src="https://www.youtube.com/embed/pKpk3hQhihc?si=trFn__bA0hqWF_76" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>