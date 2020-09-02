import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSize } from '../store/main';
import changeClass from '../util/changeClass';

/**
 * window resize시 작동하는 hook
 */
function useResize() {
  const disaptch = useDispatch();

  useEffect(() => {
    function handleResize() {
      disaptch(setSize({ width: window.innerWidth, height: window.innerHeight }));
      // width 사이즈에 따라 body 클래스 변경
      changeClass(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    // load시 실행
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
}
export default useResize;
