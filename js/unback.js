// unback.js

// 현재 페이지 히스토리 상태를 하나 추가해서 뒤로가기 이벤트를 트리거하도록 함
window.history.pushState(null, null, window.location.href);

// 뒤로가기를 누르면 실행되는 이벤트
window.addEventListener('popstate', function(event) {
  // index.html로 강제 이동 (절대경로 또는 상대경로 맞게 조정 가능)
  window.location.href = 'index.html';
});
