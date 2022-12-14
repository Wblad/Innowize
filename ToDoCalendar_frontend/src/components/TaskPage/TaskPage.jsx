import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Container from '../Container/Container';
import DateController from '../../scripts/Date/DateController';
import TaskController from '../../scripts/Task/TaskController';
import DefaultFrame from '../DefaultFrame/DefaultFrame';
import Error404Page from '../Error404Page/Error404Page';
import styles from './TaskPage.module.css';

const standart_task = {
  title: '_',
  isCompleted: false,
  description: '',
  startDate: DateController.toStringDate(),
  startTime: DateController.toStringTime(),
  endDate: DateController.toStringDate(),
  endTime: DateController.toStringTime(
    new Date(new Date().getTime() + 1000 * 60 * 10)
  ),
};

export default function TaskPage() {
  const { taskId } = useParams();
  const [title, setTitle] = useState(standart_task.title);
  const [isCompleted, setIsCompleted] = useState(standart_task.isCompleted);
  const [description, setDescription] = useState(standart_task.description);
  const [startDate, setStartDate] = useState(standart_task.startDate);
  const [startTime, setStartTime] = useState(standart_task.startTime);
  const [endDate, setEndDate] = useState(standart_task.endDate);
  const [endTime, setEndTime] = useState(standart_task.endTime);
  const [isSuccessCreate, setIsSuccessCreate] = useState(false);
  const [isSuccessUpdate, setIsSuccessUpdate] = useState(false);
  const [isSuccessDelete, setIsSuccessDelete] = useState(false);
  const [is404, setIs404] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setTitle(standart_task.title);
    setIsCompleted(standart_task.isCompleted);
    setDescription(standart_task.description);
    setStartDate(standart_task.startDate);
    setStartTime(standart_task.startTime);
    setEndDate(standart_task.endDate);
    setEndTime(standart_task.endTime);

    setIsSuccessCreate(false);
    setIsSuccessUpdate(false);
    setIsSuccessDelete(false);
    setIs404(false);

    if (!taskId) return;

    if (taskId === 'new') return;

    async function fetchTask() {
      const object = await TaskController.getTaskById(taskId);

      if (Object.keys(object).length === 0) {
        setIs404(true);
      }

      setTitle(object.title);
      setDescription(object.description);
      setIsCompleted(object.completed);

      const start_date = new Date(object.start_date);
      setStartDate(DateController.toStringDate(start_date));
      setStartTime(DateController.toStringTime(start_date));

      const end_date = new Date(object.end_date);
      setEndDate(DateController.toStringDate(end_date));
      setEndTime(DateController.toStringTime(end_date));
    }

    fetchTask();
  }, [taskId]);

  function changed_dates(left_date = new Date(), right_date = new Date()) {
    if (left_date.getTime() >= right_date.getTime()) {
      right_date = new Date(left_date.getTime() + 1000 * 60 * 10);
    }
    return { left_date, right_date };
  }

  function changed_start_date(value) {
    let { left_date, right_date } = changed_dates(
      DateController.setDate(value, startTime),
      DateController.setDate(endDate, endTime)
    );
    setStartDate(DateController.toStringDate(left_date));
    setEndDate(DateController.toStringDate(right_date));
  }

  function changed_end_date(value) {
    let { left_date, right_date } = changed_dates(
      DateController.setDate(startDate, startTime),
      DateController.setDate(value, endTime)
    );
    setStartDate(DateController.toStringDate(left_date));
    setEndDate(DateController.toStringDate(right_date));
  }

  function changed_start_time(value) {
    let { left_date, right_date } = changed_dates(
      DateController.setDate(startDate, value),
      DateController.setDate(endDate, endTime)
    );
    setStartDate(DateController.toStringDate(left_date));
    setEndDate(DateController.toStringDate(right_date));
    setStartTime(DateController.toStringTime(left_date));
    setEndTime(DateController.toStringTime(right_date));
  }

  function changed_end_time(value) {
    let { left_date, right_date } = changed_dates(
      DateController.setDate(startDate, startTime),
      DateController.setDate(endDate, value)
    );
    setStartDate(DateController.toStringDate(left_date));
    setEndDate(DateController.toStringDate(right_date));
    setStartTime(DateController.toStringTime(left_date));
    setEndTime(DateController.toStringTime(right_date));
  }

  async function save(data) {
    await TaskController.create({
      title,
      description,
      start_date: DateController.toJson(startDate, startTime),
      end_date: DateController.toJson(endDate, endTime),
      completed: isCompleted,
    });
    setIsSuccessCreate(true);
  }

  async function update(data) {
    await TaskController.update(taskId, {
      title,
      description,
      start_date: DateController.toJson(startDate, startTime),
      end_date: DateController.toJson(endDate, endTime),
      completed: isCompleted,
    });
    setIsSuccessUpdate(true);
  }

  async function remove(data) {
    await TaskController.remove(taskId);
    setIsSuccessDelete(true);
  }

  if (is404) {
    return <Error404Page message={'Таска не существует'} />;
  }

  if (isSuccessCreate || isSuccessUpdate || isSuccessDelete) {
    const start_date = new Date(`${startDate} ${startTime}`);
    const strt_dt_year = start_date.getFullYear();
    const strt_dt_month = start_date.getMonth() + 1;
    const strt_dt_date = start_date.getDate();

    return (
      <DefaultFrame title="Task">
        <form className={styles.form}>
          <Container>
            <h2>
              {isSuccessCreate
                ? 'Таска успешно создана'
                : isSuccessUpdate
                ? 'Таска успешно обновлена'
                : isSuccessDelete
                ? 'Таска успешно удалена'
                : ''}
            </h2>
            <nav>
              <ul>
                <li>
                  <Link
                    to={`/year/${strt_dt_year}/month/${strt_dt_month}/date/${strt_dt_date}`}
                  >
                    Вернуться к таскам на день
                  </Link>
                </li>
                <li>
                  <Link to={`/year/${strt_dt_year}/month/${strt_dt_month}`}>
                    Вернуться к таскам на месяц
                  </Link>
                </li>
                <li>
                  <Link to={`/year/${strt_dt_year}`}>
                    Вернуться к таскам на год
                  </Link>
                </li>
                <li>
                  <a href="/task/new">Перейти к созданию новой таски</a>
                </li>
                {isSuccessUpdate ? (
                  <li>
                    <a href={`/task/${taskId}`}>Редактировать таску снова</a>
                  </li>
                ) : null}
              </ul>
            </nav>
            <div className={styles.title_block}>
              <input
                readOnly={true}
                title="Нельзя редактировать, так как это режим просмотра"
                value={title}
              />
            </div>
            <div className={styles.date_block}>
              <input
                readOnly={true}
                title="Нельзя редактировать, так как это режим просмотра"
                value={startDate}
              />
              <input
                readOnly={true}
                title="Нельзя редактировать, так как это режим просмотра"
                value={startTime}
              />
              <input
                readOnly={true}
                title="Нельзя редактировать, так как это режим просмотра"
                value={endDate}
              />
              <input
                readOnly={true}
                title="Нельзя редактировать, так как это режим просмотра"
                value={endTime}
              />
            </div>
            <div className={styles.check_block}>
              <label
                title="Нельзя редактировать, так как это режим просмотра"
                checked={isCompleted}
                className={isCompleted ? styles.checked : ''}
              ></label>
              {isCompleted ? 'Task completed' : 'Task not completed'}
            </div>
          </Container>
          <div className={styles.description_block}>
            <Container>
              <textarea
                readOnly={true}
                title="Нельзя редактировать, так как это режим просмотра"
                value={description}
              />
            </Container>
          </div>
        </form>
      </DefaultFrame>
    );
  }

  return (
    <DefaultFrame title={'Task'}>
      <form className={styles.form}>
        <Container>
          <div className={styles.buttons_block}>
            {taskId && taskId !== 'new' ? (
              <>
                <button onClick={handleSubmit(update)}>Обновить таску</button>
                <button onClick={handleSubmit(remove)}>Удалить таску</button>
              </>
            ) : (
              <button onClick={handleSubmit(save)}>Создать новую таску</button>
            )}
          </div>
          <div className={styles.title_block}>
            <input
              {...register('title', {
                required: 'Поле title не может быть пустым',
                pattern: {
                  value: /^[\S]+.*$/,
                  message: 'Поле title не может начинаться с пробела',
                },
              })}
              value={title}
              onInput={(event) => setTitle(event.target.value)}
              placeholder={'Task name'}
            />
            {errors.title?.message ? (
              <span className={styles.error_message}>
                {errors.title.message}
              </span>
            ) : (
              ''
            )}
          </div>
          <div className={styles.date_block}>
            <input
              {...register('startDate', {
                required: 'Поле startDate не может быть пустым',
              })}
              type="date"
              value={startDate}
              onChange={(event) => changed_start_date(event.target.value)}
            />
            <input
              {...register('startTime', {
                required: 'Поле startTime не может быть пустым',
              })}
              type="time"
              value={startTime}
              onChange={(event) => changed_start_time(event.target.value)}
            />
            <input
              {...register('endDate', {
                required: 'Поле endDate не может быть пустым',
              })}
              type="date"
              value={endDate}
              onChange={(event) => changed_end_date(event.target.value)}
            />
            <input
              {...register('endTime', {
                required: 'Поле endTime не может быть пустым',
              })}
              type="time"
              value={endTime}
              onChange={(event) => changed_end_time(event.target.value)}
            />
          </div>
          <div className={styles.check_block}>
            <label
              htmlFor="completed"
              checked={isCompleted}
              className={isCompleted ? styles.checked : ''}
            ></label>
            <input
              type="checkbox"
              name="completed"
              id="completed"
              checked={isCompleted}
              onChange={(event) => setIsCompleted(!isCompleted)}
            />
            {isCompleted ? 'Task completed' : 'Task not completed'}
          </div>
        </Container>
        <div className={styles.description_block}>
          <Container>
            <textarea
              value={description}
              name="description"
              onInput={(event) => setDescription(event.target.value)}
              placeholder={'Task description'}
            />
          </Container>
        </div>
      </form>
    </DefaultFrame>
  );
}
