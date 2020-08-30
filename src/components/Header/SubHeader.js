import React from 'react';

function SubHeader({ data }) {
  return (
    <nav role='navigation'>
      <div className='small-logo'>
        <span className='text-primary'>{data.title}</span>
      </div>
      <form
        role='search'
        className='navbar-form-custom'
        method='post'
        action='#'
      >
        <div className='form-group'>
          <span>{data.subHeader}</span>
        </div>
      </form>
    </nav>
  );
}
export default SubHeader;
