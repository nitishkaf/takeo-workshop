function HelloWorld(props) {
  return (
    <div>
      <span>{props.data}</span>
      {props.children}
    </div>
  )
}

export default HelloWorld;
