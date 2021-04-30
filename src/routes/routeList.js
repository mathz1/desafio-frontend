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
    path: '/UpdateTask',
    component: pages.UpdateTask,
    exact: true,
    title: 'Atualizar Tarefa',
  },
  {
    path: '/profile',
    component: profile,
    exact: true,
    title: 'Perfil'
  },
  {
    path: '/',
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
  {
    path: '/',
    component: pages.Login,
    exact: true,
    title: 'Login',
  },
];