const fs = require("fs");
const { merge, copy } = require('../src/utils/merge-sitemaps');

describe('asdf', () => {

  afterEach(() => {
    copy('./__tests__/reset-incremental-sitemap.xml', './__tests__/incremental-sitemap.xml')  
  });

  it('should merge sitemaps and overwrite dist sitemap.xml', async () => {
    const fullBuildSitemapPath = './__tests__/sitemap.xml';
    const fullBuildCopySitemapPath = './__tests__/sitemap-copy.xml';

    const incrementalBuildSitemapPath = './__tests__/incremental-sitemap.xml';
    const expectedSitemapPath = './__tests__/expected-merged-sitemap.xml';
    
    // copy the current sitemap before we build
    copy(fullBuildSitemapPath, fullBuildCopySitemapPath);

    // imagine we do the incremental build here

    // merge the old and new sitemaps
    await merge(fullBuildCopySitemapPath, incrementalBuildSitemapPath);

    // read the sitemap we merged and expected and see if they are the same
    const fullContents = fs.readFileSync(incrementalBuildSitemapPath, 'utf8');
    const expected = fs.readFileSync(expectedSitemapPath, 'utf8');

    expect(fullContents).toEqual(expected);
  });
});
