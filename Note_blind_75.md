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


*******************
重点再看几遍 leetcode 443
*******************



滑动窗口 （fix版）
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
724. Find Pivot Index