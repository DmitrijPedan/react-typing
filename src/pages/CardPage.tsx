import React from 'react';
import Card, {CardVariant} from "../components/Card";

const CardPage = () => {
	return (
		<div>
			<Card width={'250px'} height={'250px'} backgroundColor={'red'} variant={CardVariant.outlined} cardAction={(num) => console.log('action', num)}>
				<p>Content</p>
			</Card>
		</div>
	);
};

export default CardPage;
