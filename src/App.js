import React from 'react';
import 'antd/dist/antd.less';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { Button } from 'antd';

function App() {
	/* 注册路由 */
	const element = useRoutes(routes);
	return (
		<div>
			app
			<Button type="primary">Primary Button</Button>
			{element}
		</div>
	);
}

export default App;
