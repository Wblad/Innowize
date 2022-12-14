import TaskController from '../Task/TaskController';
import DateController from '../Date/DateController';

export default class CalendarController {
  static async getDictTasks() {
    let dict = {};

    const array_tasks = await TaskController.read();
    array_tasks.forEach((element) => {
      const start = new Date(element.start_date);
      const end = new Date(element.end_date);
      for (
        let i = 0;
        new Date(start.getTime() + 1000 * 60 * 60 * 24 * i) < end.getTime();
        ++i
      ) {
        const d_i = new Date(start.getTime() + 1000 * 60 * 60 * 24 * i);

        const year = d_i.getFullYear();
        const month = d_i.getMonth() + 1;
        const date = d_i.getDate();

        if (dict[year] === undefined) {
          dict[year] = {};
        }

        if (dict[year][month] === undefined) {
          dict[year][month] = {};
        }

        if (dict[year][month][date] === undefined) {
          dict[year][month][date] = [];
        }

        dict[year][month][date].push(element);

        if (
          year === end.getFullYear() &&
          month === end.getMonth() + 1 &&
          date === end.getDate()
        ) {
          break;
        }
      }
    });

    return dict;
  }

  static async getDayTasks(year, month, date) {
    const dict = await CalendarController.getDictTasks();
    return dict?.[year]?.[month]?.[date] === undefined
      ? []
      : dict[year][month][date];
  }

  static async getMonthTasks(year, month) {
    const dict = await CalendarController.getDictTasks();

    let month_tasks = DateController.getMonthDays(year, month);
    month_tasks.forEach((element) => {
      const d = new Date(element.date);
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const date = d.getDate();
      if (dict?.[year]?.[month]?.[date] === undefined) {
        element.tasks = [];
        element.has_completed_task = false;
        element.has_not_completed_task = false;
      } else {
        element.tasks = dict[year][month][date];

        let completed_task_counter = 0;
        let not_completed_task_counter = 0;
        element.tasks.forEach((task) => {
          if (task.completed) {
            completed_task_counter += 1;
          } else {
            not_completed_task_counter += 1;
          }
        });

        element.has_completed_task = completed_task_counter > 0 ? true : false;
        element.has_not_completed_task =
          not_completed_task_counter > 0 ? true : false;
      }
    });

    return month_tasks;
  }

  static async getYearTasks(year) {
    const dict = await CalendarController.getDictTasks();

    let year_tasks = [];
    for (let month = 1; month <= 12; ++month) {
      const month_tasks = DateController.getMonthDays(year, month);
      year_tasks.push(month_tasks);
    }

    year_tasks.forEach((month) => {
      month.forEach((element) => {
        const d = new Date(element.date);
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const date = d.getDate();
        if (dict?.[year]?.[month]?.[date] === undefined) {
          element.has_completed_task = false;
          element.has_not_completed_task = false;
        } else {
          let completed_task_counter = 0;
          let not_completed_task_counter = 0;
          dict[year][month][date].forEach((task) => {
            if (task.completed) {
              completed_task_counter += 1;
            } else {
              not_completed_task_counter += 1;
            }
          });

          element.has_completed_task =
            completed_task_counter > 0 ? true : false;
          element.has_not_completed_task =
            not_completed_task_counter > 0 ? true : false;
        }
      });
    });
    return year_tasks;
  }
}
