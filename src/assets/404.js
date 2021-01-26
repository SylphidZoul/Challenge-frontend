import * as React from 'react'
import { colors } from '../styles/colors'

export const NotFoundIcon = () => {
  return (
    <svg
      height={256}
      viewBox='0 0 60 48'
      width={256}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g fill={colors.secBlue} fillRule='nonzero'>
        <path d='M27 6h6a1 1 0 000-2h-6a1 1 0 000 2zM44 6h11a1 1 0 000-2H44a1 1 0 000 2z' />
        <path d='M55 0H5a5.006 5.006 0 00-5 5v38a5.006 5.006 0 005 5h50a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zM5 2h50a3 3 0 013 3v3H2V5a3 3 0 013-3zm50 44H5a3 3 0 01-3-3V10h56v33a3 3 0 01-3 3z' />
        <circle cx={5} cy={5} r={1} />
        <circle cx={9} cy={5} r={1} />
        <circle cx={13} cy={5} r={1} />
        <path d='M18 32a1 1 0 002 0v-2h2a1 1 0 000-2h-2v-2a1 1 0 00-2 0v2h-5.211l7.063-11.476a1 1 0 00-1.7-1.048l-7.066 11.477A2 2 0 0012.79 30H18zM48 28h-2v-2a1 1 0 00-2 0v2h-5.211l7.063-11.476a1 1 0 10-1.7-1.048l-7.066 11.477A2 2 0 0038.79 30H44v2a1 1 0 002 0v-2h2a1 1 0 000-2zM29 33h2a4 4 0 004-4V19a4 4 0 00-4-4h-2a4 4 0 00-4 4v10a4 4 0 004 4zm-2-14a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2zM42 38H18a1 1 0 000 2h24a1 1 0 000-2zM33 42h-6a1 1 0 000 2h6a1 1 0 000-2z' />
      </g>
    </svg>
  )
}
