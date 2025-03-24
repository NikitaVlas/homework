import React from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (text: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
	saveTask: () => void
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.target.value)
	};

	const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && props.currentText.trim()) {
			props.setCurrentText('');
			props.saveTask();
		}
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}  />
	);
};
