import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Sidebar from './Sidebar';

const Greeting = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || localStorage.getItem('userName');
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate('/reactai');
    }
  }, [name, navigate]);

  return (
    <div>
    <Sidebar/>
      Hii {name}! Welcome to React AI.
      {/* Add any additional content for this page */}
    </div>
  );
};

export default Greeting;