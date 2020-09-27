import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

export interface PageProps extends ComponentProps<any> {
  name: string;
  path: string;
  className: string;
  size: 'small' | 'large';
  position: 'before' | 'active' | 'after';
}

export default function Page(props: PageProps) {
  const {
    className,
    color: backgroundColor,
    name,
    path,
    position,
    size,
  } = props;

  return (
    <div
      className={className + ' page'}
      data-size={size}
      data-position={position}
      style={{ backgroundColor }}
    >
      <div className="header">
        <Link to={path}>
          <h4>{name}</h4>
        </Link>
      </div>
      <div className="content">{props.children}</div>
      <div className="footer" />
    </div>
  );
}
