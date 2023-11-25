---
sidebar_position: 3
---

# How to adjust
### Setup tool settings

<img
  src={require('/img/setup.png').default}
  alt="hitaioou"
  style={{ width: '400px' }}
/>

--- ...
### Basic Settings  

Preset  
This is where you select the corresponding avatar.

Chest Bone  
This is where you select the breast bone.

Breast Size (blendshape)  
Enter the value of the shape key that will increase the size of the **breasts** of supported avatars. If you want to set it with a smaller shape key, set it the same way as for non-supported avatars.

Y scale value of the breast bone (Transform)  
If you are changing the scale of the breast bone, enter the Y scale value; the X and Z scale values are not necessary. The X and Z scale values are not necessary, but will work fine even if the XYZ scale values of the breastbone are different.

PB Preset  
This is where you select the PB preset. There are 5 types: very soft, soft, normal, firm, and very firm.

---PhysBone Preset

### PhysBone  

Pull  
This parameter is used to set the strength of PB to pull back the shape of PB.

Momentum  
The parameter of spring strength of PB.

Stiffness  
Stiffness is a parameter of PB's stiffness.  

Gravity  
This is a parameter of the strength of gravity applied to the PB.

GravityFalloff  
This is a parameter that determines how well the PB retains its shape under gravity. If the PB is shifted from its original angle, the effect becomes smaller and the PB is affected by gravity.

Immobile  
This is a parameter that determines how difficult it is for the PB to move. This value does not affect the movement by the collider.

LImitAngle  
Limit angle of the PB.

CollisionRadius  
Size of the PB collider. The larger this value, the larger the judgment when the chest is touched.

LimitColliderPosition  
This is a parameter for the position of the collider that limits the PB for preventing penetration, which has not been functioning since ver1.7.0 due to specification changes.

StretchMotion  
This is an inertia parameter that determines how easily the PB is squashed. If this value is large, the avatar's chest will be strongly inertialized and squashed when the avatar moves forward.

MaxStretch  
The maximum value of PB's stretch. The larger this value, the longer the PB will stretch.

MaxSquish  
This is the maximum value of squish of PB. If this value is increased, the PB will be squished deeper. If this value is decreased, the PB will be squished shallower, making it more difficult to penetrate.

Collider  
Collider that interferes with PB. 5 colliders can be set.

---Up to 5 colliders can be set.

### Advanced Settings 

Grabbing Function  
Set whether or not the PB can be grabbed.

Floor collider  
Sets whether the PB can interfere with the floor.

Breast to Breast Interference with Other Players  
Sets the ability to interfere chest to chest with other players with Masyumaro PBs. In addition to the chest, it can also interfere with the default collider on the head.  

Breast to Breast Interference  
Sets whether or not to place colliders that interfere with both breasts of the avatar.

Collider Size  
Sets the size of the collider for interference between breasts.

Contribution of chest rotation   
Adjusts how much the movement of the Masyumaro PB contributes to the rotation of the breastbone; if set to 0, the breastbone will move in parallel. Depending on the clothing, the closer to 0, the less likely it is to penetrate. Equivalent to the Weight of the chest bone's Rotation Constraint.

Crush Animation Strength  
Adjusts the strength of the breast crush animation. If the breasts are large, they will collapse too much in the horizontal direction, but a smaller value makes it more natural. Equivalent to Weight in the Scale Constraint of the breast bone.

Breast Drooping Likelihood  
Sets the maximum amount of sagging of the chest when bending down; if set to 0, the chest will hardly sag at all.

---If set to 0, little or no drooping will occur.

### Advanced Settings
Apply only the crush function (use original PB)  
This option leaves the avatar's original PB as it is, and applies only the muscular PB's squash function. Specifically, the original PB is left in place with the Masyumaro PB's shaking function turned off. If used, it is recommended that Allow Grabbing of the original PB be turned off.

Crushing function off (anti-penetration)  
The Masyumaro PB will not be crushed and only the shaking function will be applied. Please turn it on for clothes that inevitably penetrate.

Gravity function off  
Masyumaro PB will not be squashed when it is on its back, and will not be stretched when it is bent over. The Gravity parameter of Masyumaro PB is not disabled because the gravity reproduction mechanism of Masyumaro PB is disabled.

Delete all subordinate PBs  
Deletes all PBs under the chest bone. Normally, only PBs set to the chest bone are deleted. Turn on if the avatar has a complex PB structure.