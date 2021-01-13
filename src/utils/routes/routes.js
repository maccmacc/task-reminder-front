export const landingRoute = () => '/';
export const dashboardRoute = () => '/dashboard';

export const usersRoutes = () => `${dashboardRoute()}/users`;
export const userTableRoute = () => `${usersRoutes()}/`;
export const singleUserRoute = () => `${usersRoutes()}/:id`;
export const generateSingleUserRoute = (id) => singleUserRoute().replace(':id', id);

export const postsRoutes = () => `${dashboardRoute()}/posts`;
export const postTableRoute = () => `${postsRoutes()}/`;
export const singlePostRoute = () => `${postsRoutes()}/:id`;
export const generateSinglePostRoute = (id) => singlePostRoute().replace(':id', id);
