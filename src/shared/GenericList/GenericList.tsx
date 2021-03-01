import React from 'react';
import classNames from 'classnames';

interface IItem {
  text: string;
  className: string;
  id: string;
  onClick: (id: string) => void;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[]
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      { list.map(({ As = 'div', onClick, id, className, text, href }) => (
          <As
          key={id}
          className={classNames(className)}
          onClick={() => onClick(id)}
          href={href}
          >
            { text }
          </As>
      ))}
    </>
  );
}
