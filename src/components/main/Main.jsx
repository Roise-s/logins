import React from 'react'
import pic from '../../assets/DSC00035.jpg'
import './main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className="divpic">
            <img src={pic} alt="pic" className='picc' height={100} width={100} />
        </div>
        <p className="From">
            From
        </p>
        <p className="name">
            Kgaugelo Tladi
        </p>
        <div className="dss">
            <p className="mainDs">

            </p>
            <button>
                dev@me.com
            </button>
            <button>
                developmentMode
            </button>
        </div>

    </div>
  )
}

export default Main
