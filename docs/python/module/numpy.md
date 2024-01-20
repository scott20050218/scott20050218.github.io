# numpy

* N维数组(矩阵),快速高效，矢量数学运算
* 高效的Index,不需要循环
* 开源免费跨平台，运行效率足以和C/Matlab媲美

*官网
https://numpy.org/doc/stable/user/index.html
## 数组的创建和访问
### create Array from Python list
```dtd
import numpy as np
list_1 = [1, 2, 3, 4]
array_1 = np.array(list_1)   # 一维数组

list_2 = [5, 6, 7, 8]
array_2 = np.array([list_1, list_2])  # 二维数组

array_3=np.arange(1,10) #创建1到10的数组
array_4=np.arange(1,10,2) #创建1到10的数组，间隔2
array_5=np.zeros(5)             #创建5个为0的数组
array_6=np.zeros([2,3])       #创建2*3个为0的数组
array_7=np.eye(5)                #创建5*5的单位矩阵

array_2.shape  # 数组的维度
array_2.size     # 数组元素的个数
array_2.dtype  #数组元素的数据类型

array_3[1]  #访问第1个元素
array_3[2:4]  #访问第2到3个元素

array_2[1,2]  #访问第1行，第2个元素
array_2[1][2]  #访问第1行，第2个元素

array_7=np.array([[1,2,3],[4,5,6],[7,8,9]])
#切片
array_8[:2,1:]     #从第0行到第2行，从第1列到最后一列

Array与Matrix
import numpy as np
np.random.randn(10)  #创建一个10个元素的1维数组

np.random.randint(10) # 创建一个10以内的数据整数

np.random.randint(10,size=10) # 创建一个10以内的10个元素的一维的整数数组

np.random.randint(10,size=(2,3)) # 创建一个10以内的2*3的二维的整数数组

np.random.randint(10,size=20).reshape(4,5)  # 创建一个10以内的20个元素的一维的整数数组,转化为4*5的二维数组


```

### 数组的运算
```dtd
a=np.random.randint(10,size=20).reshape(4,5)
b=np.random.randint(10,size=20).reshape(4,5)
a+b
a-b
a*b
a/b
```


### matrix
```dtd
np.mat([[1,2,3],[4,5,6]])
np.mat(a)                      #通过二维数组创建
```

### 矩阵的运算
```dtd
A = np.mat(a)
B = np.mat(b)
A+B
A-B

A1=np.mat(np.random.randint(10,size=20).reshape(5,4))
B1=np.mat(np.random.randint(10,size=20).reshape(4,5))
A1*B1
```

## Asrray的function
```
a=np.random.randint(10,size=20).reshape(4,5)
a
np.unique(a)  #计算a中唯一的元素
sum(a)  #计算每一列的元素和
sum(a[0]) #计算第一行的元素和
sum(a[:,0]) #从上到下计算第一列的元素和
a.max() #计算a中的最大值
max(a[0]) #计算a中第一行的最大值
max(a[:,0]) #从上到下计算第一列的元素最大值
```

## Array 的input和output操作
```
# 使用pickle序列化numpy array
import pickle
import numpy as np
x = np.arange(10)

f = open('x.pkl','wb')
pickle.dump(x,f)
!ls

f=open('x.pkl','rb')
b=pickle.load(f)

np.save('one_array',x)
!ls
t=np.load('one_array.npy')

y=np.arange(20)
np.savez('two_array.npz',a=x,b=y)
!ls
c=np.load('two_array.npz')
c['a']
c['b']
```