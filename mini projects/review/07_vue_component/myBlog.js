// blog entry
var blogEntry = {
    data: function(){
        return{
            // return object blogInput
            blogInput:{
                titel:'',
                content:''
            }
        }
    },
    template: 
        `<div class="blogEntry">
            <table>
                <tr>
                    <th>Titel</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td><input v-model="blogInput.titel" type="text"></td>
                    <td><textarea v-model="blogInput.content"></textarea></td>
                </tr>
            </table>
            <button v-on:click="$emit('add-blog', blogInput)">Add blog</button>
        </div>`
};

// blog area
var blogArea = {
    // take blogItem from parent component
    // 错误：props里面内容要加引号
    props:["blog-item"],
    template:
    `<div class="blogarea">
        <table>
            <tr>
                <th>Blog title</th>
                <td>{{blogItem.titel}}</td>
            </tr>
            <tr>
                <th>Blog content</th>
                <td>{{blogItem.content}}</td>
            </tr>
        </table>
    </div>`
};

// vue root instance
var app = new Vue({
    el:"#app",
    data:{
        blogList:[{titel:"First blog", content:"Content of the first blog."}]
    },
    methods:{
        // add blog item in blogList
        addBlog: function(blogInput){
            let newBlog = {
                titel: blogInput.titel,
                content: blogInput.content
            };
            this.blogList.push(newBlog);
        }
    },
    components:{
        'create-blog':blogEntry,
        'my-blog':blogArea
    }
});