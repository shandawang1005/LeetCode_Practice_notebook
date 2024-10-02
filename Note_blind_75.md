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

