import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

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
        this.props.updateFormName(value);
    };

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialSate);
    };

    render() {
        const { name } = this.state;
        return (
            <div style={{marginTop: 10}}>
                <form>
                    <Input 
                    placeholder="Form name" 
                    name="name"
                    value={name}
                    onChange={this.handleChange}/>
                    <Button style={{marginTop: 5}} onClick={this.submitForm} value="submit">Submit Form</Button>
                </form>
            </div>
        );
    }
}

export default FormSubmit;
