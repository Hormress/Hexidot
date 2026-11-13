const cheerio = require("cheerio");

hexo.extend.helper.register('nav_top_process', function(html) {
    const $ = cheerio.load(html, {}, false);
    const blocks = new Set([
        'address',
        'article',
        'aside',
        'blockquote',
        'div',
        'dl',
        'fieldset',
        'figure',
        'footer',
        'form',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'header',
        'hr',
        'main',
        'nav',
        'ol',
        'p',
        'pre',
        'section',
        'table',
        'ul'
    ]);
    $('li').each(function() {
        const first = $(this).contents().filter(function() {
            return (this.type !== 'text' && this.type !== 'comment') || (this.type === 'text' && this.data.trim() !== '');
        }).first();
        const node = first[0];
        if (!node) return;
        if (node.type === 'text') {
            first.wrap('<a href="javascript:;"></a>');
        }
        if (blocks.has(node.name)) {
            first.prepend('<a href="javascript:;"></a>');
        }
    });
    return $.html();
});