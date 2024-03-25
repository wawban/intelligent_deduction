import request from "@/util/request";
const url = "/"
//驾驶舱

//任务列表
export const infer_tasks = (params) => {
    return request({
        url: `${url}infer/tasks`,
        method: "get"
    })
}

//统计数据
export const results_summary = (params) => {
	return request({
		url: `${url}results/${params}/summary`,
		method: "get"
	})
}

//攻击路径
export const results_paths = (params) => {
	return request({
		url: `${url}results/${params}/paths`,
		method: "get"
	})
}

//主图数据
export const results_graph = (params) => {
	return request({
		url: `${url}results/${params}/graph`,
		method: "get"
	})
}
