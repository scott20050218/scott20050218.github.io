# JS Accumulation

## Thousandth percentile
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

## Retain 2 decimal places
```js
    function toFixed(num, decimals){
      return num.toFixed(decimals)
    }
```

## Taking Random Numbers
```js
  function random (val) {
    return Math.floor(Math.random() * val)
  }
```

## Array Sorting
```js
dataArray.sort(function sortNumber(a, b) {
   return b.value - a.value
})
```

## Array top12
```js
dataArray.sort(function (a, b) {
    return b[1] - a[1]
}).slice(0, 12)
```

## Hexagonal shape
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



[Reference](https://www.w3school.com.cn/b.asp)
[css Reference](https://css-tricks.com/)
