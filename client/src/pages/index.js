import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export const Index = (props) => {
    return (
        <div>
            Hello
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))
