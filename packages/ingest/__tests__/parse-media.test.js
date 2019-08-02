const { parseMedia } = require('../src/parse-media');

describe('parseMedia', () => {
  let saveMedia;

  beforeAll(() => {
    saveMedia = jest.fn();
    process.env.GEORGE_SITE_ROOT = 'http://test.com/';
    process.env.WORDPRESS_SITE_ROOT = 'http://localhost:8000/';
  });

  beforeEach(() => {
    saveMedia = jest.fn();
  });

  afterEach(() => {
    saveMedia.mockReset();
  });

  afterAll(() => {
    delete process.env.GEORGE_SITE_ROOT;
    delete process.env.WORDPRESS_SITE_ROOT;
  });

  it('should parse core paragraph, columns, column and list maybe break these up into seperate tests?', async () => {
    const expected = '<!-- wp:columns {"columns":3} -->\n<div class="wp-block-columns has-3-columns" style="display: block; margin: 20px;"><!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph -->\n<p>Left</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph -->\n<p>Middle</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph -->\n<p>Right</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->\n\n<!-- wp:list -->\n<ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li></ul>\n<!-- /wp:list -->';

    const input = '<!-- wp:columns {"columns":3} -->\n<div class="wp-block-columns has-3-columns" style="display: block; margin: 20px;"><!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph -->\n<p>Left</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph -->\n<p>Middle</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph -->\n<p>Right</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->\n\n<!-- wp:list -->\n<ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li></ul>\n<!-- /wp:list -->';

    const result = await parseMedia(saveMedia, input);

    expect(result).toEqual(expected);
    expect(saveMedia.mock.calls.length).toBe(0);
  });

  it('should parse core image', async () => {
    const expected = '<!-- wp:paragraph --><p>this is the top man</p><!-- /wp:paragraph --><!-- wp:image {"id":90} --><figure class="wp-block-image"><img src="http://test.com/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png" alt="" class="wp-image-90"/></figure><!-- /wp:image --><!-- wp:paragraph --><p></p><!-- /wp:paragraph -->';

    const input = '<!-- wp:paragraph --><p>this is the top man</p><!-- /wp:paragraph --><!-- wp:image {"id":90} --><figure class="wp-block-image"><img src="http://localhost:8000/admin/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png" alt="" class="wp-image-90"/></figure><!-- /wp:image --><!-- wp:paragraph --><p></p><!-- /wp:paragraph -->';

    const result = await parseMedia(saveMedia, input);

    expect(result).toEqual(expected);

    expect(saveMedia.mock.calls[0][0]).toBe(
      'http://localhost:8000/admin/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png',
    );
    expect(saveMedia.mock.calls[0][1]).toBe(
      '/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png',
    );
    expect(saveMedia.mock.calls.length).toBe(1);
  });

  it('should parse core headings', async () => {
    const expected = '<!-- wp:heading {"level":1} -->\n<h1>H1</h1>\n<!-- /wp:heading --><!-- wp:heading -->\n<h2>H2</h2>\n<!-- /wp:heading --><!-- wp:heading {"level":3} -->\n<h3>H3</h3>\n<!-- /wp:heading --><!-- wp:heading {"level":4} -->\n<h4>H4</h4>\n<!-- /wp:heading --><!-- wp:heading {"level":5} -->\n<h5>H5</h5>\n<!-- /wp:heading --><!-- wp:heading {"level":6} -->\n<h6>H6</h6>\n<!-- /wp:heading -->';

    const input = '<!-- wp:heading {"level":1} -->\n<h1>H1</h1>\n<!-- /wp:heading --><!-- wp:heading -->\n<h2>H2</h2>\n<!-- /wp:heading --><!-- wp:heading {"level":3} -->\n<h3>H3</h3>\n<!-- /wp:heading --><!-- wp:heading {"level":4} -->\n<h4>H4</h4>\n<!-- /wp:heading --><!-- wp:heading {"level":5} -->\n<h5>H5</h5>\n<!-- /wp:heading --><!-- wp:heading {"level":6} -->\n<h6>H6</h6>\n<!-- /wp:heading -->';

    const result = await parseMedia(saveMedia, input);

    expect(result).toEqual(expected);
    expect(saveMedia.mock.calls.length).toBe(0);
  });

  it('should parse core quote', async () => {
    const expected = '<!-- wp:quote -->\n<blockquote class="wp-block-quote"><p>This is a quote</p><cite>and here is the citation</cite></blockquote>\n<!-- /wp:quote -->';

    const input = '<!-- wp:quote -->\n<blockquote class="wp-block-quote"><p>This is a quote</p><cite>and here is the citation</cite></blockquote>\n<!-- /wp:quote -->';

    const result = await parseMedia(saveMedia, input);

    expect(result).toEqual(expected);
    expect(saveMedia.mock.calls.length).toBe(0);
  });

  it('should parse core cover', async () => {
    const expected = '<!-- wp:cover {"url":"http://test.com/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png","id":105,"overlayColor":"dark-gray"} -->\n<div class="wp-block-cover has-dark-gray-background-color has-background-dim" style="background-image:url(http://test.com/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)"><p class="wp-block-cover-text">some title</p></div>\n<!-- /wp:cover -->';

    const input = '<!-- wp:cover {"url":"http://localhost:8000/admin/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png","id":105,"overlayColor":"dark-gray"} -->\n<div class="wp-block-cover has-dark-gray-background-color has-background-dim" style="background-image:url(http://localhost:8000/admin/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)"><p class="wp-block-cover-text">some title</p></div>\n<!-- /wp:cover -->';

    const result = await parseMedia(saveMedia, input);

    expect(result).toEqual(expected);
    expect(saveMedia.mock.calls[0][0]).toBe(
      'http://localhost:8000/admin/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png',
    );
    expect(saveMedia.mock.calls[0][1]).toBe(
      '/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png',
    );
    expect(saveMedia.mock.calls.length).toBe(2);
  });

  it('should parse core gallery', async () => {
    const expected = '<!-- wp:gallery {"ids":[108,109,110,111]} -->\n<ul class="wp-block-gallery columns-3 is-cropped"><li class="blocks-gallery-item"><figure><img src="http://test.com/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png" alt="" data-id="108" data-link="http://localhost:8000/?attachment_id=108" class="wp-image-108"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://test.com/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png" alt="" data-id="109" data-link="http://localhost:8000/?attachment_id=109" class="wp-image-109"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://test.com/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png" alt="" data-id="110" data-link="http://localhost:8000/?attachment_id=110" class="wp-image-110"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://test.com/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png" alt="" data-id="111" data-link="http://localhost:8000/?attachment_id=111" class="wp-image-111"/></figure></li></ul>\n<!-- /wp:gallery -->';

    const input = '<!-- wp:gallery {"ids":[108,109,110,111]} -->\n<ul class="wp-block-gallery columns-3 is-cropped"><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/admin/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png" alt="" data-id="108" data-link="http://localhost:8000/?attachment_id=108" class="wp-image-108"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/admin/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png" alt="" data-id="109" data-link="http://localhost:8000/?attachment_id=109" class="wp-image-109"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/admin/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png" alt="" data-id="110" data-link="http://localhost:8000/?attachment_id=110" class="wp-image-110"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/admin/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png" alt="" data-id="111" data-link="http://localhost:8000/?attachment_id=111" class="wp-image-111"/></figure></li></ul>\n<!-- /wp:gallery -->';

    const result = await parseMedia(saveMedia, input);

    expect(result).toEqual(expected);
    expect(saveMedia.mock.calls[0][0]).toBe(
      'http://localhost:8000/admin/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png',
    );
    expect(saveMedia.mock.calls[0][1]).toBe(
      '/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png',
    );

    expect(saveMedia.mock.calls[1][0]).toBe(
      'http://localhost:8000/admin/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png',
    );
    expect(saveMedia.mock.calls[1][1]).toBe(
      '/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png',
    );

    expect(saveMedia.mock.calls[2][0]).toBe(
      'http://localhost:8000/admin/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png',
    );
    expect(saveMedia.mock.calls[2][1]).toBe(
      '/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png',
    );

    expect(saveMedia.mock.calls[3][0]).toBe(
      'http://localhost:8000/admin/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png',
    );
    expect(saveMedia.mock.calls[3][1]).toBe(
      '/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png',
    );

    expect(saveMedia.mock.calls.length).toBe(4);
  });

  it('should parse classic', async () => {
    const expected = '<p>Paragraph</p>\n<p><strong>Bold</strong></p>\n<p><em>Italics</em></p>\n<ul>\n<li>bullet 1</li>\n<li>bullet 2</li>\n</ul>\n<ol>\n<li>number 1</li>\n<li>number 2</li>\n</ol>\n<blockquote>\n<p>quote of a person</p>\n</blockquote>\n<p style="text-align: left;">align left</p>\n<p style="text-align: center;">align center</p>\n<p style="text-align: right;">alight right</p>\n<p><a href="http://localhost:8000/?p=69" data-wplink-url-error="true">Ocelot</a></p>\n<p><!--more--></p>\n<p><img class="alignnone size-full wp-image-113" src="http://test.com/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17-2.png" alt="" width="111" height="46"></p>\n<p><del>strikethrough</del></p>\n<hr>\n<p><span style="color: #ff0000;">red</span></p>\n<p><span style="color: #000000;">\u00a2\u00b6</span></p>\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n<pre>Preformatted</pre>\n\n<!-- wp:paragraph -->\n<p>gutenberg paragraph</p>\n<!-- /wp:paragraph -->';

    const input = '<p>Paragraph</p>\n<p><strong>Bold</strong></p>\n<p><em>Italics</em></p>\n<ul>\n<li>bullet 1</li>\n<li>bullet 2</li>\n</ul>\n<ol>\n<li>number 1</li>\n<li>number 2</li>\n</ol>\n<blockquote>\n<p>quote of a person</p>\n</blockquote>\n<p style="text-align: left;">align left</p>\n<p style="text-align: center;">align center</p>\n<p style="text-align: right;">alight right</p>\n<p><a href="http://localhost:8000/?p=69" data-wplink-url-error="true">Ocelot</a></p>\n<p><!--more--></p>\n<p><img class="alignnone size-full wp-image-113" src="http://localhost:8000/admin/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17-2.png" alt="" width="111" height="46"></p>\n<p><del>strikethrough</del></p>\n<hr>\n<p><span style="color: #ff0000;">red</span></p>\n<p><span style="color: #000000;">\u00a2\u00b6</span></p>\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n<pre>Preformatted</pre>\n\n<!-- wp:paragraph -->\n<p>gutenberg paragraph</p>\n<!-- /wp:paragraph -->';

    const result = await parseMedia(saveMedia, input);

    expect(result).toEqual(expected);
    expect(saveMedia.mock.calls[0][0]).toBe(
      'http://localhost:8000/admin/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17-2.png',
    );
    expect(saveMedia.mock.calls[0][1]).toBe(
      '/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17-2.png',
    );
    expect(saveMedia.mock.calls.length).toBe(1);
  });

  it('should parse classic list', async () => {
    const expected = '<ul>\n \t<li>a</li>\n \t<li>b</li>\n \t<li>c</li>\n \t<li>d</li>\n</ul>';

    const input = '<ul>\n \t<li>a</li>\n \t<li>b</li>\n \t<li>c</li>\n \t<li>d</li>\n</ul>';

    const result = await parseMedia(saveMedia, input);

    expect(result).toEqual(expected);
    expect(saveMedia.mock.calls.length).toBe(0);
  });


  it('should parse core audio', async () => {
    // from https://en.support.wordpress.com/audio/ & https://en.support.wordpress.com/accepted-filetypes/
    const supportedTypes = ['mp3', 'm4a', 'ogg', 'wav', 'zip', 'jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx', 'doc', 'pptx', 'pps', 'ppsx', 'odt', 'xls', 'xlsx', 'key', 'mp4', 'm4v', 'mov', 'wmv', 'avi', 'mpg', 'ogv', '3gp', '3g2'];

    const tasks = await supportedTypes.map(async (value) => {
      const expected = `<!-- wp:audio {"id":60} -->\n<figure class="wp-block-audio"><audio controls src="http://test.com/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.${value}"></audio><figcaption>audio caption</figcaption></figure>\n<!-- /wp:audio -->`;

      const input = `<!-- wp:audio {"id":60} -->\n<figure class="wp-block-audio"><audio controls src="http://localhost:8000/admin/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.${value}"></audio><figcaption>audio caption</figcaption></figure>\n<!-- /wp:audio -->`;

      const result = await parseMedia(saveMedia, input);

      return {
        result,
        expected,
        saveMediaOne: `http://localhost:8000/admin/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.${value}`,
        saveMediaTwo: `/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.${value}`,
      };
    });

    const results = await Promise.all(tasks);

    results.forEach((result, index) => {
      expect(result.result).toEqual(result.expected);
      expect(saveMedia.mock.calls[0 + index][0]).toBe(result.saveMediaOne);
      expect(saveMedia.mock.calls[0 + index][1]).toBe(result.saveMediaTwo);
    });

    expect(saveMedia.mock.calls.length).toBe(29);
  });
});
