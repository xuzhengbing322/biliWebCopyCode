## 																										flex布局

#### 一、flex布局原理

​	flex布局原理：通过给父盒子添加flex属性，来控制子盒子的位置和排列方式。

​	任何一个容器都可以指定为flex布局。采用flex布局的元素，称为flex容器。它的所有子元素自动称为容器成员，即项目。当我们将父盒子设为flex布局之后，子元素的float、clear和vertical-align属性将失效。flex的用途就是代替float等属性控制子盒子的位置和排列方式，它的好处就是不需要清楚浮动，而且操作十分的简单。



#### 二、flex布局父项常见属性

​	flex-direction：设置主轴的方向

​	justify-content：设置主轴上的子元素排列方式

​	flex-wrap：设置子元素是否换行

​	align-content：设置侧轴上的子元素的排列方式（多行）

​	align-items：设置侧轴上的子元素排列方式（单行）

​	flex-flow：复合属性，相当于同时设置了flex-direction和flex-wrap



2. ##### 1 flex-direction:设置主轴的方向

###### 1、主轴与侧轴

​	在flex布局中，是分为主轴和侧轴两个方向，默认行为主轴，列为侧轴。注意：主轴和侧轴是会变化的，就看 flex-direction设置谁为主轴，剩下的就是侧轴，而子元素是跟着主轴来排列的。

###### 2、属性值

​	row：默认值从左到右。row-reverse：从右到左。column：从上到下。column：从下到上。 



##### 2.2 justify-content：设置主轴上的子元素排列方式

​	注意：使用这个属性之前一定要确定好主轴是哪个

###### 1、属性值

​	flex-start：默认值从头部开始，如果主轴是x轴，则从左到右

​	flex-end：从尾部开始排列

​	center：在主轴居中对齐（如果主轴是x轴则水平居中）

​	space-around：平分剩余空间

​	space-between：先两边贴边，在平分剩余空间。



##### 2.3 flex-wrap：设置子元素是否换行

​		flex布局中，默认的子元素是不换行的，所有的项目都排在一条线上。如果装不下，会缩小子元素的宽度，放到父元素里面。

###### 1、属性值

​	nowrap：默认值，不换行

​	wrap：换行



##### 2.4 align-items：设置侧轴上的子元素排列方式（单行）

​	该属性是控制子项在侧轴上的排列方式，在子项为单项的时候使用。

###### 1、属性值

​	flex-start：默认值，从上到下

​	flex-end：从下到上

​	center：挤在一起居中（垂直居中）

​	stretch：拉伸（子盒子不要给高度，不然无法拉伸）



##### 2.5 align-content:设置侧轴上的子元素的排列方式（多行）

​	设置子项在侧轴上的排列方式并且只能用于子项出现换行的情况（多行），在单行下是没有效果的。只要出现换行操作，系统就知道是多行。

###### 1.属性值

​	flex-start：默认值，在侧轴的头部开始排列

​	flex-end：在侧轴的尾部开始排列

​	center：在侧轴中间显示

​	space-around：子项在侧轴平分剩余空间

​	space-between：子项在侧轴先分布在两头，在平分剩余空间

​	stretch：设置子项元素高度平分父元素高度



##### 2.6 flex-flow：复合属性，相当于同时设置了flex-direction和flex-wrap

​	例如：flex-flow: row wrap;



#### 三、flex布局子项常见属性

​	flex子项目占的份数

​	align-self控制子项自己在侧轴的排列方式

​	order属性定义子项的排列顺序（前后顺序）



##### 3.1 flex属性

​	flex属性定义子项目分配剩余空间，用flex来表示占多少份数。代码如图所示。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        section{ 
            display: flex;
            width: 60%;
            height: 150px;
            background-color: pink;
            margin: 0 auto;
        }

        section div:nth-child(1){
            width: 100px;
            height: 150px;
            background-color: red;
        }

        section div:nth-child(2){
            flex: 1;
            background-color: green;
        }

        section div:nth-child(3){
            width: 100px;
            height: 150px;
            background-color: blue;
        }

        p{
            display: flex;
            width: 60%;
            height: 150px;
            background-color: pink;
            margin: 100px auto;
        }

        p span{
            /* 每个项目占一份 */
            flex: 1; 
        }

        p span:nth-child(2){
            flex: 2;
            background-color: green;
        }
    </style>
</head>
<body>
    <section>
        <div></div>
        <div></div>
        <div></div>
    </section>
    <p>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </p>
</body>
</html>
```



##### 3.2 align-self控制子项自己在侧轴的排列方式

​	align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

​	

##### 3.3 order属性定义子项的排列顺序（前后顺序）

​	数值越小，排列越靠前，默认为0。要想将右边的盒子放到左边，将order的值取负数即可。注意：和z-index不一样。



















































