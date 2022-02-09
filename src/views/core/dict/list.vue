<template>
  <div class="app-container">
    <div style="margin-bottom: 100px;">
      <el-button
        @click="dialogVisible = true"
        type="primary"
        size="mini"
        icon="el-icon-download"
      >
        导入 Excel
      </el-button>

      <el-button
        @click="exportData"
        type="primary"
        size="mini"
        icon="el-icon-upload2"
      >
        导出Excel
      </el-button>
    </div>

    <el-table :data="list" border row-key="id" lazy :load="load">
      <el-table-column label="名称" align="left" prop="name" />
      <el-table-column label="编码" prop="dictCode" />
      <el-table-column label="值" align="left" prop="value" />
    </el-table>

    <!--    导入对话框-->
    <el-dialog
      title="数据字典导入"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form>
        <el-form-item
          label="请选择Excel文件">
          <el-upload
            class="upload-file"
            ref="aupload"
            :auto-upload="true"
            :multiple="false"
            :limit="1"
            :on-exceed="fileUploadExceed"
            :on-success="fileUploadSuccess"
            :on-error="fileUploadError"
            :action="BASE_API + '/admin/core/dict/import'"
            name="file"
            accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">
          取消
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getDictListByParentId } from '@/api/core/dict'

export default {
  name: 'list',
  data() {
    return {
      dialogVisible: false, //对话框是否显示
      BASE_API: process.env.VUE_APP_BASE_API, //获取后端接口地址
      list: [] // 数据字典列表
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    // 上传多于一个文件时
    fileUploadExceed() {
      this.$message.warning('只能选取一个文件')
    },
    //上传成功回调：通信成功
    fileUploadSuccess(response) {
      if (response.code === 200) {
        //业务成功
        this.$message.success(response.message)
        this.dialogVisible = false
      } else {
        //业务失败
        this.$message.error(response.message)
      }
      this.$refs.aupload.clearFiles()
    },
    //上传失败回调：通信失败
    fileUploadError(error) {
      this.$message.error('数据导入失败')
      this.$refs.aupload.clearFiles()
    },
    // 导出
    exportData() {
      window.location.href = this.BASE_API + '/admin/core/dict/export'
    },
    // 获取所有顶层节点数据
    fetchData() {
      getDictListByParentId(1).then(response => {
        this.list = response.data.list
      })
    },
    // 加载二级节点
    load(tree, treeNode, resolve) {
      // 获取数据
      getDictListByParentId(tree.id).then(response => {
        resolve(response.data.list)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
