
import crypto from 'crypto'
import axios from 'axios'
import qs from 'qs'
import config from '@/config/index'

function handlerError(msg) {
  if (process.env.NODE_ENV === 'development') {
    window.ydk.toast({
      msg: msg || '网络开小差了，稍后再试吧',
    })
  }
}

const { whiteCodeList, product } = config

const {
  VUE_APP_SECRET_KEY: secretKey,
  VUE_APP_SECRET_IV: secretIv,
  VUE_APP_SIGN_SECRET_KEY: signSecretKey,
  VUE_APP_DECODE_TYPE: algorithm,
  VUE_APP_KEY_ID: keyId,
} = process.env

function checkWhiteCode(code) {
  return whiteCodeList && whiteCodeList.indexOf(code) > -1
}

/**
 * md5加密
 * @param {String} str md5
 * @param {*} decode
 */
function md5(str, decode) {
  return crypto
    .createHash('md5')
    .update(str)
    .digest(decode)
}

/**
 * 数据解密
 * @param {*} data
 */
function decodeData(data) {
  if (!data) {
    return null
  }
  const key = Buffer.alloc(16, md5(secretKey)) // 16位密钥 默认 'utf-8'
  const iv = Buffer.alloc(16, md5(secretIv)) // 16位向量
  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  return decipher.update(data, 'base64', 'utf-8') + decipher.final('utf-8')// 原数据 'base64' 解密后数据 ’utf-8‘
}

/**
 * 生成签名
 * @param {*} data
 */
const secretKeyKey = 'key'
function genSign(signSata = {}) {
  const data = { ...signSata }
  const keySortArr = Object.keys(data)
    .sort()
    .filter((v) => !(data[v] === undefined))
  keySortArr.push(secretKeyKey)
  data[secretKeyKey] = signSecretKey
  const sign = `${keySortArr.map((k) => `${k}=${data[k]}`).join('&')}`
  return [md5(sign, 'hex'), keySortArr.join(',')]
}

/**
 * 获取请求前的数据
 * @param {*} config
 */
function getRequestData(requestConfig = {}) {
  const { method, data = {}, params = {} } = requestConfig
  switch (method.toLowerCase()) {
    case 'post':
    case 'delete':
    case 'put':
      return data
    case 'get':
      return params
    default:
      return data
  }
}

/**
 * 设置签名后的数据
 * @param {*} config
 * @param {*} data
 */
function setRequestData(requestConfig = {}, data) {
  const { method } = requestConfig
  console.log(data)
  /* eslint-disable */
  switch (method.toLowerCase()) {
    case 'post':
    case 'delete':
    case 'put':
      requestConfig.data = data
      break
    case 'get':
      requestConfig.params = data
      break
    default:
      requestConfig.data = data
      break
  }
  /* eslint-able */
}

/**
 * 开发模式下加解密请求实例
 */
const http = axios.create({
  method: 'get', // 默认值
  baseURL: process.env.VUE_APP_SERVICE_URL,
  timeout: 30000,
  withCredentials: true, // 是否携带cookie信息
  responseType: 'json', // 默认值是json
  maxContentLength: Infinity, // http响应内容的最大长度
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  validateStatus(status) {
    return status >= 200 && status < 300 // default
  },
  transformRequest: [
    function (data) {
      return qs.stringify(data)
    },
  ],
  transformResponse: [],
})

http.interceptors.request.use(
  (axiosConfig) => {
    if (axiosConfig.sign) {
      const requestData = getRequestData(axiosConfig)
      const signData = Object.assign(requestData, {
        product,
        keyid: keyId,
        mysticTime: Date.now(),
      })
      const [sign, pointParam] = genSign(signData)
      Object.assign(signData, {
        sign,
        pointParam,
      })
      setRequestData(axiosConfig, signData)
    }
    return axiosConfig
  },
  (error) => {
    Promise.reject(error)
  },
)

http.interceptors.response.use(
  (response) => {
    const { config } = response
    let { data } = response
    if (typeof data === 'string') {
      data = JSON.parse(data)
    }
    if (data && data.code === 0) {
      if (config.decode) {
        const d = decodeData(data.data)
        data.data = JSON.parse(JSON.parse(d))
      }
      return data.data
    }
    if (!checkWhiteCode(data.code)) {
      handlerError(data && data.msg)
      Promise.reject(error)
    } else {
      return Promise.reject(data)
    }
  },
  (error) => {
    handlerError('网络开小差了，稍后再试吧')
    Promise.reject(error)
  },
)

export default http
