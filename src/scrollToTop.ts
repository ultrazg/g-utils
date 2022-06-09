/**
 * 滚动至顶部
 */
function scrollToTop(): void {
    const c: number = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

export default scrollToTop;