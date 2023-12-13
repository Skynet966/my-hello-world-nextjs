import { getHelloWorld } from "./get-hello-world";

export function GreetsInEnglish() {
    return <div>{getHelloWorld('en')}</div>;
}

export function GreetsInSpanish() {
    return <div>{getHelloWorld('es')}</div>;
}

export function GreetsInGreek() {
    return <div>{getHelloWorld('gr')}</div>;
}

