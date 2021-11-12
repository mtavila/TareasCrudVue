const Home = () => import('./components/Home.vue');
const Contacto = () => import('./components/Contacto.vue');

const Mostrar = ()=> import('./components/tarea/Mostrar.vue');
const Crear = ()=> import('./components/tarea/Crear.vue');
const Editar = ()=> import('./components/tarea/Editar.vue');

export const routes = [
    {
        name : 'home',
        path: '/',
        components: Home
    },
    {
        name : 'contacto',
        path: '/contacto',
        components: Contacto
    },
    {
        name : 'mostrarTareas',
        path: '/tareas',
        components: Mostrar
    },
    {
        name : 'crearTarea',
        path: '/crear',
        components: Crear
    },
    {
        name : 'editarTarea',
        path: '/editar/:idtarea',
        components: Editar
    },
];

