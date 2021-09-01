import React, {FC} from 'react';

interface ListProps<T> {
	title?: string;
	items: T[];
	renderItem: (item: T) => React.ReactNode;
}

export default function List <T> (props: ListProps<T>)  {
	return (
		<div>
			<h2>{props.title}</h2>
			{props.items.map(props.renderItem)}
		</div>
	);
};

