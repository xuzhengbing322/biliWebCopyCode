## less

#### less概述

​	css弊端：逻辑性不强，基本上是由各种属性堆砌而成。每个变量都需要设定值，而且值没有计算。没有办法通过封装函数实现复用。没有作用域的概念。

​	less：是css的预处理语言。less将css赋予了动态语言的特性，如：变量、继承、运算和函数。less的目的就是使书写css更容易。

​	使用：先创建一个html文件，用于编写body。然后在创建一个less文件，用于书写style，然后将less文件转化为css文件。 

打开当前页面路径的快捷键：alt + t



##### 1.1 less——注释

​	以/**/包裹的注释会被编译到css文件中，以//开头的注释，不会被编译到css文件中。



##### 1.2 less——变量

​	变量有作用域和变量提升的功能。

```less
@w:200px;   
@border:1px solid #fff;
@property: color;  //用变量去定义一个属性名的时候，在用的时候，一定要给这个名字加上一对大括号。
@value: green;
@images:"../images" //用变量去定义一个路径的时候，在用的时候，一定要在整个路径的外面加上一对引号，并且路径变量名在用的时候也要加大括号。

.box{
    width:@w;
    hight:@w;
    border:@border;
    @{property}:@value;
    background-@{property}:@value;
    background-image: url("@{images}/banner.jpg");
}
```



##### 1.3  less——混合

​		混合写法，把另一个选择器的名字放到这个样式里，这个样式就会具有放入的选择器的样式。

```less
<body>
	<div class="box1">kaivon1</div>
	<div class="box2">kaivon2</div>
	<div class="box3">kaivon3</div>
	<div class="box4">kaivon4</div>
	<div class="box5">kaivon5</div>
	<div class="box6">kaivon6</div>

</body>



@width: 200px;
@border: 5px solid #f00;

.class{
    font:20px/40px "微软雅黑";
    color:#fff;
    text-align:center;
    background:green;
    border:@border;
}

.box{
    width:@width;
    height:@width;
    .class;  //混合
    .bg(red);
}

.box2{
    width:300px;
    height:300px;
    .class;  //混合，即封装相同的属性和属性值
}

//混合带参数
.bg(@bg){  //bg类似于class，给它传什么参数，背景颜色就是这个参数
    background:@bg; 
}

.box3{
    height: 200px;
    .bg(blue)
}

//混合带参数，参数可以带值
.border1(@w:10px){
    border:@w solid green;
}
.box4{
    height:200px;
    .border1(); //默认值为10px，如果传参数就以参数的值为准。
}


//混合带多个参数，参数可以带值
.border2(@w:10px,@style:solid,@color:#000){
    border:@w @style @color;
}
.box5{
    height:300px;
    .border2();
    .border2(@w:20px,@color:pink);
}

//不同浏览器的混合
.boxShadow(@x:5px,@y:5px,@area:5px,@color:#ccc){
    -webkit-box-shadow:@x @y @area @color;
    -moz-box-shadow:@x @y @area @color;
    -ms-box-shadow:@x @y @area @color;  
}
.box6{
    .boxShadow();
    width:300px;
    height:300px;
    background:red;
}

```



##### 1.4匹配模式

​		根据条件匹配对应的模式

```less
.box1{
	width:0;
	height: 0;
	overflow: hidden;
	
	border-width:10px;
	border-color:transparent transparent red transparent;
	border-style: dashed dashed solid dashed
}

//匹配模式
.triangle(top/*条件*/,@w:5px,@c:red){
	border-width:@w;
	border-color:transparent transparent @c transparent;
	border-style: dashed dashed solid dashed
}

.triangle(right/*条件*/,@w:5px,@c:red){
	border-width:@w;
	border-color:transparent transparent transparent @c;
	border-style: dashed dashed dashed solid;
}

.triangle(bottom/*条件*/,@w:5px,@c:red){
	border-width:@w;
	border-color:@c transparent transparent transparent ;
	border-style: solid dashed dashed dashed ;
}

//公用的样式，需要放到下面这个class里，第一个参数是固定的格式（@_），后面的参数与上面保持一致
.triangle(@_,/*条件*/,@w:5px,@c:red){
	width:0;
	height:0;
	overflow:hidden;
}

.box2{
	width:0;
	height:0;
	overflow:hidden;
	.triangle(top,50px,green);
	.triangle(right,50px,green);
}

//定位
.pos(r){
	position:relative;
}
.pos(a){
	position:relative;
}
.pos(f){
	position:relative;
}

.box4{
	.pos(r);
	left:10px;
	top:20px;
	width:200px;
	height:200px;
	background:red;
}
```



##### 1.5 less嵌套

```
<body>
	<div id="box">
		<h2>这是一个标题</h2>
		<a href="#">这是一个链接</a>
		<p>这里是一段文字</p>
		<ul>
			<li><a href="#">这是几个列表</a></li>
			<li><a href="#">这是几个列表</a></li>
			<li><a href="#">这是几个列表</a></li>
			<li><a href="#">这是几个列表</a></li>
	</div>
</body> 

///less 嵌套尽量保留原有的类型。  &：上一层的选择器
#box{
	width:500px
	padding:20px
	border: 1px solid #f00;
	 
	h2{
		font:20px/20px "微软雅黑"
	}
	
	p{
		color:green;
	}
	
	ul{
		margin:0;
		padding: 0;
		list-style:none;
		li{
			height:30px;
			background: #ccc;
			a{
				color:#f00; 
				 &:hover{
				 	color:blue;
				 }
			}
		}
	}
	
}




//css//////////////////////////////////
#box{
	width:500px;
	padding:20px;
	border: 1px solid #f00;
}

#box h2{
	font: 20px/20px "微软雅黑"
}
#box p{
	color:green;
}
#box ul{
	margin:0;
	padding:0;
	list-style:none;
}
#box li{
	height:30px;
	background:#ccc;
}
#box li a{
	color:#f00;
}


///less
#box{
	width:500px
	padding:20px
}
```



##### 1.6 运算

```less
@w:300px;

.box1{
	width:@w;
	height:@w+100;
	height:@w - 100; //减法必须加一个空格，它会覆盖上面一个代码。
	border: 1px solid #f00;
	
	position:relative;
	left:@w*2;
	top:@w/3;
}

@width:200px;
@height:300px;

.box2{
    width:@width;
    height:@height;
    div{
        width:@width/2;
        height:@height/2
        background:green;
        margin:@height - (@height/2)/2 auto 0 auto;
    }
}
```

