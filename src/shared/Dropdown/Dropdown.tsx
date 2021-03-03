import React, {useEffect} from 'react';
import styles from './dropdown.css';
import {NOOP} from "../../utils/js/noopFn";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  useEffect(() => setIsDropdownOpen(isOpen),[isOpen]);
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = () => setIsDropdownOpen(!isDropdownOpen)

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        { button }
      </div>
      {isDropdownOpen && (
          <div className={styles.listContainer}>
            <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
              { children }
            </div>
          </div>
      )}
    </div>
  );
}
