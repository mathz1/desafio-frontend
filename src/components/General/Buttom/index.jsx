import { ButtonContainer } from './style';

const Button = ({
  text,
  typeButton = 'button',
  onClick,
}) => {
  return (
    <ButtonContainer type={typeButton} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

export default Button;