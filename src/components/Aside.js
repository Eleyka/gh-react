import React, { Component } from 'react';
import GHimg from './images/gh.jpg';
import flag from './images/bandera.png';
import './css/aside.css';

class Aside extends Component {
    render() {
        return (
            <aside className="summary">
                <table className="summary-table">
                    <thead>
                        <tr>
                            <th colspan={2}>Grace Murray Hopper</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td colspan={2}>
                                <img src={GHimg} alt="Grace Murray Hopper" />
                                <p>Rear Admiral Grace M. Hopper, 1984</p>
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <th>Nickname(s)</th>
                            <td>"Amazing Grace"</td>
                        </tr>
                        <tr>
                            <th>Born</th>
                            <td> December 9, 1906 <p>New York City, New York, U.S.</p></td>
                        </tr>
                        <tr>
                            <th>Died</th>
                            <td>January 1, 1992 (aged 85)
                             <p><a href="https://en.wikipedia.org/wiki/Arlington,_Virginia">Arlington, Virginia, U.S.</a></p>
                            </td>
                        </tr>
                        <tr>
                            <th>Place of burial</th>
                            <td>
                                <a href="https://en.wikipedia.org/wiki/Arlington_National_Cemetery">Arlington National Cemetery</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Allegiance</th>
                            <td><img src={flag} alt="flag" /> United States of America</td>
                        </tr>
                    </tbody>
                </table>
            </aside>
        );
    }
}

export default Aside;