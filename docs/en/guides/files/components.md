# Component Documentation


## Install Component
```js
cnpm i -S echarts@^4.9.0
cnpm i -S lodash
cnpm i -S uuid 
cnpm i -S echarts-gl@^1.1.2
```

## Header Component
TopHeader头部组件
```js
<top-header 
   zhName="南天政企业务数据大盘"
   enName="Nantian Government Administration of Business Data"
/>
```
### Parameter
**zhName** title， Type String Default：'南天政企业务数据大盘'
**enName** sub title，Type String Default：'Nantian Government Administration of Business Data'

Reference
```js
  import TopHeader from '@/components/TopHeader/index.vue'

  export default {
    components: { TopHeader }
  }
```

## Map Component（geo）


The geographic coordinate system component is used for map drawing, supporting the drawing of scatter plots and line sets on the geographic coordinate system.
[official website](https://echarts.apache.org/zh/option.html#geo)

Component：KunmingMap
### Parameter
::: details
```js
/** Indicators related to the region: population, regional energy consumption, or regional investment amount   */
const d1 = {
  'DongChuanArea': 114.4,
  'SongmingArea': 99.6,
  'XiShanArea': 96.6,
  'GuanduArea': 161.1,
  'ChenggongArea': 65.1
}
/** The correlation between two regions: tourism from region A to region B, investment from region A to region B, and data from region A to region B */
const travel = [{
    from: 'DongChuanArea',
    to: 'SongmingArea',
    value: 0.1
  },
  {
    from: 'DongChuanArea',
    to: 'ChenggongArea',
    value: 0.05
  },
  {
    from: 'SongmingArea',
    to: 'ChenggongArea',
    value: 0.2
  }, {
    from: 'SongmingArea',
    to: 'SongmingArea',
    value: 0.2
  },
  {
    from: 'SongmingArea',
    to: '富民县',
    value: 2
  },
  {
    from: 'SongmingArea',
    to: '宜良县',
    value: 0.2
  },
  {
    from: 'SongmingArea',
    to: '石林彝族自治县',
    value: 0.2
  },
  {
    from: 'SongmingArea',
    to: '晋宁区',
    value: 0.2
  },
  {
    from: 'SongmingArea',
    to: '禄劝彝族苗族自治县',
    value: 0.2
  }]
```
:::


## Map Component（map）
Maps are mainly used for visualizing geographic area data, and in conjunction with the VisualMap component, they are used to display data such as population distribution density in different regions
[official website](https://echarts.apache.org/zh/option.html#series-map)

Component：YunnanMapWarning
### Parameter
::: details
```js
/** Population of the province */
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

/** Provincial warning details  */
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
/** Major details of the province  */
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
/** Serious details throughout the province */
const notice3 = [{
  city: '普洱市',
  event: '星期天休息'
  },
  {
    city: '临沧市',
    event: '星期一休息'
  }]

/** Tourism situation in the city */
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

* Business Scenario

1. [Color block map with 3D shadows](https://admin.lihengrui.cn/map)
<iframe 
  src="https://admin.lihengrui.cn/map"
  width="100%"
  height="300"
/>

A map with 3D shading, using colors to represent regional dimensions (population, energy consumption, output value, investment, debt, etc.); Yellow, blue, and red scrolling pop-up windows indicate events (abnormal data reporting, safety production accidents, energy consumption exceeding standards in various regions, etc.)Color Block 2D Map


2. [3D map](https://admin.lihengrui.cn/map3)
<iframe 
  src="https://admin.lihengrui.cn/map3"
  width="100%"
  height="300"
/>
Solid color 3D map that can be textured

3. [2D Scatter, Flyline Map](https://admin.lihengrui.cn/kmmap)
<iframe 
  src="https://admin.lihengrui.cn/kmmap"
  width="100%"
  height="300"
/>

2D punctuation and flyline maps, using punctuation size, location, and color to represent coordinate dimensions (population, energy consumption, output value, investment, debt, etc.); Use flying lines to represent the relationship between two locations (investment sources, tourism, population mobility, etc.)
2D Map of Area Color Change

4. [3D color block map](https://admin.lihengrui.cn/map32)
<iframe 
  src="https://admin.lihengrui.cn/map32"
  width="100%"
  height="300"
/>
Using colors to represent regional dimensions (population, energy consumption, output value, investment, debt, etc.)

Color Block 3D Map

5. [3D Bubble Map](https://admin.lihengrui.cn/map32e)
<iframe 
  src="https://admin.lihengrui.cn/map32e"
  width="100%"
  height="300"
/>
Yellow, blue, and red scrolling pop-up windows indicate events (abnormal data reporting, safety production accidents, energy consumption exceeding standards in various regions, etc.)

Solid 3D Map

6. [3D Scatter and Flyline Maps](https://admin.lihengrui.cn/kmmap3d)
<iframe 
  src="https://admin.lihengrui.cn/kmmap3d"
  width="100%"
  height="300"
/>


Use punctuation size, position, and color to represent coordinate dimensions (population, energy consumption, output value, investment amount, debt, etc.); Use flying lines to represent the relationship between two locations (investment sources, tourism, population mobility, etc.)

Solid 3D Map


7. [Rotating Earth](https://admin.lihengrui.cn/earth)
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


## TimeLine Component
[TimeLine Screen](https://admin.lihengrui.cn/gdp)
Multidimensional display of historical data


* Business scenario (time dimension)

<iframe 
  src="https://admin.lihengrui.cn/gdp"
  width="100%"
  height="300"
/>
Display of comprehensive energy consumption in the province over the years (classification: coal, electricity, gas, others)

Investment exhibitions throughout the city over the years (classification: primary industry, secondary industry, tertiary industry; foreign investment, outside the city, within the city; real estate, tourism, flowers, others)

Over the years, state-owned assets throughout the province have been displayed (classified as financial budget, financial final accounts, investment amount, debt amount, property rights registration, and property rights transactions)

* Business scenario (regional dimension)

<iframe 
  src="https://admin.lihengrui.cn/order"
  width="100%"
  height="300"
/>


Sales situation across the country and regions over the years (classification: sales amount, correlation between two regions)


## Calendar Component

<iframe 
  src="https://admin.lihengrui.cn/sv"
  width="100%"
  height="300"
/>
* Business scenario (time dimension)

Daily comprehensive energy consumption, electricity consumption, etc. during a period of time


## Water sphere diagram

[Reference](https://github.com/ecomfe/echarts-liquidfill)
<iframe 
  src="https://admin.lihengrui.cn/lf"
  width="100%"
  height="300"
/>
* Business Scenario

Task completion status

Alarm situation


## Word Cloud diagram
[Reference](https://github.com/ecomfe/echarts-wordcloud)
<iframe 
  src="https://admin.lihengrui.cn/wc"
  width="100%"
  height="300"
/>
* Business Scenario

Search keywords

Public opinion situation
















