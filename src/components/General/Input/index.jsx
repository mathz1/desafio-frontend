import { Wrapper } from '../../../styles/generalComponents';
import { InputContainer } from './styles';

const Input = ({
  entity,
  onChange,
  type = 'text',
  label,
  placeholder,
  inputName,
}) => {

  // const { value, invalidity } = entity;

  const handleChange = (event) => {
    if (onChange) onChange(event);
  }

  return (
    <Wrapper>
      {label}
      <InputContainer
        name={inputName}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        // value={value}
      />
    </Wrapper>
  )
}

export default Input;