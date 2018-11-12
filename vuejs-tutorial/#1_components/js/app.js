// Global Component

Vue.component('todo-item',{
    template: '<p>This is a child component</p>'
})

// 실습 #1 - `todo-footer`컴포넌트의 전역 등록
// <p>This is another child global component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요

Vue.component('todo-footer', {
    template:'<p>This is another child global component</p>'
})

const todoItem = {
    template:'<p>This is another child local component</p>'
}

const app = new Vue({
    el:'#app',
    data:{
        message:'This is a parent compontent'
    },
    components:{
        'todo-item':todoItem
    },

    // 실습 #2 - `todo-footer`컴포넌트 지역 등록
    // <p>This is anoter child local component</p> 를 template 으로 갖는 컴포넌트를 등록
})