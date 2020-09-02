/**
 * 브라우저 넓이(width)가 768px 이하로 축소될 때 클래스 수정
 */
function changeClass(width) {
  if (width < 768) {
    document.querySelector('body').className = 'page-small';
  } else {
    document.querySelector('body').className = 'page';
    document.querySelector('body').className = '';
  }
}
export default changeClass;