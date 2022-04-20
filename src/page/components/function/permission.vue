<template>
    <div class="sys-page">
        <app-title title="功能1"></app-title>
<!--        <div class="page-content">
            <div class="sys-article">
                <p>功能1</p>
                <p>功能1<code>v-hasPermission="'view'"</code>功能1</p>
            </div>
            <app-section title="功能1">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="name" label="功能1">
                    </el-table-column>
                    <el-table-column prop="detail" label="功能1">
                    </el-table-column>
                    <el-table-column prop="type" label="功能1">
                    </el-table-column>
                </el-table>
            </app-section>
        </div>-->
    </div>
</template>

<script>
export default {
    name: 'comPermission',
    data() {
        return {
            tableData: [
                {
                    name: 'v-hasPermission',
                    detail: '功能1',
                    type: 'String'
                }
            ]
        }
    }
}
</script>
