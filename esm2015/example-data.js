/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The example-module file will be auto-generated. As soon as the
// examples are being compiled, the module file will be generated.
import { EXAMPLE_COMPONENTS } from './example-module';
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
export class ExampleData {
    /**
     * @param {?} example
     */
    constructor(example) {
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        /** @type {?} */
        const exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map(extension => `${example}-example.${extension}`);
        this.selectorName = this.indexFilename = `${example}-example`;
        if (exampleConfig.additionalFiles) {
            this.exampleFiles.push(...exampleConfig.additionalFiles);
        }
        /** @type {?} */
        const exampleName = example.replace(/(?:^\w|\b\w)/g, letter => letter.toUpperCase());
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
    }
}
if (false) {
    /**
     * Description of the example.
     * @type {?}
     */
    ExampleData.prototype.description;
    /**
     * List of files that are part of this example.
     * @type {?}
     */
    ExampleData.prototype.exampleFiles;
    /**
     * Selector name of the example component.
     * @type {?}
     */
    ExampleData.prototype.selectorName;
    /**
     * Name of the file that contains the example component.
     * @type {?}
     */
    ExampleData.prototype.indexFilename;
    /**
     * Name of the example component. For examples with multiple components, this property will
     * include multiple components that are comma separated (e.g. dialog-overview)
     * @type {?}
     */
    ExampleData.prototype.componentName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2V4YW1wbGUtZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFNcEQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFvQnRCLFlBQVksT0FBZTtRQUN6QixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNELE9BQU87U0FDUjs7Y0FFSyxhQUFhLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDO1FBRWpELGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sWUFBWSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLE9BQU8sVUFBVSxDQUFDO1FBRTlELElBQUksYUFBYSxDQUFDLGVBQWUsRUFBRTtZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMxRDs7Y0FFSyxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFcEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUMxRixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxZQUFZO1lBQ3pCLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUN0RSxDQUFDO0NBQ0Y7Ozs7OztJQXRDQyxrQ0FBb0I7Ozs7O0lBR3BCLG1DQUF1Qjs7Ozs7SUFHdkIsbUNBQXFCOzs7OztJQUdyQixvQ0FBc0I7Ozs7OztJQU10QixvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgZXhhbXBsZS1tb2R1bGUgZmlsZSB3aWxsIGJlIGF1dG8tZ2VuZXJhdGVkLiBBcyBzb29uIGFzIHRoZVxuLy8gZXhhbXBsZXMgYXJlIGJlaW5nIGNvbXBpbGVkLCB0aGUgbW9kdWxlIGZpbGUgd2lsbCBiZSBnZW5lcmF0ZWQuXG5pbXBvcnQge0VYQU1QTEVfQ09NUE9ORU5UU30gZnJvbSAnLi9leGFtcGxlLW1vZHVsZSc7XG5cbi8qKlxuICogRXhhbXBsZSBkYXRhXG4gKiAgIHdpdGggaW5mb3JtYXRpb24gYWJvdXQgQ29tcG9uZW50IG5hbWUsIHNlbGVjdG9yLCBmaWxlcyB1c2VkIGluIGV4YW1wbGUsIGFuZCBwYXRoIHRvIGV4YW1wbGVzXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGFtcGxlRGF0YSB7XG5cbiAgLyoqIERlc2NyaXB0aW9uIG9mIHRoZSBleGFtcGxlLiAqL1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIC8qKiBMaXN0IG9mIGZpbGVzIHRoYXQgYXJlIHBhcnQgb2YgdGhpcyBleGFtcGxlLiAqL1xuICBleGFtcGxlRmlsZXM6IHN0cmluZ1tdO1xuXG4gIC8qKiBTZWxlY3RvciBuYW1lIG9mIHRoZSBleGFtcGxlIGNvbXBvbmVudC4gKi9cbiAgc2VsZWN0b3JOYW1lOiBzdHJpbmc7XG5cbiAgLyoqIE5hbWUgb2YgdGhlIGZpbGUgdGhhdCBjb250YWlucyB0aGUgZXhhbXBsZSBjb21wb25lbnQuICovXG4gIGluZGV4RmlsZW5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgZXhhbXBsZSBjb21wb25lbnQuIEZvciBleGFtcGxlcyB3aXRoIG11bHRpcGxlIGNvbXBvbmVudHMsIHRoaXMgcHJvcGVydHkgd2lsbFxuICAgKiBpbmNsdWRlIG11bHRpcGxlIGNvbXBvbmVudHMgdGhhdCBhcmUgY29tbWEgc2VwYXJhdGVkIChlLmcuIGRpYWxvZy1vdmVydmlldylcbiAgICovXG4gIGNvbXBvbmVudE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihleGFtcGxlOiBzdHJpbmcpIHtcbiAgICBpZiAoIWV4YW1wbGUgfHwgIUVYQU1QTEVfQ09NUE9ORU5UUy5oYXNPd25Qcm9wZXJ0eShleGFtcGxlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV4YW1wbGVDb25maWcgPSBFWEFNUExFX0NPTVBPTkVOVFNbZXhhbXBsZV07XG5cbiAgICAvLyBUT0RPKHRpbmF5dWFuZ2FvKTogRG8gbm90IGhhcmQtY29kZSBleHRlbnNpb25zXG4gICAgdGhpcy5leGFtcGxlRmlsZXMgPSBbJ2h0bWwnLCAndHMnLCAnY3NzJ10ubWFwKGV4dGVuc2lvbiA9PiBgJHtleGFtcGxlfS1leGFtcGxlLiR7ZXh0ZW5zaW9ufWApO1xuICAgIHRoaXMuc2VsZWN0b3JOYW1lID0gdGhpcy5pbmRleEZpbGVuYW1lID0gYCR7ZXhhbXBsZX0tZXhhbXBsZWA7XG5cbiAgICBpZiAoZXhhbXBsZUNvbmZpZy5hZGRpdGlvbmFsRmlsZXMpIHtcbiAgICAgIHRoaXMuZXhhbXBsZUZpbGVzLnB1c2goLi4uZXhhbXBsZUNvbmZpZy5hZGRpdGlvbmFsRmlsZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGV4YW1wbGVOYW1lID0gZXhhbXBsZS5yZXBsYWNlKC8oPzpeXFx3fFxcYlxcdykvZywgbGV0dGVyID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKTtcblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBleGFtcGxlQ29uZmlnLnRpdGxlIHx8IGV4YW1wbGVOYW1lLnJlcGxhY2UoL1tcXC1dKy9nLCAnICcpICsgJyBFeGFtcGxlJztcbiAgICB0aGlzLmNvbXBvbmVudE5hbWUgPSBleGFtcGxlQ29uZmlnLnNlbGVjdG9yTmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGFtcGxlTmFtZS5yZXBsYWNlKC9bXFwtXSsvZywgJycpICsgJ0V4YW1wbGUnO1xuICB9XG59XG4iXX0=