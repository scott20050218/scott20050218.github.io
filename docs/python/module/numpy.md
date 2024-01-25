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
 ```
## Array与Matrix
```
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

### Array 的 function
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

# 附录
## 数组的创建和访问(附录)
```python
import numpy as np
list_1 = [1, 2, 3, 4]
array_1 = np.array(list_1)   # 一维数组
```


```python
list_1
```




    [1, 2, 3, 4]




```python
array_1
```




    array([1, 2, 3, 4])




```python
list_2 = [5, 6, 7, 8]
array_2 = np.array([list_1, list_2])  # 二维数组
```


```python
list_2
```




    [5, 6, 7, 8]




```python
array_2
```




    array([[1, 2, 3, 4],
           [5, 6, 7, 8]])




```python
array_3=np.arange(1,10) #创建1到10的数组
array_4=np.arange(1,10,2) #创建1到10的数组，间隔2
array_5=np.zeros(5)             #创建5个为0的数组
array_6=np.zeros([2,3])       #创建2*3个为0的数组
array_7=np.eye(5)                #创建5*5的单位矩阵
```


```python
array_3
```




    array([1, 2, 3, 4, 5, 6, 7, 8, 9])




```python
array_4
```




    array([1, 3, 5, 7, 9])




```python
array_5
```




    array([0., 0., 0., 0., 0.])




```python
array_6
```




    array([[0., 0., 0.],
           [0., 0., 0.]])




```python
array_7
```




    array([[1., 0., 0., 0., 0.],
           [0., 1., 0., 0., 0.],
           [0., 0., 1., 0., 0.],
           [0., 0., 0., 1., 0.],
           [0., 0., 0., 0., 1.]])




```python
array_2.shape  # 数组的维度
```




    (2, 4)




```python
array_2.size     # 数组元素的个数
```




    8




```python
array_2.dtype  #数组元素的数据类型
```




    dtype('int64')




```python
array_3[1]#访问第1个元素
```




    2




```python
array_3[2:4]  #访问第2到3个元素
```




    array([3, 4])




```python
array_2[1,2]  #访问第1行，第2个元素
```




    7




```python
array_2[1][2]  #访问第1行，第2个元素
```




    7




```python
array_8=np.array([[1,2,3],[4,5,6],[7,8,9]])
```


```python
#切片
array_8[:2,1:]     #从第0行到第2行，从第1列到最后一列
```




    array([[2, 3],
           [5, 6]])




```python
array_7=np.eye(5) 

```


```python

```
## Array与Matrix(附录)
```python
import numpy as np
```


```python
np.random.randn(10)  #创建一个10个元素的1维数组
```




    array([ 0.42493784, -1.00915342, -0.94640226,  0.60185647,  0.54586824,
            0.69668488, -0.8211607 ,  0.23638224, -0.62685731, -2.0602249 ])




```python
np.random.randint(10) # 创建一个10以内的数据整数
```




    7




```python
np.random.randint(10,size=10) # 创建一个10以内的10个元素的一维的整数数组
```




    array([4, 1, 8, 0, 9, 4, 7, 8, 0, 7])




```python
np.random.randint(10,size=(2,3)) # 创建一个10以内的2*3的二维的整数数组
```




    array([[1, 6, 0],
           [9, 9, 8]])




```python
np.random.randint(10,size=20).reshape(4,5)  # 创建一个10以内的20个元素的一维的整数数组,转化为4*5的二维数组
```




    array([[8, 8, 9, 7, 9],
           [2, 7, 0, 7, 2],
           [2, 8, 6, 5, 7],
           [4, 4, 8, 5, 5]])




```python
# 数组的运算
```


```python
a=np.random.randint(10,size=20).reshape(4,5)
b=np.random.randint(10,size=20).reshape(4,5)
```


```python
a
```




    array([[5, 1, 0, 3, 6],
           [0, 6, 4, 2, 8],
           [2, 5, 2, 8, 2],
           [0, 3, 1, 2, 7]])




```python
b
```




    array([[9, 8, 3, 6, 6],
           [6, 1, 8, 9, 0],
           [5, 6, 3, 8, 5],
           [3, 7, 7, 7, 7]])




```python
a+b
```




    array([[14,  9,  3,  9, 12],
           [ 6,  7, 12, 11,  8],
           [ 7, 11,  5, 16,  7],
           [ 3, 10,  8,  9, 14]])




```python
a-b
```




    array([[-4, -7, -3, -3,  0],
           [-6,  5, -4, -7,  8],
           [-3, -1, -1,  0, -3],
           [-3, -4, -6, -5,  0]])




```python
a*b
```




    array([[45,  8,  0, 18, 36],
           [ 0,  6, 32, 18,  0],
           [10, 30,  6, 64, 10],
           [ 0, 21,  7, 14, 49]])




```python
a/b
```

    /tmp/ipykernel_5901/1348051284.py:1: RuntimeWarning: divide by zero encountered in divide
      a/b





    array([[0.55555556, 0.125     , 0.        , 0.5       , 1.        ],
           [0.        , 6.        , 0.5       , 0.22222222,        inf],
           [0.4       , 0.83333333, 0.66666667, 1.        , 0.4       ],
           [0.        , 0.42857143, 0.14285714, 0.28571429, 1.        ]])




```python
# matrix
```


```python
np.mat([[1,2,3],[4,5,6]])
```




    matrix([[1, 2, 3],
            [4, 5, 6]])




```python
np.mat(a)                      #通过二维数组创建
```




    matrix([[5, 1, 0, 3, 6],
            [0, 6, 4, 2, 8],
            [2, 5, 2, 8, 2],
            [0, 3, 1, 2, 7]])




```python
# 矩阵的运算
A = np.mat(a)
B = np.mat(b)
```


```python
A
```




    matrix([[5, 1, 0, 3, 6],
            [0, 6, 4, 2, 8],
            [2, 5, 2, 8, 2],
            [0, 3, 1, 2, 7]])




```python
B
```




    matrix([[9, 8, 3, 6, 6],
            [6, 1, 8, 9, 0],
            [5, 6, 3, 8, 5],
            [3, 7, 7, 7, 7]])




```python
A+B
```




    matrix([[14,  9,  3,  9, 12],
            [ 6,  7, 12, 11,  8],
            [ 7, 11,  5, 16,  7],
            [ 3, 10,  8,  9, 14]])




```python
A-B
```




    matrix([[-4, -7, -3, -3,  0],
            [-6,  5, -4, -7,  8],
            [-3, -1, -1,  0, -3],
            [-3, -4, -6, -5,  0]])




```python
A1=np.mat(np.random.randint(10,size=20).reshape(5,4))
B1=np.mat(np.random.randint(10,size=20).reshape(4,5))
```


```python
A1
```




    matrix([[2, 8, 7, 5],
            [4, 1, 4, 4],
            [5, 1, 0, 3],
            [9, 6, 4, 2],
            [2, 6, 4, 5]])




```python
B1
```




    matrix([[1, 4, 7, 9, 2],
            [7, 4, 3, 3, 0],
            [6, 8, 9, 3, 7],
            [9, 7, 4, 6, 8]])




```python
A1*B1

```




    matrix([[145, 131, 121,  93,  93],
            [ 71,  80,  83,  75,  68],
            [ 39,  45,  50,  66,  34],
            [ 93, 106, 125, 123,  62],
            [113,  99,  88,  78,  72]])




```python
a1=np.random.randint(10,size=20).reshape(4,5)
```


```python
a1

```




    array([[6, 1, 1, 7, 7],
           [7, 0, 7, 1, 3],
           [4, 7, 6, 9, 7],
           [6, 6, 6, 2, 0]])




```python
np.unique(a1)  #计算a中唯一的元素
```




    array([0, 1, 2, 3, 4, 6, 7, 9])




```python
sum(a1)  #计算每一列的元素和
```




    array([23, 14, 20, 19, 17])




```python
a2=np.random.randint(10,size=8).reshape(4,2)
```


```python
a2
```




    array([[6, 8],
           [5, 1],
           [5, 5],
           [4, 3]])




```python
np.unique(a2)
```




    array([1, 3, 4, 5, 6, 8])




```python
sum(a1[:,0]) #从上到下计算第一列的元素和
```




    23




```python
a1.max() #计算a中的最大值
```




    9




```python
a2.max()
```




    8




```python
max(a1[0]) #计算a中第一行的最大值
```




    7




```python
max(a2[0]) 
```




    8




```python
max(a1[:,0]) #从上到下计算第一列的元素最大值
```




    7




```python
max(a2[:,0]) #从上到下计算第一列的元素最大值
```




    6




```python

```
## Array 的input和output操作(附录)
```python
# 使用pickle序列化numpy array
import pickle
import numpy as np
x = np.arange(10)
```


```python
x
```




    array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])




```python
f = open('x.pkl','wb')
pickle.dump(x,f)
```


```python
!ls
```

    ArrayOpt .ipynb			 Matrix.ipynb  x.pkl
    Array 的input和output操作.ipynb  nohup.out



```python
f=open('x.pkl','rb')
```


```python
b=pickle.load(f)
```


```python
b
```




    array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])




```python
np.save('one_array',x)
```


```python
!ls
```

    ArrayOpt .ipynb			 Matrix.ipynb  one_array.npy
    Array 的input和output操作.ipynb  nohup.out     x.pkl



```python
t=np.load('one_array.npy')
```


```python
t
```




    array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])




```python
y=np.arange(20)
```


```python
y
```




    array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16,
           17, 18, 19])




```python
np.savez('two_array.npz',a=x,b=y)
```


```python
!ls
```

    ArrayOpt .ipynb			 Matrix.ipynb  one_array.npy  x.pkl
    Array 的input和output操作.ipynb  nohup.out     two_array.npz



```python
c=np.load('two_array.npz')
```


```python
c
```




    <numpy.lib.npyio.NpzFile at 0x7f1e8c392c90>




```python
c['a']
```




    array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])




```python
c['b']
```




    array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16,
           17, 18, 19])




```python

```
