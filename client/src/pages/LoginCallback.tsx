import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  });

  return <div>...loading</div>;
}

export default Callback;
