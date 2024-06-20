import { server } from "./http"

export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

const serverUrlRegExp = new RegExp(server + "\\?s=[\\w-]+")
/** 常用正则表达式测试 */
export const RegexTest = {
  /** 手机号验证 */
  phone: (phone: string) => /1[3-9]\d{9}/.test(phone),
  /** 序列号二维码字符验证 */
  snCode: (str: string) => serverUrlRegExp.test(str)
}

/** 判断是否管理员 */
export const isAdmin = () => wx.getStorageSync('userRole') === "超级管理员" 