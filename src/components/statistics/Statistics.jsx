
const Statistics = (props) => {
  return (
    <>
    <p>Good: {props.good}</p>
    <p>Neitral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
    <p>Total: {props.total}</p>
    <p>PositivePercentage: {props.positive}%</p>
    </>
  )
}

export default Statistics; 