import React, { useState } from 'react';
import { Menu } from '../../store/main';
import useLocation from '../../hooks/useLocation';

function MobileNavigation() {
  // 메뉴 open 여부
  const [open, setOpen] = useState(false);
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
    historyPush(index);
    // 버튼 off 처리
    handleButton();
  }

  /**
   * 버튼 클릭시 콜백함수 (on/off 처리)
   */
  function handleButton() {
    setOpen(state => !state);
  }

  return (
    <div className='mobile-menu'>
      <button
        type='button'
        className='navbar-toggle mobile-menu-toggle'
        data-toggle='collapse'
        data-target='#mobile-collapse'
        onClick={handleButton}
      >
        <i className='fa fa-chevron-down'></i>
      </button>
      <div className={open ? 'collapse mobile-navbar in' : 'collapse mobile-navbar'} id='mobile-collapse'>
        <ul className='nav navbar-nav'>
          {Menu.map((list, index) => (
            <li key={index}>
              <a className='' href='#' onClick={(e,) => handleClick(e, index)}>
                {list.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default MobileNavigation;
