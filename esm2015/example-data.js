/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/example-data.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The example-module file will be auto-generated. As soon as the
// examples are being compiled, the module file will be generated.
import { EXAMPLE_COMPONENTS } from './example-module';
/**
 * Example data with information about component name, selector, files used in
 * example, and path to examples.
 */
export class ExampleData {
    /**
     * @param {?} example
     */
    constructor(example) {
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        const { componentName, additionalFiles, additionalComponents, title } = EXAMPLE_COMPONENTS[example];
        /** @type {?} */
        const exampleName = example.replace(/(?:^\w|\b\w)/g, (/**
         * @param {?} letter
         * @return {?}
         */
        letter => letter.toUpperCase()));
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map((/**
         * @param {?} extension
         * @return {?}
         */
        extension => `${example}-example.${extension}`));
        this.selectorName = this.indexFilename = `${example}-example`;
        this.exampleFiles.push(...additionalFiles);
        this.description = title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentNames = [componentName, ...additionalComponents];
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
     * Names of the components being used in this example.
     * @type {?}
     */
    ExampleData.prototype.componentNames;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvZXhhbXBsZS1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFNcEQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFnQnRCLFlBQVksT0FBZTtRQUN6QixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNELE9BQU87U0FDUjtjQUVLLEVBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUMsR0FDL0Qsa0JBQWtCLENBQUMsT0FBTyxDQUFDOztjQUN6QixXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlOzs7O1FBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUM7UUFFcEYsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxZQUFZLFNBQVMsRUFBRSxFQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsT0FBTyxVQUFVLENBQUM7UUFFOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDNUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLG9CQUFvQixDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNGOzs7Ozs7SUEvQkMsa0NBQW9COzs7OztJQUdwQixtQ0FBdUI7Ozs7O0lBR3ZCLG1DQUFxQjs7Ozs7SUFHckIsb0NBQXNCOzs7OztJQUd0QixxQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgZXhhbXBsZS1tb2R1bGUgZmlsZSB3aWxsIGJlIGF1dG8tZ2VuZXJhdGVkLiBBcyBzb29uIGFzIHRoZVxuLy8gZXhhbXBsZXMgYXJlIGJlaW5nIGNvbXBpbGVkLCB0aGUgbW9kdWxlIGZpbGUgd2lsbCBiZSBnZW5lcmF0ZWQuXG5pbXBvcnQge0VYQU1QTEVfQ09NUE9ORU5UU30gZnJvbSAnLi9leGFtcGxlLW1vZHVsZSc7XG5cbi8qKlxuICogRXhhbXBsZSBkYXRhIHdpdGggaW5mb3JtYXRpb24gYWJvdXQgY29tcG9uZW50IG5hbWUsIHNlbGVjdG9yLCBmaWxlcyB1c2VkIGluXG4gKiBleGFtcGxlLCBhbmQgcGF0aCB0byBleGFtcGxlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4YW1wbGVEYXRhIHtcbiAgLyoqIERlc2NyaXB0aW9uIG9mIHRoZSBleGFtcGxlLiAqL1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIC8qKiBMaXN0IG9mIGZpbGVzIHRoYXQgYXJlIHBhcnQgb2YgdGhpcyBleGFtcGxlLiAqL1xuICBleGFtcGxlRmlsZXM6IHN0cmluZ1tdO1xuXG4gIC8qKiBTZWxlY3RvciBuYW1lIG9mIHRoZSBleGFtcGxlIGNvbXBvbmVudC4gKi9cbiAgc2VsZWN0b3JOYW1lOiBzdHJpbmc7XG5cbiAgLyoqIE5hbWUgb2YgdGhlIGZpbGUgdGhhdCBjb250YWlucyB0aGUgZXhhbXBsZSBjb21wb25lbnQuICovXG4gIGluZGV4RmlsZW5hbWU6IHN0cmluZztcblxuICAvKiogTmFtZXMgb2YgdGhlIGNvbXBvbmVudHMgYmVpbmcgdXNlZCBpbiB0aGlzIGV4YW1wbGUuICovXG4gIGNvbXBvbmVudE5hbWVzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihleGFtcGxlOiBzdHJpbmcpIHtcbiAgICBpZiAoIWV4YW1wbGUgfHwgIUVYQU1QTEVfQ09NUE9ORU5UUy5oYXNPd25Qcm9wZXJ0eShleGFtcGxlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHtjb21wb25lbnROYW1lLCBhZGRpdGlvbmFsRmlsZXMsIGFkZGl0aW9uYWxDb21wb25lbnRzLCB0aXRsZX0gPVxuICAgICAgICBFWEFNUExFX0NPTVBPTkVOVFNbZXhhbXBsZV07XG4gICAgY29uc3QgZXhhbXBsZU5hbWUgPSBleGFtcGxlLnJlcGxhY2UoLyg/Ol5cXHd8XFxiXFx3KS9nLCBsZXR0ZXIgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xuXG4gICAgLy8gVE9ETyh0aW5heXVhbmdhbyk6IERvIG5vdCBoYXJkLWNvZGUgZXh0ZW5zaW9uc1xuICAgIHRoaXMuZXhhbXBsZUZpbGVzID0gWydodG1sJywgJ3RzJywgJ2NzcyddLm1hcChleHRlbnNpb24gPT4gYCR7ZXhhbXBsZX0tZXhhbXBsZS4ke2V4dGVuc2lvbn1gKTtcbiAgICB0aGlzLnNlbGVjdG9yTmFtZSA9IHRoaXMuaW5kZXhGaWxlbmFtZSA9IGAke2V4YW1wbGV9LWV4YW1wbGVgO1xuXG4gICAgdGhpcy5leGFtcGxlRmlsZXMucHVzaCguLi5hZGRpdGlvbmFsRmlsZXMpO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aXRsZSB8fCBleGFtcGxlTmFtZS5yZXBsYWNlKC9bXFwtXSsvZywgJyAnKSArICcgRXhhbXBsZSc7XG4gICAgdGhpcy5jb21wb25lbnROYW1lcyA9IFtjb21wb25lbnROYW1lLCAuLi5hZGRpdGlvbmFsQ29tcG9uZW50c107XG4gIH1cbn1cbiJdfQ==