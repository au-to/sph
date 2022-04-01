import { v4 as uuidv4 } from 'uuid';
// 生成随机字符串，作为游客身份
export const getUUID = () => {
    // 先从本地存储获取uuid
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    // 若没有，则生成
    if (!uuid_token) {
        uuid_token = uuidv4();
        uuid_token = localStorage.setItem('UUIDTOKEN', uuid_token);
    }
    return uuid_token;
}