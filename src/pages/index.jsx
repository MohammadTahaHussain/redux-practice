import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const HomePage = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()


    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART', payload: {
                id: 2,
                title: 'Xyz',
                price: 606,
            }
        })
    }

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <>
            <div>
                <div className="bg-yellow-400 text-white text-center py-2">
                    <h1 className="leading-normal font-semibold text-[18px]">Supporting our local beverage, Pakola now available</h1>
                </div>
                <div className="bg-black flex justify-between items-center">
                    <button>021121121</button>
                    <img src="https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fconsole.indolj.io%2Fupload%2F1666705959-LOGO-min.png&w=128&q=75" alt="" />
                </div>
                <button>qty -</button>
                <button onClick={() => addToCart()}>Add to cart</button>
            </div>
        </>
    )
}

export default HomePage