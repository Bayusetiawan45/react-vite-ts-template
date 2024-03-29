import React, { SVGProps } from 'react';

function ImageOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>IoImageOutline</title>
      <rect width={416} height={352} x={48} y={80} fill="none" strokeLinejoin="round" strokeWidth={32} rx={48} ry={48} />
      <circle cx={336} cy={176} r={32} fill="none" strokeMiterlimit={10} strokeWidth={32} />
      <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352m176 80l123.34-123.34a32 32 0 0143.11-2L464 368"/>
    </svg>
  );
}

export default ImageOutline;
