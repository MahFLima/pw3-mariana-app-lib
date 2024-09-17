import React from 'react';

import styles from './styles.module.css';

function Button({rotulo}) {
  return (
    <div>
      <button className={styles.btn}>{rotulo}</button>
    </div>
  );
}

export default Button;