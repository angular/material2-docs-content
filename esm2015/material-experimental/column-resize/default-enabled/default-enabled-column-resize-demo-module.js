/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material-experimental/column-resize/default-enabled/default-enabled-column-resize-demo-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDefaultEnabledColumnResizeModule } from '@angular/material-experimental/column-resize';
import { DefaultEnabledColumnResizeDemo } from './default-enabled-column-resize-demo';
import * as i0 from "@angular/core";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export class DefaultEnabledColumnResizeDemoModule {
}
DefaultEnabledColumnResizeDemoModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatDefaultEnabledColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [DefaultEnabledColumnResizeDemo],
                exports: [DefaultEnabledColumnResizeDemo],
            },] },
];
/** @nocollapse */ DefaultEnabledColumnResizeDemoModule.ɵmod = i0.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeDemoModule });
/** @nocollapse */ DefaultEnabledColumnResizeDemoModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeDemoModule_Factory(t) { return new (t || DefaultEnabledColumnResizeDemoModule)(); }, imports: [[
            MatDefaultEnabledColumnResizeModule,
            MatTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeDemoModule, { declarations: [DefaultEnabledColumnResizeDemo], imports: [MatDefaultEnabledColumnResizeModule,
        MatTableModule], exports: [DefaultEnabledColumnResizeDemo] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeDemoModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDefaultEnabledColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [DefaultEnabledColumnResizeDemo],
                exports: [DefaultEnabledColumnResizeDemo],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZGVtby1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQvZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZGVtby1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUNBQW1DLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUVqRyxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7O0FBVXBGLE1BQU0sT0FBTyxvQ0FBb0M7OztZQVJoRCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG1DQUFtQztvQkFDbkMsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDOUMsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDMUM7OzJGQUNZLG9DQUFvQzswS0FBcEMsb0NBQW9DLGtCQVB0QztZQUNQLG1DQUFtQztZQUNuQyxjQUFjO1NBQ2Y7d0ZBSVUsb0NBQW9DLG1CQUhoQyw4QkFBOEIsYUFIM0MsbUNBQW1DO1FBQ25DLGNBQWMsYUFHTiw4QkFBOEI7a0RBRTdCLG9DQUFvQztjQVJoRCxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG1DQUFtQztvQkFDbkMsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDOUMsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge01hdERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZSc7XG5cbmltcG9ydCB7RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVEZW1vfSBmcm9tICcuL2RlZmF1bHQtZW5hYmxlZC1jb2x1bW4tcmVzaXplLWRlbW8nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRGVtb10sXG4gIGV4cG9ydHM6IFtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZURlbW9dLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZURlbW9Nb2R1bGUge1xufVxuIl19