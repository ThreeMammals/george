const {
  parseMeta,
} = require('../src/parse-meta');

describe('parseMeta', () => {
  beforeAll(() => {

  });

  beforeEach(() => {
  });

  afterEach(() => {
  });

  afterAll(() => {
  });

  it('should parse yoast meta data', () => {
    const expected = {
      title: 'test tile test page test seperator test site title',
      description: 'meta description',

    };
    const input = {
      post_meta: {
        _yoast_wpseo_metadesc: ['meta description'],
        _yoast_wpseo_title: ['test tile test page test seperator test site title'],
      },
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });

  it('should parse when undefined post_meta and use post_title', () => {
    const expected = {
      title: 'test title',
      description: '',

    };
    const input = {
      post_title: 'test title',
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });

  it('should parse when null post_meta and use post_title', () => {
    const expected = {
      title: 'test title',
      description: '',

    };
    const input = {
      post_title: 'test title',
      post_meta: null,
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });

  it('should default to post_title if undefined yoast title', () => {
    const expected = {
      title: 'Hello world!',
      description: 'meta description',

    };
    const input = {
      post_title: 'Hello world!',
      post_meta: {
        _yoast_wpseo_metadesc: ['meta description'],
      },
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });

  it('should default to post_title if length 0 yoast title', () => {
    const expected = {
      title: 'Hello world!',
      description: 'meta description',

    };
    const input = {
      post_title: 'Hello world!',
      post_meta: {
        _yoast_wpseo_metadesc: ['meta description'],
        _yoast_wpseo_title: [],
      },
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });

  it('should default to post_title if null yoast title', () => {
    const expected = {
      title: 'Hello world!',
      description: 'meta description',

    };
    const input = {
      post_title: 'Hello world!',
      post_meta: {
        _yoast_wpseo_metadesc: ['meta description'],
        _yoast_wpseo_title: [null],
      },
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });

  it('should default to post_title if null yoast title', () => {
    const expected = {
      title: 'Hello world!',
      description: 'meta description',

    };
    const input = {
      post_title: 'Hello world!',
      post_meta: {
        _yoast_wpseo_metadesc: ['meta description'],
        _yoast_wpseo_title: [undefined],
      },
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });

  it('should default to post_title if string empty yoast title', () => {
    const expected = {
      title: 'Hello world!',
      description: 'meta description',

    };
    const input = {
      post_title: 'Hello world!',
      post_meta: {
        _yoast_wpseo_metadesc: ['meta description'],
        _yoast_wpseo_title: [''],
      },
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });


  it('should default to empty if undefined yoast description', () => {
    const expected = {
      title: 'test tile test page test seperator test site title',
      description: '',

    };
    const input = {
      post_title: 'Hello world!',
      post_meta: {
        _yoast_wpseo_title: ['test tile test page test seperator test site title'],
      },
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });

  it('should default to post_title if length 0 yoast description', () => {
    const expected = {
      title: 'test tile test page test seperator test site title',
      description: '',

    };
    const input = {
      post_title: 'Hello world!',
      post_meta: {
        _yoast_wpseo_metadesc: [],
        _yoast_wpseo_title: ['test tile test page test seperator test site title'],
      },
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });

  it('should default to post_title if null yoast description', () => {
    const expected = {
      title: 'test tile test page test seperator test site title',
      description: '',

    };
    const input = {
      post_title: 'Hello world!',
      post_meta: {
        _yoast_wpseo_metadesc: [null],
        _yoast_wpseo_title: ['test tile test page test seperator test site title'],
      },
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });

  it('should default to post_title if null yoast description', () => {
    const expected = {
      title: 'test tile test page test seperator test site title',
      description: '',

    };
    const input = {
      post_title: 'Hello world!',
      post_meta: {
        _yoast_wpseo_metadesc: [undefined],
        _yoast_wpseo_title: ['test tile test page test seperator test site title'],
      },
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });

  it('should default to empty if string empty yoast description', () => {
    const expected = {
      title: 'test tile test page test seperator test site title',
      description: '',

    };
    const input = {
      post_title: 'Hello world!',
      post_meta: {
        _yoast_wpseo_metadesc: [''],
        _yoast_wpseo_title: ['test tile test page test seperator test site title'],
      },
    };

    const result = parseMeta(input);

    expect(result).toEqual(expected);
  });
});
