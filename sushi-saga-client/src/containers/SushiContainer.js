import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map((sushi, index) => {
            return <Sushi sushi={sushi} key={index} eaten={false} eatSushi={props.eatSushi} />
          })
        }
        <MoreButton addSushi={props.addSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer