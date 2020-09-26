import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

export interface PageProps extends ComponentProps<any> {
  name: string;
  path: string;
  color: string;
  size: 'small' | 'large';
  position: 'before' | 'active' | 'after';
}

export default function Page(props: PageProps) {
  const { name, path, color: backgroundColor, size, position } = props;

  return (
    <div
      className="page"
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
