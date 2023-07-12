<template>
    <div class="col-large push-top">
        <h1>{{ thread.title }}</h1>
        <PostList :posts="posts" />
        <PostEditor @save-post="addPost" :threadId="id"/>
    </div>
</template>

<script>
    import sourceData from '@/data.json'
    import PostList from '@/components/PostList'
    import PostEditor from '@/components/PostEditor'
    export default {
        components: {
            PostList,
            PostEditor
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
            addPost (eventData) {
                const post = eventData.post
                const postId = eventData.post['.key']
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

                // Do not do like this, or else components will not update!
                // sourceData.posts[postId] = post
                // this.thread.posts[postId] = postId
            }
        }
    }
</script>