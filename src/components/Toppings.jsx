import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden: {
		opacity: 0,
		x: '100vw',
	},
	visable: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			delay: 0.5,
		},
	},
};

const buttonVariant = {
	hover: {
		scale: 1.1,
		textShadow: '0px 0px 8px rgb(255,255,255)',
		boxShadow: '0px 0px 8px rgb(255,255,255)',
		transition: { yoyo: Infinity, duration: 0.3 },
	},
};

const Toppings = ({ addToppings, pizza }) => {
	const toppings = [
		'mushrooms',
		'peppers',
		'onions',
		'olives',
		'extra cheese',
		'tomatoes',
	];
	return (
		<motion.div
			className="toppings container"
			variants={containerVariants}
			initial="hidden"
			animate="visable"
		>
			<h3>step 2: Choose Toppings</h3>

			<ul>
				{toppings.map((topping) => {
					let spanClass = pizza.toppings.includes(topping)
						? 'active'
						: '';

					return (
						<motion.li
							key={topping}
							onClick={() => addToppings(topping)}
							whileHover={{
								scale: 1.2,
								color: '#F8E112',
								originX: 0,
							}}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<span className={spanClass}>{topping}</span>
						</motion.li>
					);
				})}
			</ul>

			<Link to="/order">
				<motion.button variants={buttonVariant} whileHover="hover">
					Order
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default Toppings;
