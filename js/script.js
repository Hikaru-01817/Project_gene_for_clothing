document.addEventListener('DOMContentLoaded', () => {
    const menuTrigger = document.getElementById('menu-trigger');
    const slideMenu = document.getElementById('slide-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const body = document.body;
    const menuLinks = document.querySelectorAll('.menu-link');

    // メニューの開閉を切り替える関数
    function toggleMenu() {
        menuTrigger.classList.toggle('active');
        slideMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        body.classList.toggle('menu-open'); // 背景固定用
    }

    // ハンバーガーボタンクリック
    menuTrigger.addEventListener('click', toggleMenu);

    // オーバーレイ（背景）クリックで閉じる
    menuOverlay.addEventListener('click', toggleMenu);

    // メニュー内のリンクをクリックしたら自動で閉じる
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});