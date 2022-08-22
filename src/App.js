import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Base, Header, Home, Order, Toppings } from './components';

import { AnimatePresence } from 'framer-motion';

function App() {
	const [pizza, setPizza] = useState({ base: '', toppings: [] });
	const location = useLocation();

	const addBase = (base) => {
		setPizza({ ...pizza, base });
	};

	const addToppings = (topping) => {
		let newToppings;
		if (!pizza.toppings.includes(topping)) {
			newToppings = [...pizza.toppings, topping];
		} else {
			newToppings = pizza.toppings.filter((item) => item !== topping);
		}
		setPizza({ ...pizza, toppings: newToppings });
	};

	return (
		<>
			<Header />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Home />} />
					<Route
						path="/base"
						element={<Base addBase={addBase} pizza={pizza} />}
					/>
					<Route
						path="/toppings"
						element={
							<Toppings addToppings={addToppings} pizza={pizza} />
						}
					/>
					<Route path="/order" element={<Order pizza={pizza} />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
