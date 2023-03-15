export function Decrement({ count, updateData }) {
  return (
    <button onClick={() => updateData(count - 1)}> - </button>
  )
}
