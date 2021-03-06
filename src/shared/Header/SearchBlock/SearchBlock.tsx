import React, {useContext} from 'react';
import { UserBlock } from './UserBlock';
import styles from './searchblock.css';
import {userContext} from "../../context/userContext";

export function SearchBlock() {
    const { name, iconImg } = useContext(userContext);

  return (
    <div className={styles.searchBlock}>
      search block
      <UserBlock avatarSrc={iconImg} userName={name}/>
    </div>
  );
}
