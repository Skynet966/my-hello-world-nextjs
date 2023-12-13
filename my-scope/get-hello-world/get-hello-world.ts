/* a greeting language */
type Language = 'en' | 'es' | 'gr';

/**
 * returns a 'hello world' message, in different languages.
 */
export function getHelloWorld(language: Language = 'en') {
    if (language === 'es')
        return '¡Hola mundo!';
    if (language === 'gr')
        return 'Γειά σου κόσμε!';
    return 'Hello world!';
}

