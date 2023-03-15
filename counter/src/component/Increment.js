export const Increment = ({ updateData, count }) => {
  return (
    <button onClick={() => updateData(count + 1)}> + </button>
  )
}
