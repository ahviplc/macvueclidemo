<template>
    <div>

        <el-divider content-position="right">Divider 分割线  Icon 图标</el-divider>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <i class="el-icon-ice-cream-round"></i>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>

        <el-divider content-position="right">Divider 分割线 Link 文字链接</el-divider>
        <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>

        <el-divider content-position="right">Divider 分割线</el-divider>
        <el-link disabled>默认链接</el-link>
        <el-link type="primary" disabled>主要链接</el-link>
        <el-link type="success" disabled>成功链接</el-link>
        <el-link type="warning" disabled>警告链接</el-link>
        <el-link type="danger" disabled>危险链接</el-link>
        <el-link type="info" disabled>信息链接</el-link>

        <el-divider content-position="right">Divider 分割线</el-divider>
        <el-link :underline="false">无下划线</el-link> |
        <el-link>有下划线</el-link>

        <el-divider content-position="right">Divider 分割线</el-divider>
        <el-link icon="el-icon-edit">编辑</el-link> |
        <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>

        <el-divider content-position="right">Divider 分割线 and so on...</el-divider>
    </div>
</template>

<script>
    export default {
        name: "OthersEleUI"
    }
</script>

<style scoped>

</style>