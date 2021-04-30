import * as pages from '../pages';
import profile from '../pages/Profile/index';


export const privateRouteList = [
  {
    path: '/CreateTask',
    component: pages.CreateTask,
    exact: true,
    title: 'Criar tarefa',
  },
  {
    path: '/profile',
    component: profile,
    exact: true,
    title: 'Perfil'
  },
];

export const publicRouteList = [
  {
    path: '/login',
    component: pages.Login,
    exact: true,
    title: 'Login',
  },
  {
    path: '/register',
    component: pages.Register,
    exact: true,
    title: 'Cadastro',
  },
];