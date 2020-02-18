/**
 * Example data with information about component name, selector, files used in
 * example, and path to examples.
 */
export declare class ExampleData {
    /** Description of the example. */
    description: string;
    /** List of files that are part of this example. */
    exampleFiles: string[];
    /** Selector name of the example component. */
    selectorName: string;
    /** Name of the file that contains the example component. */
    indexFilename: string;
    /** Names of the components being used in this example. */
    componentNames: string[];
    constructor(example: string);
}
