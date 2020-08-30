/**
 * resize hook
 * (브라우저 넓이(width)가 768px 이하로 축소될 때 클래스 수정)
 */
function useResize() {
  window.addEventListener('load', handleResize);
  window.addEventListener('resize', handleResize);

  function handleResize() {
    const width = window.innerWidth;

    if (width < 768) {
      document.querySelector('body').className = 'page-small';
    } else {
      document.querySelector('body').className = 'page';
      document.querySelector('body').className = '';
    }
  }
}
export default useResize;
