import Vue from 'vue'

const _this = Vue.prototype;
let loadingInstance;
function startLoading(text) {
  const options = {
    target: document.querySelector(".main-loading"),
    background: "rgba(0, 0, 0, 0.2) !important",
    body: false,
    text: text || "加载中",
    lock: true,
  };
  loadingInstance = _this.$loading(options);
}
function endLoading() {
  loadingInstance.close();
}

let needLoadingRequestCount = 0;
function showLoading(text) {
  if (needLoadingRequestCount === 0) {
    startLoading(text);
  }
  needLoadingRequestCount++;
};
function hideLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
};
export { showLoading, hideLoading }