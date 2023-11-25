---
sidebar_position: 2
---

# How to install
Please refer to this video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/17p4SnL1kus?si=og9SA6Ef8Rwkg3_-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

1. open your project in VRChat Creator Companion (VCC).  
2. install the package [Modular Avatar](https://modular-avatar.nadena.dev/ja/) into VCC. ([Link to package here](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json))  
3. add "**Gesture Manager**", "**Modular Avatar**" and "**Non-Destructive Modular Framework**" from Manage Project in VCC.  
4. reopen the project and move the generated FX in "marshmallow_PB/Setup/FX" and delete the marshmallow_PB folder if it contains **ver1.7.0 or earlier or beta version of Masyumaro PB**. (Failure to do so will result in an error.)   
5. import the [latest version of Marshmallow PB](https://wataame89.booth.pm/items/4511536).  
Right-click on the avatar and click wataameya→MarshmallowPB from the menu. 7.  
7. set the generated marshmallow_PB_Setup preset. 8.  
Press Tools→Gesture Manager Emulator from the menu bar at the top of the screen. 9.  
9. start the Gesture Manager and if it is working properly, the setup is complete.  

If you want to set up an avatar that has already been set up with Masyumaro PB, [please remove Masyumaro PB before setting it up by referring to this link]. (https://wataame89.github.io/documents-marshmallowPB/trouble)

### If you want to set an avatar that does not support Masyumaro PB
Please refer to this video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

1. right-click on the avatar and click on wataameya→MarshmallowPB from the menu  
2. leave the generated marshmallow_PB_Setup with no preset and set the breast bone. It is recommended that the chest PB be turned off, although it is left on in the video. 3.  
Turn on "For Unsupported Avatar/marshmallow_PB_L" under marshmallow_PB_Setup. 4.
Check the position of the green capsule collider. If you do not see it, click on Gizmos at the top of the Scene. 5.
Move and scale the capsule collider to the left chest area of the avatar. As a rough guide, set the center of the pivot part (the part to be moved in the XYZ direction) to be located on the curve of the chest (red line) when viewed from the right side. 6.  
Change the scale so that the capsule collider fits into the chest. 7.
7. launch the Gesture Manager, and if it is working properly, the setting is complete.

<img
  src={require('/img/hitaioou2.png').default}
  alt="hitaioou"
  style={{ width: '450px' }}
/>


### How not to use Modular Avatar (old method)
:::caution
This method is now deprecated because it duplicates and sets up avatars and FX layers.  
Use the new method unless there is a special reason.
:::::caution

Please refer to this video.

<iframe width="280" height="158" src="https://www.youtube.com/embed/739tyxA7PKo?si=FkVczSvkKsqLBcV9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


Only compatible with VRChat Creator Companion (VCC) as it uses a dedicated component (Gesture Manager) to check its operation.  
(It is deprecated, but if you are using VRChat to check the operation, it will work fine even without VCC.)

[For instructions for the old method, click here](https://docs.google.com/document/d/1dvbHSSSIGPoFFt5rA9RUba8309XX7bLs-4dKND2Bam0/edit?usp=sharing)