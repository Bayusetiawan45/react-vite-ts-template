import React, { SVGProps } from 'react';

function FolderIcon(props: SVGProps<SVGSVGElement>) {
  const { color, ...rest } = props;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        fill={color || 'currentColor'}
        d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H10L12 6H20C20.55 6 21.021 6.196 21.413 6.588C21.8043 6.97933 22 7.45 22 8H11.175L9.175 6H4V18L6.4 10H23.5L20.925 18.575C20.7917 19.0083 20.546 19.3543 20.188 19.613C19.8293 19.871 19.4333 20 19 20H4ZM6.1 18H19L20.8 12H7.9L6.1 18ZM6.1 18L7.9 12L6.1 18ZM4 8V6V8Z"
      />
    </svg>
  );
}

export default FolderIcon;
