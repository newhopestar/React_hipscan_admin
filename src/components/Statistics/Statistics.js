import React from 'react';
import { FaQrcode,FaUser,FaRegClock,FaRegCalendar,FaSearch } from 'react-icons/fa';
import './Statistics.css';
import CanvasJSReact from '../../assets/canvas/canvasjs.react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Statistics extends React.Component {

    constructor() {
        super();
        this.state = {
            startDate: "",
            endDate: "",
            selectedDataType: 'day'
        };
        
        this.onChangeDateType = this.onChangeDateType.bind(this);
    }
    
      startDateHandleChange = date => {
        this.setState({
          startDate: date
        });
      };
      endDateHandleChange = date => {
        this.setState({
          endDate: date
        });
      };

      onChangeDateType = type => {
        this.setState({
            selectedDataType: type
          });
      };

    render() 
    {
        const options= {
            animationEnabled: true,
            theme: "light2",
            data: [{
                type: "area",
                color:"#f36e21",
				dataPoints: [
					{ label: "SEPT 2019", y: 3500 },
					{ label: "OCT 2019", y: 1600 },
					{ label: "NOV 2019", y: 2500 },
					{ label: "DEC 2019", y: 3600 },
					{ label: "JAN 2020", y: 5500 },
					{ label: "FEB 2020", y: 7000 },
					{ label: "MAR 2020", y: 1400 },
					{ label: "APR 2020", y: 5200 },
					{ label: "MAY 2020", y: 5000 },
					{ label: "JUN 2020", y: 2800 },
				]
			}]

        }
        return(
            <div className="statistics-container">
                    <h1>Statistics</h1>
                    <div className="value-part">
                        <div className="sub">
                            <FaQrcode size="2.8em"/>
                            <h1>300,220</h1>
                            <p>SCANS</p>
                        </div>
                        <div className="sub">
                            <FaUser size="2.8em"/>
                            <h1>80,260</h1>
                            <p>UNIQUE USERS</p>
                        </div>
                        <div className="sub">
                            <FaRegClock size="2.8em"/>
                            <h1>190</h1>
                            <p>SCANS OVER LAST<br/> 48 HOURS</p>
                        </div>
                        <div className="scans">
                            <div className="phones">
                                <p>iPhone</p>
                                <p>Android</p>
                                <p>Blackberry</p>
                                <p>Windows Phone</p>
                            </div>
                            <div className="diagram">
                                <div className="iphone-value">
                                    <p>50,325</p><div className="bar"></div><span>51%</span>
                                </div>
                                <div className="android-value">
                                    <p>36,098</p><div className="bar"></div><span>31%</span>
                                </div>
                                <div className="black-value">
                                    <p>10,988</p><div className="bar"></div><span>12%</span>
                                </div>
                                <div className="winphone-value">
                                    <p>5,800</p><div className="bar"></div><span>5%</span>
                                </div>
                         </div>
                        </div>
                    </div>
                    <div className="filter">
                        <div className="during">
                            <span className={"during-item day " + (this.state.selectedDataType === 'day' ? 'active' : '')} onClick={() => this.onChangeDateType('day')}>DAY</span>
                            <span className={"during-item week " + (this.state.selectedDataType === 'week' ? 'active' : '')} onClick={() => this.onChangeDateType('week')}>WEEK</span>
                            <span className={"during-item month " + (this.state.selectedDataType === 'month' ? 'active' : '')} onClick={() => this.onChangeDateType('month')}>MONTH</span>
                        </div>
                        <div className="firstdate">
                            <DatePicker
                                placeholderText="START DATE"
                                selected={this.state.startDate}
                                onChange={this.startDateHandleChange}
                                dateFormat="d MMMM yyyy"
                            />
                            <FaRegCalendar className="cal"/>
                        </div>
                        <div className="enddate">
                            <DatePicker
                                selected={this.state.endDate}
                                onChange={this.endDateHandleChange}
                                placeholderText="END DATE"
                                dateFormat="d MMMM yyyy"
                            />
                            <FaRegCalendar className="cal"/>
                        </div>
                        <div className="search">
                            <div className="search-input-wrapper"> 
                                <input className="search-input" type="text" ></input>
                                <FaSearch className="search-icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="chart-part">
                        <CanvasJSChart options={options}/>
                    </div>
            </div>
        )
    }
}

export default Statistics;