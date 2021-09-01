import React, {useState} from 'react';

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary',
}

interface CardProps {
	width: string;
	height: string;
	backgroundColor: string;
	variant: CardVariant;
	cardAction?: (num: number) => void;
}

const Card: React.FC<CardProps> = ({variant, width, height, backgroundColor, children, cardAction}) => {

	const [state, setState] = useState(0)

	return (
		<div
			style={{
				width,
				height,
				backgroundColor: variant === 'primary' ? 'teal' : 'lightgray',
				border: variant === 'outlined' ? '1px solid teal' : 'none'
			}}
			onClick={() => cardAction && cardAction(state)}
		>{children}</div>
	);
};

export default Card;
