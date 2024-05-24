/**
 * @param {string} path
 * @returns {Boolean}
 * 这个函数使用正则表达式 /^(https?:|mailto:|tel:)/ 来匹配字符串
 * path 是否以 http://、https://、mailto: 或 tel: 开头。
 * 如果匹配成功，则返回 true，表示这是一个外部链接；
 * 否则返回 false，表示这不是一个外部链接。
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
