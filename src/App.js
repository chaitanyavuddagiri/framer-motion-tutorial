import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Base, Header, Home, Modal, Order, Toppings } from './components';

import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();
	const [pizza, setPizza] = useState({ base: '', toppings: [] });
	const [showModal, setShowModal] = useState(false);

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
			<Modal showModal={showModal} setShowModal={setShowModal} />
			<AnimatePresence
				exitBeforeEnter
				onExitComplete={() => setShowModal(false)}
			>
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
					<Route
						path="/order"
						element={
							<Order pizza={pizza} setShowModal={setShowModal} />
						}
					/>
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
