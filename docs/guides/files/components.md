# 组件文档

## 组件安装
```js
cnpm i -S echarts@^4.9.0
cnpm i -S lodash
cnpm i -S uuid 
cnpm i -S echarts-gl@^1.1.2
```

## 头部组件
TopHeader头部组件
```js
<top-header 
   zhName="南天政企业务数据大盘"
   enName="Nantian Government Administration of Business Data"
/>
```
### 参数
**zhName** 标题， 类型 String 默认值：'南天政企业务数据大盘'
**enName** 子标题，类型 String 默认值：'Nantian Government Administration of Business Data'

引用
```js
  import TopHeader from '@/components/TopHeader/index.vue'

  export default {
    components: { TopHeader }
  }
```

## 地图组件（geo）
地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。[官网](https://echarts.apache.org/zh/option.html#geo)

组件：KunmingMap
### 参数
::: details
```js
/** 与地区相关的指标：人口数、或者地区能耗、或者地区投资金额、   */
const d1 = {
  '东川区': 114.4,
  '嵩明县': 99.6,
  '西山区': 96.6,
  '官渡区': 161.1,
  '呈贡区': 65.1
}
/** 两个地区的关联：从A地区到B地区的旅游， 从A地区到B地区的投资，从A地区到B地区的数据 */
const travel = [{
    from: '东川区',
    to: '嵩明县',
    value: 0.1
  },
  {
    from: '东川区',
    to: '呈贡区',
    value: 0.05
  },
  {
    from: '东川区',
    to: '呈贡区',
    value: 0.2
  }, {
    from: '呈贡区',
    to: '嵩明县',
    value: 0.2
  },
  {
    from: '呈贡区',
    to: '富民县',
    value: 2
  },
  {
    from: '呈贡区',
    to: '宜良县',
    value: 0.2
  },
  {
    from: '呈贡区',
    to: '石林彝族自治县',
    value: 0.2
  },
  {
    from: '呈贡区',
    to: '晋宁区',
    value: 0.2
  },
  {
    from: '呈贡区',
    to: '禄劝彝族苗族自治县',
    value: 0.2
  }]
```
:::

* 业务场景
标题


## 地图组件（map）
地图主要用于地理区域数据的可视化，配合 visualMap 组件用于展示不同区域的人口分布密度等数据，[官网](https://echarts.apache.org/zh/option.html#series-map)

组件：YunnanMapWarning
### 参数
::: details
```js
/** 全省人口数 */
const d1 = {
  '昆明市': 850.2,
  '曲靖市': 570.1,
  '玉溪市': 225,
  '保山市': 241.8,
  '昭通市': 501.4,
  '丽江市': 125.5,
  '普洱市': 238.1,
  '临沧市': 223.3,
  '楚雄彝族自治州': 239.1,
  '红河哈尼族彝族自治州': 447.8,
  '文山壮族苗族自治州': 344.4,
  '西双版纳傣族自治州': 130.6,
  '大理白族自治州': 333.8,
  '德宏傣族景颇族自治州': 131.6,
  '怒江傈僳族自治州': 55.3,
  '迪庆藏族自治州': 38.9
}

/** 全省警告明细  */
const notice1 = [{
    city: '昆明市',
    event: '星期一放假'
  },
  {
    city: '曲靖市',
    event: '星期二放假'
  },
  {
    city: '玉溪市',
    event: '星期三放假'
  }]
/** 全省重大明细  */
const notice2 = [{
  city: '保山市',
  event: '星期四不放假'
  },
  {
    city: '昭通市',
    event: '星期五不放假'
  },
  {
    city: '丽江市',
    event: '星期六不放假'
  }]
/** 全省严重明细 */
const notice3 = [{
  city: '普洱市',
  event: '星期天休息'
  },
  {
    city: '临沧市',
    event: '星期一休息'
  }]

/** 全市旅游情况  */
const travel = [{
    name: 'travel1',
    from: '东川区',
    to: '嵩明县',
    value: 0.1
  },
  {
    name: 'travel2',
    from: '东川区',
    to: '呈贡区',
    value: 0.05
  },
  {
    name: 'travel3',
    from: '东川区',
    to: '呈贡区',
    value: 0.2
  }, {
    name: 'travel4',
    from: '呈贡区',
    to: '嵩明县',
    value: 0.2
  },
  {
    name: 'travel5',
    from: '呈贡区',
    to: '富民县',
    value: 2
  },
  {
    name: 'travel6',
    from: '呈贡区',
    to: '宜良县',
    value: 0.2
  },
  {
    name: 'travel7',
    from: '呈贡区',
    to: '石林彝族自治县',
    value: 0.2
  },
  {
    name: 'travel8',
    from: '呈贡区',
    to: '晋宁区',
    value: 0.2
  },
  {
    name: 'travel9',
    from: '呈贡区',
    to: '禄劝彝族苗族自治县',
    value: 0.2
  }]
```
:::

* 业务场景
1. [带3D阴影的色块地图](https://admin.lihengrui.cn/map)
<iframe 
  src="https://admin.lihengrui.cn/map"
  width="100%"
  height="300"
/>
带3D阴影的地图，用颜色表示地区维度（人口、能耗、产值、投资额、债务等）；黄、蓝、红滚动弹窗表示事件（数据上报异常、安全生产事故、各地能耗超标情况等）
色块2D地图

2. [3D地图](https://admin.lihengrui.cn/map3)
<iframe 
  src="https://admin.lihengrui.cn/map3"
  width="100%"
  height="300"
/>
纯色3D地图，可以贴纹理

3. [2D散点、飞线地图](https://admin.lihengrui.cn/kmmap)
<iframe 
  src="https://admin.lihengrui.cn/kmmap"
  width="100%"
  height="300"
/>
2D标点、飞线地图，用标点大小、位置、颜色表示坐标维度（人口、能耗、产值、投资额、债务等）；用飞线表示两个位置的关系（投资来源、旅游、人口流动等）
面积色变化2D地图

4. [3D色块地图](https://admin.lihengrui.cn/map32)
<iframe 
  src="https://admin.lihengrui.cn/map32"
  width="100%"
  height="300"
/>
用颜色表示地区维度（人口、能耗、产值、投资额、债务等）
色块3D地图

5. [3D气泡地图](https://admin.lihengrui.cn/map32e)
<iframe 
  src="https://admin.lihengrui.cn/map32e"
  width="100%"
  height="300"
/>
黄、蓝、红滚动弹窗表示事件（数据上报异常、安全生产事故、各地能耗超标情况等）
纯色3D地图

6. [3D散点、飞线地图](https://admin.lihengrui.cn/kmmap3d)
<iframe 
  src="https://admin.lihengrui.cn/kmmap3d"
  width="100%"
  height="300"
/>
用标点大小、位置、颜色表示坐标维度（人口、能耗、产值、投资额、债务等）；用飞线表示两个位置的关系（投资来源、旅游、人口流动等）
纯色3D地图

7. [旋转地球](https://admin.lihengrui.cn/earth)
<iframe 
  src="https://admin.lihengrui.cn/earth"
  width="100%"
  height="300"
/>
<iframe 
  src="https://admin.lihengrui.cn/fight"
  width="100%"
  height="300"
/>


## TimeLine组件
[TimeLine大盘](https://admin.lihengrui.cn/gdp)
历史数据多维度展示

* 业务场景（时间维度）
<iframe 
  src="https://admin.lihengrui.cn/gdp"
  width="100%"
  height="300"
/>
历年来全省综合能耗展示（分类：煤、电、气、其他）
历年来全市投资展示（分类：第一产业、第二产业、第三产业；外资、市外、市内；房地产、旅游、鲜花、其他）
历年来全省国资展示（分类：财务预算、财务决算、投资额、债务额、产权登记，产权交易）

* 业务场景（地区维度）
<iframe 
  src="https://admin.lihengrui.cn/order"
  width="100%"
  height="300"
/>
历年来全国地区销售情况（分类：销售金额，两地关联）

## 日历组件
<iframe 
  src="https://admin.lihengrui.cn/sv"
  width="100%"
  height="300"
/>
* 业务场景（时间维度）
一段时间周期内，每天的综合能耗，电力单耗等

## 水球图
[参考](https://github.com/ecomfe/echarts-liquidfill)
<iframe 
  src="https://admin.lihengrui.cn/lf"
  width="100%"
  height="300"
/>
* 业务场景
任务完成情况
告警情况

## 词云图
[参考](https://github.com/ecomfe/echarts-wordcloud)
<iframe 
  src="https://admin.lihengrui.cn/wc"
  width="100%"
  height="300"
/>
* 业务场景
搜索关键词
舆情情况















