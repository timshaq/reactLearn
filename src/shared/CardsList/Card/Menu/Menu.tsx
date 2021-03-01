import React from 'react';
import styles from './menu.css';
import {generateId} from "../../../../utils/react/generateRandomIndex";
import {GenericList} from "../../../GenericList";
import {merge} from "../../../../utils/js/merge";

const handleItemClick = (id: string) => console.log('click to ', id);

const LIST = [
    { text: 'Комментарии' },
    { text: 'Поделиться' },
    { text: 'Скрыть' },
    { text: 'Сохранить' },
    { text: 'Пожаловаться' },
].map(generateId)
    .map(merge({
        onClick: handleItemClick,
        className: 'menuItem',
    }));

export function Menu() {
  return (
    <div className={styles.menu}>
      <button className={styles.menuButton}>
      <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
        <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
        <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
      </svg>
      </button>

      <GenericList list={LIST} />
    </div>
  );
}
