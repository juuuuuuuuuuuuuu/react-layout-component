import React from 'react';

function Title({ data }) {
  return (
    <div>
      <div className='color-line'></div>
      <div id='logo' className='light-version'>
        <span>{data.title}</span>
      </div>
    </div>
  );
}
export default Title;
