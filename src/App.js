import DatePicker from './components/datepicker';
import WeekPicker from './components/weekpicker';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Demo datepickers</h3>

      <h4>Seletor de dia</h4>
      <DatePicker options={{ inline: true, monthSelectorType: 'static' }} onChange={([value]) => console.log(value)} />

      <h4>Seletor com range</h4>
      <DatePicker
        options={{ monthSelectorType: 'static', inline: true, mode: 'range' }}
        onChange={(value) => console.log(value)}
      />

      <h4>Seletor com horas e minutos</h4>
      <DatePicker
        options={{ monthSelectorType: 'static', inline: true, enableTime: true }}
        onChange={(value) => console.log(value)}
      />

      <h4>Seletor de semanas</h4>
      <WeekPicker
        options={{ monthSelectorType: 'static', inline: true, weekNumbers: true }}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}

export default App;
