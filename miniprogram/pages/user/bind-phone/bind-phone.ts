// pages/user/bind-phone/bind-phone.ts
import Notify from "../../../miniprogram_npm/@vant/weapp/notify/notify";
Page({
  data: {
    phoneNumber: '',
    code: ''
  },
  onGetCode() {
    const { phoneNumber } = this.data;
    // 这里可以添加发送验证码的逻辑
    if (!phoneNumber) {
      return Notify({
        message: '请输入手机号',
        type: "danger"
      })
    }
    this.setData({
      code: ''
    })
    // 假设发送验证码成功
    wx.showToast({
      title: '验证码发送成功',
      icon: 'success',
      duration: 2000
    });
  },
  onBindPhone() {
    const { phoneNumber, code } = this.data;
    // 这里可以添加绑定手机号的逻辑
    if (!phoneNumber || !code) {
      return Notify({
        message: '手机号和验证码不能为空',
        type: "danger"
      })
    }
    // 假设绑定成功
    wx.showToast({
      title: '手机号绑定成功',
      icon: 'success',
      duration: 2000
    }).then(() => {
      // 跳转到首页或其他页面
      wx.switchTab({
        url: '/pages/workspace/index/index'
      });
    });
  }
});