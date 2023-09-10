import React, { useState, useEffect, Fragment } from 'react';
import moment from 'moment';

const InaugurationDate = ({ inaugurationDate, textColor }) => {
  const [duration, setDuration] = useState(moment.duration());

  useEffect(() => {
    setInterval(() => {
      const currentTime = moment();
      const eventTime = moment(inaugurationDate);
      setDuration(moment.duration(eventTime.diff(currentTime)));
    }, 1000);
  }, [inaugurationDate]);

  return (
    <Fragment>
      <div className="row justify-content-between" style={{ color: textColor }}>
        <div className="col duration">{duration.days()}</div>
        <div className="col duration">{duration.hours()}</div>
        <div className="col duration">{duration.minutes()}</div>
        <div className="col duration">{duration.seconds()}</div>
      </div>
      <div className="row justify-content-between" style={{ color: textColor }}>
        <div className="col duration-title">Days</div>
        <div className="col duration-title">Hours</div>
        <div className="col duration-title">Minutes</div>
        <div className="col duration-title">Seconds</div>
      </div>
      <div className="row justify-content-between p-4" style={{ color: textColor }}>
        <div className="col duration-title">{moment(inaugurationDate).format('Do MMMM YYYY h.mm a')}</div>
      </div>
    </Fragment>
  );
};

export default InaugurationDate;
