import React from "react";
import './PrincipalTable.scss';
import {Table, TableCell, TableHead, TableRow} from "@material-ui/core";
const _ = require('lodash');

export interface PrototypeRows {
    id:string,
    name:string
}

export interface PrincipalTableProps {
    title:string
    elements: PrototypeRows[];
}

const PrincipalTable: React.FC<PrincipalTableProps> = (props) => {
    const {title, elements} = props;
    return (
        <div>
            <div className={"container"}>
                <h1>{title || "" }</h1>
                <Table key={elements?.join(',')}>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                        </TableRow>
                    {
                        _.map(elements,(element: PrototypeRows)=>{
                            return (
                                <TableRow key={"row-" + element.id}>
                                    <TableCell>{element.id}</TableCell>
                                    <TableCell>{element.name}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </Table>
            </div>
        </div>
    );
}

export default PrincipalTable;