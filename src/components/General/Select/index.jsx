import { SelectInput } from './styles';
import { Wrapper } from '../../../styles/generalComponents'

const Select = ({
  value,
  name,
  label,
  onChange,
  optionList,
}) => {
  const renderOptions = optionList.map(
    ({ name, value }) => (
      <option key={value} value={value}>
        {name}
      </option>
    ),
  );

  return (
    <Wrapper>
      {label}
      <SelectInput name={name} onChange={onChange} value={value}>
        {renderOptions}
      </SelectInput>
    </Wrapper>
  );
};

export default Select;