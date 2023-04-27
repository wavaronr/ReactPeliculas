import React from 'react';
import CalendarFuncCach from './CalendarFuncCach';
// Importar Datepicker
import moment from 'moment';

// Importar Calendario
import { Calendar } from 'react-calendar';







export default class Calendario extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            date: moment().startOf('year')
        }
    };
    
    
    
    

    render() {
        return (

            <div className="card m-4">
            <div className="row m-4">
                <div className="col-md-12">this is funtion{}</div>
                <div className="col-md-6">
                <div className= "card-header m-4 bordered">
                {/* Base calendar component */}
                <Calendar className="calendario"
                    onClick= {CalendarFuncCach}
                    weekNumbers={true}
                    size={2}
                    startDate={this.state.date}
                    date={this.state.date}
                    endDate={this.state.date.clone().endOf('year')}
                    mods={
                        [
                            {
                                date: moment(),
                                classNames: ['current'],
                                component: ['day', 'month', 'week']
                            }
                        ]
                    }

                />
            </div>
            </div>
            </div>
            </div>
        );
    }
}
