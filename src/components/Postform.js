import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createPosts } from '../actions/postActions'

class Postform extends Component {

    constructor(){
        super()
        this.state ={
            title: '',
            body: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()

        const post=  {
            title: this.state.title,
            body: this.state.body
        }

        // Call Action Here
        this.props.createPosts(post)
    }

    render() {
        return (
            <div>
                <h1>ADD POST!</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title:</label> <br />
                        <input type="text"  name="title" value={this.state.title} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Body:</label> <br />
                        <textarea name="body" value={this.state.body}  onChange={this.handleChange}/>
                    </div> <br/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPosts: PropTypes.func.isRequired
}

export default connect(null, { createPosts })(Postform)
