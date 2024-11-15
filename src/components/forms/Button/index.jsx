import React from 'react';

import styles from './styles.module.css';

function Button({rotulo, type}) {
  return (
    <div>
      <button type={type} className={styles.btn}>{rotulo}</button>
    </div>
  );
}

export default Button;