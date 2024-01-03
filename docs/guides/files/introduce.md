# JS积累

## 千分位
```js
function format(v) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${v}`.replace(reg, '$&,')
}

// 或者

function format(v) {
  return (+v).toLocaleString()
}
```

## 保留2位小数
```js
    function toFixed(num, decimals){
      return num.toFixed(decimals)
    }
```

## 取随机数
```js
  function random (val) {
    return Math.floor(Math.random() * val)
  }
```

## 数组排序
```js
dataArray.sort(function sortNumber(a, b) {
   return b.value - a.value
})
```

## 数组取top12
```js
dataArray.sort(function (a, b) {
    return b[1] - a[1]
}).slice(0, 12)
```

## 六边形状
```css
    #star-six {
      width: 0;        
      height: 0;        
      border-left: 50px solid transparent;        
      border-right: 50px solid transparent;        
      border-bottom: 100px solid red;       
      position: relative;
    }
    #star-six:after {        
      width: 0;        
      height: 0;        
      border-left: 50px solid transparent;        
      border-right: 50px solid transparent;        
      border-top: 100px solid red;        
      position: absolute;        
      content: "";        
      top: 30px;        
      left: -50px;
    }
```



[参考](https://www.w3school.com.cn/b.asp)
[css参考](https://css-tricks.com/)
