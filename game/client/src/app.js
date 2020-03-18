import React from 'react';
import style from './app.less';

import Button from './components/button';

const App = ()=> {
	return (
		<div className={style.app}>
			Hello world!
			<Button onClick={() => {
				alert('I am clicked!');
			}}>
				Click me!
			</Button>
		</div>
	)
};

export default App;