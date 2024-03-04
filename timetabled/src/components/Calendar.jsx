import React from "react";
import Event from './Events'

const Calendar = () => {
    const times = [
        "7:30 am",
        "8 am",
        "9 am",
        "10 am",
        "11:45 am",
        "12 pm",
        "1 pm",
        "2 pm",
        "3 pm",
        "4 pm",
        
      ];
      const tableRows = times.map((time) => (
        <tr>
          <td className="time">{time}</td>
          {time === "11:45 am" ? <Event event='Liverpool vs Man City' color ='red' location='At Anfield'/> : <td></td>}
          {time === "3 pm" ? <Event event='Sheffield Utd vs Arsenal' color ='green' location='At Bramall Lane'/> : <td></td>}
          {time === "3 pm" ? <Event event='Bayern vs Lazio' color ='blue' location='At Allianz Arena'/> : <td></td>}
          {time === "3 pm" ? <Event event='Real Madrid vs RB Leipzig' color ='blue' location='At Santiago Barnabeu'/> : <td></td>}
          {time === "9 am" ? <Event event='Al Shahab vs Al Fayha' color ='green' location='At Al Shahab stadium '/> : <td></td>}
          {time === "3 pm" ? <Event event='Barcelona vs real Mallorca' color ='green' location='At Camp Nou'/> : <td></td>}
          {time === "7:30 am" ? <Event event='Man United vs Everton' color ='red' location='At Old Trafford'/> : <td></td>}

        </tr>
      ));
    return (
        <><div class="Calendar"></div><table>
            <thead>
                    <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
                
        </table></>
    )
  
}
export default Calendar;