import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer,setIsBuyer] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/user/buyer/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setIsBuyer(data.isBuyer)
        })
    },[email])
    return [isBuyer]
}

export default useBuyer;