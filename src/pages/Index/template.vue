<template>
  <div id="index">
    <section class="blog-posts">
      <div class="posts-main">
        <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog.id">
          <figure class="avatar">
            <img :src="blog.user.avatar" :alt="blog.user.username">
            <figcaption>{{blog.user.username}}</figcaption>
          </figure>
          <div class="text">
            <h3>{{blog.title}}<span>{{friendlyDate(blog.createdAt)}}</span></h3>
            <p>{{blog.description}}</p>
          </div>
        </router-link>
      </div>
    </section>
    <section class="blog-pages">
      <el-pagination
        background
        :pager-count="3"
        :current-page.sync="page"
        layout="prev, pager, next"
        :total="total"
        @current-change="onPagesChange">
      </el-pagination>
    </section>
  </div>
</template>
<script src="./template.js"></script>
<style scoped lang="less" src="./template.less"></style>
