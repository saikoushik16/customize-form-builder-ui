import React, { Component } from 'react';

class FormSubmit extends Component {
    constructor(props) {
        super(props)

        this.initialSate = {
            name: '',
        };

        this.state = this.initialSate;
    }

    handleChange = event  => {

        const { value, name } = event.target;

        this.setState({
            [name] : value,
        });
    };

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialSate);

    };

    render() {
        const { name, job } = this.state;
        return (
            <div style={{marginTop: 10}}>
                <form>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}/>
                    <input type="button" value="submit" onClick={this.submitForm}></input>
                </form>
            </div>
        );
    }
}

export default FormSubmit;
