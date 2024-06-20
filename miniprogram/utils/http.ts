export const server = 'https://nxz.com.cn:8360';
// export const server = 'https://www.littlebeelf.com:8360';

type RequestParam = {
  /**
   * api 路径
   */
  path: string,
  /**
   * 请求方法
   */
  method: "GET" | "POST" | "PUT" | "DELETE"
  /**
   * 请求数据
   */
  data?: any,
  /**
   * 是否启用loading
   */
  loading?: boolean
};


export type PageResponse<T> = {
  items: T[],
  total: number,
  size: number,
  page: number,
  /** 总页数 */
  pages: number
}



/**
 * 封装的网络请求，支持Get,Post请求
 * @param params 请求参数对象
 */
export function request<T>(params: RequestParam) {
  return new Promise<T>((resolve, reject) => {

    if (params.loading) {
      wx.showLoading({
        title: '加载中...'
      })
    }
    wx.request<T>({
      url: server + params.path,
      method: params.method,
      data: params.data,
      header: getHeader(),
      success(res) {
        if (res.statusCode !== 200) {
          reject(res.data);
        } else {
          resolve(res.data)
        }
      },
      fail(err) {
        reject(err.errMsg);
      },
      complete() {
        if (params.loading) {
          wx.hideLoading()
        }
      }
    })
  })
}


function getHeader() {
  const token = wx.getStorageSync('token');
  return token ? { Authorization: 'Bearer ' + token } : undefined;
}