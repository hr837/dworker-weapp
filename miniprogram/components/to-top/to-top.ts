// components/to-top/to-top.ts
import { throttle } from 'throttle-debounce';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    top: {
      type: Number,
      observer: function (val: number) {
        this.setData({ show: false });
        this.computeShow(this, val);
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    topLimit: 0
  },
  lifetimes: {
    attached() {
      const topLimit = wx.getWindowInfo().windowHeight * 1.5;
      this.setData({ topLimit })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    gotoTop() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    },
    computeShow: throttle(1000, function (context: any, val: number) {
      context.setData({ show: val > context.data.topLimit })
    })
  }
})
