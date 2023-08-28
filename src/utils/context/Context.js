import { createContext, useEffect, useState } from "react";

export const CustomContext = createContext()

export const Context = (props) => {

	const [user, setUser] = useState({
		email: ''
	})

	const [basket, setBasket] = useState([])

	const addBasket = (product) => {
		setBasket(prev => [...prev, {
			...product,
			count: 1
		}])
	}

	const plusOneBasket = (id) => {
		setBasket(prev => prev.map(item => {
			if (item.id === id) {
				return { ...item, count: item.count + 1 }
			}
			return item
		})
		)
	}

	const delBasket = (id) => {
		setBasket(prev => prev.filter(item => item.id !== id))

	}

	const minusOneBasket = (id) => {

		let count = basket.find(item => item.id === id).count

		if (count === 1) {
			setBasket(prev => prev.filter(item => item.id !== id))
		} else {
			setBasket(prev => prev.map(item => {
				if (item.id === id) {
					return { ...item, count: item.count - 1 }
				}
				return item
			})
			)
		}
	}
	useEffect(() => {
		if (localStorage.getItem('user') !== null) {
			setUser(JSON.parse(localStorage.getItem('user')))
		}

	}, [])

	const value = {
		user,
		setUser,

		basket,
		setBasket,
		addBasket,
		plusOneBasket,
		minusOneBasket,
		delBasket
	}

	return <CustomContext.Provider value={value}>
		{props.children}
	</CustomContext.Provider>
}