// 定义和用法
// sort() 方法用于对数组的元素进行排序。
// 语法
// arrayObject.sort(sortby)
// 参数      |                描述
// sortby    |   可选。 规定排序顺序。 必须是函数。

// 一、 一般用法：
// 1、字符串排序
var arr1 = ["George", "John", "Thomas", "James", "Adrew", "Martin"];
arr1.sort(); // ["Adrew", "George", "James", "John", "Martin", "Thomas"]
arr1.sort(function(a,b){
    if(a<b){
        return 1;
    }else if(a=b){
        return 0;
    }else{
        return -1;
    }
}); // ["Thomas", "Martin", "John", "James", "George", "Adrew"]

// 2、数字排序(不传参数的话数字排序也是按照字符编码的顺序进行排序)
var arr2 = [10, 5, 40, 25, 1000, 1];
arr2.sort(); // [1, 10, 1000, 25, 40, 5]
arr2.sort(function (a, b) {
    return a - b;
}); // [1, 5, 10, 25, 40, 1000]
arr2.sort(function (a, b) {
    return b - a;
}); // [1000, 40, 25, 10, 5, 1]

// 二、 特殊用法：(给对象数组排序)
function compfunc(propertyName) {
    return function (obj1, obj2) {
        var val1 = obj1[propertyName];
        var val2 = obj2[propertyName];
        // 这里能不能像上面数字的比较那样直接返回一个相减的值呢？答案是否定的！因为字符串不能相减！
        // console.log("abc" - "def"); // NaN     ✖
        // console.log("abc" > "def"); // false   ✔
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    }
}
var data = [{
    name: "Sily",
    age: 18
}, {
    name: "Mery",
    age: 20
}, {
    name: "Zara",
    age: 16
}];
data.sort(compfunc("name")); // [{name: "Mery", age: 20},{name:"Sily",age:18},{name:"Zara",age:16}]
data.sort(compfunc("age")); // [{name"Zara",age:16},{name:"Sily",age:18},{name:"Mery",age:20}]