import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import ComponentsSimple from "../pages/ComponentsSimple";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
    {path:'/about', component: About, exact: false},
    {path:'/posts', component: Posts, exact: true},
    {path:'/posts/:id', component: PostIdPage, exact: true},
    {path:'/comps', component: ComponentsSimple, exact: false},
    {path:'/error', component: Error, exact: false},
]

export const publicRoutes = [
    {path:'/about', component: About, exact: false},
    {path:'/error', component: Error, exact: false},
    {path:'/login', component: Login, exact: false},
]
