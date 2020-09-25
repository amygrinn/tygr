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
  const { name, path, color, size, position } = props;

  return (
    <div className="page" data-size={size} data-position={position}>
      <div className="header" style={{ backgroundColor: color }}>
        <Link to={path}>
          <h1>{name}</h1>
        </Link>
      </div>
      <div className="content" style={{ borderColor: color }}>
        {props.children}
      </div>
      <div className="footer" style={{ backgroundColor: color }} />
    </div>
  );
}
