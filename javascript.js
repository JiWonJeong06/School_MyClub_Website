//스크롤 함수
function Scroll(className) {
    const element = document.querySelector(className);
    element.scrollIntoView({ behavior: 'smooth'});
}
//이벤트 함수
//웹페이지 함수

function GoToPagedcoder() {
    document.location.href  = "http://www.dcoder.kr/"
}
function GoToPageRank() {
    document.location.href  = "http://www.dcoder.kr/ranklist.php"
}
//다운 함수