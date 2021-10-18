import DatePicker from './components/datepicker';
import WeekPicker from './components/weekpicker';
import './App.css';
import { useState } from 'react';

function App() {
  const [daySelectorDate, setDaySelectorDate] = useState(new Date());
  const [rangeSelectorDate, setRangeSelectorDate] = useState([new Date('2021-10-13'), new Date()]);
  const [timeSelectorDate, setTimeSelectorDate] = useState(new Date());

  return (
    <div className="App">
      <h3>Seletor de dia: {daySelectorDate?.toLocaleDateString('pt-br')}</h3>
      <DatePicker
        value={daySelectorDate}
        options={{ inline: true }}
        onChange={([value]) => setDaySelectorDate(value)}
      />

      <h3>
        Seletor com range: {rangeSelectorDate?.[0]?.toLocaleDateString('pt-br')} até{' '}
        {rangeSelectorDate?.[1]?.toLocaleDateString('pt-br')}
      </h3>
      <DatePicker
        value={rangeSelectorDate}
        options={{ inline: true, mode: 'range' }}
        onChange={(value) => setRangeSelectorDate(value)}
      />

      <h3>Seletor com horas e minutos:</h3>
      <p>
        Data: {timeSelectorDate?.toLocaleDateString('pt-br')} {timeSelectorDate?.getHours()} :{' '}
        {timeSelectorDate?.getMinutes()}
      </p>
      <DatePicker
        value={timeSelectorDate}
        options={{ inline: true, enableTime: true }}
        onChange={([value]) => setTimeSelectorDate(value)}
      />

      <h3>Seletor de semanas</h3>
      <WeekPicker options={{ inline: true, weekNumbers: true }} onChange={(value) => console.log(value)} />
    </div>
  );
}

export default App;
