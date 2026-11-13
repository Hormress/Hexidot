hexo.extend.helper.register('get_page', function(url) {
    const page = this.site.pages.data.find(p => p.path.replace(/\.[^/.]+$/, '') === url);
    return page ? page.content : '';
});