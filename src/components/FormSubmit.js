import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class FormSubmit extends Component {
    constructor(props) {
        super(props)
        this.initialSate = {
            name: '',
            isEmpty: false
        };
        this.state = this.initialSate;
    }

    handleChange = event  => {
       
        const { value, name } = event.target;
        if (value.replace(/\s/g, '').length !== 0) {
            this.setState({isEmpty: false });
        }
        this.setState({
            [name] : value,
        });
        this.props.updateFormName(value);
    };

    submitForm = () => {
        if (this.state.name.replace(/\s/g, '').length === 0) {
            console.log("Name can't be empty");
            this.setState({isEmpty: true });
            return;
        } else{
            this.setState({isEmpty: false });
        }
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialSate);
    };

    render() {
        const { name } = this.state;
        return (
            <div style={{marginTop: 10}}>
                <form>
                  {this.state.isEmpty ? <span style={{color: '#dc3545', fontWeight: 'bold', fontSize: 'md' }}>Name can't be empty</span>: null}
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
