import React from 'react';
import { useSelector } from 'react-redux';
import { windowSize } from '../store/main';

function Page2() {
  const { height } = useSelector(windowSize);

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
