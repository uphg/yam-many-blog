import blog from '@/api/blog'

export default {
    data () {
      return {
        title:'',
        description:'',
        content:'',
        atIndex: false
      }
    },
    methods: {
      onCreate(){
        // 调用 API 中的 blog API 将新创建的博客添加到 多人共享博客的后台数据
        blog.createBlog({ 
          title: this.title, 
          content: this.content, 
          description: this.description, 
          atIndex: this.atIndex 
        }).then(res => {
          // then处理数据 成功后提示创建成功
          this.$message.success(res.msg)
          // 跳转到刚刚创建的指定文章详情下，文章 id 从传入的 res.data.id 中获取
          this.$router.push({ path: `/detail/${res.data.id}`})
        })
      }
    }
  }