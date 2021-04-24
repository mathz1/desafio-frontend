import * as pages from '../pages';


export const privateRouteList = [];

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
  {
    path: '/CreateTask',
    component: pages.CreateTask,
    exact: true,
    title: 'Criar tarefa',
  },
];