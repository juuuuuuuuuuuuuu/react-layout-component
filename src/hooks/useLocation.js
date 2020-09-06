
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setPage } from '../store/main';

/**
 * 페이지 이동 hook
 */
function useLocation() {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleRouter(path) {
    dispatch(setPage(path));
  }

  function historyPush(path) {
    history.push({ pathname: `page${path + 1}`})
  }

  return { handleRouter, historyPush }
}
export default useLocation;