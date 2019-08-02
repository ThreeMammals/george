const { blocksToReactTree } = require('../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core paragraph, columns & column', () => {
    const expected = [{
      type: 'core/columns',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        columns: 3,
        style: {
          display: 'block',
          margin: '20px',
        },
        className: 'wp-block-columns has-3-columns',
        children: [
          [{
            type: 'div',
            props: {
              style: {
                display: 'block',
                margin: '20px',
              },
              className: 'wp-block-columns has-3-columns',
              children: [
                [
                  [{
                    type: 'div',
                    props: {
                      style: {},
                      className: 'wp-block-column',
                      children: [
                        [{
                          type: 'core/paragraph',
                          $$typeof: Symbol.for('react.element'),
                          ref: null,
                          props: {
                            style: {},
                            className: null,
                            children: [
                              [{
                                type: 'p',
                                props: {
                                  style: {},
                                  className: null,
                                  children: ['Left'],
                                },
                                $$typeof: Symbol.for('react.element'),
                                ref: null,
                              }],
                            ],
                          },
                        }],
                      ],
                    },
                    $$typeof: Symbol.for('react.element'),
                    ref: null,
                  }],
                  [{
                    type: 'div',
                    props: {
                      style: {},
                      className: 'wp-block-column',
                      children: [
                        [{
                          type: 'core/paragraph',
                          $$typeof: Symbol.for('react.element'),
                          ref: null,
                          props: {
                            style: {},
                            className: null,
                            children: [
                              [{
                                type: 'p',
                                props: {
                                  style: {},
                                  className: null,
                                  children: ['Middle'],
                                },
                                $$typeof: Symbol.for('react.element'),
                                ref: null,
                              }],
                            ],
                          },
                        }],
                      ],
                    },
                    $$typeof: Symbol.for('react.element'),
                    ref: null,
                  }],
                  [{
                    type: 'div',
                    props: {
                      style: {},
                      className: 'wp-block-column',
                      children: [
                        [{
                          type: 'core/paragraph',
                          $$typeof: Symbol.for('react.element'),
                          ref: null,
                          props: {
                            style: {},
                            className: null,
                            children: [
                              [{
                                type: 'p',
                                props: {
                                  style: {},
                                  className: null,
                                  children: ['Right'],
                                },
                                $$typeof: Symbol.for('react.element'),
                                ref: null,
                              }],
                            ],
                          },
                        }],
                      ],
                    },
                    $$typeof: Symbol.for('react.element'),
                    ref: null,
                  }],
                ],
              ],
              columns: 3,
            },
            $$typeof: Symbol.for('react.element'),
            ref: null,
          }],
        ],
      },
    }];


    const input = [
      {
        blockName: 'core/columns',
        attrs: {
          columns: 3,
        },
        innerBlocks: [
          {
            blockName: 'core/column',
            attrs: {},
            innerBlocks: [
              {
                blockName: 'core/paragraph',
                attrs: {},
                innerBlocks: [],
                innerHTML: '<p>Left</p>\n',
                innerContent: ['\n<p>Left</p>\n'],
              },
            ],
            innerHTML: '\n<div class="wp-block-column"></div>\n',
            innerContent: ['\n<div class="wp-block-column">', null, '</div>\n'],
          },
          {
            blockName: 'core/column',
            attrs: {},
            innerBlocks: [
              {
                blockName: 'core/paragraph',
                attrs: {},
                innerBlocks: [],
                innerHTML: '\n<p>Middle</p>\n',
                innerContent: ['\n<p>Middle</p>\n'],
              },
            ],
            innerHTML: '\n<div class="wp-block-column"></div>\n',
            innerContent: ['\n<div class="wp-block-column">', null, '</div>\n'],
          },
          {
            blockName: 'core/column',
            attrs: {},
            innerBlocks: [
              {
                blockName: 'core/paragraph',
                attrs: {},
                innerBlocks: [],
                innerHTML: '\n<p>Right</p>\n',
                innerContent: ['\n<p>Right</p>\n'],
              },
            ],
            innerHTML: '\n<div class="wp-block-column"></div>\n',
            innerContent: ['\n<div class="wp-block-column">', null, '</div>\n'],
          },
        ],
        innerHTML:
          '\n<div class="wp-block-columns has-3-columns" style="display: block; margin: 20px;">\n\n\n\n</div>\n',
        innerContent: [
          '\n<div class="wp-block-columns has-3-columns" style="display: block; margin: 20px;">',
          null,
          '\n\n',
          null,
          '\n\n',
          null,
          '</div>\n',
        ],
      },
      {
        blockName: null,
        attrs: {},
        innerBlocks: [],
        innerHTML: '\n\n',
        innerContent: ['\n\n'],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core list', () => {
    const expected = [
      {
        type: 'core/list',
        props: {
          style: {},
          className: null,
          children: [
            [
              {
                type: 'ul',
                ref: null,
                $$typeof: Symbol.for('react.element'),
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'li',
                      ref: null,
                      $$typeof: Symbol.for('react.element'),
                      props: {
                        style: {},
                        className: null,
                        children: ['item 1'],
                      },
                    },
                    {
                      type: 'li',
                      ref: null,
                      $$typeof: Symbol.for('react.element'),
                      props: {
                        style: {},
                        className: null,
                        children: ['item 2'],
                      },
                    },
                    {
                      type: 'li',
                      ref: null,
                      $$typeof: Symbol.for('react.element'),
                      props: {
                        style: {},
                        className: null,
                        children: ['item 3'],
                      },
                    },
                    {
                      type: 'li',
                      ref: null,
                      $$typeof: Symbol.for('react.element'),
                      props: {
                        style: {},
                        className: null,
                        children: ['item 4'],
                      },
                    },
                  ],
                },
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/list',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li></ul>\n',
        innerContent: [
          '\n<ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li></ul>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core image', () => {
    const expected = [
      {
        type: 'core/image',
        props: {
          id: 90,
          style: {},
          className: 'wp-block-image',
          children: [
            [
              {
                type: 'figure',
                props: {
                  id: 90,
                  style: {},
                  className: 'wp-block-image',
                  children: [
                    {
                      type: 'img',
                      props: {
                        src:
                          'http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png',
                        alt: '',
                        style: {},
                        className: 'wp-image-90',
                        children: null,
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        attrs: { id: 90 },
        blockName: 'core/image',
        innerBlocks: [],
        innerContent: [
          '<figure class="wp-block-image"><img src="http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png" alt="" class="wp-image-90"/></figure>',
        ],
        innerHTML:
          '<figure class="wp-block-image"><img src="http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png" alt="" class="wp-image-90"/></figure>',
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core headings', () => {
    const expected = [
      {
        type: 'core/heading',
        props: {
          level: 1,
          style: {},
          className: null,
          children: [
            [
              {
                type: 'h1',
                props: {
                  level: 1,
                  style: {},
                  className: null,
                  children: ['H1'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
      {
        type: 'core/heading',
        props: {
          level: 2,
          style: {},
          className: null,
          children: [
            [
              {
                type: 'h2',
                props: {
                  level: 2,
                  style: {},
                  className: null,
                  children: ['H2'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
      {
        type: 'core/heading',
        props: {
          level: 3,
          style: {},
          className: null,
          children: [
            [
              {
                type: 'h3',
                props: {
                  level: 3,
                  style: {},
                  className: null,
                  children: ['H3'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
      {
        type: 'core/heading',
        props: {
          level: 4,
          style: {},
          className: null,
          children: [
            [
              {
                type: 'h4',
                props: {
                  level: 4,
                  style: {},
                  className: null,
                  children: ['H4'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
      {
        type: 'core/heading',
        props: {
          level: 5,
          style: {},
          className: null,
          children: [
            [
              {
                type: 'h5',
                props: {
                  level: 5,
                  style: {},
                  className: null,
                  children: ['H5'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
      {
        type: 'core/heading',
        props: {
          level: 6,
          style: {},
          className: null,
          children: [
            [
              {
                type: 'h6',
                props: {
                  level: 6,
                  style: {},
                  className: null,
                  children: ['H6'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/heading',
        attrs: { level: 1 },
        innerBlocks: [],
        innerHTML: '\n<h1>H1</h1>\n',
        innerContent: ['\n<h1>H1</h1>\n'],
      },
      {
        blockName: 'core/heading',
        attrs: {},
        innerBlocks: [],
        innerHTML: '\n<h2>H2</h2>\n',
        innerContent: ['\n<h2>H2</h2>\n'],
      },
      {
        blockName: 'core/heading',
        attrs: { level: 3 },
        innerBlocks: [],
        innerHTML: '\n<h3>H3</h3>\n',
        innerContent: ['\n<h3>H3</h3>\n'],
      },
      {
        blockName: 'core/heading',
        attrs: { level: 4 },
        innerBlocks: [],
        innerHTML: '\n<h4>H4</h4>\n',
        innerContent: ['\n<h4>H4</h4>\n'],
      },
      {
        blockName: 'core/heading',
        attrs: { level: 5 },
        innerBlocks: [],
        innerHTML: '\n<h5>H5</h5>\n',
        innerContent: ['\n<h5>H5</h5>\n'],
      },
      {
        blockName: 'core/heading',
        attrs: { level: 6 },
        innerBlocks: [],
        innerHTML: '\n<h6>H6</h6>\n',
        innerContent: ['\n<h6>H6</h6>\n'],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core quote', () => {
    const expected = [
      {
        type: 'core/quote',
        props: {
          style: {},
          className: 'wp-block-quote',
          children: [
            [
              {
                type: 'blockquote',
                props: {
                  style: {},
                  className: 'wp-block-quote',
                  children: [
                    {
                      type: 'p',
                      props: {
                        style: {},
                        className: null,
                        children: ['This is a quote'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'cite',
                      props: {
                        style: {},
                        className: null,
                        children: ['and here is the citation'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/quote',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<blockquote class="wp-block-quote"><p>This is a quote</p><cite>and here is the citation</cite></blockquote>\n',
        innerContent: [
          '\n<blockquote class="wp-block-quote"><p>This is a quote</p><cite>and here is the citation</cite></blockquote>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core cover', () => {
    const expected = [
      {
        type: 'core/cover',
        props: {
          url:
            'http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png',
          id: 105,
          overlayColor: 'dark-gray',
          style: {
            'background-image':
              'url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)',
          },
          className:
            'wp-block-cover has-dark-gray-background-color has-background-dim',
          children: [
            [
              {
                type: 'div',
                props: {
                  url:
                    'http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png',
                  id: 105,
                  overlayColor: 'dark-gray',
                  style: {
                    'background-image':
                      'url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)',
                  },
                  className:
                    'wp-block-cover has-dark-gray-background-color has-background-dim',
                  children: [
                    {
                      type: 'p',
                      props: {
                        style: {},
                        className: 'wp-block-cover-text',
                        children: ['some title'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/cover',
        attrs: {
          url:
            'http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png',
          id: 105,
          overlayColor: 'dark-gray',
        },
        innerBlocks: [],
        innerHTML:
          '\n<div class="wp-block-cover has-dark-gray-background-color has-background-dim" style="background-image:url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)"><p class="wp-block-cover-text">some title</p></div>\n',
        innerContent: [
          '\n<div class="wp-block-cover has-dark-gray-background-color has-background-dim" style="background-image:url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)"><p class="wp-block-cover-text">some title</p></div>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core gallery', () => {
    const expected = [
      {
        type: 'core/gallery',
        props: {
          ids: [108, 109, 110, 111],
          style: {},
          className: 'wp-block-gallery columns-3 is-cropped',
          children: [
            [
              {
                type: 'ul',
                props: {
                  ids: [108, 109, 110, 111],
                  style: {},
                  className: 'wp-block-gallery columns-3 is-cropped',
                  children: [
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: 'blocks-gallery-item',
                        children: [
                          {
                            type: 'figure',
                            props: {
                              style: {},
                              className: null,
                              children: [
                                {
                                  type: 'img',
                                  props: {
                                    src:
                                      'http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png',
                                    alt: '',
                                    'data-id': '108',
                                    'data-link':
                                      'http://localhost:8000/?attachment_id=108',
                                    style: {},
                                    className: 'wp-image-108',
                                    children: null,
                                  },
                                  $$typeof: Symbol.for('react.element'),
                                  ref: null,
                                },
                              ],
                            },
                            $$typeof: Symbol.for('react.element'),
                            ref: null,
                          },
                        ],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: 'blocks-gallery-item',
                        children: [
                          {
                            type: 'figure',
                            props: {
                              style: {},
                              className: null,
                              children: [
                                {
                                  type: 'img',
                                  props: {
                                    src:
                                      'http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png',
                                    alt: '',
                                    'data-id': '109',
                                    'data-link':
                                      'http://localhost:8000/?attachment_id=109',
                                    style: {},
                                    className: 'wp-image-109',
                                    children: null,
                                  },
                                  $$typeof: Symbol.for('react.element'),
                                  ref: null,
                                },
                              ],
                            },
                            $$typeof: Symbol.for('react.element'),
                            ref: null,
                          },
                        ],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: 'blocks-gallery-item',
                        children: [
                          {
                            type: 'figure',
                            props: {
                              style: {},
                              className: null,
                              children: [
                                {
                                  type: 'img',
                                  props: {
                                    src:
                                      'http://localhost:8000/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png',
                                    alt: '',
                                    'data-id': '110',
                                    'data-link':
                                      'http://localhost:8000/?attachment_id=110',
                                    style: {},
                                    className: 'wp-image-110',
                                    children: null,
                                  },
                                  $$typeof: Symbol.for('react.element'),
                                  ref: null,
                                },
                              ],
                            },
                            $$typeof: Symbol.for('react.element'),
                            ref: null,
                          },
                        ],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: 'blocks-gallery-item',
                        children: [
                          {
                            type: 'figure',
                            props: {
                              style: {},
                              className: null,
                              children: [
                                {
                                  type: 'img',
                                  props: {
                                    src:
                                      'http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png',
                                    alt: '',
                                    'data-id': '111',
                                    'data-link':
                                      'http://localhost:8000/?attachment_id=111',
                                    style: {},
                                    className: 'wp-image-111',
                                    children: null,
                                  },
                                  $$typeof: Symbol.for('react.element'),
                                  ref: null,
                                },
                              ],
                            },
                            $$typeof: Symbol.for('react.element'),
                            ref: null,
                          },
                        ],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/gallery',
        attrs: { ids: [108, 109, 110, 111] },
        innerBlocks: [],
        innerHTML:
          '\n<ul class="wp-block-gallery columns-3 is-cropped"><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png" alt="" data-id="108" data-link="http://localhost:8000/?attachment_id=108" class="wp-image-108"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png" alt="" data-id="109" data-link="http://localhost:8000/?attachment_id=109" class="wp-image-109"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png" alt="" data-id="110" data-link="http://localhost:8000/?attachment_id=110" class="wp-image-110"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png" alt="" data-id="111" data-link="http://localhost:8000/?attachment_id=111" class="wp-image-111"/></figure></li></ul>\n',
        innerContent: [
          '\n<ul class="wp-block-gallery columns-3 is-cropped"><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png" alt="" data-id="108" data-link="http://localhost:8000/?attachment_id=108" class="wp-image-108"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png" alt="" data-id="109" data-link="http://localhost:8000/?attachment_id=109" class="wp-image-109"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png" alt="" data-id="110" data-link="http://localhost:8000/?attachment_id=110" class="wp-image-110"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png" alt="" data-id="111" data-link="http://localhost:8000/?attachment_id=111" class="wp-image-111"/></figure></li></ul>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core classic', () => {
    const expected = [
      {
        type: 'core/classic',
        props: {
          className: 'alignnone size-full wp-image-113',
          style: {
            'text-align': 'left',
          },
          children: [
            [
              {
                type: 'p',
                props: { style: {}, className: null, children: ['Paragraph'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'strong',
                      props: { style: {}, className: null, children: ['Bold'] },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'em',
                      props: {
                        style: {},
                        className: null,
                        children: ['Italics'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'ul',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: null,
                        children: ['bullet 1'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: null,
                        children: ['bullet 2'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'ol',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: null,
                        children: ['number 1'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: null,
                        children: ['number 2'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'blockquote',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'p',
                      props: {
                        style: {},
                        className: null,
                        children: ['quote of a person'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: { 'text-align': 'left' },
                  className: null,
                  children: ['align left'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: { 'text-align': 'center' },
                  className: null,
                  children: ['align center'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: { 'text-align': 'right' },
                  className: null,
                  children: ['alight right'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'a',
                      props: {
                        href: 'http://localhost:8000/?p=69',
                        'data-wplink-url-error': 'true',
                        style: {},
                        className: null,
                        children: ['Ocelot'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'hr',
                      props: { style: {}, className: null, children: null },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'img',
                      props: {
                        src:
                          'http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17-2.png',
                        alt: '',
                        width: '111',
                        height: '46',
                        style: {},
                        className: 'alignnone size-full wp-image-113',
                        children: null,
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'del',
                      props: {
                        style: {},
                        className: null,
                        children: ['strikethrough'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'hr',
                props: { style: {}, className: null, children: null },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'span',
                      props: {
                        style: { color: '#ff0000' },
                        className: null,
                        children: ['red'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'span',
                      props: {
                        style: { color: '#000000' },
                        className: null,
                        children: ['¢¶'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'h1',
                props: { style: {}, className: null, children: ['Heading 1'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'h2',
                props: { style: {}, className: null, children: ['Heading 2'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'h3',
                props: { style: {}, className: null, children: ['Heading 3'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'h4',
                props: { style: {}, className: null, children: ['Heading 4'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'h5',
                props: { style: {}, className: null, children: ['Heading 5'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'h6',
                props: { style: {}, className: null, children: ['Heading 6'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'pre',
                props: {
                  style: {},
                  className: null,
                  children: ['Preformatted'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: null,
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '<p>Paragraph</p>\n<p><strong>Bold</strong></p>\n<p><em>Italics</em></p>\n<ul>\n<li>bullet 1</li>\n<li>bullet 2</li>\n</ul>\n<ol>\n<li>number 1</li>\n<li>number 2</li>\n</ol>\n<blockquote>\n<p>quote of a person</p>\n</blockquote>\n<p style="text-align: left;">align left</p>\n<p style="text-align: center;">align center</p>\n<p style="text-align: right;">alight right</p>\n<p><a href="http://localhost:8000/?p=69" data-wplink-url-error="true">Ocelot</a></p>\n<p><!--more--></p>\n<p><img class="alignnone size-full wp-image-113" src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17-2.png" alt="" width="111" height="46"></p>\n<p><del>strikethrough</del></p>\n<hr>\n<p><span style="color: #ff0000;">red</span></p>\n<p><span style="color: #000000;">¢¶</span></p>\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n<pre>Preformatted</pre>\n\n',
        innerContent: [
          '<p>Paragraph</p>\n<p><strong>Bold</strong></p>\n<p><em>Italics</em></p>\n<ul>\n<li>bullet 1</li>\n<li>bullet 2</li>\n</ul>\n<ol>\n<li>number 1</li>\n<li>number 2</li>\n</ol>\n<blockquote>\n<p>quote of a person</p>\n</blockquote>\n<p style="text-align: left;">align left</p>\n<p style="text-align: center;">align center</p>\n<p style="text-align: right;">alight right</p>\n<p><a href="http://localhost:8000/?p=69" data-wplink-url-error="true">Ocelot</a></p>\n<p><!--more--></p>\n<p><img class="alignnone size-full wp-image-113" src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17-2.png" alt="" width="111" height="46"></p>\n<p><del>strikethrough</del></p>\n<hr>\n<p><span style="color: #ff0000;">red</span></p>\n<p><span style="color: #000000;">¢¶</span></p>\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n<pre>Preformatted</pre>\n\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core audio', () => {
    const expected = [
      {
        type: 'core/audio',
        props: {
          id: 60,
          style: {},
          className: 'wp-block-audio',
          children: [
            [
              {
                type: 'figure',
                props: {
                  id: 60,
                  style: {},
                  className: 'wp-block-audio',
                  children: [
                    {
                      type: 'audio',
                      props: {
                        src:
                          'https://localhost/admin/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.mp3',
                        style: {},
                        controls: '',
                        className: null,
                        children: [],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'figcaption',
                      props: {
                        style: {},
                        className: null,
                        children: ['audio caption'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/audio',
        attrs: { id: 60 },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-audio"><audio controls src="https://localhost/admin/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.mp3"></audio><figcaption>audio caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-audio"><audio controls src="https://localhost/admin/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.mp3"></audio><figcaption>audio caption</figcaption></figure>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core file', () => {
    const expected = [
      {
        type: 'core/file',
        props: {
          id: 63,
          style: {},
          href:
            'https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip',
          className: 'wp-block-file',
          children: [
            [
              {
                type: 'div',
                props: {
                  id: 63,
                  style: {},
                  href:
                    'https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip',
                  className: 'wp-block-file',
                  children: [
                    {
                      type: 'a',
                      props: {
                        className: null,
                        style: {},
                        href:
                          'https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip',
                        children: ['pushy-0.0.12'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'a',
                      props: {
                        className: 'wp-block-file__button',
                        style: {},
                        download: '',
                        href:
                          'https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip',
                        children: ['Download'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/file',
        attrs: {
          id: 63,
          href:
            'https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip',
        },
        innerBlocks: [],
        innerHTML:
          '\n<div class="wp-block-file"><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip">pushy-0.0.12</a><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip" class="wp-block-file__button" download>Download</a></div>\n',
        innerContent: [
          '\n<div class="wp-block-file"><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip">pushy-0.0.12</a><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip" class="wp-block-file__button" download>Download</a></div>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core video', () => {
    const expected = [
      {
        type: 'core/video',
        props: {
          id: 67,
          style: {},
          className: 'wp-block-video',
          children: [
            [
              {
                type: 'figure',
                props: {
                  id: 67,
                  style: {},
                  className: 'wp-block-video',
                  children: [
                    {
                      type: 'video',
                      props: {
                        controls: '',
                        className: null,
                        style: {},
                        src:
                          'https://localhost/admin/wp-content/uploads/2019/07/test_for_pushy_2.mov',
                        children: [],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'figcaption',
                      props: {
                        className: null,
                        style: {},
                        children: ['caption'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/video',
        attrs: { id: 67 },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-video"><video controls src="https://localhost/admin/wp-content/uploads/2019/07/test_for_pushy_2.mov"></video><figcaption>caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-video"><video controls src="https://localhost/admin/wp-content/uploads/2019/07/test_for_pushy_2.mov"></video><figcaption>caption</figcaption></figure>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core code', () => {
    const expected = [
      {
        type: 'core/code',
        props: {
          style: {},
          className: 'wp-block-code',
          children: [
            [
              {
                type: 'pre',
                props: {
                  style: {},
                  className: 'wp-block-code',
                  children: [
                    {
                      type: 'code',
                      props: {
                        className: null,
                        style: {},
                        children: [
                          '[php]\n<?php\necho "Hello World";\n?>\n[/php]',
                        ],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/code',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<pre class="wp-block-code"><code>[php]\n&lt;?php\necho "Hello World";\n?>\n[/php]</code></pre>\n',
        innerContent: [
          '\n<pre class="wp-block-code"><code>[php]\n&lt;?php\necho "Hello World";\n?>\n[/php]</code></pre>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core html', () => {
    const expected = [
      {
        type: 'core/html',
        props: {
          style: {},
          className: null,
          children: [
            [
              {
                type: 'div',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'p',
                      props: {
                        className: null,
                        style: {},
                        children: ['Hi Tom'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/html',
        attrs: {},
        innerBlocks: [],
        innerHTML: '\n<div><p>Hi Tom</p></div>\n',
        innerContent: ['\n<div><p>Hi Tom</p></div>\n'],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core preformatted', () => {
    const expected = [
      {
        type: 'core/preformatted',
        props: {
          style: {},
          className: 'wp-block-preformatted',
          children: [
            [
              {
                type: 'pre',
                props: {
                  style: {},
                  className: 'wp-block-preformatted',
                  children: ['I have no idea what this is'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/preformatted',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<pre class="wp-block-preformatted">I have no idea what this is</pre>\n',
        innerContent: [
          '\n<pre class="wp-block-preformatted">I have no idea what this is</pre>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core pullquote', () => {
    const expected = [
      {
        type: 'core/pullquote',
        props: {
          style: {
            'border-color': '#0073a8',
          },
          mainColor: 'primary',
          textColor: 'secondary',
          className: 'is-style-default',
          children: [
            [
              {
                type: 'figure',
                props: {
                  style: {
                    'border-color': '#0073a8',
                  },
                  mainColor: 'primary',
                  textColor: 'secondary',
                  className: 'wp-block-pullquote is-style-default',
                  children: [
                    {
                      type: 'blockquote',
                      props: {
                        className: 'has-text-color has-secondary-color',
                        style: {},
                        children: [
                          {
                            type: 'p',
                            props: {
                              className: null,
                              style: {},
                              children: ['what is a pull quote?'],
                            },
                            $$typeof: Symbol.for('react.element'),
                            ref: null,
                          },
                          {
                            type: 'cite',
                            props: {
                              className: null,
                              style: {},
                              children: ['This is a citation'],
                            },
                            $$typeof: Symbol.for('react.element'),
                            ref: null,
                          },
                        ],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/pullquote',
        attrs: {
          mainColor: 'primary',
          textColor: 'secondary',
          className: 'is-style-default',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-pullquote is-style-default" style="border-color:#0073a8"><blockquote class="has-text-color has-secondary-color"><p>what is a pull quote?</p><cite>This is a citation</cite></blockquote></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-pullquote is-style-default" style="border-color:#0073a8"><blockquote class="has-text-color has-secondary-color"><p>what is a pull quote?</p><cite>This is a citation</cite></blockquote></figure>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core table', () => {
    const expected = [
      {
        type: 'core/table',
        props: {
          style: {},
          className: 'wp-block-table',
          children: [
            [
              {
                type: 'table',
                props: {
                  style: {},
                  className: 'wp-block-table',
                  children: [
                    {
                      type: 'tbody',
                      props: {
                        className: null,
                        style: {},
                        children: [
                          {
                            type: 'tr',
                            props: {
                              className: null,
                              style: {},
                              children: [
                                {
                                  type: 'td',
                                  props: {
                                    className: null,
                                    style: {},
                                    children: ['header1'],
                                  },
                                  $$typeof: Symbol.for('react.element'),
                                  ref: null,
                                },
                                {
                                  type: 'td',
                                  props: {
                                    className: null,
                                    style: {},
                                    children: ['header2'],
                                  },
                                  $$typeof: Symbol.for('react.element'),
                                  ref: null,
                                },
                              ],
                            },
                            $$typeof: Symbol.for('react.element'),
                            ref: null,
                          },
                          {
                            type: 'tr',
                            props: {
                              className: null,
                              style: {},
                              children: [
                                {
                                  type: 'td',
                                  props: {
                                    className: null,
                                    style: {},
                                    children: ['value1'],
                                  },
                                  $$typeof: Symbol.for('react.element'),
                                  ref: null,
                                },
                                {
                                  type: 'td',
                                  props: {
                                    className: null,
                                    style: {},
                                    children: ['value2'],
                                  },
                                  $$typeof: Symbol.for('react.element'),
                                  ref: null,
                                },
                              ],
                            },
                            $$typeof: Symbol.for('react.element'),
                            ref: null,
                          },
                        ],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/table',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<table class="wp-block-table"><tbody><tr><td>header1</td><td>header2</td></tr><tr><td>value1</td><td>value2</td></tr></tbody></table>\n',
        innerContent: [
          '\n<table class="wp-block-table"><tbody><tr><td>header1</td><td>header2</td></tr><tr><td>value1</td><td>value2</td></tr></tbody></table>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core verse', () => {
    const expected = [
      {
        type: 'core/verse',
        props: {
          style: {},
          className: 'wp-block-verse',
          children: [
            [
              {
                type: 'pre',
                props: {
                  style: {},
                  className: 'wp-block-verse',
                  children: [
                    'I have no idea what a verse is apparently its poetry',
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/verse',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<pre class="wp-block-verse">I have no idea what a verse is apparently its poetry</pre>\n',
        innerContent: [
          '\n<pre class="wp-block-verse">I have no idea what a verse is apparently its poetry</pre>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core button', () => {
    const expected = [
      {
        type: 'core/button',
        props: {
          style: {},
          backgroundColor: 'primary',
          textColor: 'white',
          className: 'wp-block-button',
          children: [
            [
              {
                type: 'div',
                props: {
                  style: {},
                  backgroundColor: 'primary',
                  textColor: 'white',
                  className: 'wp-block-button',
                  children: [
                    {
                      type: 'a',
                      props: {
                        className:
                          'wp-block-button__link has-text-color has-white-color has-background has-primary-background-color',
                        style: {},
                        href: 'http://www.bbc.co.uk',
                        children: ['button text'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/button',
        attrs: { backgroundColor: 'primary', textColor: 'white' },
        innerBlocks: [],
        innerHTML:
          '\n<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-white-color has-background has-primary-background-color" href="http://www.bbc.co.uk">button text</a></div>\n',
        innerContent: [
          '\n<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-white-color has-background has-primary-background-color" href="http://www.bbc.co.uk">button text</a></div>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core media & text', () => {
    const expected = [
      {
        type: 'core/media-text',
        props: {
          style: {},
          className:
            'wp-block-media-text alignwide has-light-gray-background-color is-stacked-on-mobile',
          backgroundColor: 'light-gray',
          mediaId: 48,
          mediaType: 'image',
          isStackedOnMobile: true,
          children: [[
            {
              type: 'div',
              props: {
                style: {},
                backgroundColor: 'light-gray',
                className: 'wp-block-media-text alignwide has-light-gray-background-color is-stacked-on-mobile',
                isStackedOnMobile: true,
                mediaId: 48,
                mediaType: 'image',
                children: [
                  {
                    type: 'figure',
                    props: {
                      style: {},
                      className: 'wp-block-media-text__media',
                      children: [{
                        type: 'img',
                        props: {
                          alt: 'alt text here',
                          className: 'wp-image-48',
                          src: 'https://localhost/admin/wp-content/uploads/2019/06/ocelot_logo.png',
                          style: {},
                          // todo should be empty array?
                          children: null,
                        },
                        $$typeof: Symbol.for('react.element'),
                        ref: null,
                      }],
                    },
                    $$typeof: Symbol.for('react.element'),
                    ref: null,
                  },
                  {
                    type: 'div',
                    props: {
                      className: 'wp-block-media-text__content',
                      style: {},
                      children: [[{
                        type: 'core/paragraph',
                        props: {
                          className: 'has-large-font-size',
                          fontSize: 'large',
                          placeholder: 'Content…',
                          style: {},
                          children: [[{
                            type: 'p',
                            props: {
                              className: 'has-large-font-size',
                              fontSize: 'large',
                              placeholder: 'Content…',
                              style: {},
                              children: ['some content'],
                            },
                            $$typeof: Symbol.for('react.element'),
                            ref: null,
                          }]],
                        },
                        $$typeof: Symbol.for('react.element'),
                        ref: null,
                      }]],
                    },
                    $$typeof: Symbol.for('react.element'),
                    ref: null,
                  },
                ],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            },
          ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/media-text',
      attrs:
     {
       backgroundColor: 'light-gray',
       mediaId: 48,
       mediaType: 'image',
       isStackedOnMobile: true,
     },
      innerBlocks: [{
        blockName: 'core/paragraph',
        attrs: { placeholder: 'Content…', fontSize: 'large' },
        innerBlocks: [],
        innerHTML: '\n<p class="has-large-font-size">some content</p>\n',
        innerContent: ['\n<p class="has-large-font-size">some content</p>\n'],
      }],
      innerHTML:
     '\n<div class="wp-block-media-text alignwide has-light-gray-background-color is-stacked-on-mobile"><figure class="wp-block-media-text__media"><img src="https://localhost/admin/wp-content/uploads/2019/06/ocelot_logo.png" alt="alt text here" class="wp-image-48"/></figure><div class="wp-block-media-text__content"></div></div>\n',
      innerContent:
     ['\n<div class="wp-block-media-text alignwide has-light-gray-background-color is-stacked-on-mobile"><figure class="wp-block-media-text__media"><img src="https://localhost/admin/wp-content/uploads/2019/06/ocelot_logo.png" alt="alt text here" class="wp-image-48"/></figure><div class="wp-block-media-text__content">',
       null,
       '</div></div>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core more', () => {
    const expected = [
      {
        type: 'core/more',
        props: {
          style: {},
          className: null,
          customText: 'READ SOME MORE',
          children: ['READ SOME MORE'],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/more',
      attrs: { customText: 'READ SOME MORE' },
      innerBlocks: [],
      innerHTML: '\n<!--more READ SOME MORE-->\n',
      innerContent: ['\n<!--more READ SOME MORE-->\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core page break', () => {
    const expected = [
      {
        type: 'core/nextpage',
        props: {
          style: {},
          className: null,
          children: [],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/nextpage',
      attrs: {},
      innerBlocks: [],
      innerHTML: '\n<!--nextpage-->\n',
      innerContent: ['\n<!--nextpage-->\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core seperate', () => {
    const expected = [
      {
        type: 'core/separator',
        props: {
          style: {},
          className: 'is-style-dots',
          children: [[{
            type: 'hr',
            props: {
              style: {},
              className: 'wp-block-separator is-style-dots',
              // todo should not be null
              children: null,
            },
            $$typeof: Symbol.for('react.element'),
            ref: null,
          }]],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/separator',
      attrs: { className: 'is-style-dots' },
      innerBlocks: [],
      innerHTML: '\n<hr class="wp-block-separator is-style-dots"/>\n',
      innerContent: ['\n<hr class="wp-block-separator is-style-dots"/>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core spacer', () => {
    const expected = [
      {
        type: 'core/spacer',
        props: {
          style: {
            height: '1000px',
          },
          height: 1000,
          className: 'wp-block-spacer',
          children: [[{
            type: 'div',
            props: {
              height: 1000,
              'aria-hidden': 'true',
              style: {
                height: '1000px',
              },
              className: 'wp-block-spacer',
              children: [],
            },
            $$typeof: Symbol.for('react.element'),
            ref: null,
          }]],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/spacer',
      attrs: { height: 1000 },
      innerBlocks: [],
      innerHTML:
     '\n<div style="height:1000px" aria-hidden="true" class="wp-block-spacer"></div>\n',
      innerContent:
     ['\n<div style="height:1000px" aria-hidden="true" class="wp-block-spacer"></div>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core shortcode', () => {
    const expected = [
      {
        type: 'core/shortcode',
        props: {
          style: {
          },
          className: null,
          children: [{
            type: 'su_box',
            props: {
              style: {
              },
              box_color: '#333333',
              class: '',
              radius: '3',
              className: null,
              title: 'Box title',
              title_color: '#FFFFFF',
              // todo should not be null
              children: ['Box content'],
            },
            $$typeof: Symbol.for('react.element'),
            ref: null,
          }],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/shortcode',
      attrs: {},
      innerBlocks: [],
      innerHTML:
     '\n[su_box title="Box title" style="default" box_color="#333333" title_color="#FFFFFF" radius="3" class=""]Box content[/su_box]\n',
      innerContent:
     ['\n[su_box title="Box title" style="default" box_color="#333333" title_color="#FFFFFF" radius="3" class=""]Box content[/su_box]\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core archives', () => {
    const expected = [
      {
        type: 'core/archives',
        props: {
          showPostCounts: true,
          style: {
          },
          className: null,
          children: [],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/archives',
      attrs: { showPostCounts: true },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core calendar', () => {
    const expected = [
      {
        type: 'core/calendar',
        props: {
          style: {
          },
          className: null,
          children: [],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/calendar',
      attrs: { },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core categories', () => {
    const expected = [
      {
        type: 'core/categories',
        props: {
          showPostCounts: true,
          displayAsDropdown: true,
          showHierarchy: true,
          style: {
          },
          className: null,
          children: [],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/categories',
      attrs: { showPostCounts: true, displayAsDropdown: true, showHierarchy: true },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core latest comments', () => {
    const expected = [
      {
        type: 'core/latest-comments',
        props: {
          style: {
          },
          className: null,
          children: [],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/latest-comments',
      attrs: { },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core latest posts', () => {
    const expected = [
      {
        type: 'core/latest-posts',
        props: {
          postsToShow: 6,
          displayPostDate: true,
          order: 'asc',
          style: {
          },
          className: null,
          children: [],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/latest-posts',
      attrs: { postsToShow: 6, displayPostDate: true, order: 'asc' },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core rss', () => {
    const expected = [
      {
        type: 'core/rss',
        props: {
          feedURL: 'https://lorem-rss.herokuapp.com/feed',
          displayExcerpt: true,
          displayAuthor: true,
          displayDate: true,
          excerptLength: 20,
          style: {
          },
          className: null,
          children: [],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/rss',
      attrs:
     {
       feedURL: 'https://lorem-rss.herokuapp.com/feed',
       displayExcerpt: true,
       displayAuthor: true,
       displayDate: true,
       excerptLength: 20,
     },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core rss', () => {
    const expected = [
      {
        type: 'core/search',
        props: {
          placeholder: 'placeholder text',
          style: {
          },
          className: null,
          children: [],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/search',
      attrs:
     {
       placeholder: 'placeholder text',
     },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core tag cloud', () => {
    const expected = [
      {
        type: 'core/tag-cloud',
        props: {
          taxonomy: 'category',
          showTagCounts: true,
          style: {
          },
          className: null,
          children: [],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/tag-cloud',
      attrs:
     {
       taxonomy: 'category', showTagCounts: true,
     },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded twitter', () => {
    const expected = [{
      type: 'core-embed/twitter',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url:
        'https://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw',
        type: 'rich',
        providerNameSlug: 'twitter',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            style: {},
            className: 'wp-block-embed-twitter wp-block-embed is-type-rich is-provider-twitter',
            providerNameSlug: 'twitter',
            url: 'https://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw',
            type: 'rich',
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/twitter',
      attrs:
     {
       url:
        'https://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw',
       type: 'rich',
       providerNameSlug: 'twitter',
       className: '',
     },
      innerBlocks: [],
      innerHTML:
     '\n<figure class="wp-block-embed-twitter wp-block-embed is-type-rich is-provider-twitter"><div class="wp-block-embed__wrapper">\nhttps://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw\n</div></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-twitter wp-block-embed is-type-rich is-provider-twitter"><div class="wp-block-embed__wrapper">\nhttps://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw\n</div></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded youtube', () => {
    const expected = [{
      type: 'core-embed/youtube',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.youtube.com/watch?v=pNfTK39k55U',
        type: 'video',
        providerNameSlug: 'youtube',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            style: {},
            className: 'wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio',
            providerNameSlug: 'youtube',
            url: 'https://www.youtube.com/watch?v=pNfTK39k55U',
            type: 'video',
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.youtube.com/watch?v=pNfTK39k55U\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/youtube',
      attrs:
     {
       url: 'https://www.youtube.com/watch?v=pNfTK39k55U',
       type: 'video',
       providerNameSlug: 'youtube',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.youtube.com/watch?v=pNfTK39k55U\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.youtube.com/watch?v=pNfTK39k55U\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded facebook', () => {
    const expected = [{
      type: 'core-embed/facebook',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.facebook.com/20531316728/posts/10154009990506729/',
        type: 'rich',
        providerNameSlug: 'facebook',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            style: {},
            url: 'https://www.facebook.com/20531316728/posts/10154009990506729/',
            type: 'rich',
            providerNameSlug: 'facebook',
            className: 'wp-block-embed-facebook wp-block-embed is-type-rich is-provider-facebook',
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.facebook.com/20531316728/posts/10154009990506729/\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/facebook',
      attrs:
     {
       url: 'https://www.facebook.com/20531316728/posts/10154009990506729/',
       type: 'rich',
       providerNameSlug: 'facebook',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-facebook wp-block-embed is-type-rich is-provider-facebook"><div class="wp-block-embed__wrapper">\nhttps://www.facebook.com/20531316728/posts/10154009990506729/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-facebook wp-block-embed is-type-rich is-provider-facebook"><div class="wp-block-embed__wrapper">\nhttps://www.facebook.com/20531316728/posts/10154009990506729/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded instagram', () => {
    const expected = [{
      type: 'core-embed/instagram',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'http://instagr.am/p/fA9uwTtkSN/',
        type: 'rich',
        providerNameSlug: 'instagram',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'http://instagr.am/p/fA9uwTtkSN/',
            type: 'rich',
            providerNameSlug: 'instagram',
            className: 'wp-block-embed-instagram wp-block-embed is-type-rich is-provider-instagram',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttp://instagr.am/p/fA9uwTtkSN/\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/instagram',
      attrs:
     {
       url: 'http://instagr.am/p/fA9uwTtkSN/',
       type: 'rich',
       providerNameSlug: 'instagram',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-instagram wp-block-embed is-type-rich is-provider-instagram"><div class="wp-block-embed__wrapper">\nhttp://instagr.am/p/fA9uwTtkSN/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-instagram wp-block-embed is-type-rich is-provider-instagram"><div class="wp-block-embed__wrapper">\nhttp://instagr.am/p/fA9uwTtkSN/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded wordpress', () => {
    const expected = [{
      type: 'core-embed/wordpress',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/',
        type: 'wp-embed',
        providerNameSlug: 'wordpress-news',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/',
            type: 'wp-embed',
            providerNameSlug: 'wordpress-news',
            className: 'wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-wordpress-news',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/wordpress',
      attrs:
     {
       url: 'https://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/',
       type: 'wp-embed',
       providerNameSlug: 'wordpress-news',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-wordpress-news"><div class="wp-block-embed__wrapper">\nhttps://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-wordpress-news"><div class="wp-block-embed__wrapper">\nhttps://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded soundcloud', () => {
    const expected = [{
      type: 'core-embed/soundcloud',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://soundcloud.com/olly-hodding/lotn',
        type: 'rich',
        providerNameSlug: 'soundcloud',
        className: 'wp-embed-aspect-4-3 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://soundcloud.com/olly-hodding/lotn',
            type: 'rich',
            providerNameSlug: 'soundcloud',
            className: 'wp-block-embed-soundcloud wp-block-embed is-type-rich is-provider-soundcloud wp-embed-aspect-4-3 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://soundcloud.com/olly-hodding/lotn\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/soundcloud',
      attrs:
     {
       url: 'https://soundcloud.com/olly-hodding/lotn',
       type: 'rich',
       providerNameSlug: 'soundcloud',
       className: 'wp-embed-aspect-4-3 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-soundcloud wp-block-embed is-type-rich is-provider-soundcloud wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://soundcloud.com/olly-hodding/lotn\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-soundcloud wp-block-embed is-type-rich is-provider-soundcloud wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://soundcloud.com/olly-hodding/lotn\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded spotify', () => {
    const expected = [{
      type: 'core-embed/hulu',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z',
        type: 'rich',
        providerNameSlug: 'spotify',
        className: 'wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z',
            type: 'rich',
            providerNameSlug: 'spotify',
            className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [
      {
        blockName: 'core-embed/spotify',
        attrs: {
          url: 'https://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z',
          type: 'rich',
          providerNameSlug: 'spotify',
          className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded flickr', () => {
    const expected = [{
      type: 'core-embed/flickr',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY',
        type: 'photo',
        providerNameSlug: 'flickr',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY',
            type: 'photo',
            providerNameSlug: 'flickr',
            className: 'wp-block-embed-flickr wp-block-embed is-type-photo is-provider-flickr',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/flickr',
      attrs:
     {
       url: 'https://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY',
       type: 'photo',
       providerNameSlug: 'flickr',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-flickr wp-block-embed is-type-photo is-provider-flickr"><div class="wp-block-embed__wrapper">\nhttps://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-flickr wp-block-embed is-type-photo is-provider-flickr"><div class="wp-block-embed__wrapper">\nhttps://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded vimeo', () => {
    const expected = [{
      type: 'core-embed/vimeo',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://vimeo.com/346788825',
        type: 'video',
        providerNameSlug: 'vimeo',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://vimeo.com/346788825',
            type: 'video',
            providerNameSlug: 'vimeo',
            className: 'wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://vimeo.com/346788825\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/vimeo',
      attrs:
     {
       url: 'https://vimeo.com/346788825',
       type: 'video',
       providerNameSlug: 'vimeo',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://vimeo.com/346788825\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://vimeo.com/346788825\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded animoto', () => {
    const expected = [{
      type: 'core-embed/animoto',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug',
        type: 'video',
        providerNameSlug: 'animoto',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug',
            type: 'video',
            providerNameSlug: 'animoto',
            className: 'wp-block-embed-animoto wp-block-embed is-type-video is-provider-animoto wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [
      {
        blockName: 'core-embed/animoto',
        attrs: {
          url: 'https://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug',
          type: 'video',
          providerNameSlug: 'animoto',
          className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-animoto wp-block-embed is-type-video is-provider-animoto wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-animoto wp-block-embed is-type-video is-provider-animoto wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded cloudup', () => {
    const expected = [{
      type: 'core-embed/cloudup',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://cloudup.com/i_7_kWIw2ST',
        type: 'photo',
        providerNameSlug: 'cloudup',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://cloudup.com/i_7_kWIw2ST',
            type: 'photo',
            providerNameSlug: 'cloudup',
            className: 'wp-block-embed-cloudup wp-block-embed is-type-photo is-provider-cloudup',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://cloudup.com/i_7_kWIw2ST\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/cloudup',
      attrs:
     {
       url: 'https://cloudup.com/i_7_kWIw2ST',
       type: 'photo',
       providerNameSlug: 'cloudup',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-cloudup wp-block-embed is-type-photo is-provider-cloudup"><div class="wp-block-embed__wrapper">\nhttps://cloudup.com/i_7_kWIw2ST\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-cloudup wp-block-embed is-type-photo is-provider-cloudup"><div class="wp-block-embed__wrapper">\nhttps://cloudup.com/i_7_kWIw2ST\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded college humor', () => {
    const expected = [{
      type: 'core-embed/collegehumor',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'http://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas',
        type: 'video',
        providerNameSlug: 'collegehumor',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'http://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas',
            type: 'video',
            providerNameSlug: 'collegehumor',
            className: 'wp-block-embed-collegehumor wp-block-embed is-type-video is-provider-collegehumor wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttp://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/collegehumor',
      attrs:
     {
       url: 'http://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas',
       type: 'video',
       providerNameSlug: 'collegehumor',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-collegehumor wp-block-embed is-type-video is-provider-collegehumor wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttp://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-collegehumor wp-block-embed is-type-video is-provider-collegehumor wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttp://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded crowdsignal', () => {
    const expected = [{
      type: 'core-embed/crowdsignal',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://tomgardhampallister.survey.fm/untitled-survey',
        type: 'rich',
        providerNameSlug: 'crowdsignal',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://tomgardhampallister.survey.fm/untitled-survey',
            type: 'rich',
            providerNameSlug: 'crowdsignal',
            className: 'wp-block-embed-crowdsignal wp-block-embed is-type-rich is-provider-crowdsignal',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://tomgardhampallister.survey.fm/untitled-survey\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/crowdsignal',
      attrs:
     {
       url: 'https://tomgardhampallister.survey.fm/untitled-survey',
       type: 'rich',
       providerNameSlug: 'crowdsignal',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-crowdsignal wp-block-embed is-type-rich is-provider-crowdsignal"><div class="wp-block-embed__wrapper">\nhttps://tomgardhampallister.survey.fm/untitled-survey\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-crowdsignal wp-block-embed is-type-rich is-provider-crowdsignal"><div class="wp-block-embed__wrapper">\nhttps://tomgardhampallister.survey.fm/untitled-survey\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded dailymotion', () => {
    const expected = [{
      type: 'core-embed/dailymotion',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw',
        type: 'video',
        providerNameSlug: 'dailymotion',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw',
            type: 'video',
            providerNameSlug: 'dailymotion',
            className: 'wp-block-embed-dailymotion wp-block-embed is-type-video is-provider-dailymotion wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/dailymotion',
      attrs:
     {
       url: 'https://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw',
       type: 'video',
       providerNameSlug: 'dailymotion',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-dailymotion wp-block-embed is-type-video is-provider-dailymotion wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-dailymotion wp-block-embed is-type-video is-provider-dailymotion wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded hulu', () => {
    const expected = [{
      type: 'core-embed/dailymotion',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.hulu.com/watch/771496',
        type: 'video',
        providerNameSlug: 'hulu',
        className: 'wp-embed-aspect-4-3 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.hulu.com/watch/771496',
            type: 'video',
            providerNameSlug: 'hulu',
            className: 'wp-block-embed-hulu wp-block-embed is-type-video is-provider-hulu wp-embed-aspect-4-3 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.hulu.com/watch/771496\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/hulu',
      attrs:
     {
       url: 'https://www.hulu.com/watch/771496',
       type: 'video',
       providerNameSlug: 'hulu',
       className: 'wp-embed-aspect-4-3 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-hulu wp-block-embed is-type-video is-provider-hulu wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.hulu.com/watch/771496\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-hulu wp-block-embed is-type-video is-provider-hulu wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.hulu.com/watch/771496\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded imgur', () => {
    const expected = [{
      type: 'core-embed/imgur',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://imgur.com/a/p0R6NP1',
        type: 'rich',
        providerNameSlug: 'imgur',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://imgur.com/a/p0R6NP1',
            type: 'rich',
            providerNameSlug: 'imgur',
            className: 'wp-block-embed-imgur wp-block-embed is-type-rich is-provider-imgur',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://imgur.com/a/p0R6NP1\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/imgur',
      attrs:
     {
       url: 'https://imgur.com/a/p0R6NP1',
       type: 'rich',
       providerNameSlug: 'imgur',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-imgur wp-block-embed is-type-rich is-provider-imgur"><div class="wp-block-embed__wrapper">\nhttps://imgur.com/a/p0R6NP1\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-imgur wp-block-embed is-type-rich is-provider-imgur"><div class="wp-block-embed__wrapper">\nhttps://imgur.com/a/p0R6NP1\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded issuu', () => {
    const expected = [{
      type: 'core-embed/issuu',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96',
        type: 'rich',
        providerNameSlug: 'issuu',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96',
            type: 'rich',
            providerNameSlug: 'issuu',
            className: 'wp-block-embed-issuu wp-block-embed is-type-rich is-provider-issuu',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/issuu',
      attrs:
     {
       url: 'https://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96',
       type: 'rich',
       providerNameSlug: 'issuu',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-issuu wp-block-embed is-type-rich is-provider-issuu"><div class="wp-block-embed__wrapper">\nhttps://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-issuu wp-block-embed is-type-rich is-provider-issuu"><div class="wp-block-embed__wrapper">\nhttps://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded kickstarter', () => {
    const expected = [{
      type: 'core-embed/kickstarter',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks',
        type: 'rich',
        providerNameSlug: 'kickstarter',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks',
            type: 'rich',
            providerNameSlug: 'kickstarter',
            className: 'wp-block-embed-kickstarter wp-block-embed is-type-rich is-provider-kickstarter wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/kickstarter',
      attrs:
     {
       url: 'https://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks',
       type: 'rich',
       providerNameSlug: 'kickstarter',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-kickstarter wp-block-embed is-type-rich is-provider-kickstarter wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks\n</div><figcaption>test embed</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-kickstarter wp-block-embed is-type-rich is-provider-kickstarter wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded meetup.com', () => {
    const expected = [{
      type: 'core-embed/meetup-com',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.meetup.com/LabCentral/events/ptcmbryzkbnb/',
        type: 'rich',
        providerNameSlug: 'meetup',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.meetup.com/LabCentral/events/ptcmbryzkbnb/',
            type: 'rich',
            providerNameSlug: 'meetup',
            className: 'wp-block-embed-meetup-com wp-block-embed is-type-rich is-provider-meetup',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.meetup.com/LabCentral/events/ptcmbryzkbnb/\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/meetup-com',
      attrs:
     {
       url: 'https://www.meetup.com/LabCentral/events/ptcmbryzkbnb/',
       type: 'rich',
       providerNameSlug: 'meetup',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-meetup-com wp-block-embed is-type-rich is-provider-meetup"><div class="wp-block-embed__wrapper">\nhttps://www.meetup.com/LabCentral/events/ptcmbryzkbnb/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-meetup-com wp-block-embed is-type-rich is-provider-meetup"><div class="wp-block-embed__wrapper">\nhttps://www.meetup.com/LabCentral/events/ptcmbryzkbnb/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded mixcloud', () => {
    const expected = [{
      type: 'core-embed/mixcloud',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/',
        type: 'rich',
        providerNameSlug: 'mixcloud',
        className: 'wp-embed-aspect-21-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/',
            type: 'rich',
            providerNameSlug: 'mixcloud',
            className: 'wp-block-embed-mixcloud wp-block-embed is-type-rich is-provider-mixcloud wp-embed-aspect-21-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/mixcloud',
      attrs:
     {
       url: 'https://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/',
       type: 'rich',
       providerNameSlug: 'mixcloud',
       className: 'wp-embed-aspect-21-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-mixcloud wp-block-embed is-type-rich is-provider-mixcloud wp-embed-aspect-21-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-mixcloud wp-block-embed is-type-rich is-provider-mixcloud wp-embed-aspect-21-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];
    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded reddit', () => {
    const expected = [{
      type: 'core-embed/reddit',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/',
        type: 'rich',
        providerNameSlug: 'reddit',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/',
            type: 'rich',
            providerNameSlug: 'reddit',
            className: 'wp-block-embed-reddit wp-block-embed is-type-rich is-provider-reddit',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/reddit',
      attrs:
     {
       url: 'https://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/',
       type: 'rich',
       providerNameSlug: 'reddit',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-reddit wp-block-embed is-type-rich is-provider-reddit"><div class="wp-block-embed__wrapper">\nhttps://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-reddit wp-block-embed is-type-rich is-provider-reddit"><div class="wp-block-embed__wrapper">\nhttps://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded reverbnation', () => {
    const expected = [{
      type: 'core-embed/reverbnation',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.reverbnation.com/eames1',
        type: 'rich',
        providerNameSlug: '',
        className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.reverbnation.com/eames1',
            type: 'rich',
            providerNameSlug: '',
            className: 'wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.reverbnation.com/eames1\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/reverbnation',
      attrs:
     {
       url: 'https://www.reverbnation.com/eames1',
       type: 'rich',
       providerNameSlug: '',
       className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded screencast', () => {
    const expected = [{
      type: 'core-embed/screencast',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.reverbnation.com/eames1',
        type: 'rich',
        providerNameSlug: '',
        className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.reverbnation.com/eames1',
            type: 'rich',
            providerNameSlug: '',
            className: 'wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.reverbnation.com/eames1\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/screencast',
      attrs:
     {
       url: 'https://www.reverbnation.com/eames1',
       type: 'rich',
       providerNameSlug: '',
       className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded scribd', () => {
    const expected = [{
      type: 'core-embed/scribd',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.reverbnation.com/eames1',
        type: 'rich',
        providerNameSlug: '',
        className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.reverbnation.com/eames1',
            type: 'rich',
            providerNameSlug: '',
            className: 'wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.reverbnation.com/eames1\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/scribd',
      attrs:
     {
       url: 'https://www.reverbnation.com/eames1',
       type: 'rich',
       providerNameSlug: '',
       className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded slideshare', () => {
    const expected = [{
      type: 'core-embed/slideshare',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540',
        type: 'rich',
        providerNameSlug: 'slideshare',
        className: 'wp-embed-aspect-1-1 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540',
            type: 'rich',
            providerNameSlug: 'slideshare',
            className: 'wp-block-embed-slideshare wp-block-embed is-type-rich is-provider-slideshare wp-embed-aspect-1-1 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/slideshare',
      attrs:
     {
       url: 'https://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540',
       type: 'rich',
       providerNameSlug: 'slideshare',
       className: 'wp-embed-aspect-1-1 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-slideshare wp-block-embed is-type-rich is-provider-slideshare wp-embed-aspect-1-1 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-slideshare wp-block-embed is-type-rich is-provider-slideshare wp-embed-aspect-1-1 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded smugmug', () => {
    const expected = [{
      type: 'core-embed/smugmug',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr',
        type: 'photo',
        providerNameSlug: 'smugmug',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr',
            type: 'photo',
            providerNameSlug: 'smugmug',
            className: 'wp-block-embed-smugmug wp-block-embed is-type-photo is-provider-smugmug',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/smugmug',
      attrs:
     {
       url: 'https://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr',
       type: 'photo',
       providerNameSlug: 'smugmug',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-smugmug wp-block-embed is-type-photo is-provider-smugmug"><div class="wp-block-embed__wrapper">\nhttps://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-smugmug wp-block-embed is-type-photo is-provider-smugmug"><div class="wp-block-embed__wrapper">\nhttps://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded speaker deck', () => {
    const expected = [{
      type: 'core-embed/speaker-deck',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19',
        type: 'rich',
        providerNameSlug: 'speaker-deck',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19',
            type: 'rich',
            providerNameSlug: 'speaker-deck',
            className: 'wp-block-embed-speaker-deck wp-block-embed is-type-rich is-provider-speaker-deck wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/speaker-deck',
      attrs:
     {
       url: 'https://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19',
       type: 'rich',
       providerNameSlug: 'speaker-deck',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-speaker-deck wp-block-embed is-type-rich is-provider-speaker-deck wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-speaker-deck wp-block-embed is-type-rich is-provider-speaker-deck wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded ted', () => {
    const expected = [{
      type: 'core-embed/ted',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy',
        type: 'video',
        providerNameSlug: 'ted',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy',
            type: 'video',
            providerNameSlug: 'ted',
            className: 'wp-block-embed-ted wp-block-embed is-type-video is-provider-ted wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/ted',
      attrs:
     {
       url: 'https://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy',
       type: 'video',
       providerNameSlug: 'ted',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-ted wp-block-embed is-type-video is-provider-ted wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-ted wp-block-embed is-type-video is-provider-ted wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded tumblr', () => {
    const expected = [{
      type: 'core-embed/tumblr',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://disneyliveaction.tumblr.com/post/186003956312/the-pride',
        type: 'rich',
        providerNameSlug: 'tumblr',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://disneyliveaction.tumblr.com/post/186003956312/the-pride',
            type: 'rich',
            providerNameSlug: 'tumblr',
            className: 'wp-block-embed-tumblr wp-block-embed is-type-rich is-provider-tumblr',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://disneyliveaction.tumblr.com/post/186003956312/the-pride\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/tumblr',
      attrs:
     {
       url: 'https://disneyliveaction.tumblr.com/post/186003956312/the-pride',
       type: 'rich',
       providerNameSlug: 'tumblr',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-tumblr wp-block-embed is-type-rich is-provider-tumblr"><div class="wp-block-embed__wrapper">\nhttps://disneyliveaction.tumblr.com/post/186003956312/the-pride\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-tumblr wp-block-embed is-type-rich is-provider-tumblr"><div class="wp-block-embed__wrapper">\nhttps://disneyliveaction.tumblr.com/post/186003956312/the-pride\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded videopress', () => {
    const expected = [{
      type: 'core-embed/videopress',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://videopress.com/v/kUJmAcSf',
        type: 'video',
        providerNameSlug: 'videopress',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://videopress.com/v/kUJmAcSf',
            type: 'video',
            providerNameSlug: 'videopress',
            className: 'wp-block-embed-videopress wp-block-embed is-type-video is-provider-videopress wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://videopress.com/v/kUJmAcSf\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/videopress',
      attrs:
     {
       url: 'https://videopress.com/v/kUJmAcSf',
       type: 'video',
       providerNameSlug: 'videopress',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-videopress wp-block-embed is-type-video is-provider-videopress wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://videopress.com/v/kUJmAcSf\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-videopress wp-block-embed is-type-video is-provider-videopress wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://videopress.com/v/kUJmAcSf\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded wordpress.tv', () => {
    const expected = [{
      type: 'core-embed/wordpress-tv',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/',
        type: 'video',
        providerNameSlug: '',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/',
            type: 'video',
            providerNameSlug: '',
            className: 'wp-block-embed-wordpress-tv wp-block-embed is-type-video wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/wordpress-tv',
      attrs:
     {
       url: 'https://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/',
       type: 'video',
       providerNameSlug: '',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-wordpress-tv wp-block-embed is-type-video wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-wordpress-tv wp-block-embed is-type-video wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded amazon kindle', () => {
    const expected = [{
      type: 'core-embed/amazon-kindle',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_86qjDbK869J7J',
        type: 'rich',
        providerNameSlug: 'amazon',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_86qjDbK869J7J',
            type: 'rich',
            providerNameSlug: 'amazon',
            className: 'wp-block-embed-amazon-kindle wp-block-embed is-type-rich is-provider-amazon',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_86qjDbK869J7J\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/amazon-kindle',
      attrs:
     {
       url: 'https://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_86qjDbK869J7J',
       type: 'rich',
       providerNameSlug: 'amazon',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-amazon-kindle wp-block-embed is-type-rich is-provider-amazon"><div class="wp-block-embed__wrapper">\nhttps://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_86qjDbK869J7J\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-amazon-kindle wp-block-embed is-type-rich is-provider-amazon"><div class="wp-block-embed__wrapper">\nhttps://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_86qjDbK869J7J\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded', () => {
    const expected = [{
      type: 'core-embed/wordpress',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments',
        type: 'wp-embed',
        providerNameSlug: 'gfycat',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments',
            type: 'wp-embed',
            providerNameSlug: 'gfycat',
            className: 'wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-gfycat',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/wordpress',
      attrs:
     {
       url: 'https://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments',
       type: 'wp-embed',
       providerNameSlug: 'gfycat',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-gfycat"><div class="wp-block-embed__wrapper">\nhttps://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-gfycat"><div class="wp-block-embed__wrapper">\nhttps://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
