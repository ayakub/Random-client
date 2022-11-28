import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://reused-product-sell-server.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBuyer(data.isBuyer);
                    setBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
}

export default useBuyer;