//질문 (랜덤으로 뽑기)
//질문과 답과 같은 지 확인하기

var score = document.getElementById('score');
var Ranbutton = document.getElementById('randomButton');
var InputDown = document.getElementById('InputDown');
var Surren = document.getElementById('surrenderButton');
var ImageQuestion = document.getElementById('preview');
var addscore = 0;


var Questions = [
    '경동대학교',
    '경성대학교',
    '경운대학교',
    '고신대학교',
    '경희대학교(서울)',
    '고려대학교(서울)',
    '경찰대학교'
];

Surren.disabled = true;
InputDown.disabled = true;


function RandomQuestion() {
    var radomImage = Math.floor(Math.random() * Questions.length);
    return Questions[radomImage];

}
function UploadIamge() {
   var randomimage = RandomQuestion();
   ImageQuestion.src = 'picture/logo/' + randomimage + '.png';
} 

function AnswerSame() {
    UploadIamge();

    var MyAnswer = InputDown.value;
    alert(RandomQuestion());
    if(RandomQuestion() == MyAnswer) {
        addscore++;
        score.textContent = '점수: ' + addscore;
        alert('정답');
        InputDown.value = ""
    }
    else{
        alert('틀렸다.');
    }
 }


//버튼과 엔터를 눌렀을 때 상호 작용과 점수 올리기
if (Ranbutton && InputDown) {
    
    Ranbutton.addEventListener('click', function(){
    if (InputDown.disabled === true) { 
        alert('게임시작'); 
        Ranbutton.textContent = "엔터";
        Surren.disabled = false;
        InputDown.disabled = false;
    }
    else{

    AnswerSame();

   
    }
});
    InputDown.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        Ranbutton.textContent = "엔터";
        AnswerSame();
        Surren.disabled = false;
    }
});
}



//포기하고 다시하기 버튼
if (Surren) {
    Surren.addEventListener('click', function(){
    if(!(Surren.textContent === '다시하기')) {alert('게임 종료');}
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