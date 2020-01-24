import React, { Component } from 'react'
import Bands from './Bands.js';
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
      
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
          <ul>
              <Bands deleteBand = {this.props.deleteBand} bands = {this.props.bands} />
          </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
    addBand: name => dispatch({ type: "ADD_BAND", name }),
    deleteBand: (id) => dispatch({type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
