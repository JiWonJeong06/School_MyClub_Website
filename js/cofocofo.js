var score = document.getElementById('score');
var Startbutton = document.getElementById('Startbutton');
var InputDown = document.getElementById('InputDown');
var Surren = document.getElementById('surrenderButton');
var ImageQuestion = document.getElementById('preview');
var Guider = document.getElementById('Guide');
var addscore = 0;
var GameImage = "images/main cofocofo.png";
var Questions = [
   '남극','네팔','노르웨이','대한민국','미국','바레인','방글라데시','베냉','베트남','벨기에','벨라루스','벨리즈','보스니아헤르체고비나',
   '보츠와나','볼리비아','부르키나파소','부탄','북아일랜드','불가리아','브라질','브루나이','소말리아','수리남','스위스','스코틀랜드','아랍에미리트',
   '아르메니아','아르헨티나','아제르바이잔','아프가니스탄','안도라','알바니아','앙골라','앤티가바부다','영국','오스트레일리아','오스트리아','우루과이',
   '웨일스','일본','잉글랜드','조선민주주의인민공화국','중국','중앙아프리카공화국','칠레','카메룬','캄보디아','캐나다','케냐','코트디부아르','콩고공화국',
   '콩고민주공화국','튀르키예'


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
    ImageQuestion.src = 'CofoCofoQuestion/' + currentImage + '.png';
    Questions.splice(randomIndex, 1);
}

// 정답 확인
function FactCheck() {
    var MyAnswer = InputDown.value.toLowerCase().replace(/\s/g, '');
    
    if (MyAnswer === currentImage) {
        Guider.textContent ='※안내※ 정답';
        addscore++;
    } else {
        Guider.textContent ='※안내※ 오답' +'답: '+ currentImage;
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
if (Surren ) {
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
