import CounterItem from "../../atoms/CounterItem/CounterItem"
import "./counterStatistics.scss"

export default function CounterStatistics({ data, background="secondary" }) {
  return (
    <div className={`counter counter--${background}`}>
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
