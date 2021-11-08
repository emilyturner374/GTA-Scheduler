import React, { useState } from 'react';
import 'resize-observer-polyfill/dist/ResizeObserver.global';
import { TimeGridScheduler} from '@remotelock/react-week-scheduler';
import '@remotelock/react-week-scheduler/index.css';
import classes from './calendar-styles.module.scss';
import { BgContainer } from './CalendarElements';

const rangeStrings = [
    ['2019-03-04 00:15', '2019-03-04 01:45'],
    ['2019-03-05 09:00', '2019-03-05 10:30'],
    ['2019-03-06 22:00', '2019-03-06 22:30'],
    ['2019-03-07 01:30', '2019-03-07 03:00'],
    ['2019-03-07 05:30', '2019-03-07 10:00'],
    ['2019-03-08 12:30', '2019-03-08 01:30'],
    ['2019-03-09 22:00', '2019-03-09 23:59'],
  ];
  
  {/*Default events that need to be replaced by an array of events that we create */}
  const defaultSchedule = rangeStrings.map(range =>
    range.map(dateString => new Date(dateString)),
  );
  

const CalendarDisplay = () => {
    const [schedule, setSchedule] = useState(defaultSchedule);

    return (
        <BgContainer>
             <TimeGridScheduler
              classes={classes}
              style = {{height: "500px"}}
              originDate={new Date('2019-03-04')}
              schedule={schedule}
              onChange={setSchedule}
            />
        </BgContainer>
    );
};

export default CalendarDisplay;