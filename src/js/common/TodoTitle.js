import React, {Component} from 'react';

class TodoTitle extends Component {
    render() {
        return (
            <div className="todoTitle">
                <h2 className="title">{this.props.title}</h2>
                <span className="count">{this.props.len}</span>
            </div>
        )
    }
}

export default TodoTitle;