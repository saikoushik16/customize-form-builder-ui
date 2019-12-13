import { Button } from 'reactstrap';
import React, { Component } from 'react';


class DataTable extends Component {
    render() {
        return (
            <tr key={this.props.obj.id}>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                  <Button style={{marginTop: 5}} onClick={()=> this.props.editForm(this.props.obj.id)}>Edit</Button>
                </td>
                <td>
                  <Button style={{marginTop: 5}} onClick={()=> this.props.removeForm(this.props.obj.id)}>Delete</Button>
                </td>
            </tr>
        );
    }
}

export default DataTable;