// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/**
 * 
 * @param {*} Component 
 * @returns Return component in navigation as a props.
 */
export const Navigation = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
      <Component
        navigate={navigate}
        location={location}
        {...props}
        />
    );
  };
  
  return Wrapper;
};