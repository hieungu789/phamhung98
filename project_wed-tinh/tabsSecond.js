const A = document.querySelector.bind(document)
const AA = document.querySelectorAll.bind(document)
const tabs_mid = AA('.box-text')
const mainMid = AA('.ThangTuan')
tabs_mid.forEach((mid, index) => {
    const quanNgu = mainMid[index]

    mid.onclick= function() {
        A('.box-text.thaoAnh').classList.remove('thaoAnh');
        A('.ThangTuan.thaoAnh').classList.remove('thaoAnh');

        quanNgu .classList.add('thaoAnh');
        this.classList.add('thaoAnh');
    }
})