export const getData = async (filter) => {
    try { const data = await fetch(`http://localhost:8080/phones?name=${filter}`)
    const dataToJson = await data.json()
    //console.log(dataToJson)
    return dataToJson
        /*name: dataToJson.name,
        difficulty: dataToJson.difficulty*/
    } catch(err){console.log(err)}
 }