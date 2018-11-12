

Vue.component('todo-item',{
    props:['todo'],
    template:'<p>{{todo.id}}: {{todo.text}}</p>'
})

Vue.component('todo-list', {
    props:['passedData'],
    template:'<p>{{ passedData.text }}</p>'
})

new Vue({
    el:'#app',
    data:{
        Todos:[
            {id:0, text:'Learn Vue.js'},
            {id:1, text:'Learn Components'},
            {id:2, text:'Learn Learn Props'},
            {id:3, text:'Learn For Loop'},
        ],
        change:[
            {id:0,text:'python'},
            {id:1,text:'C'},
            {id:2,text:'C#'},
            {id:3,text:'javascript'},
        ]
    }
})