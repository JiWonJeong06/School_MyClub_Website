//스크롤 함수
function Scroll(className) {
    const element = document.querySelector(className);
    element.scrollIntoView({ behavior: 'smooth'});
}
//웹페이지 함수

function GoToPagedcoder() {
    document.location.href  = "http://www.dcoder.kr/"
}
function GoToPageRank() {
    document.location.href  = "http://www.dcoder.kr/ranklist.php"
}

function GotoStore() {
    document.location.href = "store.html"
}
//다운 함수

//이벤트 함수