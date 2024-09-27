# LeetCode_Practice_notebook

This is a note book for all the LeetCode Question finished and review
Any helper that could help adding new stuff in will be greatfully thanksed

# Note for review :

## Array

## Hashing

### 3 种，Map /Set / Raw Object store

Set: 特点是唯一性

```
增加的方法：
add(value)：添加元素到集合中，如果元素已存在则不会重复添加。
删除的方法：
delete(value)：从集合中删除指定元素，返回 true 表示成功删除，false 表示元素不存在。 （直接delete value）
clear()：清空集合，删除所有元素
读取的方法：
has(value)：检查集合中是否存在某个值，返回布尔值。
size：返回集合中元素的个数。
values()：返回一个包含集合所有元素的迭代器。（一个object）

forEach(callback)：对集合中的每个元素执行回调函数。
例子：
let mySet = new Set([1, 2, 3, 4]);

mySet.forEach((value) => {
    console.log(value);
});
```

Map:

```
增加的方法：
set(key, value)：将指定的键值对添加到 Map 中，如果键已存在则更新其对应的值。
删除的方法：
delete(key)：从 Map 中删除指定键的键值对，返回 true 表示成功删除，false 表示键不存在。 （delete key会连value一起delete，往中间填key）
clear()：清空 Map 中的所有键值对。
读取的方法：
get(key)：返回指定键对应的值，如果键不存在则返回 undefined。
has(key)：检查 Map 中是否存在指定键，返回布尔值。 （boolean true/false）
size：返回 Map 中键值对的数量。
keys()：返回 Map 中所有键的迭代器。（一个object）
values()：返回 Map 中所有值的迭代器。（一个object）
forEach(callback)：对 Map 中的每个键值对执行回调函数。
```

Object:

```
增加的方法：
obj[key] = value：直接使用键赋值，添加属性。
Object.defineProperty(obj, key, descriptor)：以更精细的控制添加对象属性。
删除的方法：
delete obj[key]：删除对象的某个属性。
读取的方法：
obj[key]：读取对象的属性值。
Object.keys(obj)：返回对象所有属性名的数组。
Object.values(obj)：返回对象所有属性值的数组。
Object.entries(obj)：返回对象的键值对数组。
Object.hasOwnProperty(key)：检查对象是否拥有某个属性。
```

## Linked Lists

## Recursion

## Sorting Algorithms

## Binary Search

## Trees

## Graphs

## Heaps

## Tries

## DP(Dynamic programing)

```

```
