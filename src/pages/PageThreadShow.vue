<template>
    <div class="col-large push-top">
        <h1>{{ thread.title }}</h1>
        <PostList :posts="posts" />
        <form @submit.prevent="addPost"> <!-- submit.prevent is same as e.preventDefault -->
            <div class="form-group">
                <textarea name="" id="" cols="30" rows="10" class="form-input" v-model="newPostText">
            </textarea>
            </div>
            <div class="form-actions">
                <button class="btn-blue">Submit post</button>
            </div>
        </form>
    </div>
</template>

<script>
    import sourceData from '@/data.json'
    import PostList from '@/components/PostList'
    export default {
        components: {
            PostList
        },

        computed: {
            posts () {
                const postIds = Object.values(this.thread.posts)
                return Object.values(sourceData.posts).filter(post => postIds.includes(post['.key']))
            }
        },

        props: {
            id: {
                required: true,
                type: String
            }
        },

        data () {
            return {
                thread: sourceData.threads[this.id],
                newPostText: ''
            }
        },

        methods: {
            addPost () {
                const postId = 'greatPost' + Math.random()

                const post = {
                    text: this.newPostText,
                    publishedAt: Math.floor(Date.now() / 1000), // get current time in seconds rounded down
                    threadId: this.id,
                    userId: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1',
                    '.key': postId
                }
                // Vue cannot detect when object properties are added or removed because of the limitations of modern JavaScript.
                // In order to make the changes reactive (aka make the components update), use the Vue.set method
                // Vue.set(object, propertyName, value)
                // Vue.set(sourceData.posts, postId, post)
                // Vue.set(this.thread.posts, postId, postId)

                // Alternatively, add new post without Vue.set:
                this.$set(sourceData.posts, postId, post)
                this.$set(this.thread.posts, postId, postId)

                // append new post to user
                this.$set(sourceData.users[post.userId].posts, postId, postId)

                this.newPostText = ''

                // Do not do like this, or else components will not update!
                // sourceData.posts[postId] = post
                // this.thread.posts[postId] = postId
            }
        }
    }
</script>