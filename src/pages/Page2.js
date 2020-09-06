import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { windowSize } from '../store/main';
import useLocation from '../hooks/useLocation';


function Page2() {
  const { height } = useSelector(windowSize);
  const path = useHistory().location.pathname.replace(/[^0-9]/g,'');

  // 커스텀 hook
  const { handleRouter } = useLocation();

  useEffect(() => {
    handleRouter(path - 1);
  }, []);

  return (
    <div id="wrapper" style={{ minHeight: `${height}px` }}>
      <div className="content animate-panel">
        <div className="row">
          <div className="col-lg-12">
            <div className="hpanel">
              <div className="panel-body">Page 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page2;
