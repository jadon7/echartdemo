import { ECharts } from 'echarts';

export const defaultColorPalette = [
  '#5070dd',
  '#b6d634',
  '#505372',
  '#ff994d',
  '#0ca8df',
  '#ffd10a',
  '#fb628b',
  '#785db0',
  '#3fbe95',
];

export const defaultColorPalette2 = defaultColorPalette;

export const darkColorPalette = defaultColorPalette;

export const defaultFont = "'Open Sans Condensed', sans-serif";

export function getContainerFontFamily(chart: ECharts) {
  return getComputedStyle(chart.getDom()).getPropertyValue('font-family');
}
