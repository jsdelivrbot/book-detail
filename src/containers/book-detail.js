import React, {Component} from 'react';
import {connect} from 'react-redux';

export class BookDetail extends Component
{
    render() {

if(!this.props.books)
{
    return (
    <div>select a book</div>
    )
}

        return (
            <div>{this.props.books.title}</div>
        )
    }

}

function mapStateToProps (state) {
    return {
        books: state.activebook
    }
}

export default connect (mapStateToProps)(BookDetail);