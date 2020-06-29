/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDefaultEnabledColumnResizeModule } from '@angular/material-experimental/column-resize';
import { DefaultEnabledColumnResizeFlexExample } from './default-enabled-column-resize-flex-example';
import * as i0 from "@angular/core";
export class DefaultEnabledColumnResizeFlexExampleModule {
}
DefaultEnabledColumnResizeFlexExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeFlexExampleModule });
DefaultEnabledColumnResizeFlexExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeFlexExampleModule_Factory(t) { return new (t || DefaultEnabledColumnResizeFlexExampleModule)(); }, imports: [[
            MatDefaultEnabledColumnResizeModule,
            MatTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeFlexExampleModule, { declarations: [DefaultEnabledColumnResizeFlexExample], imports: [MatDefaultEnabledColumnResizeModule,
        MatTableModule], exports: [DefaultEnabledColumnResizeFlexExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeFlexExampleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDefaultEnabledColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [DefaultEnabledColumnResizeFlexExample],
                exports: [DefaultEnabledColumnResizeFlexExample],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1leGFtcGxlLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplL2RlZmF1bHQtZW5hYmxlZC1mbGV4L2RlZmF1bHQtZW5hYmxlZC1jb2x1bW4tcmVzaXplLWZsZXgtZXhhbXBsZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFakcsT0FBTyxFQUFDLHFDQUFxQyxFQUFDLE1BQU0sOENBQThDLENBQUM7O0FBVW5HLE1BQU0sT0FBTywyQ0FBMkM7OytFQUEzQywyQ0FBMkM7cUtBQTNDLDJDQUEyQyxrQkFQN0M7WUFDUCxtQ0FBbUM7WUFDbkMsY0FBYztTQUNmO3dGQUlVLDJDQUEyQyxtQkFIdkMscUNBQXFDLGFBSGxELG1DQUFtQztRQUNuQyxjQUFjLGFBR04scUNBQXFDO2tEQUVwQywyQ0FBMkM7Y0FSdkQsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxtQ0FBbUM7b0JBQ25DLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLENBQUMscUNBQXFDLENBQUM7Z0JBQ3JELE9BQU8sRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2FBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNYXREZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL2NvbHVtbi1yZXNpemUnO1xuXG5pbXBvcnQge0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleEV4YW1wbGV9IGZyb20gJy4vZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1leGFtcGxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUZsZXhFeGFtcGxlXSxcbiAgZXhwb3J0czogW0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleEV4YW1wbGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUZsZXhFeGFtcGxlTW9kdWxlIHtcbn1cbiJdfQ==