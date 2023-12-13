import { getHelloWorld } from "./get-hello-world";

it('returns the greeting with the default language', () => {
    expect(getHelloWorld()).toBe('Hello world!');
});

it('returns the a greeting in spanish', () => {
    expect(getHelloWorld('es')).toBe('¡Hola mundo!');
});

it('returns the a greeting in greek', () => {
    expect(getHelloWorld('gr')).toBe('Γειά σου κόσμε!');
});

