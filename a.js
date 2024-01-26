import { simpleGit, CleanOptions } from 'simple-git';
import fs from 'fs';
// git.listRemote().then(console.log);

async function main() {
  const path = '/Users/guoshaowei/Desktop/code/vantage-dev3';
  const git = simpleGit(path, { binary: 'git' });

  const tagInfo = await git.tags();

  const diff = await git.diff(['v1', 'v1.0.6-prod', '--', '.', `:!package-lock.json`]);
  fs.writeFileSync('./a.diff', diff);

  console.log('🚀 ', { tagInfo, diff, diff2: diff.files });

  // input v1 v2 tagA tagB projectName
  // git diff tagA tagB -- . :!package-lock.json > v1-v2.diff

  // ...
  // diff
}

main();

/** 
 * 
{
  tagInfo: TagList {
    all: [ 'v1', 'v1.0.4-prod', 'v1.0.5-prod', 'v1.0.6-prod' ],
    latest: 'v1.0.6-prod'
  }
}
*/
