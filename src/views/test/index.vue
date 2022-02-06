<template>
  <div class="test-container">
    <span>{{result}}</span>
    <el-button>测试</el-button>
    <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleTest">测试</el-button>
  </div>
</template>

<script>
import { hello } from '@/api/core/integral-grade'

export default {
  name: 'index',
  data() {
    return {
      loading: false,
      result: ''
    }
  },
  methods: {
    handleTest() {
      this.loading = true
      hello().then(response =>{
        this.result = response
      }).finally(() =>{
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
