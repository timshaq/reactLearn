import React from 'react';
import classNames from 'classnames';
import { NOOP } from '../../utils/js/noopFn';

interface IItem {
  text: string;
  className: string;
  id: string;
  onClick?: (id: string) => void;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      { list.map(({ As= 'button', onClick= NOOP, id, className, text, href }) => (
          <As
          key={id}
          className={className}
          onClick={() => onClick(id)}
          href={href}
          >
            { text }
          </As>
      ))}
    </>
  );
}
