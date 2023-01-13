import React, { SVGProps } from 'react';

const LiveShow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="11.5" fill="#D8F0FF" stroke="#288CCC" />
      <path
        d="M18.3535 8.76667C18.2522 8.70816 18.1372 8.67735 18.0202 8.67735C17.9031 8.67735 17.7882 8.70816 17.6868 8.76667L15.3335 9.92667C15.3145 9.40905 15.0954 8.91898 14.7224 8.55963C14.3494 8.20027 13.8515 7.99965 13.3335 8H7.3335C6.80306 8 6.29436 8.21071 5.91928 8.58579C5.54421 8.96086 5.3335 9.46957 5.3335 10V14C5.3335 14.5304 5.54421 15.0391 5.91928 15.4142C6.29436 15.7893 6.80306 16 7.3335 16H13.3335C13.8515 16.0003 14.3494 15.7997 14.7224 15.4404C15.0954 15.081 15.3145 14.591 15.3335 14.0733L17.7068 15.26C17.7977 15.3066 17.8981 15.3317 18.0002 15.3333C18.125 15.3337 18.2474 15.2991 18.3535 15.2333C18.4496 15.1733 18.5288 15.0897 18.5836 14.9906C18.6384 14.8914 18.6671 14.78 18.6668 14.6667V9.33333C18.6671 9.22004 18.6384 9.10855 18.5836 9.0094C18.5288 8.91026 18.4496 8.82671 18.3535 8.76667ZM14.0002 14C14.0002 14.1768 13.9299 14.3464 13.8049 14.4714C13.6799 14.5964 13.5103 14.6667 13.3335 14.6667H7.3335C7.15669 14.6667 6.98712 14.5964 6.86209 14.4714C6.73707 14.3464 6.66683 14.1768 6.66683 14V10C6.66683 9.82319 6.73707 9.65362 6.86209 9.5286C6.98712 9.40357 7.15669 9.33333 7.3335 9.33333H13.3335C13.5103 9.33333 13.6799 9.40357 13.8049 9.5286C13.9299 9.65362 14.0002 9.82319 14.0002 10V14ZM17.3335 13.5867L15.3335 12.5867V11.4133L17.3335 10.4133V13.5867Z"
        fill="#288CCC"
      />
    </svg>
  );
};

export default LiveShow;