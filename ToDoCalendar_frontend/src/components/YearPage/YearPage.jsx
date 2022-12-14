import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import YearFrame from '../YearFrame/YearFrame';
import DateController from '../../scripts/Date/DateController';
import ToastController from '../../scripts/Toast/ToastController';
import CalendarController from '../../scripts/Calendar/CalendarController';
import styles from './YearPage.module.css';

export default function YearPage(props) {
  let navigate = useNavigate();
  const { year } = useParams();
  const [yearCalendar, setYearCalendar] = useState([]);

  useEffect(() => {
    ToastController.delete_all_messages();

    async function getTasks() {
      const yearArray = await CalendarController.getYearTasks(year);
      setYearCalendar(yearArray);
    }
    getTasks();
  }, [year]);

  function selectMonth(selectedYear, selectedMonth) {
    navigate(`/year/${selectedYear}/month/${selectedMonth}`);
  }

  return (
    <YearFrame>
      <ul className={styles.array_month}>
        {yearCalendar.map((month, month_i) => {
          return (
            <li
              key={`${year}-${month_i + 1}`}
              className={styles.array_month_element}
              onClick={(event) => selectMonth(year, month_i + 1)}
            >
              <h3>{DateController.getStringMonth(month_i + 1)}</h3>
              <ul className={styles.array_days}>
                {[1, 2, 3, 4, 5, 6, 7].map((day, day_i) => {
                  return (
                    <li key={day_i} className={styles.array_days_element}>
                      {DateController.getStringDay(day, 'ru')}
                    </li>
                  );
                })}
                {month.map((task, task_i) => {
                  const d = new Date(task.date);
                  const date = d.getDate();
                  return (
                    <li
                      key={task_i}
                      className={[
                        styles.array_days_element,
                        task.isThisMonth ? '' : styles.month_alian_day,
                      ].join(' ')}
                    >
                      <div className={styles.array_days_element__number}>
                        {date}
                      </div>
                      <div className={styles.array_days_element__circles}>
                        {task.has_completed_task && (
                          <span
                            className={
                              styles.array_days_element__has_completed_task_circle
                            }
                          ></span>
                        )}
                        {task.has_not_completed_task && (
                          <span
                            className={
                              styles.array_days_element__has_not_completed_task_circle
                            }
                          ></span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </YearFrame>
  );
}
