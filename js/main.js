//초기 변수값
let num = 0;
let targetX = 0;//목적값
let count = 0; //카운트
let action = 500; //이미지 전화시간의 간격
let sWidth = 1084; //li 의 가로크기
let sNum = 11; //li의 숫자
let go = true; //진행 시 논리 값

window.onresize = function(){
	window.location.reload();
}
//기본 셋업하기 onload
// window.addEventListener('DOMContentLoaded',(event)=>{});
window.addEventListener('DOMContentLoaded',(event)=>{
//  필요소스 복제
// temp-> ul 복제
//  #gall -> 뒤로 temp 넣기
const temp = document.querySelector('.slick-track').cloneNode(true);
document.querySelector('.slick-list').append(temp);
// 스타일 정리
// .box-> width
// #gall -> width
document.querySelector('.slick-track').style.width = sWidth*sNum + 'px';
document.querySelector('.slick-list').style.width = (sWidth*sNum)*2 +'px';
// timer 작동
setInterval(motion,10);
//  이벤트 정리
//  li 들
const btn = document.querySelectorAll('.slick-track>li');

btn.forEach((btn)=>{
    btn.addEventListener('mouseover',(event)=>{
        go = false;
    })
});
btn.forEach((btn)=>{
    btn.addEventListener('mouseout',(event)=>{
        go = true;
    })
});

//  버튼
 const Prev = document.querySelector('.TopBanner_prevArrow__B7nqk');
 const Next = document.querySelector('.TopBanner_nextArrow__6wqx0');
 Prev.addEventListener('click', prev);
 Next.addEventListener('click', next);

// circle
const cirM = document.querySelectorAll('.nav>li');
cirM.forEach((cirm)=>{
    cirm.addEventListener('click',(event)=>{
        const data = cirm.getAttribute('data-num');
        console.log(data);
        cir = data;
        circle();
        targetX = -sWidth * (data-1);
    })
})

});

//기본 움직임 제어
function motion(){
//  작동 go-> true, false -> stop

if(go){++ count;
document.querySelector('#info').innerHTML = count;

if(count == action){
    // next();
    next();
    count = 0;
}
}

num += 0.1 * (targetX - num);
document.querySelector('.slick-list').style.left = num + 'px';

}

//circle기본
let cir = 1;
function circle(){
    for(i=1 ; i<=sNum ; i++){
        document.querySelector('#g'+i).style.backgroundColor = 'blue';
    }
    document.querySelector('#g'+cir).style.backgroundColor = 'red';
}
//prev방향
function prev(){
    targetX += 1084;
    if(targetX > 0){
        num = -sWidth * sNum;
        targetX = -sWidth*(sNum-1) ;
    }
    // circle
    cir --;
    if(cir < 1){cir = sNum;}
    circle();
}

//next방향
function next(){
    //  기본 움직임
    targetX -= 1084;
    //  조건
    if(targetX < -sWidth * (sNum*2 -1)){
        num = -sWidth * (sNum-1);
        targetX = -sWidth * sNum;
    }
    // circle
    cir ++ ;
    if(cir > sNum){ cir = 1;}
    circle();
}

// 에러 캡쳐 -> 모니터 -> 명령어
