// tab切换
const navs = document.querySelector('.tab-nav')
const panes = document.querySelectorAll('.tab-pane')
navs.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        document.querySelector('.tab-nav .active').classList.remove('active')
        e.target.classList.add('active')
        for (let i = 0; i < panes.length; i++) {
            panes[i].style.display = 'none'
        }
        panes[e.target.dataset.id].style.display = 'block'
    }
})

// 登录
const form = document.querySelector('form')
const agree = document.querySelector('[name = agree]')
const username = document.querySelector('[name = username]')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (!agree.checked) {
        return alert('请勾选同意协议')
    }
    localStorage.setItem('name', username.value)
    location.href = './index.html'
})
