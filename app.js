// <i class="ri-pause-circle-line"></i>
let startbtn=document.getElementById("start");
let resetbtn=document.getElementById("reload");
let pausebtn=document.getElementById("pause");
let lapbtn=document.getElementById("lap");

let s=0;
let m=0;
let h=0;
let ms=0;
let flag=false;
let flagptr=null;
let lapcount=0;

function starter(){
    ms++;
    if(ms==100){
        s++;
        ms=0;
        if(s==60){
            s=0;
            m++;
            if(m==60){
                m=0;
                h++;
            }
        }
    }
    document.getElementById("display").innerHTML=`<p id="display">${(h<10)?'0'+h:h} : ${(m<10)?'0'+m:m} : ${(s<10)?'0'+s:s}<span id="milidisplay"> : ${(ms<10)?'0'+ms:ms}</span></p>`;
}
startbtn.addEventListener('click',()=>{
    document.getElementById('start').style.display='none';
    document.getElementById('pause').style.display='inline-block';
    if(!flag){
        flagptr=setInterval(starter,10);
        flag=true;
    }
});
pausebtn.addEventListener('click',()=>{
    document.getElementById('start').style.display='inline-block';
    document.getElementById('pause').style.display='none';
    if(flag){
        clearInterval(flagptr);
        flag=false;
    }
    
});
resetbtn.addEventListener('click',()=>{
        document.getElementById('start').style.display='inline-block';
        document.getElementById('pause').style.display='none';
        clearInterval(flagptr);
        flag=false;
        h=0;
        m=0;
        s=0;
        ms=0;
        document.getElementById("display").innerText="00 : 00 : 00";
        document.getElementById("milidisplay").innerText=" : 00"
})

lapbtn.addEventListener('click',()=>{
    lapcount++;
    document.getElementById("laptab").style.display="inline-block"
    let val=document.getElementById('display').innerText+document.getElementById('milidisplay').innerText;
    document.getElementById("laptab").innerHTML+=`<tr><td>${lapcount}</td><td>${document.getElementById('display').innerText}</td></tr>`

})
{/* <tr>
<td>1</td>
<td>1</td>
<td>00:00:01</td>
</tr> */}