import React, {useRef, useState} from 'react';

const EventsExample = () => {

	const inputRef = useRef<HTMLInputElement>(null);

	const [value, setValue] = useState<string>('');
	const [isDrag, setIsDrag] = useState<boolean>(false);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log('Controlled value: ', value);
		console.log('Not controlled value: ', inputRef.current?.value);
	}

	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('drag')
	}

	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
		console.log('drop', isDrag)
	}

	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false)
	}

	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(true)
	}




	return (
		<div>
			<input type="text" value={value} onChange={changeHandler} placeholder="Controlled"/>
			<input type="text" ref={inputRef} placeholder="Not controlled"/>
			<button onClick={clickHandler}>Click</button>
			<div style={{width: '100px', height: '100px', backgroundColor: 'teal', margin: '5px'}}
					 draggable
					 onDrag={dragHandler}
			/>
			<div style={{width: '100px', height: '100px', backgroundColor: isDrag? 'red' : 'teal', margin: '5px'}}
					 onDrop={dropHandler}
					 onDragLeave={leaveHandler}
					 onDragOver={dragWithPreventHandler}
			/>
		</div>
	);
};

export default EventsExample;
