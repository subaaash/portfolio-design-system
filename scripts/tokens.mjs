import { mkdir, readFile, writeFile } from 'node:fs/promises';

const source = new URL('../Portfolio Tokens/Default.json', import.meta.url);
const output = new URL('../src/generated/', import.meta.url);
const tree = JSON.parse((await readFile(source, 'utf8')).replace(/^\uFEFF/, ''));
const tokens = new Map();
const resolved = new Map();
const fontWeights = new Map([
  ['Regular', 400],
  ['Medium', 500],
  ['Semi Bold', 600],
  ['Bold', 700],
]);

function collect(group, path = []) {
  for (const [key, child] of Object.entries(group)) {
    if (key.startsWith('$')) continue;
    const childPath = [...path, key];
    if (Object.hasOwn(child, '$value')) tokens.set(childPath.join('.'), child);
    else collect(child, childPath);
  }
}

function resolve(path, chain = []) {
  if (resolved.has(path)) return resolved.get(path);
  const trace = [...chain, path];
  if (chain.includes(path)) throw new Error(`Cyclic token alias: ${trace.join(' -> ')}`);
  if (!tokens.has(path)) throw new Error(`Missing token: ${trace.join(' -> ')}`);

  const { $type: type, $value: value } = tokens.get(path);
  const alias = typeof value === 'string' && value.match(/^\{([^{}]+)\}$/);
  if (alias) {
    const target = resolve(alias[1], trace);
    if (type !== target.type) throw new Error(`Token type mismatch: ${path} -> ${alias[1]}`);
    resolved.set(path, target);
    return target;
  }

  const cssValue = type === 'fontWeights' ? fontWeights.get(value) : value;
  if (typeof cssValue !== 'string' && typeof cssValue !== 'number') {
    throw new Error(`Unsupported token value: ${path}`);
  }
  const result = { type, value: cssValue };
  resolved.set(path, result);
  return result;
}

collect(tree);
const declarations = new Map();
for (const [path, token] of tokens) {
  const { value } = resolve(path);
  const name = `--${path.replaceAll('.', '-')}`;
  if (declarations.has(name)) throw new Error(`Duplicate CSS variable: ${name}`);
  declarations.set(name, value);
  const web = token.$extensions?.['com.figma.codeSyntax']?.Web;
  const webName = web?.match(/^var\((--[\w-]+)\)$/)?.[1];
  if (webName && webName !== name) {
    if (declarations.has(webName)) throw new Error(`Duplicate CSS variable: ${webName}`);
    declarations.set(webName, `var(${name})`);
  }
}

console.log(`Validated ${tokens.size} tokens.`);
if (!process.argv.includes('--check')) {
  const css = [...declarations].map(([name, value]) => `  ${name}: ${value};`).join('\n');
  await mkdir(output, { recursive: true });
  await writeFile(new URL('tokens.css', output), `/* Generated from Portfolio Tokens/Default.json. */\n:root {\n${css}\n}\n`);
}
