import { request, PageResponse } from "./http";


type UserLoginResType = {
  phone: string,
  name: string,
  role_id: string,
  role_name: string,
  token: string
}
/**
 * 用户登录
 */
export function userLogin(phone: string, pwd: string) {
  return request<UserLoginResType>({
    loading: true,
    path: '/login',
    data: { phone, pwd },
    method: "POST"
  })
}

/**
 * 解析用户手机号
 * @param code 
 */
export function resolvePhone(code: string) {
  return request<{ phoneNumber: string }>({
    loading: true,
    path: `/wx/${code}`,
    method: "GET"
  })
}

/**
 * 获取产品详情
 * @param phone  用户手机号，存储在localstorage
 * @param sn 产品序列号,通过扫码获取
 */
export function getDetail(phone: string, sn: string) {
  return request<any>({
    loading: true,
    path: '/infos',
    data: { phone, serial_number: sn },
    method: "GET"
  })
}

/**
 * 查询产品列表
 * @param pageIndex 
 * @param keywords 
 */
export function getProducts(pageIndex: number, keywords?: string) {
  return request<PageResponse<BearingInfo & { id: string }>>({
    path: '/products',
    data: { page: pageIndex, size: 20, keywords },
    method: "GET"
  })
}

/**
 * 查询产品列表
 * @param pageIndex 
 * @param keywords 
 */
export function addProduct(data: BearingInfo) {
  return request<PageResponse<BearingInfo>>({
    path: '/products',
    data,
    loading: true,
    method: "POST"
  })
}

/**
 * 修改产品
 */
export function updateProduct(id: string, data: BearingInfo) {
  return request<PageResponse<BearingInfo>>({
    path: `/products/${id}`,
    data,
    loading: true,
    method: "PUT"
  })
}

/**
 * 删除产品
 */
export function deleteProduct(id: string) {
  return request<PageResponse<BearingInfo>>({
    path: `/products/${id}`,
    loading: true,
    method: "DELETE"
  })
}


/**
 * 注册用户
 */
export function userSignUp(phone: string, pwd: string, company: string, name: string) {
  return request<string>({
    path: '/register',
    loading: true,
    data: { phone, pwd, company, name },
    method: "POST"
  })
}


/**
 * 查询用户列表
 * @param pageIndex 
 * @param keywords 
 */
export function getUsers(pageIndex: number, keywords?: string) {
  return request<PageResponse<UserInfo>>({
    path: '/users',
    data: { page: pageIndex, size: 20, keywords },
    method: "GET"
  })
}

/**
 * 添加用户
 */
export function addUser(phone: string, name: string, company: string, roleId: string) {
  return request<string>({
    path: '/users',
    loading: true,
    data: { phone, name, role_id: roleId, company },
    method: "POST"
  })
}


/**
 * 修改用户
 */
export function updateUser(id: string, phone: string, name: string, roleId: string) {
  return request<string>({
    path: `/users/${id}`,
    data: { phone, name, role_id: roleId },
    method: "PUT",
    loading: true
  })
}

/**
 * 删除用户
 */
export function deleteUser(id: string) {
  return request<string>({
    path: `/users/${id}`,
    method: "DELETE",
    loading: true
  })
}


/**
 * 获取角色
 */
export function getRoles() {
  return request<PageResponse<RoleInfo>>({
    path: '/roles',
    data: { page: 1, size: 999 },
    method: "GET"
  })
}


/**
 * 删除角色
 */
export function deleteRole(id: string) {
  return request<string>({
    path: `/roles/${id}`,
    method: "DELETE",
    loading: true
  })
}


/**
 * 新增角色
 */
export function addRole(name: string, properties: string[]) {
  return request<string>({
    path: `/roles`,
    data: { name, display_info: properties.join() },
    method: "POST",
    loading: true
  })
}


/**
 * 更新角色
 */
export function updateRole(id: string, name: string, properties: string[]) {
  return request<string>({
    path: `/roles/${id}`,
    data: { name, display_info: properties.join() },
    method: "PUT",
    loading: true
  })
}


/**
 * 修改密码
 * @param oldPwd
 * @param newPwd
 * @param phone 用户手机号码，区分用户？
 */
export function updatePassword(oldPwd: string, newPwd: string, phone: string) {
  return request<string>({
    path: `/login/pwd`,
    data: { new: newPwd, old: oldPwd, phone },
    method: "POST",
    loading: true
  })
}


/**
 * 查询扫码记录
 * @param pageIndex 
 * @param keywords 
 */
export function getScanRecords(pageIndex: number, keywords?: string) {
  return request<PageResponse<ScanInfo>>({
    path: '/records',
    data: { page: pageIndex, size: 20 },
    method: "GET"
  })
}