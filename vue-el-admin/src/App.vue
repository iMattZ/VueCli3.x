<template>
  <div id="app">
    <el-button>el-button</el-button>
	
	 <el-radio v-model="radio" label="1" @change="change">备选项</el-radio>
	 <el-radio v-model="radio" label="2" @change="change">备选项</el-radio>
	
	
	<el-radio-group v-model="radio" size="medium">
	    <el-radio-button label="3" @change="change">3</el-radio-button>
	    <el-radio-button label="6" @change="change">6</el-radio-button>
	    <el-radio-button label="9" @change="change">9</el-radio-button>
	 </el-radio-group>
	
	
	<el-radio-group v-model="radio" size="medium">
	    <el-radio label="3" @change="change" border>3</el-radio>
	    <el-radio label="6" @change="change" border>6</el-radio>
	    <el-radio label="9" @change="change" border>9</el-radio>
	 </el-radio-group> 

  </div>
</template>

<script>

export default {
    data () {
      return {
        radio: '6'
      };
    },
	
	methods:{
		change(e){
			console.log(e)
		}
	}
  }

</script>

<style>

</style>
