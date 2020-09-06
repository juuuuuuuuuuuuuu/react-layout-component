import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, selectedMenu } from '../store/main';
import useLocation from '../hooks/useLocation';

function Navigation() {
  const data = useSelector(selectedMenu);
  // 커스텀 hook
  const { handleRouter, historyPush } = useLocation();

  /**
   * 페이지 이동시 호출되는 콜백함수
   * @param {Object} e event
   * @param {number} index index
   */
  function handleClick(e, index) {
    e.preventDefault();
    // 페이지 이동
    handleRouter(index);
    historyPush(index)
  }

  return (
    <aside id='menu'>
      <div id='navigation'>
        <ul className='nav' id='side-menu'>
          {Menu.map((list, index) => (
            <li
              className={list.title === data.title ? 'active' : ''}
              key={index}
            >
              <a
                href='#'
                onClick={(e) => handleClick(e, index)}
              >
                <span className='nav-label'>{list.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
export default Navigation;
