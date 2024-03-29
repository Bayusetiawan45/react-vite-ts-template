import React, { SVGProps } from 'react';

const Copy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 9C7 8.46957 7.21071 7.96086 7.58579 7.58579C7.96086 7.21071 8.46957 7 9 7H15C15.5304 7 16.0391 7.21071 16.4142 7.58579C16.7893 7.96086 17 8.46957 17 9V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H9C8.46957 17 7.96086 16.7893 7.58579 16.4142C7.21071 16.0391 7 15.5304 7 15V9Z"
      fill="currentColor"
    />
    <path
      d="M5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V11C3 11.5304 3.21071 12.0391 3.58579 12.4142C3.96086 12.7893 4.46957 13 5 13V5H13C13 4.46957 12.7893 3.96086 12.4142 3.58579C12.0391 3.21071 11.5304 3 11 3H5Z"
      fill="currentColor"
    />
  </svg>
);

export default Copy;
