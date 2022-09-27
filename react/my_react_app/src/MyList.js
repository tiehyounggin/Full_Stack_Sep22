function MyList(props){
    return(
        <>
            <h2>Heya, Im from MyList function component!</h2>

            {/* {console.log("here test " + props.anArr.length)} */}
            
            {(props.anArr && props.anArr.length <= 0) ? "No data" : <table className="table table-hover table_main" style={{backgroundColor:"whitesmoke"}}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Avatar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        (props.anArr && props.anArr.map((anObj, index) => {
                            return <tr key={index}>
                                <td>{anObj.id}</td>
                                <td>{anObj.first_name}</td>
                                <td>{anObj.last_name}</td>
                                <td>{anObj.email}</td>
                                <td><img src={anObj.avatar} width="100px" height="100px"></img></td>
                            </tr>
                        }))
                    }
                </tbody>
                </table>
            }


        </>
    )
}

export default MyList;