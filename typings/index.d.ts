/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    role?: RoleInfo
    product?: BearingInfo
    /** 用户角色名称 */
    // userRoleName: string
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}

declare type CustomOption = Record<string, any>

/** 用户信息 */
declare type UserInfo = { id: string, phone: string, name: string, role_id: string, role_name: string }

/** 角色信息 */
declare type RoleInfo = {
  name: string
  /** 可展示字段字符串 */
  display_info: string
}

/**
 * 带有数据的自定义事件
 * data-xxx
 */
declare type CustomDataEvent<T extends CustomOption> = WechatMiniprogram.BaseEvent<CustomOption, CustomOption, T>

/**
 * 带有数据的回调事件，多出现于Vant，WX
 * e.detail -> T
 */
declare type CustomerDetailEvent<T extends CustomOption = {value:string}> = WechatMiniprogram.CustomEvent<T, CustomOption, CustomOption, CustomOption>
