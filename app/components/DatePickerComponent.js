import React from 'react';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

momentLocalizer(Moment)

export const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>{
  return(
  <DateTimePicker
    className="dropdown"
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? new Date() : new Date(value)}
  />
)
}

export default renderDateTimePicker
