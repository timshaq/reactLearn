import React from 'react';
import styles from './icon.css';
import { CommentIcon, ShareIcon, BlockIcon, SaveIcon, WarningIcon } from '../icons';

export enum EIcon {
  comment = 'commentIcon',
  share = 'shareIcon',
  block = 'blockIcon',
  save = 'saveIcon',
  warning = 'warningIcon',
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
