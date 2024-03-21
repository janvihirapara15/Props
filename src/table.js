export function Table({ data, handleDelete, handleEdit }) {
    return (
        <table>
            <thead>
                <th>Name</th>
                <th>LASTNAME</th>
                <th>Gender</th>
                <th>Age</th>
            </thead>      
            <tbody>
                {
                    data?.map((item, index) => {
                        return (
                            <tr>
                                <td>{item?.fname}</td>
                                <td>{item?.lname}</td>
                                <td>{item?.gender}</td>
                                <td>{item?.age}</td>
                                <td><button onClick={() => { handleDelete(index) }}>Delete</button></td>
                                {/* lifting state up  => child to parent  */}
                                {/* props => parent to child  */}
                                <td><button onClick={() => { handleEdit(index, item) }}>Edit</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>              
    )
}