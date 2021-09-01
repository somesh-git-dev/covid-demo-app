import React, {useEffect, useState} from 'react';

const Details = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const newVar = await res.json();
        setData(newVar.statewise[26])

    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <div>
            <h1>Covid-19 Tracker Application</h1>

            <table id="customers">
                <tr>
                    <th>Active</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                    <th>State</th>
                    <th>State code</th>
                    {/*<th>State Notes</th>*/}
                </tr>
                <tr>
                    <td>{data.active}</td>
                    <td>{data.confirmed}</td>
                    <td>{data.deaths}</td>
                    <td>{data.recovered}</td>
                    <td>{data.state}</td>
                    <td>{data.statecode}</td>
                    {/*<td>{data.statenotes}</td>*/}
                </tr>
            </table>
        </div>
    );
};

export default Details;
