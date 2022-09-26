function Q2_2609(){

    let anArr = [
        {
            "name": "Tim",
            "age": 22
        },
        {
            "name": "Johnson",
            "age": 43
        },
        {
            "name": "Nick",
            "age": 33
        },
        {
            "name": "Jackson",
            "age": 57
        }
    ]

    return(
        <>
            <h1>Q2 - Age is highlighted in red if 40 and above!</h1>
            <div>
                {
                    anArr.map((anObj, index) => {
                        return <div key={index}>
                            <span className={anObj.age > 40 ? "highlight_red":""}>Name: {anObj.name} -- Age: {anObj.age}</span>
                        </div>
                    })
                }
            </div>

        </>
    )
}

export default Q2_2609;