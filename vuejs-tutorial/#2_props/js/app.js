Vue.component('child-component',{
    props:['passedData'],
    template:'<p>{{passedData}}</p>'
})

Vue.component('sibling-component',{
    props:['props'],
    template:'<p>{{props}}</p>'
})

const app = new Vue({
    el:'#app',
    data:{
        message:'Hello vue! passed from Parent Component',
        change:'Change vue component!'
    }
})