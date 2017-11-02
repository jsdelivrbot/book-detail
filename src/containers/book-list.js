import React, {Component} from 'react';
import {connect} from 'react-redux';
import selectedBook from '../action/index';
import {bindActionCreators} from 'redux';


 class Booklist extends Component 
{

    renderlist()
    {
      return  this.props.books.map((book)=>
        {
            return ( <li key={book.title} onClick={()=>this.props.selectedBook(book)}>{book.title   }</li>  
        )
        }
        )

    }
    render()
    {
        return (
             <ul> {this.renderlist()} </ul> 
    )
}
}

function mapStateToProps (state) {
    return {

        books: state.books
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({selectedBook:selectedBook},dispatch);
}


export default connect (mapStateToProps,mapDispatchToProps) (Booklist)


