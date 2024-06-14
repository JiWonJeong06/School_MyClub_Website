var score = document.getElementById('score');
var Startbutton = document.getElementById('Startbutton');
var InputDown = document.getElementById('InputDown');
var Surren = document.getElementById('surrenderButton');
var ImageQuestion = document.getElementById('preview');
var Guider = document.getElementById('Guide');
var addscore = 0;
var GameImage = "images/main cofocofo.png";
var Questions = [

];
var currentImage = ''; // 현재 이미지를 저장할 변수

// 초기에는 버튼 비활성화
Surren.disabled = true;
InputDown.disabled = true;

// 게임 시작
function Start() {
    Guider.textContent ='※안내※ 게임 시작';
    Surren.disabled = false;
    InputDown.disabled = false;
    Startbutton.disabled = true;
    RandomQuestion(); // 게임 시작 시 첫 번째 질문 표시
}

Startbutton.addEventListener('click', Start);






// 랜덤 질문
function RandomQuestion() {
    if(Questions.length === 0) {
        Guider.textContent ='※안내※ 문제가 더 이상 없습니다.';
        score.textContent = '최종 점수: ' + addscore+' 점';
        Surren.disabled = true;
        InputDown.disabled = true;
        Surren.textContent = '다시하기';
        ImageQuestion.src = GameImage;
        return;
        }
        
    var randomIndex = Math.floor(Math.random() * Questions.length);
    currentImage = Questions[randomIndex]; // 현재 질문 저장
    ImageQuestion.src = 'picture/logo/' + currentImage + '.png';
    Questions.splice(randomIndex, 1);
}

// 정답 확인
function FactCheck() {
    var MyAnswer = InputDown.value.toLowerCase().replace(/\s/g, '');
    
    if (MyAnswer === currentImage) {
        Guider.textContent ='※안내※ 정답';
        addscore++;
    } else {
        Guider.textContent ='※안내※ 오답';
    }
    score.textContent = '점수: ' + addscore+' 점';
    InputDown.value = "";
    RandomQuestion(); // 다음 질문 로드
    Surren.disabled = false;
}

InputDown.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        FactCheck();
    }
});

// 포기 및 다시하기 버튼
if (Surren) {
    Surren.addEventListener('click', function(){
        if (Surren.textContent !== '다시하기') {
            ImageQuestion.src = GameImage;
            Guider.textContent ='※안내※ 게임 포기';
            score.textContent = '최종 점수: ' + addscore+' 점';
            Startbutton.disabled = true;
            InputDown.disabled = true;
            Surren.textContent = '다시하기';
        } else {
            location.reload();
        }
    });
}
