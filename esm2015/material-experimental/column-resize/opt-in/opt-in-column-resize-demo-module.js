/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material-experimental/column-resize/opt-in/opt-in-column-resize-demo-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatColumnResizeModule } from '@angular/material-experimental/column-resize';
import { OptInColumnResizeDemo } from './opt-in-column-resize-demo';
import * as i0 from "@angular/core";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export class OptInColumnResizeDemoModule {
}
OptInColumnResizeDemoModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [OptInColumnResizeDemo],
                exports: [OptInColumnResizeDemo],
            },] },
];
/** @nocollapse */ OptInColumnResizeDemoModule.ɵmod = i0.ɵɵdefineNgModule({ type: OptInColumnResizeDemoModule });
/** @nocollapse */ OptInColumnResizeDemoModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OptInColumnResizeDemoModule_Factory(t) { return new (t || OptInColumnResizeDemoModule)(); }, imports: [[
            MatColumnResizeModule,
            MatTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OptInColumnResizeDemoModule, { declarations: [OptInColumnResizeDemo], imports: [MatColumnResizeModule,
        MatTableModule], exports: [OptInColumnResizeDemo] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OptInColumnResizeDemoModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [OptInColumnResizeDemo],
                exports: [OptInColumnResizeDemo],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWluLWNvbHVtbi1yZXNpemUtZGVtby1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9vcHQtaW4vb3B0LWluLWNvbHVtbi1yZXNpemUtZGVtby1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUVuRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7O0FBVWxFLE1BQU0sT0FBTywyQkFBMkI7OztZQVJ2QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLHFCQUFxQjtvQkFDckIsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDakM7OytEQUNZLDJCQUEyQjtxSUFBM0IsMkJBQTJCLGtCQVA3QjtZQUNQLHFCQUFxQjtZQUNyQixjQUFjO1NBQ2Y7d0ZBSVUsMkJBQTJCLG1CQUh2QixxQkFBcUIsYUFIbEMscUJBQXFCO1FBQ3JCLGNBQWMsYUFHTixxQkFBcUI7a0RBRXBCLDJCQUEyQjtjQVJ2QyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLHFCQUFxQjtvQkFDckIsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge01hdENvbHVtblJlc2l6ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL2NvbHVtbi1yZXNpemUnO1xuXG5pbXBvcnQge09wdEluQ29sdW1uUmVzaXplRGVtb30gZnJvbSAnLi9vcHQtaW4tY29sdW1uLXJlc2l6ZS1kZW1vJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdENvbHVtblJlc2l6ZU1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbT3B0SW5Db2x1bW5SZXNpemVEZW1vXSxcbiAgZXhwb3J0czogW09wdEluQ29sdW1uUmVzaXplRGVtb10sXG59KVxuZXhwb3J0IGNsYXNzIE9wdEluQ29sdW1uUmVzaXplRGVtb01vZHVsZSB7XG59XG4iXX0=