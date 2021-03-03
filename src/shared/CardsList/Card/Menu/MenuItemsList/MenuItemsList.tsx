import React from 'react';
import styles from './menuitemslist.css';
import {CommentIcon, ShareIcon, BlockIcon, SaveIcon, WarningIcon} from "../../../../icons";
import {EColor, Text} from "../../../../Text";
import classNames from 'classnames';
import {generateId} from "../../../../../utils/react/generateRandomIndex";

const handleClick = (id: string) => {
  console.log('postId = ',id)
}

interface IMenuItemsListProps {
  postId: string;
}
interface IItem {
  text: string,
  Icon: React.ComponentType,
  mobile: boolean,
  id: string,
}

const list: IItem[] = [
  { text: "Комментарии", Icon: CommentIcon, mobile: false },
  { text: "Поделиться", Icon: ShareIcon, mobile: false },
  { text: "Скрыть", Icon: BlockIcon, mobile: true },
  { text: "Сохранить", Icon: SaveIcon, mobile: false },
  { text: "Пожаловаться", Icon: WarningIcon, mobile: true },
].map(generateId);

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      {
        list.map(({ text, Icon, mobile, id }) => {
          const classes = classNames(
              styles.menuItem,
              { [styles.mobHidden]: !mobile },
          );
          return (
              <li key={id} className={classes} onClick={() => handleClick(postId)}>
                <Icon/>
                <Text
                    size={12} mobileSize={12} tabletSize={14} desktopSize={14}
                    color={EColor.gray99}
                >
                  {text}
                </Text>
              </li>
          )
        })
      }
    </ul>
  );
}
