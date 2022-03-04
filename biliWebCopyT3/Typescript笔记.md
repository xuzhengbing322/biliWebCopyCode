## Typescript

一、基础内容

1.创建ts文件

​		首先创建一个文件夹，然后在vscode中打开文件夹，并创建ts文件。然后在终端用"tsc name.ts"实现将ts文件转换为js文件。

2.解决三个问题

```ts
	当出现函数名或者变量名相同的时候，它会提示重复定义的问题。
    解决方式是在终端输入代码"tsc --init"，然后在生成的json文件中将strict:true给注释掉，让环境变为非严格模式，问题就解决了。
function greet(person, date){
    console.log(`Hello ${person}, today is ${date}`)
}

greet(`小千`,`2022-3-2`)
	代码"tsc --watch"就能实现在ts文件中修改保存之后，js文件也随之修改。
    代码"tsc --noEmitOnError --watch"实现当ts文件中报错的时候，不会生成对应的js文件。
```

3.显示类型

​		可以给对象和变量定义显示类型，随后赋值和实参的类型必须和定义的显示类型相同。当然也可以不定义显示类型，系统会自动给变量和对象定义显示类型，赋值和实参依旧要和显示类型相同。注意：js文件中不会出现显示类型的代码。

```ts
function greet(person:string, date:Date){ 
    console.log(`Hello ${person}, today is ${date}`)
}

greet(`小徐`, new Date())
```

​		基本类型：string\number\bolean，数组：type[],Array<type>，any：不希望某个特定值导致类型检查错误。

```
let arr:number[] =[1,2,3]
let arr2: Array<number> = [1,2,3]

```



4.函数

​	一般不定义返回类型，因为typescript的return 会自动推断出函数的返回类型。

```ts
function greet(name:string) : void{
	console.log("Hello," +name)
}

const name = ['张三','李四','王五']
name.forEach(function(s){
    console.log(s.toUperCase) //系统会根据数组的类型推断出s的类型
})
```

​	对象类型

```
function printCoord(pt: {x:number; y:number}){
	console.log("坐标的x值为: "+pt.x);
	console.log("坐标的y值为: "+pt.y);
}
printCoord({x:3,y:7});

function printName(obj:{first:string, last?:string}){ //?是可选的参数
	console.log(obj.last?.toUpperCase())
}
printName({
	first:'Felix'
})
```

​	联合类型

​	可以让类型变得丰富，注意里面的功能是两个类型共用的 。也可以通过if语句缩小类型。

```
let id: number | string //表示由string和number组成的类型

function printId(id:number | string ){
	console.log('Your Id is :' +id)
	if(typeof id == 'string'){
	console.log(id.toUpperCase)
	}else
	console.log(id)//通过if语句缩小类型范围。
}
printId(101)
printId('202')

function get(x:number[] | string){
	return x.slice(1,3)
}
console.log(get('asddfghh'))
console.log(get([2,3,4,5,6]))
```

​	类型别名

​	通过事先定义好类型别名，以便重复使用。给类型定义名字，然后就可以直接使用

```
type Point = {
	x:number
	y:number
}
function printCoord(pt:Point){

}
printCoord({
	x:100,
	y:200
})
/////////
type ID = number| string
function printId(id:ID){

}
print(100)
print('hello')


//扩展定义
type animal = {
	name:string
}
type Bear = animal &{
	honey: boolean
}
const bear:Bear = {
	name: 'white',
	honey:true
}
console.log(bear.name)
console.log(bear.honey)


```

接口

​	它是定义对象类型的另外一种方式

```
inerface Point{
	x:number
	y:number
}
function print(pt:Point){}
print({
	x:100
	y:200
})

////扩展接口
interface animal {
	name:string
}
interface Bear extens Animal{
	honey:boolean
}
const bear:Bear = {
	name: 'white',
	honey:true
}
console.log(bear.name)
console.log(bear.honey)

//向现有的类型添加字段,type做不到
interface windows{
	count:number
}
interface windows{
	title:string
}
const w: windows = {
	title: 'hello ts',
	count: 100
}
```



类型断言

​	它可以实现当我们不知道某个变量类型是什么的情况下，可以通过类型断言实现更具体的类型

```
const canvas1 = document.getElementById('main_can) as HTMLCancasElement
const canvas2 = <HTMLCancasElement>document.getElementById('main_can) 
const x =('hello' as any)as number
```

文字类型

```
let x: 'hello' = 'hello'
function printText(s:string, alignment:'left' | 'right' |'center'){}
printText('hello','left')//第二个参数只能写固定的这三个

//数字文字类型
funciton compare(a:string, b:string): -1|0|1{
	return a == b?0:a>b?1:-1
}

interface Options{
	width:number
}
function configure(x: Options | 'auto'){
}
configure({
	width:100
})
configure('auto') //只能写这个

//布尔文字类型
let b1: true = ture
let b1: false = false


//类型推断
const obj = {
	count: 0
}
if(true){
obj.count = 1
}

```



null（不存在）和undefined（未定义）类型

```
let x: undefined = undefined
let y: null = null

function doSomething(x:string | null){
	if(x ==null){
	//做一些事情
	}else{
	console.log('Hello,' x.unUpperCase())
	}
}

```



枚举enum

```
enum Direction{
	up = 1,
	down，
	left,
	right
}
console.log(Direction.up)
console.log(Dirction.Down)//2
```



类型缩小：常用于处理联合类型的情况

```
function padLeft(padding: number | string,input:string):string{
	if(typeof padding === "number"){
		return new Array(padding +1).join(" ")+input;
	}
	return padding + input;
}
```

​	typeof 类型守卫：它可以提供有关我们在运行时拥有值的类型的非常基本的信息。Typescript期望它返回一组特定的字符串

```
typeof strs === "object"

function printAll(strs: string|string[] |null){
	if(strs && typeof strs === 'object'){
		for(const s of strs){
			console.log(s)
		}
	}else if(typeof strs === 'string' ){
		console.log(s)
	}else{}
}
```



真值缩小：条件、&&、||、if语句、布尔否定（！）

```
function getUsersOnlineMessage(numUsersOnline:number){
	if(numUsersOnline){ //强制转换符，如果是数字就为true，如果是null就为false
		return `现在共有 ${numUsersOnline}人在线！`；
	}
	return"现在没有人在线. :(";
}

Boolean("hello"); //type:boolean, value:true
!!"world"; //type:true, value:true
```



等值缩小：===，！==，==，！=

```
function example(x: string|number, y:string|boolean){
	if(x===y){ //大家都是string
		x.toUpperCase()
		y.toUpperCase()
	}else{
		console.log(x)
		console.log(y)
	}
}
```



In 操作符缩小

```
type fish = {swim:()=>void}
type bird = {fly:()=>void}
type human = {swim?:() => void ; fly?:() =>void}
function move(animal:fish|bird|human){
	if("swin" in animal){
		return (animal as fish).swim()
	}
	return (animal as bird).fly()
}
```

instanceof 操作符缩小

```
```



