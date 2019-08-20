import axios from 'axios'
import $ from 'jquery'
import echarts from 'echarts'
import html2canvas from 'html2canvas'
import Canvas2Image from 'canvas2image'
import Swiper from 'swiper'
export default {
  methods: {
    // 给学习概况设置动态效果
    setStyle (index) {
      setTimeout(() => {
        if (index === 0) {
          document.getElementById('bar' + index).style.width = ((this.renderData.listHundredExamination.days / this.renderData.listLearningSituation.planDays) * 100) > 100 ? '100%' : ((this.renderData.listHundredExamination.days / this.renderData.listLearningSituation.planDays) * 100) + '%'
        } else if (index === 1) {
          document.getElementById('bar' + index).style.width = ((this.renderData.listExamPaper.paperNum / this.renderData.listLearningSituation.planSets) * 100) > 100 ? '100%' : ((this.renderData.listExamPaper.paperNum / this.renderData.listLearningSituation.planSets) * 100) + '%'
        } else if (index === 2) {
          document.getElementById('bar' + index).style.width = ((this.renderData.listQuestionBank.questionNum / this.renderData.listLearningSituation.planQuestions) * 100) > 100 ? '100%' : ((this.renderData.listQuestionBank.questionNum / this.renderData.listLearningSituation.planQuestions) * 100) + '%'
        }
        document.getElementById('bar' + index).style.background = this.list[index].color
      }, 30)
    },
    // 首屏set数据
    setHome1 () {
      // 真题考核图表
      var ExamPaper = echarts.init(document.getElementById('ExamPaper'))
      ExamPaper.clear()
      var averageScore = this.renderData.listExamPaper.listAverageScore
      var listAverageScore = []
      if (averageScore.length > 5) {
        this.dataZoom[0].start = 100 - (400 / averageScore.length)
      } else {
        this.dataZoom = { type: 'slider', show: false }
      }
      for (var i = 0; i < averageScore.length; i++) { // 获取一共多少周
        listAverageScore[i] = '第' + (parseInt(i) + 1) + '周'
        if (averageScore[i] === null) {
          averageScore[i] = 0
        }
      }
      var ExamPaperOption = {
        grid: {
          bottom: '8%',
          top: '15%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            'type': 'line' // 默认为直线，可选为："line" | "shadow"
          },
          position: function (point, params, dom, rect, size) {
            // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
            // 提示框位置
            var x = 0 // x坐标位置
            var y = 0 // y坐标位置
            // 当前鼠标位置
            var pointX = point[0]
            var pointY = point[1]
            // 提示框大小
            var boxWidth = size.contentSize[0]
            var boxHeight = size.contentSize[1]

            // boxWidth > pointX 说明鼠标左边放不下提示框
            if (boxWidth > pointX) {
              x = 5
            } else { // 左边放的下
              x = pointX - boxWidth
            }

            // boxHeight > pointY 说明鼠标上边放不下提示框
            if (boxHeight > pointY) {
              y = 5
            } else { // 上边放得下
              y = pointY - boxHeight
            }

            return [x, y]
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false, // true为标签和数据点都会在两个刻度之间
          axisLine: { show: false }, // 显示坐标轴轴线
          axisTick: { show: false }, // 刻度线标签颜色
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#D7D8DA'],
              type: 'dashed'
            }
          },
          axisLabel: {
            interval: 0, // 横坐标全部显示
            color: '#A3A9AF', // 刻度线标签颜色
            fontSize: 10
          },
          data: listAverageScore
        },
        dataZoom: this.dataZoom,
        yAxis: this.yAxis,
        series: [{
          data: averageScore,
          type: 'line',
          color: '#3185FF',
          smooth: true,
          roam: false
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      ExamPaper.setOption(ExamPaperOption, true)
      setTimeout(function () {
        ExamPaper.dispatchAction({
          type: 'showTip',
          seriesIndex: 0, // 第几条series
          dataIndex: averageScore.length - 1// 第几个tooltip
        })
      }, 500)
      setTimeout(() => {
        let swiper3 = new Swiper('.swiper-container3', {
          pagination: {
            el: '.swiper-pagination3'
          }
        })
      }, 0)
    },
    setData (activeIndex) {
      let that = this
      if (activeIndex === 0) { // 第一屏
        this.setaa = false
        this.setHome1()
      } else if (activeIndex === 1) { // 第二屏
        this.setaa = true
      } else if (activeIndex === 2) { // 第三屏
        var HundredExamination = echarts.init(document.getElementById('HundredExamination'))
        this.setaa = false
        var listCorrect = this.renderData.listHundredExamination.listCorrect
        var listlistCorrect = []
        var dataZoom
        if (listCorrect != null) {
          this.start = 100 - (400 / listCorrect.length)
          this.dataZoom = dataZoom
          // 计算从哪天开始
          var day = parseInt(this.renderData.listHundredExamination.nowDay - this.renderData.listHundredExamination.days)
          for (var i = 0; i < listCorrect.length; i++) { // 获取一共多少周
            day++
            listlistCorrect[i] = '第' + day + '天'
            if (listCorrect[i] === null) {
              listCorrect[i] = 0
            }
          }
        } else {
          dataZoom = { type: 'slider', show: false }
        }
        HundredExamination.clear()
        var HundredExaminationOption = {
          color: ['#3398DB'],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '7%',
            top: '15%',
            containLabel: true
          },
          dataZoom: dataZoom,
          xAxis: [{
            type: 'category',
            data: listlistCorrect,
            // axisTick: { alignWithLabel: true },
            axisLine: { show: false }, // 显示坐标轴轴线
            axisTick: { show: false, alignWithLabel: true }, // 刻度
            axisLabel: {
              interval: 0,
              color: '#A3A9AF', // X轴文字颜色
              fontSize: 10
            }
          }],
          yAxis: this.yAxis,
          series: [{
            type: 'bar',
            barWidth: '7',
            barShadow: '#BFDDFF',
            label: {
              show: true,
              position: 'top',
              distance: 5,
              formatter: '{@score}%',
              color: '#140F26',
              fontWeight: 'bold',
              fontSize: 14
            },
            itemStyle: {
              color: '#61AAFF',
              barBorderRadius: 6
            },
            data: listCorrect
          }]
        }
        HundredExamination.setOption(HundredExaminationOption, true)
      } else if (activeIndex === 3) { // 第四屏
        this.setaa = false
        this.slide7Show = false
        var listQuestionBank = echarts.init(document.getElementById('listQuestionBank'))
        listQuestionBank.clear()
        var data = [
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 },
          { value: 0 }
        ]
        // console.log(this.renderData.listQuestionBank.listSubjectsTopicCorrect);
        if (this.renderData.listQuestionBank.listSubjectsTopicCorrect != null) {
          for (var i = 0; i < this.renderData.listQuestionBank.listSubjectsTopicCorrect.length; i++) {
            var datas = this.renderData.listQuestionBank.listSubjectsTopicCorrect[i]
            switch (datas.sujectsTopicId) {
              case 1:// 完型填空
                this.questionBank[3].questionNum = datas.questionNum
                data[2].value = datas.correct
                break
              case 4:// 七选五
                console.log(datas.questionNum)
                this.questionBank[4].questionNum = datas.questionNum
                data[3].value = datas.correct
                break
              case 5:// 阅读理解
                this.questionBank[0].questionNum = datas.questionNum
                data[4].value = datas.correct
                break
              case 12:// 语法填空
                this.questionBank[2].questionNum = datas.questionNum
                data[1].value = datas.correct
                break
              case 6:// 改错
                this.questionBank[1].questionNum = datas.questionNum
                data[0].value = datas.correct
                break
            }
          }
        }
        console.log(data)
        var listQuestionBankOption = {
          grid: {
            left: 0,
            right: 0
          },
          title: {
            text: this.renderData.listQuestionBank.correct ? this.renderData.listQuestionBank.correct + '%' : '--' + '%',
            subtext: '综合正确率',
            left: 'center',
            top: 'center',
            textStyle: {
              color: '#0D0E10',
              fontSize: 13,
              height: 10,
              lineHeight: 3
            },
            subtextStyle: {
              fontSize: 9,
              lineHeight: 2
            },
            itemGap: 3
          },
          series: [{
            name: '正确率',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            fontSize: 10,
            itemStyle: {
              normal: {
                borderWidth: 3,
                borderColor: '#fff'
              }
            },
            label: {
              normal: {
                formatter: '{a|{a} {c}%}',
                borderRadius: 4,
                rich: {
                  a: {
                    color: '#999',
                    align: 'center',
                    fontSize: 10
                  },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  }
                }
              }
            },
            data: data
          }
          ],
          color: ['#9861FF', '#F42850', '#F6A93B', '#7ED321', '#4A90E2']
        }
        listQuestionBank.setOption(listQuestionBankOption, true)
      } else if (activeIndex === 4) { // 第五屏
        this.slide7Show = true
        var enToChCorrect = echarts.init(document.getElementById('enToChCorrect'))
        var chToEnCorrect = echarts.init(document.getElementById('chToEnCorrect'))
        enToChCorrect.clear()
        chToEnCorrect.clear()
        var e = this.renderData.listWordAndComposition.enToChCorrect === null ? 0 : this.renderData.listWordAndComposition.enToChCorrect
        if (e === null) {
          e = 0
        }
        var globalOption = {
          title: {
            show: true,
            text: e + '%',
            x: 'center',
            y: 'center',
            subtext: '正确率',
            left: 'center',
            top: 'center',
            textStyle: {
              color: '#0D0E10',
              fontSize: 13,
              height: 10,
              lineHeight: 3
            },
            subtextStyle: {
              fontSize: 9,
              lineHeight: 2
            },
            itemGap: 3
          },
          tooltip: {
            trigger: 'item',
            formatter: '{d}%',
            show: false
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            show: false
          },
          series: {
            name: '',
            type: 'pie',
            radius: ['70%', '85%'],
            avoidLabelOverlap: true,
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            color: ['#61AAFF', '#EFF0F1'],
            data: [
              { value: e, name: '' },
              { value: 100 - e, name: '' }
            ]
          }
        }
        var c = this.renderData.listWordAndComposition.chToEnCorrect === null ? 0 : this.renderData.listWordAndComposition.chToEnCorrect
        var enToChCorrectOption = JSON.parse(JSON.stringify(globalOption))
        var chToEnCorrectOption = JSON.parse(JSON.stringify(globalOption))
        enToChCorrectOption.title.text = e + '%'
        if (c === null) {
          c = 0
        }
        enToChCorrectOption.series.data = [
          { value: e, name: '' },
          { value: 100 - e, name: '' }
        ]
        chToEnCorrectOption.title.text = c + '%'
        chToEnCorrectOption.series.data = [
          { value: c, name: '' },
          { value: 100 - c, name: '' }
        ]
        enToChCorrect.setOption(enToChCorrectOption, true)
        chToEnCorrect.setOption(chToEnCorrectOption, true)
      } else if (activeIndex === 5) { // 第六屏
        var bubble = echarts.init(document.getElementById('bubble'))
        this.slide7Show = false
        bubble.clear()
        var bubbleData1 = this.renderData.listEfficiency.hundredExaminationIndex === null ? 0 : this.renderData.listEfficiency.hundredExaminationIndex
        var bubbleData2 = this.renderData.listEfficiency.examPaperInde === null ? 0 : this.renderData.listEfficiency.examPaperInde
        var bubbleData3 = this.renderData.listEfficiency.questionBankIndex === null ? 0 : this.renderData.listEfficiency.questionBankIndex
        var bubbleData = [bubbleData1, bubbleData2, bubbleData3]
        console.log(bubbleData)
        var bubbleOption = {
          radar: [
            {
              indicator: [
                { text: '百日考', max: 100, color: '#555555' },
                { text: '真题考试', max: 100, color: '#555555' },
                { text: '题库', max: 100, color: '#555555' }
              ],
              radius: 80,
              center: ['50%', '60%'],
              axisLine: {
                show: false
              },
              splitLine: {
                show: false
              },
              splitArea: {
                areaStyle: {
                  color: [
                    'rgba(204, 204, 204, 1)',
                    'rgba(204, 204, 204, .8)',
                    'rgba(204, 204, 204, .6)',
                    'rgba(204, 204, 204, .4)',
                    'rgba(204, 204, 204, .2)',
                    'rgba(204, 204, 204, 0)'
                  ]
                }
              }
            }
          ],
          series: [
            {
              type: 'radar',
              tooltip: {
                trigger: 'item'
              },
              itemStyle: {
                normal: {
                  borderColor: '#50A1FF',
                  borderWidth: 1,
                  borderType: 'solid',
                  areaStyle: {
                    color: 'rgba(80, 161, 255, 0.4)'
                  },
                  lineStyle: {
                    color: '#50A1FF',
                    width: 2,
                    type: 'solid'
                  }
                }
              },

              data: [
                {
                  value: bubbleData
                }
              ]
            }
          ]
        }
        bubble.setOption(bubbleOption, true)
      }
    },
    // 绘制保存的图片
    savePicture () {
      var picture = $('.share').get(0) // 将jQuery对象转换为dom对象
      // 调用html2canvas插件
      html2canvas(picture).then(function (canvas) {
        let canvasWidth = canvas.width * 4// canvas宽度
        let canvasHeight = canvas.height * 4// canvas高度
        let w = picture.offsetWidth * 2
        let h = picture.offsetHeight * 2
        // 调用Canvas2Image插件
        Canvas2Image.saveAsImage(canvas, w, h, 'png', '学习周报')
      })
    },
    GetQueryString (name) {
      var after = window.location.href.split('?')[1]
      if (after) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        var r = after.match(reg)
        if (r != null) {
          return decodeURIComponent(r[2])
        } else {
          return null
        }
      }
    },
    toShare () {
      location.href = 'share.html?weekReportId=' + this.weekReportId
    },
    totalProgress () {
      location.href = 'totalProgress.html?weekReportId=' + this.weekReportId
    },
    MillisecondToDate (value) {
      var secondTime = parseInt(value / 1000)// 秒
      var minuteTime = 0// 分
      var hourTime = 0// 小时
      if (secondTime > 60) { // 如果秒数大于60，将秒数转换成整数
        // 获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60)
        // 获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60)
        // 如果分钟大于60，将分钟转换成小时
        if (minuteTime > 60) {
          // 获取小时，获取分钟除以60，得到整数小时
          hourTime = parseInt(minuteTime / 60)
          // 获取小时后取佘的分，获取分钟除以60取佘的分
          minuteTime = parseInt(minuteTime % 60)
        }
      }
      var result = '' + parseInt(secondTime) + '秒'

      if (minuteTime > 0) {
        result = '' + parseInt(minuteTime) + '分' + result
      }
      if (hourTime > 0) {
        result = '' + parseInt(hourTime) + '小时' + result
      }
      return result
    },
    setTime (msd) {
      if (msd === null) {
        return '--'
      }
      var time = ((msd / 1000) / 60) / 60// 算出分钟数
      time = time.toFixed(1)
      var num = time.split('.')[1]
      console.log(num)
      if (num === 0 && time.split('.')[0] === 0) {
        return 0.1
      } else {
        if (num === 0) {
          time = time.split('.')[0]
        }
      }
      return time
    },
    getMyDate (str) {
      var oDate = new Date(str)
      var oYear = oDate.getFullYear()
      var oMonth = oDate.getMonth() + 1
      var oDay = oDate.getDate()
      var oHour = oDate.getHours()
      var oMin = oDate.getMinutes()
      var oSen = oDate.getSeconds()
      var oTime = oYear + '/' + this.getzf(oMonth) + '/' + this.getzf(oDay) + ' ' + this.getzf(oHour) + ':' + this.getzf(oMin) + ':' + this.getzf(oSen)// 最后拼接时间
      return oTime
    },
    // 补0操作
    getzf (num) {
      if (parseInt(num) < 10) {
        num = '0' + num
      }
      return num
    }
  },
  data () {
    return {
      list: [
        { title: '百日考', color: '#4A90E2' },
        { title: '真题考核', color: '#F42850' },
        { title: '题库', color: '#7ED321' }
      ],
      totalSituation: null,
      list2Img: null,
      questionBank: [
        { color: '#4A90E2', text: '阅读理解', questionNum: 0 },
        { color: '#9861FF', text: '改错', questionNum: 0 },
        { color: '#F42850', text: '语法填空', questionNum: 0 },
        { color: '#F6A93B', text: '完型填空', questionNum: 0 },
        { color: '#7ED321', text: '七选五', questionNum: 0 },
        { color: '#fff', text: '', questionNum: 0 }
      ],
      renderData: null,
      slide7Show: true,
      setaa: false,
      // baseUrl:'http://exchange.lfenglish.cn/onlineEducation/',
      baseUrl: 'http://192.168.1.72:8081/onlineEducation/',
      dataZoom: null,
      yAxis: [{
        type: 'value',
        position: 'left',
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
        data: []
      }],
      score: 125,
      radialObj2: null,
      radialObj3: null,
      start: null,
      dataNo: false
    }
  },
  mounted: function () {
    this.dataZoom = [{
      start: this.start, // 默认为0
      end: 100, // 默认为100
      type: 'slider',
      show: true,
      xAxisIndex: [0],
      handleSize: 0, // 滑动条的 左右2个滑动条的大小
      height: 6, // 组件高度
      left: 0, // 左边的距离
      right: 1, // 右边的距离
      bottom: 0, // 右边的距离
      handleColor: '#ddd', // h滑动图标的颜色
      handleStyle: {
        borderColor: '#cacaca',
        borderWidth: '1',
        shadowBlur: 2,
        background: '#ddd',
        shadowColor: '#ddd'
      },
      fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
        // 给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
        // 给第一个设置0，第四个设置1，就是垂直渐变
        offset: 0,
        color: '#3185FF'
      }, {
        offset: 1,
        color: '#3185FF'
      }]),
      backgroundColor: '#ddd', // 两边未选中的滑动条区域的颜色
      showDataShadow: false, // 是否显示数据阴影 默认auto
      preventDefaultMouseMove: false,
      showDetail: false, // 即拖拽时候是否显示详细数值信息 默认true
      handleIcon: 'image://./images/handelIcon.png',
      filterMode: 'filter',
      moveOnMouseWheel: false,
      weekReportId: 0,
      listExamPaper: null
    }]
    this.weekReportId = this.GetQueryString('weekReportId'); this.weekReportId = this.GetQueryString('weekReportId')
    // 获取概况
    axios.get(this.baseUrl + 'weekReport/getWeekReportById?weekReportId=' + this.weekReportId)
      .then((res) => {
        if (res.data.state === 200) {
          this.renderData = res.data.data.renderData
          setTimeout(() => {
            this.setHome1()
          }, 0)
        }
      })
      .catch(function (error) {
        console.log(error)
        this.dataNo = true
      })
    // 加载swiper
    var that = this
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      on: {
        slideChangeTransitionEnd: function () {
          that.setData(this.activeIndex)
        }
      }
    })
  }
}
