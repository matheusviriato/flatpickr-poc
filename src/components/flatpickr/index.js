import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import './style.css';
import { Portuguese } from 'flatpickr/dist/l10n/pt.js';

flatpickr.localize(Portuguese);

export const events = [
  'onChange',
  'onOpen',
  'onClose',
  'onMonthChange',
  'onYearChange',
  'onReady',
  'onValueUpdate',
  'onDayCreate',
];

export const locale = {
  firstDayOfWeek: 0,
  weekAbbreviation: 'Sem',
};

export default flatpickr;
