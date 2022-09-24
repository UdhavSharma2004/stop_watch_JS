// <i class="ri-pause-circle-line"></i>
let startbtn=document.getElementById("start");
let resetbtn=document.getElementById("reload");
let pausebtn=document.getElementById("pause");

let s=0;
let m=0;
let h=0;
let flag=false;
let flagptr=null;
function starter(){
    s++;
    if(s==60){
        s=0;
        m++;
    }
    if(m==60){
        m=0;
        h++;
    }
    document.getElementById("display").innerText=`${(h<10)?'0'+h:h} : ${(m<10)?'0'+m:m} : ${(s<10)?'0'+s:s}`
}
startbtn.addEventListener('click',function(){
    document.getElementById('start').style.display='none';
    document.getElementById('pause').style.display='inline-block';
    if(!flag){
        flagptr=window.setInterval(starter,1000);
        flag=true;
    }
});
pausebtn.addEventListener('click',function(){
    document.getElementById('start').style.display='inline-block';
    document.getElementById('pause').style.display='none';
    if(flag){
        clearInterval(flagptr);
        flag=false;
    }
    
});
resetbtn.addEventListener('click',()=>{
        document.getElementById('reload').style.animation="anim";
        document.getElementById('reload').style.animationDuration=".5s";
        document.getElementById('start').style.display='inline-block';
        document.getElementById('pause').style.display='none';
        clearInterval(flagptr);
        flag=false;
        h=0;
        m=0;
        s=0;
        document.getElementById("display").innerText="00 : 00 : 00";
})