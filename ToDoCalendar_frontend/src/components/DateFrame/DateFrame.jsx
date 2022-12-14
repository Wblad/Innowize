import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import DateController from '../../scripts/Date/DateController';
import DefaultFrame from '../DefaultFrame/DefaultFrame';
import Error404Page from '../Error404Page/Error404Page';

export default function DateFrame(props) {
  let navigate = useNavigate();
  const { year, month, date } = useParams();
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    if (new Date(`${year}-${month}-${date}`).toString() === 'Invalid Date') {
      setIs404(true);
    }
  }, [date, month, year]);

  function prevDate() {
    const {
      year: prevYear,
      month: prevMonth,
      date: prevDate,
    } = DateController.getPrevDate(year, month, date);
    navigate(`/year/${prevYear}/month/${prevMonth}/date/${prevDate}`);
  }

  function nextDate() {
    const {
      year: nextYear,
      month: nextMonth,
      date: nextDate,
    } = DateController.getNextDate(year, month, date);
    navigate(`/year/${nextYear}/month/${nextMonth}/date/${nextDate}`);
  }

  if (is404) {
    return (
      <Error404Page
        message={`Не существующий год, месяц или день "${year}-${month}-${date}"`}
      />
    );
  }

  return (
    <DefaultFrame
      title={
        <NavLink
          to={`/year/${year}/month/${month}`}
          title="Выбрать день в месяце"
        >
          {DateController.getStringMonth(month)} {date}, {year}
        </NavLink>
      }
      left_buttons={
        <>
          <button onClick={prevDate} title="Предыдущий день">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <button onClick={nextDate} title="Следующий день">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </>
      }
    >
      {props.children}
    </DefaultFrame>
  );
}
