// newCommentEntry
var newCommentEntry = {
    data: function(){
        return{
            // return commentEntry object
            commentEntry: {
                user:"",
                content:""
            }
        }
    },
    // track user input, update local data structure in component, by v-model
    template:
        `<div class="newComment">
            <table>
                <tr><td><input v-model="commentEntry.user" type="text"></td></tr>
                <tr><td><textarea v-model="commentEntry.content"></textarea></td></tr>
            </table>
            <button v-on:click="$emit('commit-new-comment', commentEntry)">Post new comment</button>
        </div>`
};

var commentSection = {
    props:["comment"],
    template:
        `<div class="commentSection" style="border: solid 3px pink; margin: 2px; padding: 5px">
            <table>
                <tr><td><h3>Comment-ID: {{comment.id}}</h3></td></tr>
                <tr><td><p>User: {{comment.user}}</p></td></tr>
                <tr><td><p>Comment content: {{comment.content}}</p></td></tr>
            </table>
        </div>`

};

// 遍历根组件的data structure，每一次读出的数据都存在props里的blog，通过tempolat打印出来
// v-for，每一次根组件数据发生变化，都刷新
var myBlogMainBody = {
    // to take the blog from parent component
    props:["blog"],
    data: function(){
        return{
            commentEntrys: [{id: 0, user: "User01", content: "The first comment"}],
            commentCount: 0
        }
    },
    methods: {
        // add comment in list by button click
        addNewComment: function(commentEntryInput){
            this.commentCount++;
            let newComment = {
                user: commentEntryInput.user,
                content: commentEntryInput.content,
                id: this.commentCount
            }
            // !!!DONNOT forget THIS.xxx
            this.commentEntrys.push(newComment);
        }
    },
    components: {
        "create-comment-entry": newCommentEntry,
        "comment-section": commentSection
    },
    template: 
        `<div class="myBlogEntry" style="border: dotted 5px blue; margin: 20px; padding: 5px">
            <table>
                <tr><td><h2>{{blog.title}}</h2></td></tr>
                <tr><td>{{blog.content}}</td></tr>
            </table>
            <comment-section v-for="commentFromParent in commentEntrys" v-bind:comment="commentFromParent"></comment-section>
            <create-comment-entry v-on:commit-new-comment="addNewComment"></create-comment-entry>
        </div>`
};


// use static component insted of dynamic component
// component: blogEintrag
var newBlogEntry = {
    data: function() {
        return {
            // return Object blogEntry
            blogEntry: {
                title:"",
                content:""
            }
        }
    },
    // user input title and content: v-model
    // 注意input是单标签
    // textarea是双标签
    template: 
        `<div class="newBlog">
            <table>
                <tr>
                    <th>Title</th>
                    <td><input v-model="blogEntry.title" type="text"></td>
                </tr>
                <tr>
                    <th>Content</th>
                    <td><textarea v-model="blogEntry.content"></textarea></td>
                </tr>
            </table>
            <button v-on:click="$emit('commit-new-blog', blogEntry)">Commit new blog</button>
        </div>`
        // create new event 'commit-new-blog' by clicking button, blogEntry is the parameter and also the local attribute of this component
        // when button is clicked, a new Blog need to be created, the data need to be stored in the root instance
        // and also need to be shown on the user interface
};

var vm = new Vue({
    // to connect the DOM <div> element with the root instance
    el: "#app",
    data: {
        // store the blogEntrys
        blogEntrys: [{title: "The first blog", content:"Content of the first blog"}]
    },
    methods: {
        // 通过子组件的event，读取user input（子组件event的参数），添加临时变量，加入local 数据结构（list）
        addNewBlog: function(blogEntryInput){
            let newBlog = {
                title: blogEntryInput.title,
                content: blogEntryInput.content
            };
            this.blogEntrys.push(newBlog);
        }
    },
    // connect static component inti root instance
    components: {
        "create-blog-entry": newBlogEntry,
        "my-blog": myBlogMainBody
    }
});