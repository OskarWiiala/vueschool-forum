<template>
  <form @submit.prevent="savePost"> <!-- submit.prevent is same as e.preventDefault -->
    <div class="form-group">
      <textarea name="" id="" cols="30" rows="10" class="form-input" v-model="postText">
            </textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit post</button>
    </div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        postText: ''
      }
    },

    props: {
      threadId: {
        required: true,
        type: String
      }
    },

    methods: {
      savePost () {
        const postId = 'greatPost' + Math.random()

        const post = {
          text: this.postText,
          publishedAt: Math.floor(Date.now() / 1000), // get current time in seconds rounded down
          threadId: this.threadId,
          userId: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1',
          '.key': postId
        }

        this.postText = ''

        // Communicate with parent component
        // this.$emit(eventName, data, optionalArgument1, optionalArgument2, ...)
        // Alternatively, pass an object as the data: (passing an object means you don't have to remember the argument order)
        // this.$emit(eventName, {data, optionalArgument1, optionalArgument2, ...})
        this.$emit('save-post', { post })
      }
    }
  }
</script>

<style></style>