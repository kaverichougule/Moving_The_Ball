let ball=document.getElementById("ball");
document.addEventListener('keydown',moveBall);

let t=0;
let l=0;
function moveBall(event){
    let browserHeight=document.documentElement.clientHeight;
    let browserWidth=document.documentElement.clientWidth;
    console.log(browserHeight,browserWidth)
    let elementWidth=ball.offsetWidth;
    let key=event.keyCode;
    console.log(key);

    if(key==68 || key==39){
        if(l+elementWidth +10 <= browserWidth){
            ball.style.left=l+10+"px";
            l+=10;
        }
    }

    if(key==83 || key==40){
        if(t+elementWidth+10<=browserHeight){
            ball.style.top=t+10+"px";
            t+=10;
        }
    }
    if(key==87 || key==38){
        if(t-10>=0){
            ball.style.top=t-10+"px";
            t-=10;
        }
    }
    if(key==65 || key==37){
        if(l-10 >= 0){
            ball.style.left=l-10+"px";
            l-=10;
        }
    }
}