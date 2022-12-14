import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import DateController from '../../scripts/Date/DateController';
import DefaultFrame from '../DefaultFrame/DefaultFrame';
import Error404Page from '../Error404Page/Error404Page';

export default function YearFrame(props) {
  let navigate = useNavigate();
  const { year } = useParams();
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    if (new Date(`${year}`).toString() === 'Invalid Date') {
      setIs404(true);
      return;
    }
  }, [year]);

  function prevYear() {
    const prev_year = DateController.getPrevYear(year);
    navigate(`/year/${prev_year}`);
  }

  function nextYear() {
    const next_year = DateController.getNextYear(year);
    navigate(`/year/${next_year}`);
  }

  if (is404) {
    return <Error404Page message={`Не верный формат года "${year}"`} />;
  }

  return (
    <DefaultFrame
      title={`${year}`}
      left_buttons={
        <>
          <button onClick={prevYear} title="Предыдущий год">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>

          <button onClick={nextYear} title="Следущий год">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </>
      }
    >
      {props.children}
    </DefaultFrame>
  );
}
