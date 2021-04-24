import { Link } from './styles';

const LinkText = ({ path, text }) => {
  return (
    <span>
      <Link to={path}>{text}</Link>
    </span>
  );
};

export default LinkText;