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