<template>
  <div>
    <el-table :data="list" border stripe style="width: 100%">
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
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/core/integral-grade'

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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
