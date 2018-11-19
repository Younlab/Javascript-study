<template>
  <div id="app">
    <todo-header></todo-header>

    <!-- 하위 컴포넌트 이벤트 발생 감지 -->
    <todo-input></todo-input>

    <!-- 데이터 하위 컴포넌트에 내려서 사용하게끔 전달 -->
    <todo-list></todo-list>

    <!-- 이벤트 발생시에 로컬 메소드 실행 -->
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data(){
    return{
      todoItems:[],
    }
  },
  methods:{
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
