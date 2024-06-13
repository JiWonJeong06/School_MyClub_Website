//질문 (랜덤으로 뽑기)
//질문과 답과 같은 지 확인하기
//점수 올리기
document.getElementById('randomButton').addEventListener('click', showRandomImage);


function RandomQuestion() {
    const input = document.getElementById('fileInput');
    const files = input.files;

    if (files.length == 0) {
        alert('Please select some images first.');
        return;}
    
}

function Answer() {

}

function Score() {

}