import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import DateController from '../../scripts/Date/DateController';
import DefaultFrame from '../DefaultFrame/DefaultFrame';
import Error404Page from '../Error404Page/Error404Page';

export default function MonthFrame(props) {
  let navigate = useNavigate();
  const { year, month } = useParams();
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    if (new Date(`${year}-${month}`).toString() === 'Invalid Date') {
      setIs404(true);
    }
  }, [month, year]);

  function prevMonth() {
    const { year: prevYear, month: prevMonth } = DateController.getPrevMonth(
      year,
      month
    );
    navigate(`/year/${prevYear}/month/${prevMonth}`);
  }

  function nextMonth() {
    const { year: nextYear, month: nextMonth } = DateController.getNextMonth(
      year,
      month
    );
    navigate(`/year/${nextYear}/month/${nextMonth}`);
  }

  if (is404) {
    return (
      <Error404Page
        message={`Не существующий год или месяц "${year}-${month}"`}
      />
    );
  }

  return (
    <DefaultFrame
      title={
        <NavLink to={`/year/${year}`} title="Выбрать месяц в году">
          {DateController.getStringMonth(month)} {year}
        </NavLink>
      }
      left_buttons={
        <>
          <button onClick={prevMonth} title="Предыдущий месяц">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <button onClick={nextMonth} title="Следующий месяц">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </>
      }
    >
      {props.children}
    </DefaultFrame>
  );
}
