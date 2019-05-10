<template>
    <v-hover>
      <v-card
          slot-scope="{ hover }"
          :class="[`elevation-${hover ? 12 : 2}`, {completed: todoItem.completed}]"
          class="mx-auto"
          @dblclick="onCompleteUpd"
      >
        <v-card-title primary-title>
          <div>
            <h3 v-show="!editable" :contenteditable="editable" class="headline mb-0">{{ todoItem.title }}</h3>
            <input v-show="editable" type="text" v-model="todoItem.title">
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange" @click="onEdit">{{editable ? 'Save' : 'Edit'}}</v-btn>
          <v-btn flat color="orange" @click="deleteTodo(todoItem.id)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: "TodoItem",
    props: ["todo"],
    data () {
      return {
        todoItem: {...this.todo},
        editable: false
      };
    },
    methods: {
      ...mapActions( {deleteTodo: 'todos/deleteTodo', editTodo: 'todos/editTodo'} ),
      onEdit: function() {
        this.editable = !this.editable;
        if ( !this.editable ) {
          this.editTodo( this.todoItem );
        }
      },
      onCompleteUpd: function() {
        this.editTodo( {...this.todoItem, completed: !this.todoItem.completed} );
        this.todoItem.completed = !this.todoItem.completed
      },
    }
  };
</script>

<style scoped lang="scss">
  .completed {
    background: lighten($color: #5a9dca, $amount: 0);

    & h3, & input {
      color: #fff;
      text-transform: uppercase;
    }

    & .v-btn {
      color: #fff !important;
    }
  }
</style>
