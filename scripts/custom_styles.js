const fs = require('node:fs');
const path = require('node:path');

hexo.extend.helper.register('custom_styles', function() {
    const dir_hexo = path.join(hexo.source_dir, 'css/custom');
    const dir_theme = path.join(hexo.theme_dir, 'source/css/custom');
    let styles_hexo = [];
    let styles_theme = [];
    if (fs.existsSync(dir_hexo)) {
        styles_hexo = fs.readdirSync(dir_hexo)
            .filter(file => file.endsWith('.css'))
            .sort()
            .map(file => '/css/custom/' + file);
    }
    if (fs.existsSync(dir_theme)) {
        styles_theme = fs.readdirSync(dir_theme)
            .filter(file => file.endsWith('.css'))
            .sort()
            .map(file => '/css/custom/' + file);
    }
    const styles = [
        ...styles_hexo,
        ...styles_theme
    ];

    return styles.map(file => {
        return `<link rel="stylesheet" href="${this.url_for(file)}">`;
    }).join('\n');
});

hexo.extend.helper.register('custom_scripts', function() {
    const dir_hexo = path.join(hexo.source_dir, 'js/custom');
    const dir_theme = path.join(hexo.theme_dir, 'source/js/custom');
    let styles_hexo = [];
    let styles_theme = [];
    if (fs.existsSync(dir_hexo)) {
        styles_hexo = fs.readdirSync(dir_hexo)
            .filter(file => file.endsWith('.js'))
            .sort()
            .map(file => '/js/custom/' + file);
    }
    if (fs.existsSync(dir_theme)) {
        styles_theme = fs.readdirSync(dir_theme)
            .filter(file => file.endsWith('.js'))
            .sort()
            .map(file => '/js/custom/' + file);
    }
    const styles = [
        ...styles_hexo,
        ...styles_theme
    ];

    return styles.map(file => {
        return `<script type="module" src="${this.url_for(file)}"></script>`;
    }).join('\n');
});