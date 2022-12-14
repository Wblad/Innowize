import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeRedirectPage() {
  let navigate = useNavigate();

  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    navigate(`/year/${year}/month/${month}`);
  }, [navigate]);

  return <></>;
}
