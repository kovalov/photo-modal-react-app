import { IconContext } from 'react-icons';

const MyIcon = ({ className, children }) => {
  return (
    <IconContext.Provider value={{ className: `${className}` }}>
      {children}
    </IconContext.Provider>
  );
};

export default MyIcon;
