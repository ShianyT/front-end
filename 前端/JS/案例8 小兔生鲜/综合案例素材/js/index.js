// 用户名
const xtxNavs = document.querySelector('.xtx_navs')
const li1 = xtxNavs.children[0]
const li2 = xtxNavs.children[1]
function render() {
    const username = localStorage.getItem('name')
    if (username !== null) {
        li1.innerHTML = `<a href="javascript:;"><i class="iconfont icon-user">${username
            }</i></a>`
        li2.innerHTML = '<a href="javascript:;">退出登录</a>'
    } else {
        li1.innerHTML = `<a href="./login.html">请先登录</a>`
        li2.innerHTML = '<a href="./register.html">免费注册</a>'
    }
}
render()

li2.addEventListener('click', function () {
    localStorage.removeItem('name')
    render()
})