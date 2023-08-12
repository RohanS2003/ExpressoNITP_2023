import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings} from  'react-loader-spinner'

import './Loader.css'


const Loader = () => {
  return (
    <div class="loading loading07">
    <span className='loader-span' data-text="L">L</span>
    <span className='loader-span'data-text="O">O</span>
    <span className='loader-span'data-text="A">A</span>
    <span className='loader-span'data-text="D">D</span>
    <span className='loader-span'data-text="I">I</span>
    <span className='loader-span'data-text="N">N</span>
    <span className='loader-span'data-text="G">G</span>
  </div>
  )
}

export default Loader