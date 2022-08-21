import React from 'react';
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
			mass: 0.4,
			damping: 8,
			when: 'beforeChildren',
			staggerChildren: 0.4,
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
	},
	visable: {
		opacity: 1,
	},
};

const Order = ({ pizza }) => {
	return (
		<motion.div
			className="order container"
			variants={containerVariants}
			initial="hidden"
			animate="visable"
		>
			<h2>Thank you for your order :)</h2>
			<motion.p variants={childVariants}>
				You ordered a {pizza.base} pizza with:
			</motion.p>
			<motion.div variants={childVariants}>
				{pizza.toppings.map((topping) => (
					<div key={topping}>{topping}</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Order;
