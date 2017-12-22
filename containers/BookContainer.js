import { connect } from 'react-redux'
import Book from '../components/Book'
import { bindActionCreators } from 'redux';
import { getAllBooks } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
      getAllBooksList: state.Book,
  }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getAllBooks }, dispatch);
}

const BookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Book)

export default BookContainer
