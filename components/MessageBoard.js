import Table from 'react-bootstrap/Table'
const BoardMessage =  ({id, name, message}) => (
    <>
      <tr>
            <td >{id+1}</td>
            <td >{name}</td>
            <td>{message}</td>
      </tr>
    </>
)
const MessageBoard = () => {
    const messages = [
      { id: 0, name: "Bill", message: "Hi All!" },
      { id: 1, name: "Ann", message: "ICS211 is fun" },
      { id: 2, name: "Johnny", message: "I'm stranded" },
      { id: 3, name: "Barb", message: "Hi" },
      { id: 4, name: "Frank", message: "Who's tired"},
      { id: 5, name: "Sarah", message: "I heart React"}
    ];
    return (
        <Table striped bordered hover>
             <thead >
                <tr className="border-bottom border-dark">
                    <th>#</th>
                    <th>Name</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
            { messages.map( topic =>
                <BoardMessage key ={topic.id} {...topic}  /> 
            )}
            </tbody>
        </Table>
    );
    
};
export default MessageBoard;