(function (){ var i=0; //即時関数で囲んでグローバル変数を消すため、この行はこのままで

//★画像指定。増減可能。画像を順番に'●',と区切って、いくつでも並べる。最後の ] の前には ,(カンマ) 無し
var ga=["ab1.png","ab2.png","ab3.png","ab4.png","ab5.png"];
var Zx=-1;            //★文章の上に泡が流れるか？　上に流れる：1   下に隠れる：-1
var maxImg=30;        //★泡の最大横幅指定。画像の実寸とは無関係です。最小横幅は3px指定済み。原本の最大横幅指定25
var Amount=100;       //★原本10。表示画数。
var spd=100;          //★原本10。小さいほど速い。速度が違うと残像数が変わり、見え方が違う
var maxOp=0.7;        //★透過の最大値。ランダム変化です。0.1から1の間で指定。miniOpより同じか大きくする
var miniOp=0.2;       //★透過の最小値。ランダム変化です。0.1から1の間で指定 。maxOpより同じか小さくする。

var Ypos=[],Xpos=[],Speed=[],rate=[],grow=[],Step=[],Cstep=[];
var opa=[];//■追加
var WinHeight=window.innerHeight, WinWidth=window.innerWidth-maxImg;
for (i=0; i<Amount; i++){
var randomGa=ga[Math.floor(Math.random()*ga.length)];//■追加
document.write('<img src="'+randomGa+'"id="si'+i+'" style="position:fixed; z-index:'+Zx+';">');
Ypos[i] = Math.round(Math.random()*WinHeight);
Xpos[i] = Math.round(Math.random()*WinWidth);
Speed[i]= 10+Math.random()*5;
Cstep[i]=0;
Step[i]=Math.random()*0.1+0.05;
grow[i]=10;
rate[i]=Math.random()*0.5+0.1;
opa[i]=Math.random()*(maxOp-miniOp)+miniOp;//■追加
}
function bubbles(){
for (i=0; i<Amount; i++){
var sy=Speed[i]*Math.sin(270*Math.PI/180);
var sx=Speed[i]*Math.cos(Cstep[i]);
Ypos[i]+=sy; Xpos[i]+=sx;
if (Ypos[i]<-50){
Ypos[i]=WinHeight;
Xpos[i]=Math.round(Math.random()*WinWidth);
Speed[i]=10+Math.random()*5; grow[i]=3;
}
var layer=document.getElementById("si"+i).style;
layer.left=Xpos[i]+"px"; layer.top=Ypos[i]+"px";
layer.width=grow[i]+"px";
layer.height=grow[i]+"px";
layer.opacity=opa[i];//■追加
grow[i]+=rate[i]; Cstep[i]+=Step[i];
if (grow[i]>maxImg-1) grow[i]=maxImg;
}
setTimeout(bubbles,spd);
}
bubbles();
}());
