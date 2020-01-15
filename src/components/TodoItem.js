import React, { Component } from 'react'
import PropType from 'prop-types'



export class TodoItem extends Component {
    // getStyle =()=>{
    //     if(this.props.todo.completed){
    //         return{
    //             textDecoration: 'line-through'
    //         }
    //     }
    //     else
    //     {
    //         return{
    //             textDecoration: 'none'
    //         }
    //     }
    // }
    // 
    // }

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '5px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> {' '}
                {title}
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </p>
            </div>
        )


    }
}
const btnStyle = {
    background: '#ff0000',
    color: '#FFF',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

TodoItem.propType = {
    todo: PropType.object.isRequired
}
export default TodoItem

