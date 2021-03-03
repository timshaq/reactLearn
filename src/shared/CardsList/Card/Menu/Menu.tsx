import React from 'react';
import styles from './menu.css';
import {generateRandomString} from "../../../../utils/react/generateRandomIndex";
import {Dropdown} from "../../../Dropdown";
import {MenuIcon} from "../../../icons";
import {EColor, Text} from "../../../Text";
import { MenuItemsList } from './MenuItemsList';

const BUTTON =
    <button className={styles.menuButton}>
        <MenuIcon />
    </button>;

export function Menu() {
  return (
    <div className={styles.menu}>

        <div>
            <Dropdown
                isOpen={false}
                onOpen={() => console.log('list is open')}
                onClose={() => console.log('list is close')}
                button={BUTTON}
            >
                <div className={styles.dropdown}>
                    <MenuItemsList postId={generateRandomString()} />
                    <button className={styles.closeButton}>
                        <Text mobileSize={12} size={14} color={EColor.gray66}>
                            Закрыть
                        </Text>
                    </button>
                </div>
            </Dropdown>
        </div>
    </div>
  );
}
