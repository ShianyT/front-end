// 发送验证码倒计时
(function () {
    const code = document.querySelector('.code')
    let isSend = false // 是否发送验证码

    code.addEventListener('click', function () {
        if (!isSend) {
            isSend = true
            let i = 5
            code.innerHTML = `${i}秒后重新获取`
            let n = setInterval(function () {
                i--
                code.innerHTML = `${i}秒后重新获取`
                if (i == 0) {
                    clearInterval(n)
                    code.innerHTML = '重新获取'
                    isSend = false
                }
            }, 1000)
        }

    })
})();

// 验证用户名称
const username = document.querySelector('[name = username]')
username.addEventListener('change', verifyName)
function verifyName() {
    const msg = username.nextElementSibling
    const reg = /^[a-zA-Z0-9-_]{6,10}$/
    if (!reg.test(username.value)) {
        msg.innerHTML = '输入不合法,请输入6~10位'
        msg.style.color = 'red'
        return false
    }
    msg.innerHTML = ''
    return true
}

// 验证手机号码
const phone = document.querySelector('[name = phone]')
phone.addEventListener('change', verifyPhone)
function verifyPhone() {
    const msg = phone.nextElementSibling
    const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    if (!reg.test(phone.value)) {
        msg.innerHTML = '输入不合法,请输入正确的11位手机号码'
        msg.style.color = 'red'
        return false
    }
    msg.innerHTML = ''
    return true
}

// 验证验证码
const code = document.querySelector('[name = code]')
code.addEventListener('change', verifyCode)
function verifyCode() {
    const msg = code.nextElementSibling
    const reg = /^\d{6}$/
    if (!reg.test(code.value)) {
        msg.innerHTML = '输入不合法,6位数字'
        msg.style.color = 'red'
        return false
    }
    msg.innerHTML = ''
    return true
}

// 验证密码
const password = document.querySelector('[name = password]')
password.addEventListener('change', verifyPwd)
function verifyPwd() {
    const msg = password.nextElementSibling
    const reg = /^[a-zA-Z0-9-_]{6,20}$/
    if (!reg.test(password.value)) {
        msg.innerHTML = '输入不合法,6~20位数字字母符号组成'
        msg.style.color = 'red'
        return false
    }
    msg.innerHTML = ''
    return true
}


// 验证密码一致
const confirm = document.querySelector('[name = confirm]')
confirm.addEventListener('change', verifyConfirm)
function verifyConfirm() {
    const msg = confirm.nextElementSibling
    if (confirm.value !== password.value) {
        msg.innerHTML = '两次密码不一致'
        msg.style.color = 'red'
        return false
    }
    msg.innerHTML = ''
    return true
}

// 切换勾选
const queren = document.querySelector('.icon-queren')
queren.addEventListener('click', function () {
    queren.classList.toggle('icon-queren2')
})

// 我同意
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    if (!queren.classList.contains('icon-queren2')) {
        alert('请勾选协议')
        e.preventDefault()
    }
    if (!verifyName()) e.preventDefault()
    if (!verifyPhone()) e.preventDefault()
    if (!verifyCode()) e.preventDefault()
    if (!verifyPwd()) e.preventDefault()
    if (!verifyConfirm()) e.preventDefault()
})