import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import { randomId } from '../index';
class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: randomId(),
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    if(event.target.tagName === 'INPUT') {
      this.setState({
        title: event.target.value
      })
    }else {
      this.setState({
        category: event.target.value
      })
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      id: randomId()
    })
    this.props.addBook(this.state)
    // console.log('book added')
  }
  render() {
    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    return (
      <div>
        <form>
          <input onChange = {this.handleChange} type="text" placeholder="Enter a new book" />
          <select onChange = {this.handleChange}>
            {
            // eslint-disable-next-line max-len
            bookCategories.map(category => <option key={category} value={category}>{category}</option>)
          }
          </select>
          <button onClick = {this.handleSubmit} type="submit">Save Book</button>
        </form>
        <h1>input: {this.state.title}</h1>
        <h1>category: {this.state.category}</h1>
      </div>
    );
  }
}
// const mapState
const mapDispatchToProps = dispatch => {
  return {
    addBook: book => dispatch(createBook(book)),
  };
};

export default connect(null,mapDispatchToProps)(BooksForm);

/**
 * The component should store the title and the book category in its own state.
 The component should implement the handleChange method which reacts to the user
 typing to input a name or to changes in the category select.
 Each change to the form should modify the component’ s state.
 The component should implement handleSubmit which will save the
 new book in the Redux store and resets the component’ s state.
 */
