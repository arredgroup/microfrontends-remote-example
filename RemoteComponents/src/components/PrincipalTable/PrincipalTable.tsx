import React from "react";
import './PrincipalTable.scss';

export interface PrincipalTableProps {
}

export const PrincipalTable: React.FC<PrincipalTableProps> = (props) => {

    return (
        <div>
            <div className={"container"}>
                <h1>Table</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Vacasa</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>AirBnB</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Booking</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}