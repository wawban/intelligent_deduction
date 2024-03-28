import request from "@/util/request";
const url = "/"
// 登录
export const auth_login = (data) => {
    return request({
        url: `${url}auth/login`,
        method: "post",
        data
    })
}
// 仪表盘 风险评估
export const dashboard_evaluation = (params) => {
    return request({
        url: `${url}dashboard/evaluation`,
        method: "get",
        params
    })
}
// 仪表盘 风险评估右
export const dashboard_summary = (params) => {
    return request({
        url: `${url}dashboard/summary`,
        method: "get",
        params
    })
}
// 仪表盘 隐蔽问题趋势
export const dashboard_issuestrend = (params) => {
    return request({
        url: `${url}dashboard/issues-trend`,
        method: "get",
        params
    })
}
// 仪表盘 潜在风险资产
export const dashboard_potential = (params) => {
    return request({
        url: `${url}dashboard/potential-risk-assets`,
        method: "get",
        params
    })
}
// 仪表盘 潜在攻击面
export const dashboard_surface = (params) => {
    return request({
        url: `${url}dashboard/potential-attack-surface`,
        method: "get",
        params
    })
}
// 仪表盘 关键风险资产
export const dashboard_keysurface = (params) => {
    return request({
        url: `${url}dashboard/key-risk-assets`,
        method: "get",
        params
    })
}
// 数字空间治理 主机资产 资产组架构
export const governance_groups = (params) => {
    return request({
        url: `${url}data-governance/groups`,
        method: "get",
        params
    })
}
// 数字空间治理 主机资产 主机资产列表
export const governance_hosts = (params) => {
    return request({
        url: `${url}data-governance/hosts`,
        method: "get",
        params
    })
}
// 数字空间治理 主机资产 主机资产资产详情
export const governance_hostsid = (params) => {
    return request({
        url: `${url}data-governance/hosts/${params}`,
        method: "get",
        // params
    })
}
// 数字空间治理 主机资产 主机资产资产编辑
export const governance_meta = (data,id) => {
    return request({
        url: `${url}data-governance/hosts/${id}/meta`,
        method: "patch",
        data
    })
}
// 数字空间治理 主机资产 主机标签列表
export const governance_tagshosts = (params) => {
    return request({
        url: `${url}data-governance/tags/host-tags`,
        method: "get",
        params
    })
}
// 数字空间治理 主机资产 主机标签列表-自定义标签
export const governance_tagscustom = (params) => {
    return request({
        url: `${url}data-governance/tags/custom-tags`,
        method: "get",
        params
    })
}// 数字空间治理 主机资产 主机标签列表-自定义标签创建
export const governance_tagscustomcj = (data) => {
    return request({
        url: `${url}data-governance/tags/custom-tags`,
        method: "post",
        data
    })
}
// 数字空间治理 主机资产 主机资产添加标签
export const governance_metatags = (data,id) => {
    return request({
        url: `${url}data-governance/hosts/${id}/tags`,
        method: "patch",
        data
    })
}
// 数字空间治理 网站资产 网站资产列表
export const governance_sites = (params) => {
    return request({
        url: `${url}data-governance/sites`,
        method: "get",
        params
    })
}
// 数字空间治理 网站资产 网站资产资产详情
export const governance_sitesid = (params) => {
    return request({
        url: `${url}data-governance/sites/${params}`,
        method: "get",
    })
}
// 数字空间治理 网站资产 网站标签列表
export const governance_tagssite = (params) => {
    return request({
        url: `${url}data-governance/tags/site-tags`,
        method: "get",
        params
    })
}
// 数字空间治理 网站资产 网站资产添加标签
export const governance_metatagssites = (data,id) => {
    return request({
        url: `${url}data-governance/sites/${id}/tags`,
        method: "patch",
        data
    })
}
// 数字空间治理 网站资产 网站资产资产编辑
export const governance_metasites = (data,id) => {
    return request({
        url: `${url}data-governance/sites/${id}/meta`,
        method: "patch",
        data
    })
}
// 数字空间治理 标签管理 主机标签-更新
export const governance_tagshosttags = (data,id) => {
    return request({
        url: `${url}data-governance/tags/host-tags/${id}`,
        method: "patch",
        data
    })
}
// 数字空间治理 标签管理 网站标签-更新
export const governance_tagssitetags = (data,id) => {
    return request({
        url: `${url}data-governance/tags/site-tags/${id}`,
        method: "patch",
        data
    })
}
// 数字空间治理 标签管理 自定义标签-更新
export const governance_tagscustomtags = (data,id) => {
    return request({
        url: `${url}data-governance/tags/custom-tags/${id}`,
        method: "patch",
        data
    })
}
// 数字空间治理 标签管理 自定义标签-删除
export function productInfo_remove(id) {
    return request({
        url: `${url}data-governance/tags/custom-tags/${id}`,
        method: 'delete'
    })
}
// 任务管理/推演任务 列表
export const infer_tasks = (params) => {
    return request({
        url: `${url}infer/tasks`,
        method: "get",
        params
    })
}
// 数字空间治理/漏洞治理 平铺视角
export const governance_vulns= (params) => {
    return request({
        url: `${url}data-governance/vulns`,
        method: "get",
        params
    })
}
// 数字空间治理 漏洞详情
export function governance_vulnsxq(id) {
    return request({
        url: `${url}data-governance/vulns/${id}`,
        method: 'get'
    })
}
// 任务管理/推演任务 删除
export function infer_taskssc(id) {
    return request({
        url: `${url}infer/tasks/${id}`,
        method: 'delete'
    })
}
export const system_users= (params) => {
    return request({
        url: `${url}auth/users`,
        method: "get",
        params
    })
}
export const system_userspost= (data) => {
    return request({
        url: `${url}auth/users`,
        method: "post",
        data
    })
}
export function system_userssc(id) {
    return request({
        url: `${url}auth/users/${id}`,
        method: 'delete'
    })
}
export function system_usersbj(data,id) {
    return request({
        url: `${url}auth/users/${id}`,
        method: 'put',
        data
    })
}
export const system_status= (params) => {
    return request({
        url: `${url}system/status`,
        method: "get",
        params
    })
}
export const system_logs= (params) => {
    return request({
        url: `${url}system/logs`,
        method: "get",
        params
    })
}
export const kb_vulns= (params) => {
    return request({
        url: `${url}kb/vulns`,
        method: "get",
        params
    })
}
export const kb_vulnsid = (id) => {
    return request({
        url: `${url}kb/vulns/${id}`,
        method: "get"
    })
}

export const auth_roles= (params) => {
    return request({
        url: `${url}auth/roles`,
        method: "get",
        params
    })
}
export function users_password(data,id) {
    return request({
        url: `${url}auth/users/${id}/password`,
        method: 'put',
        data
    })
}
export function auth_logout() {
    return request({
        url: `${url}auth/logout`,
        method: 'delete'
    })
}

export const infer_taskspost= (data) => {
    return request({
        url: `${url}infer/tasks`,
        method: "post",
        data
    })
}
export function infer_tasksstatus(data,id) {
    return request({
        url: `${url}infer/tasks/${id}/status`,
        method: 'patch',
        data
    })
}
export const vulns_aggregated= (params) => {
    return request({
        url: `${url}data-governance/vulns-aggregated`,
        method: "get",
        params
    })
}
export const vulns_by= (params,id) => {
    return request({
        url: `${url}data-governance/vulns-by-vi/${id}`,
        method: "get",
        params
    })
}
export const kb_techniques= (params) => {
    return request({
        url: `${url}kb/techniques`,
        method: "get",
        params
    })
}
// /infer/tasks/{id}/status
// /infer/tasks
// /data-governance/vulns/{id}
// s
// /kb/vulns/{id}
// /data-governance/vulns
// export const productInfo_getList = (params) => {
//     return request({
//         url: `${url}productInfo/getList`,
//         method: "get",
//         params
//     })
// }

// export const productInfo_update = (data) => {
//     return request({
//         url: `${url}productInfo/update`,
//         method: "put",
//         data
//     })
// }

// export function productInfo_remove(params) {
//     return request({
//         url: `${url}productInfo/remove`,
//         method: 'delete',
//         data: params
//     })
// }

// export const file_download = (params) => {
//     return request({
//         timeout:300000,
//         url: `${url}file/download`,
//         responseType: 'blob',
//         method: "get",
//         params
//     })
// }