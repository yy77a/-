window.addEventListener('scroll', function() {
    const truck1 = document.querySelector('.begin .truck-1');
    const truck2 = document.querySelector('.content .truck-2');

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    const moveFactor1 = 0.1;
    const newLeft1 = 47 + (scrollTop * moveFactor1);

    if (newLeft1 <= 100) {
        truck1.style.left = `${newLeft1}%`;
    }

    const truck1Height = truck1.offsetHeight;
    const truck1Top = truck1.getBoundingClientRect().top + scrollTop;

    const startScroll = truck1Top + truck1Height - windowHeight;
    const endScroll = startScroll + windowHeight;


    const moveFactor2 = 0.05;
    const newLeft2 = Math.max(150 - ((scrollTop - startScroll) * moveFactor2), 77);


    if (scrollTop > startScroll && newLeft2 >= 77) {
        truck2.style.left = `${newLeft2}%`;
    }
});

document.addEventListener('scroll', function() {
    let sidebar = document.querySelector('.sidebar');
    let sections = document.querySelectorAll('.h'); // 获取所有 section 的集合
    let navLinks = document.querySelectorAll('.sidebar ul li a'); // 获取所有导航栏链接
    let footerOffset = document.querySelector('.footer').offsetTop; // 获取页脚的顶部位置
    let scrollPosition = window.scrollY + window.innerHeight; // 当前滚动位置 + 视口高度
    let stopScrollDistance = 400; // 距离页脚的距离
    let gapToTop = 20; // 页面上方的空隙，滚动到的目标区域距离顶部

    // 如果滚动到接近底部，停止导航栏滚动
    if (scrollPosition >= (footerOffset)) {
        sidebar.classList.add('stopped');
        sidebar.style.top = `${footerOffset - stopScrollDistance}px`; // 固定在页脚上方 stopScrollDistance 的位置
    } else {
        sidebar.classList.remove('stopped');
        sidebar.style.top = ''; // 恢复到原始状态
    }

    // 动态高亮导航栏链接
    sections.forEach((section, index) => {
        let sectionTop = section.offsetTop - gapToTop; // 滚动到的目标区域距离顶部留空隙
        let sectionHeight = section.offsetHeight;
        let sectionBottom = sectionTop + sectionHeight;

        // 判断当前滚动位置是否在某个 section 内
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            navLinks.forEach(link => link.classList.remove('active')); // 移除所有导航链接的 active 类
            navLinks[index].classList.add('active'); // 当前 section 对应的导航链接加上 active 类
        }
    });
});

// 添加点击导航栏后的平滑滚动
document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // 阻止默认跳转行为

        let targetSection = document.querySelector(this.getAttribute('href')); // 获取目标 section
        let gapToTop = 10; // 滚动到的目标区域距离顶部留 50px

        // 平滑滚动到目标区域并留出空隙
        window.scrollTo({
            top: targetSection.offsetTop - gapToTop,
            behavior: 'smooth'
        });
    });
});

function togglePlay() {
    var audio = document.getElementById("myAudio");
    var button = document.getElementById("audioButton");

    if (audio.paused) {
        audio.play();
        button.textContent = "Pause";
    } else {
        audio.pause();
        button.textContent = "Play";
    }
}

// 事件委托，监听所有的 toggle-control-button 按钮
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("toggle-control-button")) {
        // 找到对应的 .p-content 元素
        var content = event.target.parentElement.nextElementSibling;

        // 切换内容显示/隐藏
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            event.target.textContent = "Show less";
        } else {
            content.style.display = "none";
            event.target.textContent = "Learn more!";
        }
    }
});

// 定义点击展开或隐藏最近邻的内容
function toggleNextContent(element) {
    var content = element.nextElementSibling; // 获取下一个兄弟元素
    if (content && content.classList.contains('hidden-content')) {
        content.classList.toggle('visible'); // 切换显示状态
    }
}

(function() {
    var len = Math.round(document.body.clientWidth / 70); // 根据视图宽度定义元素数量
    var spiralHtml = '';
    for (let i = 0; i < len; i++) {
        spiralHtml += `<div class="spiral_section" >
  <div class="node top" style="animation-delay: ${-(i * 300)}ms"></div>
  <div class="node bottom" style="animation-delay:${-(i * 300)}ms"></div>
</div>`
    }
    spiralBox1.innerHTML = spiralHtml; // html中id 及 name属性可以直接作为变量使用
    spiralBox2.innerHTML = spiralHtml;
})();