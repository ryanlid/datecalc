# DateCalc 日期计算

实现日期的日、周、月、季度、年加减日期计算

🏠 在线预览 : https://datecalc.ryanlid.com/

🍩 Preview : https://datecalc.ryanlid.repl.co/

🍺 GitHub : https://github.com/ryanlid/datecalc

```js
console.log('当前日期', DateCalc.now);
console.log('今天本周的第几天', DateCalc.nowDayOfWeek());
console.log('当前日', DateCalc.nowDay());
console.log('当前月', DateCalc.nowMonth());
console.log('当前年', DateCalc.nowYear());

console.log('获得前2天', DateCalc.getDate(-2));
console.log('获得今天', DateCalc.getDate());
console.log('获得后14天', DateCalc.getDate(14));

console.log('获得上4周的开端日期', DateCalc.getWeekStartDate(-4));
console.log('获得本周的开端日期', DateCalc.getWeekStartDate());
console.log('获得下6周的开端日期', DateCalc.getWeekStartDate(6));

console.log('获得上4周的停止日期', DateCalc.getWeekEndDate(-4));
console.log('获得本周的停止日期', DateCalc.getWeekEndDate());
console.log('获得下6周的停止日期', DateCalc.getWeekEndDate(6));

console.log('获得上3月的开始日期', DateCalc.getMonthStartDate(-3));
console.log('获得本月的开始日期', DateCalc.getMonthStartDate());
console.log('获得下6月的开始日期', DateCalc.getMonthStartDate(6));

console.log('获得上3个月的结束日期', DateCalc.getMonthEndDate(-3));
console.log('获得本月的结束日期', DateCalc.getMonthEndDate());
console.log('获得下6个月的结束日期', DateCalc.getMonthEndDate(6));

console.log('获得本季度的开端月份', DateCalc.getQuarterStartMonth());

console.log('计算上几个季度的开始日期', DateCalc.getQuarterStartDate(-1));
console.log('计算本季度的日期', DateCalc.getQuarterStartDate());
console.log('计算下几个季度的开始日期', DateCalc.getQuarterStartDate(2));

console.log('获得上1个季度的结束日期', DateCalc.getQuarterEndDate(-1));
console.log('获得本季度的结束日期', DateCalc.getQuarterEndDate());
console.log('获得下2个季度的结束日期', DateCalc.getQuarterEndDate(2));

console.log('计算上几个年的开始日期', DateCalc.getYearStartDate(-1));
console.log('计算本年的日期', DateCalc.getYearStartDate());
console.log('计算下几个年的开始日期', DateCalc.getYearStartDate(2));

console.log('获得上1个年的结束日期', DateCalc.getYearEndDate(-1));
console.log('获得本年的结束日期', DateCalc.getYearEndDate());
console.log('获得下2个年的结束日期', DateCalc.getYearEndDate(2));
```
