```Python
Python 的 for loop 正向

for i in range(0,len(n),1)

Python 的 for loop 反向

for i in range(len(n)-1,-1,-1)

写法： range(start, stop, step)
```

Greatest Common divider 用法：

gcd(a,b) 其中 a 和 b 是 length 的长度
例子，寻找 str1 和 str2 的共同最小公约数

```Python
def gcdOfStrings(self, str1: str, str2: str) -> str:
        from math import gcd

        if str1 + str2 != str2 + str1:
            return ""

        a = len(str1)
        b = len(str2)
        return str1[:gcd(a,b)]
```

Python 中预生成 Array 的方法:

```Python
list = [0]\*5 ==> print(list)===> [0,0,0,0,0]
```

取 max/min 在 list 中的方法：

```Python
max(list)/min(list)
```

python 中 split() 里面不放东西的话就是默认为空格
如果用 c = list[s],则是把每个字母拆开，没办法按需要的东西分割

可以用 .strip() 把前后空格抹掉

```Python
****额外的用法****
s = "one two three four five"
limited_split = s.split(" ", 2)  # 按空格拆分，限制拆分次数为 2
print(limited_split)  # 输出: ['one', 'two', 'three four five']
```

---

重点再看几遍 leetcode 443

---

滑动窗口 （fix 版）

```Python
一种例题
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        currSum = maxSum =sum(nums[:k])
        for i in range(k,len(nums)):
            currSum += nums[i]-nums[i-k]
            maxSum  = max(maxSum,currSum)
        return maxSum/k

题目可以问任意条件，我们只需要想办法update我们的数据（例如最后减最前）

然后更新就可以了
变种看下面
```

```Python
第二种例题，如果要求是在某个obj里面的东西可以用这个方法
    def maxVowels(self, s: str, k: int) -> int:
        v= {"a","e","i","o","u"}
        count = 0
        #先preset一个fixed的k，然后查里面是否符合条件
        for i in range(k):
            count += int(s[i] in v)
        answer  = count

        #第二步是
        for i in range(k,len(s)):
            count +=int(s[i] in v)
            count -=int(s[i-k] in v)
            answer = max(answer,count)
        return answer





```

```Python
如果不是固定窗口，而是随机选择，简单的做法：
from itertools import combinations

nums = [1, 2, 3]
result = list(combinations(nums, 2))
print(result)  # 输出: [(1, 2), (1, 3), (2, 3)]

用combinations 直接选择，然后就直接return max
第二个arg是组合的长度，可以自己选

from itertools import combinations

def findMaxAverageRandom(nums, k):
    max_avg = float('-inf')

    # 生成所有长度为 k 的组合
    for combo in combinations(nums, k):
        current_avg = sum(combo) / k
        max_avg = max(max_avg, current_avg)  # 更新最大平均值

    return max_avg

# 示例用法
nums = [1, 12, -5, -6, 50, 3]
k = 4
print(findMaxAverageRandom(nums, k))  # 输出将依赖于随机组合

```

有趣的一题：

```javascript
724. Find Pivot Index
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
```

思路： 可以用累计加法（prefix）或者双指针
双指针：
左一个右一个，然后计算左边的累计，右边的累计，
如果左边累计等于右边累计，同时左 i+1 =右 i，则 return 左 i+1

    ```Python

def pivotIndex(nums: List[int]) -> int:
left, right = 0, len(nums) - 1 # 初始化左右指针
left_sum, right_sum = nums[left], nums[right] # 左右和的初始值

    while left + 1 < right:
        if left_sum < right_sum:
            left += 1
            left_sum += nums[left]
        else:
            right -= 1
            right_sum += nums[right]

    # 检查是否能找到满足条件的枢轴
    if left_sum == right_sum and left + 1 == right:
        return left + 1  # 返回枢轴索引

    return -1  # 没有找到
    ```

    Prefix的方法（有点类似于2Sum）
    计算一个总共的sum，然后计算左边的sum， 右边的等于是total sum - 左sum - nums[i]
    如果右边等于左边，那么直接return当前的i就完事儿了

    ```Python

    def pivotIndex(self, nums: List[int]) -> int:
        sumT = sum(nums)
        leftS = 0
        for i in range(len(nums)):
            #这一步重点

        # 当我们在遍历到索引 i 时：

        # 左侧和是从索引 0 到 i-1 的和。

        # 当前元素是 nums[i]。

        # 右侧和是从索引 i+1 到 n-1 的和。

            if leftS==(sumT-leftS-nums[i]):
                return i
            leftS+=nums[i]


        return -1

    ```
