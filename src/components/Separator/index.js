import { h } from 'preact'

const Separator = ({style, upClass, downClass}) => (
  <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='100%' height='50' viewBox='0 0 100 100' preserveAspectRatio='none' className='separator' style={style}>
    { upClass ? <path className={upClass} d='M0 0 L0 100 L100 0 Z' /> : '' }
    { downClass ? <path className={downClass} d='M0 101 L100 100 L100 0 Z' /> : '' }
  </svg>
)

export default Separator
