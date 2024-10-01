# LeetCode_Practice_notebook

This is a note book for all the LeetCode Question finished and review
Any helper that could help adding new stuff in will be greatfully thanksed

# Note for review :

## Array

Read/Write : O(1)
Insert/Remove: O(1)
Insert Middle or Beginning: O(n)
Remove Middle or Beginning: O(n)

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
has(value)：检查集合中是否存在某个值，返回布尔值。    （set中是看value存不存在，没有key的概念）
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
get(key)：返回指定键对应的值，如果键不存在则返回 undefined。(通过key取得value)
has(key)：检查 Map 中是否存在指定键，返回布尔值。 （boolean true/false）     （map中的has是看key存不存在）
size：返回 Map 中键值对的数量。
keys()：返回 Map 中所有键的迭代器。（一个object）
values()：返回 Map 中所有值的迭代器。（一个object）
forEach(callback)：对 Map 中的每个键值对执行回调函数。

**可以用Array.from(myMap) 把map变成array
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

## Sorting

```
1. Bubble Sort(通过交换两两数字进行sort)
O(n^2)
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # Flag to check if any swaps happen in this iteration
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap if the current element is greater than the next
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # If no swaps happened, the list is already sorted
        if not swapped:
            break
    return arr
```

```
2. Merge Sort（通过在中线处分开，细分至最小单位后逐步merge回去）
O(n*log(n))

function mergeSort(arr) {
    // 基本情况：如果数组长度小于等于1，返回该数组
    if (arr.length <= 1) {
        return arr;
    }

    // 将数组分成两半
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // 递归调用 mergeSort 对两半分别进行排序，并合并结果
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let sortedArr = [];
    let i = 0, j = 0;

    // 合并两个有序数组
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArr.push(left[i]);
            i++;
        } else {
            sortedArr.push(right[j]);
            j++;
        }
    }

    // 处理剩余的元素
    while (i < left.length) {
        sortedArr.push(left[i]);
        i++;
    }

    while (j < right.length) {
        sortedArr.push(right[j]);
        j++;
    }

    return sortedArr;
}
```

```
3. QuickSort (用Pivot（指标）把数字分成大于Pivot或小于Pivot0)

O(n^2) Worst
O(n*log(n)) Amortized
主要是看pivot的选择，如果选到最大或者最小的东西，那么就gg直接n^2

没有temp arr， 没有extra space needed


function quickSort(arr) {
    // 基本情况：数组长度为1或0时，直接返回数组
    if (arr.length <= 1) {
        return arr;
    }

    // 选择基准元素，这里选择数组的最后一个元素作为基准
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    // 将元素与基准进行比较，分别放入left和right数组
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // 递归排序左右部分，并合并结果
    return [...quickSort(left), pivot, ...quickSort(right)];
}

最后一步最关键
```

## Linked Lists

### Single Linked List

```
Read/Write : O(n)
 Insert/Remove: O(1)
 Insert Middle or Beginning: O(1)
 Remove Middle or Beginning: O(1)


Iterative
def travese(head)：
    current = head
    while(current):
        current = current.next
    return None

Recursive
def traverse(head):
    if not head:
        return None

    return traverse(head.next)

```

### Doubly Linked List

## Recursion

###Comparing Recursive and Iterative

```

#Single Path
###Iteratiion
function iterative(head){
    let current = head
    while(current){
        current = current.next
    }
    return 0
}


function recurive(head){
    if(!head)return 0;
    return recurvie(head.next)
}


```

```
function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let nextNode = curr.next;  // 保存下一个节点
        curr.next = prev;          // 反转当前节点的指针
        prev = curr;               // 更新 prev 为当前节点
        curr = nextNode;           // 移动到下一个节点
    }

    return prev;  // 返回反转后的链表头节点
}

###Recursion
function reverseListRecursive(head) {
    // 基本情况：如果链表为空或只有一个节点，直接返回
    if (!head || !head.next) return head;

    // 递归反转剩余链表
    let newHead = reverseListRecursive(head.next);

    // 把当前节点放到链表的后面
    head.next.next = head;
    head.next = null;

    return newHead;  // 返回新的头节点
}

```

```
Multi Path (Fibanacci)
```

## Sorting Algorithms

## Binary Search

### Mostly need a sorted array

```
O(log(n)) most of time
例子可以是三个pointer ， 一个left 一个mid 一个right 然后直接跟target比，
然后直接reassign left = mid+1 或者right = mid
前提是必须是sorted， 这个方法叫二分法
```

## Trees

### Depth First Search

Using Stack (LIFO) pop recursion (because it has callstack)
O(n)

```
Inorder Traversal   ==> go left as left as possible

def inorderTraversal(root):
    if not root : return

    inorderTraversal(root.left);
    print(root.val)
    inorderTraversal(root.right)



function DFS(root){
    if (!root)return [];
    left = DFS(root.left);
    right = DFS(root.right);
    return left+[root.val]+right
}
```

```
PreOrder Traversal  ==>go middle(root node first), then left, then right

def inorderTraversal(root):
    if not root : return

    print(root.val)
    inorderTraversal(root.left);
    inorderTraversal(root.right)

function DFS(root){
    if (!root)return [];
    left = DFS(root.left);
    right = DFS(root.right);
    return [root.val]+left+right
}


```

```
PostOrder Traversal ==> left, then right, then root node
def inorderTraversal(root):
    if not root : return

    inorderTraversal(root.left);
    inorderTraversal(root.right)
    print(root.val)

function DFS(root){
    if (!root)return [];
    left = DFS(root.left);
    right = DFS(root.right);
    return left+right+[root.val]
}
```

### Breath First Search

Using Queue (FIFO) shift No recursion, just do iteratively
O(n)

We need to create a Queue every time

```
function levelOrder(root){
    let queue = []
    queue.push(root)
    let output= []

    while(queue.length>0){
        let queuelen = queue.length;
        let level = [];

        for (let i =0;i <queuelen;i++){
            let node = queue.shift();
            if (node){
                level.push(node.val);
                queue.push(node.left);
                queue.push(node.right)
            }
        }
        if(level){
            output.push(level)
        }
    }
    return output
}

```

```


```

```


```

## Graphs

## Heaps \*\*not FIFO, based on Priority Queue(min or max)

O(n)
显示成 Array 的时候直接一层层显示，等于是BFS出来的结果 先从root开始，然后第一层，然后第二层

### Min Heap

Complete Binary Tree : binary tree from top to bottom, left to right, to the last node
必须所有数据靠左，左边填满才会到右边，除了最后一行以外全部都填满才可以

Order Property：
每一个 node 都比他们的 parent 大就可以，顺序无所谓

```

LeftChild = 2 * i +1
RightChild = 2 * i +2
Parent= Math.floor( (i-1)/2 )

**原因是因为填满
```

### Max Heap

Complete Binary Tree : binary tree from top to bottom, left to right, to the last node
必须所有数据靠左，左边填满才会到右边，除了最后一行以外全部都填满才可以

Order Property：
每一个 node 都比他们的 parent 小就可以，顺序无所谓

```
O(log(n))
poll : 
pop out top element，pop之后需要reconstruct
1. move last element to top
2. heapify down: recursively compare children, swap with bigger child

主要是为了把最大的放在最上面，把他一层一层往下放，用left 和right 和它本身比 


O(log(n))
push :
insert element at the end of the tree
1. heapify up : recursively it with parent, swap if parent is larger



O(n)
heapify :
convert a set of value to a heap.
Push each value one by one into heap


O(1)
Peek: look for max/min

O(n)
Sraching: search for heap node 

```

## Tries

## DP(Dynamic programing)

```

```
