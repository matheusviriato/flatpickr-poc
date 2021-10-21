/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import flatpickr, { locale, events } from '../flatpickr';

const Datepicker = ({ value, options, onChange, ...rest }) => {
  const elementRef = useRef(null);

  const createInstance = () => {
    const instance = flatpickr(elementRef.current, {
      locale,
      ...options,
    });

    instance.set('onChange', [onChange]);

    events.forEach((event) => {
      if (rest[event]) instance.set(event, [rest[event]]);
    });

    if (value) instance.setDate(value, false);
  };

  useEffect(() => {
    if (elementRef) {
      createInstance();
    }
  }, [elementRef]);

  const isInline = options?.inline ?? false;

  return isInline ? <div ref={elementRef} /> : <input ref={elementRef} />;
};

Datepicker.propTypes = {
  options: PropTypes.object,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
};

Datepicker.defaultProps = {
  options: {},
  value: undefined,
};

export default Datepicker;
