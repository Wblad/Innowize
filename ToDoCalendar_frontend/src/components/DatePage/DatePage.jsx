import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import CalendarController from '../../scripts/Calendar/CalendarController';
import DateController from '../../scripts/Date/DateController';
import Container from '../Container/Container';
import DateFrame from '../DateFrame/DateFrame';
import styles from './DatePage.module.css';

export default function DatePage() {
  const hour_section_width = 120;
  const { year, month, date } = useParams();
  const [tasks, setTasks] = useState([]);
  const [isViewHours, setIsViewHours] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
   

    async function getDays() {
      const array_tasks = await CalendarController.getDayTasks(
        year,
        month,
        date
      );
      setTasks(array_tasks);
    }
    getDays();
  }, [date, month, navigate, year]);

  function selectTask(id) {
    navigate(`/task/${id}`);
  }

  return (
    <DateFrame>
      <button
        className={[
          styles.button_view,
          isViewHours ? styles.button_view__on : styles.button_view__off,
        ].join(' ')}
        onClick={(event) => setIsViewHours(!isViewHours)}
      >
        <span>{isViewHours ? 'Часы' : 'Список'}</span>
      </button>
      {isViewHours ? (
        <div className={styles.wrapper}>
          <PrintTime hour_section_width={hour_section_width} />
          <PrintTimeLines hour_section_width={hour_section_width} />
          {tasks.map((task, task_i) => {
            const start_date = new Date(task.start_date);
            const end_date = new Date(task.end_date);
            const now_start = new Date(`${year}-${month}-${date} 00:00`);
            const now_end = new Date(`${year}-${month}-${date} 23:59`);

            const start =
              start_date.getTime() < now_start.getTime()
                ? now_start
                : start_date;
            const end =
              end_date.getTime() > now_end.getTime() ? now_end : end_date;

            const timeBefore = start.getHours() * 60 + start.getMinutes();
            const timeLength = (end.getTime() - start.getTime()) / 1000 / 60;

            const title =
              DateController.toStringTime(start) +
              '-' +
              DateController.toStringTime(end) +
              ' => ' +
              task.title;

            return (
              <div
                key={task_i}
                onClick={(event) => selectTask(task.id)}
                className={styles.task_block}
                title={title}
                style={{
                  width: `${(timeLength * hour_section_width) / 60}px`,
                  backgroundColor: task.completed
                    ? 'var(--color-task-completed)'
                    : 'var(--color-task-not-completed)',
                  marginLeft: `${(timeBefore * hour_section_width) / 60}px`,
                }}
              ></div>
            );
          })}
        </div>
      ) : (
        <Container>
          <div className={styles.counter_block}>{tasks.length} tasks</div>
          <ul className={styles.array}>
            {tasks.map((task, task_i) => {
              const start_date = new Date(task.start_date);
              const start_current_date = new Date(
                `${year}-${month}-${date} 00:00`
              );
              const end_current_date = new Date(
                `${year}-${month}-${date} 23:59`
              );
              const end_date = new Date(task.end_date);

              const start_time =
                start_date.getTime() < start_current_date.getTime()
                  ? '00:00'
                  : `${DateController.toStringTime(start_date)}`;

              const end_time =
                end_current_date.getTime() < end_date.getTime()
                  ? '23:59'
                  : `${DateController.toStringTime(end_date)}`;

              return (
                <li
                  key={task_i}
                  className={styles.array_element}
                  onClick={(event) => selectTask(task.id)}
                  title={`${start_time} - ${end_time}`}
                >
                  {task.completed ? (
                    <span className={styles.task_completed_circle}></span>
                  ) : (
                    <span className={styles.task_not_completed_circle}></span>
                  )}
                  {task.title}
                </li>
              );
            })}
          </ul>
        </Container>
      )}
    </DateFrame>
  );
}

function PrintTime(props) {
  const [hourSectionWidth, setHourSectionWidth] = useState(0);
  useEffect(() => {
    if (props.hour_section_width) {
      setHourSectionWidth(props.hour_section_width);
    }
  }, [props]);

  return hourSectionWidth ? (
    <div
      className={styles.time_block}
      style={{
        width: `${hourSectionWidth * 24}px`,
      }}
    >
      {[
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
      ].map((hour, hour_i) => {
        return (
          <span
            key={hour_i}
            style={{
              width: `${hourSectionWidth}px`,
            }}
          >
            {hour}:00
          </span>
        );
      })}
    </div>
  ) : (
    <></>
  );
}

function PrintTimeLines(props) {
  const [hourSectionWidth, setHourSectionWidth] = useState(0);
  useEffect(() => {
    if (props.hour_section_width) {
      setHourSectionWidth(props.hour_section_width);
    }
  }, [props]);

  return hourSectionWidth ? (
    <>
      {[
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
      ].map((hour, hour_i) => {
        return (
          <div
            key={hour_i}
            className={styles.line_hour}
            style={{
              left: `${hourSectionWidth * hour}px`,
            }}
          >
            {[10, 20, 30, 40, 50].map((min, min_i) => {
              return (
                <div
                  key={min_i}
                  className={styles.line_minutes}
                  style={{
                    left: `${(hourSectionWidth * min) / 60}px`,
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </>
  ) : (
    <></>
  );
}
