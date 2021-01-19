import { EDIT_PAGE, VIEW_PAGE } from '../constants/page.constants';

export const landingRoute = () => '/';
export const dashboardRoute = () => '/dashboard';

export const usersRoutes = () => `${dashboardRoute()}/users`;
export const userTableRoute = () => `${usersRoutes()}/`;
export const singleUserRoute = () => `${usersRoutes()}/:mode/:id`;
export const generateSingleUserViewRoute = (id) => singleUserRoute().replace(':id', id).replace(':mode', VIEW_PAGE);
export const generateSingleUserEditRoute = (id) => singleUserRoute().replace(':id', id).replace(':mode', EDIT_PAGE);

export const postsRoutes = () => `${dashboardRoute()}/posts`;
export const postTableRoute = () => `${postsRoutes()}/`;
export const singlePostRoute = () => `${postsRoutes()}/:id`;
export const generateSinglePostRoute = (id) => singlePostRoute().replace(':id', id);
