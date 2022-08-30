import React from 'react'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'

const Star = () => {
  return (
    <div>
      Star
    </div>
  )
}

const mapStateToProps = (state:rootState) => ({
    star:state.discover.star
  })   
  
  const mapDispatchToProps = (dispatch:Dispatch) => ({
     
  })
  export default connect(mapStateToProps,mapDispatchToProps)(Star)


  