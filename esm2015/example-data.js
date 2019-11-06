/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.exampleFiles = ['html', 'ts', 'css'].map((/**
         * @param {?} extension
         * @return {?}
         */
        extension => `${example}-example.${extension}`));
        this.selectorName = this.indexFilename = `${example}-example`;
        if (exampleConfig.additionalFiles) {
            this.exampleFiles.push(...exampleConfig.additionalFiles);
        }
        /** @type {?} */
        const exampleName = example.replace(/(?:^\w|\b\w)/g, (/**
         * @param {?} letter
         * @return {?}
         */
        letter => letter.toUpperCase()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvZXhhbXBsZS1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7OztBQU1wRCxNQUFNLE9BQU8sV0FBVzs7OztJQW9CdEIsWUFBWSxPQUFlO1FBQ3pCLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0QsT0FBTztTQUNSOztjQUVLLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7UUFFakQsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxZQUFZLFNBQVMsRUFBRSxFQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsT0FBTyxVQUFVLENBQUM7UUFFOUQsSUFBSSxhQUFhLENBQUMsZUFBZSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzFEOztjQUVLLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWU7Ozs7UUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBQztRQUVwRixJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQzFGLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLFlBQVk7WUFDekIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ3RFLENBQUM7Q0FDRjs7Ozs7O0lBdENDLGtDQUFvQjs7Ozs7SUFHcEIsbUNBQXVCOzs7OztJQUd2QixtQ0FBcUI7Ozs7O0lBR3JCLG9DQUFzQjs7Ozs7O0lBTXRCLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBleGFtcGxlLW1vZHVsZSBmaWxlIHdpbGwgYmUgYXV0by1nZW5lcmF0ZWQuIEFzIHNvb24gYXMgdGhlXG4vLyBleGFtcGxlcyBhcmUgYmVpbmcgY29tcGlsZWQsIHRoZSBtb2R1bGUgZmlsZSB3aWxsIGJlIGdlbmVyYXRlZC5cbmltcG9ydCB7RVhBTVBMRV9DT01QT05FTlRTfSBmcm9tICcuL2V4YW1wbGUtbW9kdWxlJztcblxuLyoqXG4gKiBFeGFtcGxlIGRhdGFcbiAqICAgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBDb21wb25lbnQgbmFtZSwgc2VsZWN0b3IsIGZpbGVzIHVzZWQgaW4gZXhhbXBsZSwgYW5kIHBhdGggdG8gZXhhbXBsZXNcbiAqL1xuZXhwb3J0IGNsYXNzIEV4YW1wbGVEYXRhIHtcblxuICAvKiogRGVzY3JpcHRpb24gb2YgdGhlIGV4YW1wbGUuICovXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgLyoqIExpc3Qgb2YgZmlsZXMgdGhhdCBhcmUgcGFydCBvZiB0aGlzIGV4YW1wbGUuICovXG4gIGV4YW1wbGVGaWxlczogc3RyaW5nW107XG5cbiAgLyoqIFNlbGVjdG9yIG5hbWUgb2YgdGhlIGV4YW1wbGUgY29tcG9uZW50LiAqL1xuICBzZWxlY3Rvck5hbWU6IHN0cmluZztcblxuICAvKiogTmFtZSBvZiB0aGUgZmlsZSB0aGF0IGNvbnRhaW5zIHRoZSBleGFtcGxlIGNvbXBvbmVudC4gKi9cbiAgaW5kZXhGaWxlbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBleGFtcGxlIGNvbXBvbmVudC4gRm9yIGV4YW1wbGVzIHdpdGggbXVsdGlwbGUgY29tcG9uZW50cywgdGhpcyBwcm9wZXJ0eSB3aWxsXG4gICAqIGluY2x1ZGUgbXVsdGlwbGUgY29tcG9uZW50cyB0aGF0IGFyZSBjb21tYSBzZXBhcmF0ZWQgKGUuZy4gZGlhbG9nLW92ZXJ2aWV3KVxuICAgKi9cbiAgY29tcG9uZW50TmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGV4YW1wbGU6IHN0cmluZykge1xuICAgIGlmICghZXhhbXBsZSB8fCAhRVhBTVBMRV9DT01QT05FTlRTLmhhc093blByb3BlcnR5KGV4YW1wbGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXhhbXBsZUNvbmZpZyA9IEVYQU1QTEVfQ09NUE9ORU5UU1tleGFtcGxlXTtcblxuICAgIC8vIFRPRE8odGluYXl1YW5nYW8pOiBEbyBub3QgaGFyZC1jb2RlIGV4dGVuc2lvbnNcbiAgICB0aGlzLmV4YW1wbGVGaWxlcyA9IFsnaHRtbCcsICd0cycsICdjc3MnXS5tYXAoZXh0ZW5zaW9uID0+IGAke2V4YW1wbGV9LWV4YW1wbGUuJHtleHRlbnNpb259YCk7XG4gICAgdGhpcy5zZWxlY3Rvck5hbWUgPSB0aGlzLmluZGV4RmlsZW5hbWUgPSBgJHtleGFtcGxlfS1leGFtcGxlYDtcblxuICAgIGlmIChleGFtcGxlQ29uZmlnLmFkZGl0aW9uYWxGaWxlcykge1xuICAgICAgdGhpcy5leGFtcGxlRmlsZXMucHVzaCguLi5leGFtcGxlQ29uZmlnLmFkZGl0aW9uYWxGaWxlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhhbXBsZU5hbWUgPSBleGFtcGxlLnJlcGxhY2UoLyg/Ol5cXHd8XFxiXFx3KS9nLCBsZXR0ZXIgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xuXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGV4YW1wbGVDb25maWcudGl0bGUgfHwgZXhhbXBsZU5hbWUucmVwbGFjZSgvW1xcLV0rL2csICcgJykgKyAnIEV4YW1wbGUnO1xuICAgIHRoaXMuY29tcG9uZW50TmFtZSA9IGV4YW1wbGVDb25maWcuc2VsZWN0b3JOYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4YW1wbGVOYW1lLnJlcGxhY2UoL1tcXC1dKy9nLCAnJykgKyAnRXhhbXBsZSc7XG4gIH1cbn1cbiJdfQ==