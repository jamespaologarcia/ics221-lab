const BoardMessage =  ({id, name, message}) => (
    <>
      <tr>
            <td >{id+1}</td>
            <td >{name}</td>
            <td>{message}</td>
      </tr>
    </>
  )