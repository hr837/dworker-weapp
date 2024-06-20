// components/page-loader/page-loader.ts
Component({
  options: {
    addGlobalClass: true
  },
  data: {
    moreText: '',
  },
  /**
   * 组件的属性列表
   */
  properties: {
    /** 正在加载 */
    loading: {
      type: Boolean,
      value: false
    },
    /** 总页数 */
    totalPage: Number,
    /** 当前页码 */
    pageIndex: {
      type: Number,
      value: 0,
      observer: function (val: number) {
        const text = val < this.properties.totalPage ? '加载更多' : '没有更多'
        this.setData({ moreText: text })
      }
    },
  },
})
