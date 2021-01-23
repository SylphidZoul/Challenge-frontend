import * as React from 'react'
import { colors } from '../styles/colors'

const Cancel = (props) => {
  return (
    <svg width={24} height={24} fill={colors.mainSalmon} viewBox='0 0 18 18' {...props}>
      <path d='M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4 10.87L11.87 13 9 10.13 6.13 13 5 11.87 7.87 9 5 6.13 6.13 5 9 7.87 11.87 5 13 6.13 10.13 9 13 11.87z' />
    </svg>
  )
}

export default Cancel
