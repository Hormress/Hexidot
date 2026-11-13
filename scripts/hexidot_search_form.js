hexo.extend.helper.register('hexidot_search_form', function (options = {}) {
    const html = this.search_form(options);
    const className = options.class || 'search-form';

    return html
        .replace(
            `class="${className}"`,
            `class="input-append ${className}" id="search-top-box-form"`
        )
        .replace(
            `class="${className}-input"`,
            `class="search-query ${className}" id="search-top-box-input"`
        )
        .replace(
            /<button\b[^>]*>([\s\S]*?)<\/button>/,
            (_, content) => `<input class="button btn" type="submit" value="${content}">`
        );
});