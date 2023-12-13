import { getHelloWorld } from "@skynet96/components.get-hello-world";

/**
 * renders a "hello world" message
 */

export function HelloWorld() {
    return <div>{getHelloWorld()}</div>;
}

