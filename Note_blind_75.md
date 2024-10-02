Greatest Common divider 用法：

gcd(a,b) 其中 a 和 b 是 length 的长度
例子，寻找 str1 和 str2 的共同最小公约数

```
def gcdOfStrings(self, str1: str, str2: str) -> str:
        from math import gcd

        if str1 + str2 != str2 + str1:
            return ""

        a = len(str1)
        b = len(str2)
        return str1[:gcd(a,b)]
```

Python 中预生成 Array 的方法:
```
list = [0]\*5 ==> print(list)===> [0,0,0,0,0]
```
取 max/min 在 list 中的方法：
```
max(list)/min(list)
```

python 中split() 里面不放东西的话就是默认为空格
如果用 c = list[s],则是把每个字母拆开，没办法按需要的东西分割

可以用   .strip()  把前后空格抹掉


```
****额外的用法****
s = "one two three four five"
limited_split = s.split(" ", 2)  # 按空格拆分，限制拆分次数为 2
print(limited_split)  # 输出: ['one', 'two', 'three four five']
```