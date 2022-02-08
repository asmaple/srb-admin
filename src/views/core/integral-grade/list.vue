<template>
  <div class="app-container">
    <el-table :data="list"
              v-loading = "loading"
              border stripe style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>

      <el-table-column
        prop="borrowAmount"
        label="借款额度">
      </el-table-column>

      <el-table-column
        prop="integralStart"
        label="积分区间开始">
      </el-table-column>

      <el-table-column
        prop="integralEnd"
        label="积分区间结束">
      </el-table-column>

      <el-table-column label="操作">
        <!--  自定义模板  slot-scope="scope" 当前行的数据-->
        <template slot-scope="scope">
          <router-link :to="'/core/integral-grade/edit/' + scope.row.id"
                       style="margin-right: 5px;">
            <el-button type="success" size="mini" icon="el-icon-edit">
              修改
            </el-button>
          </router-link>

          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeData(scope.row.id)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList,removeById } from '@/api/core/integral-grade'

export default {
  name: 'list',
  data() {
    return {
      loading: false,
      list: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      getList().then(response => {
        this.list = response.data.list
      }).finally(() =>{
        this.loading = false
      })
    },
    removeData(id) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading = true
        return removeById(id)
      }).then(response => {
        this.$message.success({
          showClose: true,
          type: 'success',
          message: response.message
        })
        // 删除成功刷新数据
        this.fetchData()
      }).finally(() => {
        this.loading = false
      }).catch(error => {
        if(error === 'cancel') {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
