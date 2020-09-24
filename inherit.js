// 原型链继承
// 核心:将父类的实例作为子类的原型
// 缺点
// 1.原型链继承多个实例的引用类型属性志指向相同，改变一个会影响另一个实例的属性
// 2.不能传递参数
//  function SuperType() {
//   this.property = true;
//   this.colors = ["red", "blue", "green"];
// };
// SuperType.prototype.getSuperValue = function () {
//   return this.property;
// };
// function SubType() {
//   this.subproperty = false;
// };
// //继承自SuperType
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function () {
//   return this.subproperty;
// };
// var instance1 = new SubType();
// instance1.colors.push("blcak");
// var instance2 = new SubType();
// console.log(instance1.colors, instance2.colors);
// console.log(instance1.getSuperValue());

// 借用构造函数继承
// 核心：使用父类的构造函数来增强子类实例，等同于复制父类的实例给子类（不使用原型）
// 缺点
// 1.只能继承父类的实例属性和方法，不能继承原型属性和方法
// 2.无法实现复用，每个子类都有父类实例函数的副本，影响性能
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// };
// function SubType(name, age) {
//   SuperType.call(this, name)
//   this.age = age;
// };
// var instance1 = new SubType("Tom", 29);
// instance1.colors.push("black");
// console.log(instance1.colors);
// var instance2 = new SubType();
// console.log(instance2.colors);
// console.log(instance1.name);
// console.log(instance1.age);

// 组合继承
//核心：结合原型链继承和构造函数继承通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
//缺陷
// 父类中的实例属性和方法既存在于子类的实例中，又存在于子类的原型中，不过仅是内存占用，因此，在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// };
// SuperType.prototype.sayName = function() {
//   console.log(this.name);
// }

// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.construction = SubType;
// SubType.prototype.sayAge = function() {
//   console.log(this.age);
// }

// var instance1 = new SubType("Nicholas", 29);
// instance1.colors.push("black");
// console.log(instance1.colors); //"red,blue,green,black"
// instance1.sayName(); //"Nicholas";
// instance1.sayAge(); //29

// var instance2 = new SubType("Greg", 27);
// console.log(instance2.colors); //"red,blue,green"
// instance2.sayName(); //"Greg";
// instance2.sayAge(); //27

// 原型式继承
// 核心：直接将某个对象直接赋值给构造函数的原型
// 缺点
// 1.原型链继承多个实例的引用类型属性指向相同，存在篡改的可能
// 2.无法传递参数
function object(obj) {
  function F() {};
  F.prototype = obj;
  return new F();
};

//寄生式继承
// 核心：在原型式继承的基础上，增强对象，返回构造函数
function createAnother(original) {
  var clone = object(original);
  clone.sayHi = function() {
    console.log("hi");
  }
  return clone;
}

// 寄生组合式继承
// 核心：结合借用构造函数传递参数和寄生模式实现继承
function inheritPrototype(subType, superType) {
  var prototype = Object.create(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
// 父类初始化实例属性和原型属性
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
  console.log(this.name);
}

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
};

// 将父类原型指向子类
inheritPrototype(SubType, SuperType);
// 新增子类原型属性
SubType.prototype.sayAge = function(){
  alert(this.age);
}

var instance1 = new SubType("xyc", 23);
var instance2 = new SubType("lxy", 23);

instance1.colors.push("2"); // ["red", "blue", "green", "2"]
instance1.colors.push("3"); // ["red", "blue", "green", "3"]

// es6类继承extends
class Rectangle {
  // constructor
  constructor(height, width) {
      this.height = height;
      this.width = width;
  }
  
  // Getter
  get area() {
      return this.calcArea()
  }
  
  // Method
  calcArea() {
      return this.height * this.width;
  }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.area);
// 输出 200

// 继承
class Square extends Rectangle {

constructor(length) {
  super(length, length);
  
  // 如果子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
  this.name = 'Square';
}

get area() {
  return this.height * this.width;
}
}

const square = new Square(10);
console.log(square.area);