export function helloWorld() {
  return 'Hello World!';
}

export interface Greeter {
  greet(): string;
}

export class HelloWorldGreeter implements Greeter {
  greet() {
    return 'Hello World!';
  }
}
