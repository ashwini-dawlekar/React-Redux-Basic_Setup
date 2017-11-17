import { connect } from 'react-redux'
import { HELLO_WORLD } from './../actions'
import Hello from './../components/Hello'
import { bindActionCreators } from 'redux';
import { helloWorld } from './../actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
      User: state.helloWorld,
  }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ helloWorld }, dispatch);
}

const HelloWorld = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)

export default HelloWorld
