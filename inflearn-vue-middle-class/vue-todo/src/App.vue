<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @addTodoItem="addOneItem"></todo-input>
    <todo-list :propsdata="todoItems" @removeItem="removeOneItem" @toggleComplate="toggleComplate"></todo-list>
    <todo-footer @clearAll="clearAll"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data:function(){
    return{
      todoItems:[],
    }
  },
  methods:{
    addOneItem:function(todoItem){
      var obj = {
          completed:false,
          item: todoItem,
      };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem:function(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    toggleComplate:function(todoItem, index){
      this.todoItems[index].completed = !this.todoItems[index].completed
      // 로컬 스토리지에 데이터를 갱신하는 DOM
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAll:function(){
      this.todoItems = []
      localStorage.clear();
    }
  },

  created:function(){
    if (localStorage.length > 0){
        for (var i = 0; i < localStorage.length; i ++){
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
            this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              
        }
          
      }
    }
  },
  components:{
    //컴포넌트
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }
}
</script>

<style lang="scss">
body{
  text-align: center;
  background: #f6f6f6;
}

input{
  border-style: groove;
  width: 200px;
}
button{
  border-style:groove; 
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
