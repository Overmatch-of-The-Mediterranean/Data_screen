import React, { Component } from 'react'

export class AddCounter extends Component {

    addCount(count){
        this.props.addClick(count)
    }

  render() {
    return (
      <div>
        <button onClick={()=>this.addCount(1)}>+1</button>
        <button onClick={()=>this.addCount(5)}>+5</button>
        <button onClick={()=>this.addCount(10)}>+10</button>

      </div>
    )
  }
}

export default AddCounter