import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useEffect, useRef } from 'react';
import { Portuguese } from 'flatpickr/dist/l10n/pt.js';

const hooks = [
  'onChange',
  'onOpen',
  'onClose',
  'onMonthChange',
  'onYearChange',
  'onReady',
  'onValueUpdate',
  'onDayCreate',
];

const Datepicker = (props) => {
  const elementRef = useRef(null);
  const instanceRef = useRef(null);

  const mountFlatpickerInstance = () => {
    flatpickr.localize(Portuguese);
    instanceRef.current = flatpickr(elementRef.current, {
      locale: {
        firstDayOfWeek: 0,
      },
      ...props.options,
    });
  };

  useEffect(() => {
    mountFlatpickerInstance();
  }, []);

  useEffect(() => {
    hooks.forEach((hook) => {
      if (props[hook]) {
        instanceRef.current.set(hook, [props[hook]]);
      }
    });

    if (props.hasOwnProperty('value')) {
      instanceRef.current.setDate(props.value, false);
    }
  });

  const isInline = props?.options?.inline ?? false;

  return isInline ? <div ref={elementRef} /> : <input ref={elementRef} />;
};

export default Datepicker;
