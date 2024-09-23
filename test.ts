function isBlockElement(element: Node | null): boolean {
  const blockElementTags = new Set([
    'DIV',
    'P',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'OL',
    'UL',
    'LI',
    'TABLE',
    'SECTION',
    'ARTICLE',
    'ASIDE',
    'BLOCKQUOTE',
    'ADDRESS',
  ]);
  return element instanceof Element && blockElementTags.has(element.tagName);
}

const dom = document.createElement('div');

function insert(str: string) {
  dom.innerHTML = str;
  const lastChild = dom.lastChild;
  if (lastChild && isBlockElement(lastChild)) {
    (lastChild as Element).innerHTML += '🚀';
  } else {
    dom.innerHTML += '🚀';
  }

  return dom.innerHTML;
}

let s1 = 'helllo';
let s2 = '<span></span><div>hellx</div>';
let s3 = '<img >';
