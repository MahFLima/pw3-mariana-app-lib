import React from "react";

import styles from "./forms/Button/styles.module.css";
import { Link } from "react-router-dom";

function Button({ rotulo, router, cod_livro }) {
  return (
    <div>
      <Link to={`${router}${cod_livro}`} className={styles.btn}>
        {rotulo}
      </Link>
    </div>
  );
}

export default Button;
