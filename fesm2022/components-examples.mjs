import { E as EXAMPLE_COMPONENTS } from './example-module-8f01f277.mjs';
export { E as EXAMPLE_COMPONENTS, l as loadExample } from './example-module-8f01f277.mjs';

// The example-module file will be auto-generated. As soon as the
/**
 * Example data with information about component name, selector, files used in
 * example, and path to examples.
 */
class ExampleData {
    /** Description of the example. */
    description;
    /** List of files that are part of this example. */
    exampleFiles;
    /** Selector name of the example component. */
    selectorName;
    /** Name of the file that contains the example component. */
    indexFilename;
    /** Names of the components being used in this example. */
    componentNames;
    constructor(example) {
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        const { componentName, files, selector, primaryFile, additionalComponents, title } = EXAMPLE_COMPONENTS[example];
        const exampleName = example.replace(/(?:^\w|\b\w)/g, letter => letter.toUpperCase());
        this.exampleFiles = files;
        this.selectorName = selector;
        this.indexFilename = primaryFile;
        this.description = title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentNames = [componentName, ...additionalComponents];
    }
}

export { ExampleData };
//# sourceMappingURL=components-examples.mjs.map
