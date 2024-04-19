import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import GeminiBody from './GeminiBody';

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
    <div style={{display:'flex'}}>
    <Sidebar/>
    <GeminiBody/>
    </div>
  );
};

export default Greeting;