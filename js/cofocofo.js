//질문 (랜덤으로 뽑기)
//질문과 답과 같은 지 확인하기

var score = document.getElementById('score');
var Ranbutton = document.getElementById('randomButton');
var InputDown = document.getElementById('InputDown');
var Surren = document.getElementById('surrenderButton');
var addscore = -1;

var preview = document.getElementById('preview');

var Questions = [
    
];
Surren.disabled = true;
InputDown.disabled = true;
//버튼과 엔터를 눌렀을 때 상호 작용과 점수 올리기
if (Ranbutton && InputDown) {
    
    Ranbutton.addEventListener('click', function(){
    alert('버튼 클릭');
    Ranbutton.textContent = "Enter";
    addscore++;
    score.textContent = '점수: ' + addscore;
    Surren.disabled = false;
    InputDown.disabled = false;
});
    InputDown.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        alert('Enter 동작 감지');
        Ranbutton.textContent = "Enter";
        addscore++;
        score.textContent = '점수: ' + addscore;
        Surren.disabled = false;
    }
});

}



//포기하고 다시하기 버튼
if (Surren) {
    Surren.addEventListener('click', function(){
    alert('게임 종료');
    score.textContent = '최종 점수: ' + addscore;
    Ranbutton.disabled = true;
    InputDown.disabled = true;
    Surren.textContent = '다시하기';
    if (Surren.textContent === '다시하기') {
        Surren.addEventListener('click', function() {
            location.reload();
        });   
    }
    
});
}