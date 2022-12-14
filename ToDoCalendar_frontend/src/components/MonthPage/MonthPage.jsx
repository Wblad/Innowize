import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import DateController from '../../scripts/Date/DateController';
import MonthFrame from '../MonthFrame/MonthFrame';
import ToastController from '../../scripts/Toast/ToastController';
import CalendarController from '../../scripts/Calendar/CalendarController';
import styles from './MonthPage.module.css';

export default function MonthPage() {
  const { year, month } = useParams();
  const [monthCalendar, setMonthCalendar] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    ToastController.delete_all_messages();

    async function getTasks() {
      let monthCalendar = await CalendarController.getMonthTasks(year, month);
      setMonthCalendar(monthCalendar);
    }
    getTasks();
  }, [navigate, year, month]);

  function selectDate(selectedYear, selectedMonth, selectedDate) {
    navigate(
      `/year/${selectedYear}/month/${selectedMonth}/date/${selectedDate}`
    );
  }

  return (
    <MonthFrame>
      <ul className={styles.array}>
        {monthCalendar.map((dateObj, date_i) => {
          const d = new Date(dateObj.date);
          const currentDay = d.getDay();
          const currentYear = d.getFullYear();
          const currentMonth = d.getMonth() + 1;
          const currentDate = d.getDate();
          return (
            <li
              key={date_i}
              className={[
                styles.array_element,
                dateObj.isThisMonth ? '' : styles.month_alian_day,
              ].join(' ')}
              onClick={(event) =>
                selectDate(currentYear, currentMonth, currentDate)
              }
            >
              <div className={styles.element_day}>
                {DateController.getStringDay(currentDay, 'ru')}
              </div>
              <div className={styles.element_date}>{currentDate}</div>
              <ul className={styles.element_circles}>
                {dateObj.has_not_completed_task && (
                  <li className={styles.has_not_completed_task_circle}></li>
                )}
                {dateObj.has_completed_task && (
                  <li className={styles.has_completed_task_circle}></li>
                )}
              </ul>
            </li>
          );
        })}
      </ul>
    </MonthFrame>
  );
}
