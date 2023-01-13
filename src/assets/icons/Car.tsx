import * as React from 'react';
import { IconBaseProps } from '@Types';

function Car({ size, color, ...props }: IconBaseProps) {
  return (
    <svg
      width={size ?? '24'}
      height={size ?? '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_9648_178820)">
        <path
          d="M7.71709 16.5625C6.8859 16.5625 6.20978 17.2387 6.20978 18.0699C6.20978 18.9013 6.8859 19.5774 7.71709 19.5774C8.54844 19.5774 9.22457 18.9013 9.22457 18.0699C9.22457 17.2387 8.54844 16.5625 7.71709 16.5625Z"
          fill={color ?? 'currentColor'}
        />
        <path
          d="M18.9184 16.5625C18.0872 16.5625 17.4111 17.2387 17.4111 18.0699C17.4111 18.9013 18.0872 19.5774 18.9184 19.5774C19.7497 19.5774 20.4259 18.9013 20.4259 18.0699C20.4259 17.2387 19.7497 16.5625 18.9184 16.5625Z"
          fill={color ?? 'currentColor'}
        />
        <path
          d="M22.6886 11.0514L22.6821 9.13198C22.6805 8.69198 22.3235 8.33594 21.8834 8.33594H20.6852L20.0063 11.0514H22.6886Z"
          fill={color ?? 'currentColor'}
        />
        <path
          d="M20.0276 5.39375C20.0802 5.15723 20.0225 4.90971 19.8709 4.72086C19.7193 4.53185 19.4901 4.42188 19.2478 4.42188H6.72889C6.35442 4.42188 6.0303 4.68183 5.94925 5.04733L5.79531 5.73969H4.09317C3.65212 5.73969 3.29446 6.09727 3.29446 6.53832C3.29446 6.97937 3.65212 7.33703 4.09317 7.33703H5.44024L5.06319 9.03416H2.11653C1.67531 9.03416 1.31782 9.3919 1.31782 9.83286C1.31782 10.274 1.67531 10.6316 2.11653 10.6316H4.70828L4.33107 12.3288H0.798707C0.357657 12.3288 0 12.6864 0 13.1275C0 13.5685 0.357657 13.9262 0.798707 13.9262H3.97608L3.31354 16.9076C3.26109 17.1441 3.31863 17.3917 3.47014 17.5806C3.62174 17.7696 3.85091 17.8795 4.09317 17.8795H4.61867C4.71701 16.2555 6.06893 14.9644 7.71709 14.9644C9.36533 14.9644 10.7173 16.2555 10.8157 17.8795H15.82C15.8913 16.7037 16.6198 15.7027 17.6421 15.2397L20.0276 5.39375Z"
          fill={color ?? 'currentColor'}
        />
        <path
          d="M23.8489 12.6394C23.7334 12.4794 23.5642 12.3703 23.3756 12.3281H19.687L19.0274 14.9663C20.622 15.0216 21.9146 16.2849 22.0162 17.8677C22.2982 17.8198 22.5453 17.622 22.6416 17.3316L23.9595 13.3582C24.0401 13.1146 23.999 12.8474 23.8489 12.6394Z"
          fill={color ?? 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id="clip0_9648_178820">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Car;