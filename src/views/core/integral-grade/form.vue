<template>
  <div  class="app-container">
    <el-form :model="integralGrade" status-icon :rules="integralGradeRules" ref="integralGradeForm" label-width="180px" class="form">
      <el-form-item label="借款额度" prop="borrowAmount">
        <el-input-number v-model="integralGrade.borrowAmount" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="积分区间开始" prop="integralStart">
        <el-input-number  v-model="integralGrade.integralStart" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="积分区间结束" prop="integralEnd">
        <el-input-number v-model="integralGrade.integralEnd" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="submitForm('integralGradeForm')">{{ buttonText }}</el-button>
        <el-button @click="resetForm('integralGradeForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { save,update,getById } from '@/api/core/integral-grade'

export default {
  name: 'form',
  data() {
    return {
      loading: false,
      buttonText: '保存',
      integralGrade: {
        borrowAmount: '',
        integralStart: '',
        integralEnd:''
      },
      integralGradeRules:{
        borrowAmount: [
          { required: true, message: '借款额度不能为空' },
          { type: 'number', message: '借款额度必须为数字值'}
        ],
        integralStart: [
          { required: true, message: '开始区间不能为空' },
          { type: 'number', message: '开始区间必须为数字值'}
        ],
        integralEnd: [
          { required: true, message: '结束区间不能为空' },
          { type: 'number', message: '结束区间必须为数字值'}
        ]
      }
    }
  },
  created() {

    // 如果 路由中 id 存在 说明是编辑
    // 从路由中拿id
    if(this.$route.params.id) {
      this.buttonText = '修改'
      this.fetchDataById(this.$route.params.id)
    } else {
      this.buttonText = '保存'
    }
  },
  methods: {
    saveData(){
      this.loading = true
      save(this.integralGrade).then(response =>{
        this.$message({
          type: 'success',
          message: response.message
        })
        // 新增成功后 路由跳转到积分列表页面
        this.$router.push('/core/integral-grade/list')
      }).finally(() =>{
        this.loading = false
      })
    },
    updateData() {
      this.loading = true
      update(this.integralGrade).then(response =>{
        this.$message({
          type: 'success',
          message: response.message
        })
        // 更新成功后 路由跳转到积分列表页面
        this.$router.push('/core/integral-grade/list')
      }).finally(() =>{
        this.loading = false
      })
    },
    fetchDataById(id) {
      getById(id).then(response =>{
        this.integralGrade = response.data.record
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.integralGrade.id) {
            this.updateData()
          } else {
            this.saveData()
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
