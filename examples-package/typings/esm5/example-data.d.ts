/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
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
    /**
     * Name of the example component. For examples with multiple components, this property will
     * include multiple components that are comma separated (e.g. dialog-overview)
     */
    componentName: string;
    constructor(example: string);
}
