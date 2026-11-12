hexo.extend.helper.register('hexidot_search_form', function (options = {}) {
    const html = this.search_form(options);

    return html
        .replace('class="search-form"', 'class="input-append" id="search-top-box-form"')
        .replace('class="search-form-input"', 'class="search-query" id="search-top-box-input"')
        .replace(
            /<button\b[^>]*>([\s\S]*?)<\/button>/,
            (_, content) => `<input class="button btn" type="submit" value="${content}">`
        );
});