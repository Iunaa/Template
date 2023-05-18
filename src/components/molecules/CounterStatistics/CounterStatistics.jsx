import CounterItem from "../../atoms/CounterItem/CounterItem"
import "./counterStatistics.scss"

export default function CounterStatistics({ data, background="secondary" }) {
  const classCounterStatistics = {
    counter: `counter counter--${background}`
  }
  
  return (
    <div className={classCounterStatistics.counter}>
      <div className="container">
        <div className="counter__items"> 
          {data.map(({ title, text, icon, background }, idx) => (
            <CounterItem 
              key={idx} 
              title={title} 
              text={text} 
              icon={icon} 
              background={background} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
