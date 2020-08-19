var DateCalc = {
  now: new Date(),
  // 本周的第几天
  nowDayOfWeek: function () {
    return this.now.getDay();
  },
  //当前日
  nowDay() {
    return this.now.getDate();
  },
  //当前月
  nowMonth() {
    return this.now.getMonth();
  },
  //当前年
  nowYear() {
    return this.now.getFullYear();
  },

  // 获得天
  getDate(num = 0) {
    var days = new Date(this.nowYear(), this.nowMonth(), this.nowDay() + num);
    return days;
  },
  // 获得某月的天数
  getMonthDays(myMonth) {
    var monthStartDate = new Date(this.nowYear(), myMonth, 1);
    var monthEndDate = new Date(this.nowYear(), myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
  },
  // 获得周的开端日期
  // 按周一为一周的第一天
  getWeekStartDate(num = 0) {
    var weekStartDate = new Date(
      this.nowYear(),
      this.nowMonth(),
      this.nowDay() - this.nowDayOfWeek() + 1 + num * 7
    );
    return weekStartDate;
  },
  // 获得周的停止日期
  // 按周日为一周的第一天
  getWeekEndDate(num = 0) {
    var weekEndDate = new Date(
      this.nowYear(),
      this.nowMonth(),
      this.nowDay() + (7 - this.nowDayOfWeek()) + num * 7
    );
    return weekEndDate;
  },
  // 获得月的开端日期
  getMonthStartDate(num = 0) {
    var startDate = new Date(this.nowYear(), this.nowMonth() + num, 1);
    return startDate;
  },

  // 获得月的结束日期
  getMonthEndDate(num = 0) {
    var endDate = new Date(
      this.nowYear(),
      this.nowMonth() + num,
      this.getMonthDays(this.nowMonth() + num)
    );
    return endDate;
  },

  // 获得当前季度的开端月份
  getQuarterStartMonth() {
    var quarterStartMonth = 0;
    if (this.nowMonth() < 3) {
      quarterStartMonth = 0;
    }
    if (2 < this.nowMonth() && this.nowMonth() < 6) {
      quarterStartMonth = 3;
    }
    if (5 < this.nowMonth() && this.nowMonth() < 9) {
      quarterStartMonth = 6;
    }
    if (this.nowMonth() > 8) {
      quarterStartMonth = 9;
    }
    return quarterStartMonth;
  },

  // 计算季度的开始日期
  getQuarterStartDate(num = 0) {
    var date = new Date(
      this.nowYear(),
      this.getQuarterStartMonth() + num * 3,
      1
    );
    return date;
  },
  // 计算季度的结束日期
  getQuarterEndDate(num = 0) {
    var quarterEndMonth = this.getQuarterStartMonth() + 2;
    var quarterStartDate = new Date(
      this.nowYear(),
      quarterEndMonth + num * 3,
      this.getMonthDays(quarterEndMonth)
    );
    return quarterStartDate;
  },
  // 计算年的开始日期
  getYearStartDate(num = 0) {
    var YearStartDate = new Date(this.nowYear() + num, 0, 1);
    return YearStartDate;
  },
  // 计算年的结束日期
  getYearEndDate(num = 0) {
    var YearEndtDate = new Date(this.nowYear() + num, 11, 31);
    return YearEndtDate;
  },
};
