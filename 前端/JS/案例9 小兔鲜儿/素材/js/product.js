

// 顶部下滑
(function () {
    const header = document.querySelector('.xtx_header')

})();


// 图片切换展示
(function () {
    const large = document.querySelector('.large')
    const middle = document.querySelector('.middle')
    const small = middle.nextElementSibling
    large.style.backgroundImage = `url(${middle.children[0].src})`

    small.addEventListener('mouseover', function (e) {
        if (e.target.tagName === 'IMG') {
            middle.children[0].src = e.target.src
            large.style.backgroundImage = `url(${middle.children[0].src})`
        }
    })


    // 鼠标进入中盒子显示大盒子,并显示遮罩层
    const layer = document.querySelector('.layer')
    middle.addEventListener('mouseenter', function () {
        show()
        layer.style.display = 'block'
    })
    middle.addEventListener('mouseleave', function () {
        hide()
        layer.style.display = 'none'
    })
    large.addEventListener('mouseenter', show)
    large.addEventListener('mouseleave', hide)
    let timeId = null

    function show() {
        large.style.display = 'block'
        clearTimeout(timeId)
    }

    function hide() {
        timeId = setTimeout(() => {
            large.style.display = 'none'
        }, 200);
    }

    middle.addEventListener('mousemove', function (e) {
        let x = e.pageX - middle.getBoundingClientRect().left
        let y = e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop

        let mx, my
        if (x >= 0 && x <= 400 && y >= 0 && y <= 400) {
            if (x < 100) mx = 0
            if (x >= 100 && x <= 300) mx = x - 100
            if (x > 300) mx = 200
            if (y < 100) my = 0
            if (y >= 100 && y <= 300) my = y - 100
            if (y > 300) my = 200
            layer.style.left = `${mx}px`
            layer.style.top = `${my}px`
            large.style.backgroundPosition = `${-mx * 2}px ${-my * 2}px`
        }
    })


})();

// 添加数量
(function () {
    const num = document.querySelector('.num')
    const input = num.children[1]
    input.value = localStorage.getItem('num') ? localStorage.getItem('num') : 1

    num.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            if (e.target.innerHTML === '-' && input.value > 1) {
                input.value--
            }
            else if (e.target.innerHTML === '+') {
                input.value++
            }
            localStorage.setItem('num', input.value)
        }
    })
})();

