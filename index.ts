const s = 'f:v';

const rules = {
  F: ['f'],
  V: ['v'],
  C: ['', 'F:V'],
}

function chooseRule(s: string, stack: string[]): string {
  return rules.V[1];
}

function parse(s: string): void {
  debugger;
  const stack: string[] = ['C'];
  if ()

}
parse(s);

// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;