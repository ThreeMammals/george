const copy = require('fast-copy');

// not sure why cant use import..
const {
  Cover,
  RenderChildren,
  Embed,
  Twitter,
} = require('@george/components');

const typeMap = {
  'core/html': RenderChildren,
  'core/preformatted': RenderChildren,
  'core/pullquote': RenderChildren,
  'core/table': RenderChildren,
  'core/verse': RenderChildren,
  'core/button': RenderChildren,
  'core/paragraph': RenderChildren,
  'core/list': RenderChildren,
  'core/column': RenderChildren,
  'core/columns': RenderChildren,
  'core/image': RenderChildren,
  'core/quote': RenderChildren,
  'core/heading': RenderChildren,
  'core/cover': Cover,
  'core/gallery': RenderChildren,
  'core/classic': RenderChildren,
  'core/audio': RenderChildren,
  'core/file': RenderChildren,
  'core/video': RenderChildren,
  'core/code': RenderChildren,
  'core/media-text': RenderChildren,
  'core/more': RenderChildren,
  'core/nextpage': RenderChildren,
  'core/seperator': RenderChildren,
  'core/spacer': RenderChildren,
  'core/archives': RenderChildren,
  'core/calendar': RenderChildren,
  'core/categories': RenderChildren,
  'core/latest-comments': RenderChildren,
  'core/latest-posts': RenderChildren,
  'core/rss': RenderChildren,
  'core/search': RenderChildren,
  'core/shortcode': RenderChildren,
  'core/tag-cloud': RenderChildren,
  'core/embed': Embed,
  'core-embed/amazon-kindle': Embed,
  'core-embed/animoto': Embed,
  'core-embed/cloudup': Embed,
  'core-embed/collegehumor': Embed,
  'core-embed/crowdsignal': Embed,
  'core-embed/wordpress': Embed,
  'core-embed/dailymotion': Embed,
  'core-embed/hulu': Embed,
  'core-embed/imgur': Embed,
  'core-embed/issuu': Embed,
  'core-embed/kickstarter': Embed,
  'core-embed/meetup-com': Embed,
  'core-embed/mixcloud': Embed,
  'core-embed/reddit': Embed,
  'core-embed/reverbnation': Embed,
  'core-embed/screencast': Embed,
  'core-embed/scribd': Embed,
  'core-embed/slideshare': Embed,
  'core-embed/smugmug': Embed,
  'core-embed/speaker-deck': Embed,
  'core-embed/ted': Embed,
  'core-embed/tumblr': Embed,
  'core-embed/videopress': Embed,
  'core-embed/wordpress-tv': Embed,
  'core-embed/vimeo': Embed,
  'core-embed/flickr': Embed,
  'core-embed/soundcloud': Embed,
  'core-embed/instagram': Embed,
  'core-embed/facebook': Embed,
  'core-embed/youtube': Embed,
  'core-embed/twitter': Twitter,
  'core-embed/spotify': Embed,
};

const treeToReactTree = (tree) => {
  const end = tree
    .filter(t => t.type !== null)
    .map(t => nodeToReact(t));
  return end;
};

const updateNode = (node) => {
  if (node.type in typeMap) {
    node.type = typeMap[node.type];
  }

  if (node.hasOwnProperty('$$typeof')) {
    node.$$typeof = Symbol.for(node.$$typeof);
  }
  if (node.props && node.props.children) {
    node.props.children = treeToReactTree(node.props.children);
  }
};

const nodeToReact = (nodes) => {
  const clone = copy(nodes);

  if (typeof clone === 'string') {
    return clone;
  }

  if (Array.isArray(clone)) {
    clone.forEach((c) => {
      if (Array.isArray(c)) {
        c.forEach((n) => {
          updateNode(n);
        });
      } else {
        updateNode(c);
      }
    });
  } else {
    updateNode(clone);
  }

  return clone;
};

const treeToReact = (tree) => {
  const reactTree = treeToReactTree(tree);
  return reactTree;
};

module.exports.treeToReact = treeToReact;
