import { parseToRgb } from 'polished';

export const colors = {
  primary: '#6904A7',
  black: '#292929',
  dark: '',
  error: '#CD3A28',
  overlay: '#332940',
}

export const colorWithTransparency = (
  color,
  transparency,
) => {
  const { red, green, blue } = parseToRgb(color);

  const transparentColor = `rgba(${red}, ${green}, ${blue}, ${transparency})`;

  return transparentColor;
};