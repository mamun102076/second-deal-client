import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false)

    useEffect(() => {
        if (email) {
            fetch(`https://second-deal-server.vercel.app/user/Seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller)
                })
        }
    }, [email])
    return [isSeller]
}

export default useSeller;