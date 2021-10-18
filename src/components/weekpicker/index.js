/* eslint-disable react-hooks/exhaustive-deps */
import flatpickr from "flatpickr";
import weekSelect from "flatpickr/dist/plugins/weekSelect/weekSelect";
import "flatpickr/dist/flatpickr.css";
import { useEffect, useRef } from "react";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";

const hooks = [
  "onChange",
  "onOpen",
  "onClose",
  "onMonthChange",
  "onYearChange",
  "onReady",
  "onValueUpdate",
  "onDayCreate",
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
      plugins: [new weekSelect({})],
      onChange: [
        function () {
          // extract the week number
          // note: "this" is bound to the flatpickr instance
          const weekNumber = this.selectedDates[0]
            ? this.config.getWeek(this.selectedDates[0])
            : null;
          props.onChange({
            weekNumber,
            weekStartDay: this.weekStartDay,
            weekEndDay: this.weekEndDay,
          });
        },
      ],
    });
  };

  useEffect(() => {
    mountFlatpickerInstance();
  }, []);

  useEffect(() => {
    hooks.forEach((hook) => {
      if (props[hook] && hook !== "onChange") {
        instanceRef.current.set(hook, [props[hook]]);
      }
    });

    if (props.hasOwnProperty("value")) {
      instanceRef.current.setDate(props.value, false);
    }

    console.log(instanceRef.current);
  });

  const isInline = props?.options?.inline ?? false;

  return isInline ? <div ref={elementRef} /> : <input ref={elementRef} />;
};

export default Datepicker;
