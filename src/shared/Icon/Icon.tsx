import React from 'react';
import styles from './icon.css';
import {CommentIcon, ShareIcon, BlockIcon, SaveIcon, WarningIcon, MenuIcon, AnonimIcon} from '../icons';

export enum EIcon {
  comment = 'commentIcon',
  share = 'shareIcon',
  block = 'blockIcon',
  save = 'saveIcon',
  warning = 'warningIcon',
  menu = 'menuIcon',
  anonim = 'anonimIcon',
}
interface IIconsList {
  [N: string]: React.ComponentType;
}
const iconsList:IIconsList = {
  commentIcon: CommentIcon,
  shareIcon: ShareIcon,
  blockIcon: BlockIcon,
  saveIcon: SaveIcon,
  warningIcon: WarningIcon,
  menuIcon: MenuIcon,
  anonimIcon: AnonimIcon,
}

interface IIconsProps {
  name: string;
  size: number;
}

export function Icon({ name, size }: IIconsProps) {
  const As = iconsList[name];
  return (
    <span style={{width: size, height: size}} className={styles.svgContainer}>
      <As />
    </span>
  );
}
