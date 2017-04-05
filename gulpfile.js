//1.引gulp包
var gulp =require('gulp');

//2.引入gulp-sass插件
var sass=require('gulp-sass');



//3.创建任务
// 1）编译sass文件
gulp.task('compileSass',function(){
	//找到要编译的sass文件
	gulp.src('./src/sass/*.scss')

	//pipe管道方法
	.pipe(sass({
		outputStyle:'expanded'
	}))
	//错误信息提示，继续监听
	.on('error',sass.logError)

	//输出
	.pipe(gulp.dest('./src/css'))

});


//创建监听任务
//监听sass文件修改，直接编译任务
gulp.task('watchSass',function(){
	gulp.watch('./src/sass/*.scss',['compileSass']);
});


