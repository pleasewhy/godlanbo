
<!-- 待写页面，这里是乱写的测试内容 -->
<template>
	<el-container>
    	<el-header height="100px">
			<h1>后台管理系统</h1>
		</el-header>
		<el-main>

		</el-main>
	</el-container>
</template>
<script>
	export default {
		name: 'Login',
		data () {
			return {

				formInline:{
					MessageTo:"",
					date1:"",
					date2:""
				},
				tableData: [{
					MessageTo:"1312000000",
					sendTime:"2019-12-20 10:00:20",
				},{
					MessageTo:"1312000000",
					sendTime:"2019-12-20 10:00:20",
				}]
			}
		},
		methods: {

			handleEdit(index, row) {
				console.log(row);
			},

			handleSelectionChange(val) {
				console.log(val);
				this.multipleSelection = val;
			},
			linkToMessageHistory(key,keyPath) {
				console.log(key);
			},
			submitForm(){

			}
		}
	}
</script>
<style>
	body{
		margin: 0px;
	}
	.el-mian-from{
		padding: 20px 20px 10px 20px;
	}
	.el-mian-table {
		margin: 0px auto;
		padding: 0px 20px 20px 20px;
	}
	.el-header {
		background-color:  #808080;
		color: #333;
		line-height: 60px;
	}

  /*.el-aside {
    background-color: rgb(238, 241, 246);
    text-align: center;
    line-height: 60px;
    height: 800px;
    }*/
</style>