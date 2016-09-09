import React from 'react';
import FlashMessage from '../containers/flash_message.jsx';

function Layout({children}) {
  return (
    <div>
      <FlashMessage />
      { children }
    </div>
  )
}

export default Layout;
