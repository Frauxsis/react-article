import { Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from '../pages/Layout';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
	//注册路由表 useRoutes
	{ path: '/login', element: <Login /> },
	{ path: '/layout', element: <Layout /> },
	{ path: '/', element: <Navigate to="/about" /> },
];
