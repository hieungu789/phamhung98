
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.item')
const content_item = $$('.tab-content-item')
const tabActive = $('.item.active')
const line = $('.nav-item .line')

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab, index) => {
    const content = content_item[index]
    tab.onclick = function () {
        $('.item.active').classList.remove('active');
        $('.tab-content-item.active').classList.remove('active');
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
        content.classList.add('active');
        this.classList.add('active');
    }
})
