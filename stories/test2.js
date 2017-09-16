import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';

const sample = '[{"id":82255750,"user_id":283300,"date":"2015-01-02 00:00:00","amount":125,"transaction_type":1,"description":"NFM Payment","account_id":1663854,"category_id":0,"jive":1,"specialstatus":"transfer","parent":0,"ccparent":0,"related_transfer":"2833001420242585","created_at":"2015-01-02 18:49:45","check_num":"","payee":"","memo":"","additional_user_id":0,"initial_balance":false,"attachment":null},{"id":80396487,"user_id":283300,"date":"2014-11-27 00:00:00","amount":15,"transaction_type":1,"description":"nfm bill","account_id":1663854,"category_id":0,"jive":1,"specialstatus":"transfer","parent":0,"ccparent":0,"related_transfer":"2833001417123661","created_at":"2014-11-27 16:27:41","check_num":"","payee":"","memo":"","additional_user_id":0,"initial_balance":false,"attachment":null},{"id":80396512,"user_id":283300,"date":"2014-10-24 00:00:00","amount":15,"transaction_type":1,"description":"","account_id":1663854,"category_id":0,"jive":1,"specialstatus":null,"parent":0,"ccparent":0,"related_transfer":"0","created_at":"2014-11-27 16:30:36","check_num":"","payee":"","memo":"","additional_user_id":0,"initial_balance":false,"attachment":null},{"id":78003795,"user_id":283300,"date":"2014-10-10 00:00:00","amount":15,"transaction_type":1,"description":"NFM","account_id":1663854,"category_id":0,"jive":1,"specialstatus":"transfer","parent":0,"ccparent":0,"related_transfer":"2833001412961417","created_at":"2014-10-10 13:16:57","check_num":"","payee":"","memo":"","additional_user_id":0,"initial_balance":false,"attachment":null},{"id":72691840,"user_id":283300,"date":"2014-06-25 00:00:00","amount":170,"transaction_type":0,"description":"Initial Balance","account_id":1663854,"category_id":0,"jive":1,"specialstatus":null,"parent":0,"ccparent":0,"related_transfer":"0","created_at":"2014-06-25 23:32:34","check_num":"","payee":"","memo":"","additional_user_id":0,"initial_balance":true,"attachment":null}]';
const obj = JSON.parse(sample);

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        // this.gridApi.sizeColumnsToFit();
    }

    createColumnDefs() {
        const cols = [];
        Object.keys(obj[0]).forEach(key => cols.push({headerName: key, field: key}));
        return cols;
    }

    createRowData() {
        return obj;
    }

    render() {
        let containerStyle = {
            height: 115,
            width: 500
        };

        return (

            <div>
                <div style={containerStyle} className="ag-fresh">
                    <AgGridReact
                        // properties
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}

                        // events
                        onGridReady={this.onGridReady}>
                    </AgGridReact>
                </div>
            </div>
        )
    }
};
