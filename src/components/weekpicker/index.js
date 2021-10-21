/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import flatpickr, { locale, events } from '../flatpickr';
import weekSelect from 'flatpickr/dist/plugins/weekSelect/weekSelect';

const Weekpicker = ({ value, options, onChange, ...rest }) => {
  const elementRef = useRef(null);

  const createInstance = () => {
    const instance = flatpickr(elementRef.current, {
      locale,
      ...options,
      plugins: [new weekSelect({})],
      onChange: [
        function () {
          // extract the week number
          // note: "this" is bound to the flatpickr instance
          const weekNumber = this.selectedDates[0] ? this.config.getWeek(this.selectedDates[0]) : null;
          onChange({
            weekNumber,
            weekStartDay: this.weekStartDay,
            weekEndDay: this.weekEndDay,
          });
        },
      ],
    });

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

Weekpicker.propTypes = {
  options: PropTypes.object,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
};

Weekpicker.defaultProps = {
  options: {},
  value: undefined,
};

export default Weekpicker;
