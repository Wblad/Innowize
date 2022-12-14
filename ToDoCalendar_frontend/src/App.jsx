import { Route, Routes } from 'react-router';

import HomeRedirectPage from './components/HomeRedirectPage/HomeRedirectPage';
import YearPage from './components/YearPage/YearPage';
import MonthPage from './components/MonthPage/MonthPage';
import DatePage from './components/DatePage/DatePage';
import SignInPage from './components/SignPage/SignInPage';
import SignUpPage from './components/SignPage/SignUpPage';
import TaskPage from './components/TaskPage/TaskPage';
import Error404Page from './components/Error404Page/Error404Page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirectPage />} />
      <Route path="/year/:year" element={<YearPage />} />
      <Route path="/year/:year/month/:month" element={<MonthPage />} />
      <Route
        path="/year/:year/month/:month/date/:date"
        element={<DatePage />}
      />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/task" element={<TaskPage />} />
      <Route path="/task/:taskId" element={<TaskPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}

export default App;
