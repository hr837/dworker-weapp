/// <reference path="./wx/index.d.ts" />


/**
 * 页面query类型
 */
declare type RouteQuery =  Record<string, string | undefined>

/**
 * 加载更多的值
 */
declare type MoreStatus = 'loadmore'|'loading'|'nomore'