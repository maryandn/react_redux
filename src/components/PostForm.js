import React, {Component} from 'react';
import {connect} from 'react-redux'
import {showAlert} from '../redux/action/alertActions'
import {createPost} from '../redux/action/postActions'
import {Alert} from "./Alert";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()
        const {title} = this.state
        if (!title.trim()) {
            return this.props.showAlert('Поле не может быть пустым')
        }
        const newPost = {
            title, id: Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({title: ''})
    }

    changeSubmitHandler = event => {
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>

                {this.props.alert && <Alert text={this.props.alert}/>}

                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           value={this.state.title}
                           name='title'
                           onChange={this.changeSubmitHandler}
                    />
                </div>
                <button className='btn btn-success' type='submit'>Создать</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    createPost, showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
