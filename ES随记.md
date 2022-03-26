# ES6

## 1、Class中super关键字

super既可以当作函数使用，也可以当作对象使用。

* 作为函数调用时：代表父类的构造函数，**在ES6中，要求子类的构造函数必须执行一次super函数**

  ```javascript
  class A {}
  
  class B extends A {
    constructor() {
      super();
    }
  }
  ```

  子类B中super()代表**调用父类的构造函数**，但是返回的是子类B的实例，其super内部的this是指向子类B的实例，因此super()作为函数调用时其this的指向被改变。

  `A.prototype.constructor.call(this)`
  **注意：**super作为函数调用只能在子类的构造函数之中。

* 作为对象时：

  ```javascript
  class A {
    p() {
      return 2;
    }
  }
  
  class B extends A {
    constructor() {
      super();
      console.log(super.p()); // 2
    }
  }
  
  let b = new B();
  ```

  super在普通方法中，指向A.prototype，所以super.p()就相当于A.prototype.p()。

  **注意:**super指向的时父类的原型对象，所以定义在**父类实例**上的方法或属性是没有办法通过super调用的。

  * 在子类普通方法中：super指向父类的原型对象，但方法内部的this指向当前子类实例

    ```javascript
    class A {
      constructor() {
        this.x = 1;
      }
      print() {
        console.log(this.x);
      }
    }
    
    class B extends A {
      constructor() {
        super();
        this.x = 2;
      }
      m() {
        super.print();
      }
    }
    
    let b = new B();
    b.m() // 2
    ```

    super.print()虽然调用的是A.prototype.print()，但是A.prototype.print()内部的this指向子类B的实例，导致输出的是2，而不是1。就是说，实际上执行的是super.print.call(this)。

    由于super的this指向子类实例，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。

    ```javascript
    class A {
      constructor() {
        this.x = 1;
      }
    }
    
    class B extends A {
      constructor() {
        super();
        this.x = 2;
        super.x = 3; // 实质上执行的是 this(B).x = 3
        console.log(super.x); // undefined 实质上是打印A.prototype.x
        console.log(this.x); // 3
      }
    }
    
    let b = new B();
    ```

  * 在静态方法中：super指向父类

    ```javascript
    class Parent {
      static myMethod(msg) {
        console.log('static', msg);
      }
    
      myMethod(msg) {
        console.log('instance', msg);
      }
    }
    
    class Child extends Parent {
      static myMethod(msg) {
        super.myMethod(msg);
      }
    
      myMethod(msg) {
        super.myMethod(msg);
      }
    }
    
    Child.myMethod(1); // static 1
    
    var child = new Child();
    child.myMethod(2); // instance 2
    ```

## 2、

