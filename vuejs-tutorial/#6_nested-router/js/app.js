const Login = {
    template:`
        <div>
            <h2>Login Section</h2>
            <router-view></router-view>
        </div>
    `,
}
const LoginForm = {
    template:`
        <form action="/" method="post">
            <div>
                <label for="account">E-mail :</label>
                <input type="email" id="account">
            </div>
            <div>
                <label for="password">Password :</label>
                <input type="password" id="password">
            </div>
        </from>
    `,
}

const List = {
    template:`
        <div>
            <h2>List Section</h2>
            <router-view></router-view>
        </div>
    
    `
}

const ListItems = {
    template:`
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    `
}

const routes = [
    {
        path:'/login',
        component:Login,
        children:[
            {path:'', component:LoginForm}
        ]
    },
    {
        path:'/list',
        component:List,
        children:[
            {path:'',component:ListItems}
        ]
    }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')