/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/toolbar/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarMultirowExample } from './toolbar-multirow/toolbar-multirow-example';
import { ToolbarOverviewExample } from './toolbar-overview/toolbar-overview-example';
import * as i0 from "@angular/core";
export { ToolbarMultirowExample, ToolbarOverviewExample, };
/** @type {?} */
const EXAMPLES = [
    ToolbarMultirowExample,
    ToolbarOverviewExample,
];
export class ToolbarExamplesModule {
}
ToolbarExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatIconModule,
                    MatToolbarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ ToolbarExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ToolbarExamplesModule });
/** @nocollapse */ ToolbarExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ToolbarExamplesModule_Factory(t) { return new (t || ToolbarExamplesModule)(); }, imports: [[
            MatIconModule,
            MatToolbarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ToolbarExamplesModule, { declarations: [ToolbarMultirowExample,
        ToolbarOverviewExample], imports: [MatIconModule,
        MatToolbarModule], exports: [ToolbarMultirowExample,
        ToolbarOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatIconModule,
                    MatToolbarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sYmFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7O0FBRW5GLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsc0JBQXNCLEdBQ3ZCLENBQUM7O01BRUksUUFBUSxHQUFHO0lBQ2Ysc0JBQXNCO0lBQ3RCLHNCQUFzQjtDQUN2QjtBQVVELE1BQU0sT0FBTyxxQkFBcUI7OztZQVJqQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsZ0JBQWdCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEI7O3lEQUNZLHFCQUFxQjt5SEFBckIscUJBQXFCLGtCQVB2QjtZQUNQLGFBQWE7WUFDYixnQkFBZ0I7U0FDakI7d0ZBSVUscUJBQXFCLG1CQVpoQyxzQkFBc0I7UUFDdEIsc0JBQXNCLGFBS3BCLGFBQWE7UUFDYixnQkFBZ0IsYUFQbEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtrREFXWCxxQkFBcUI7Y0FSakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGdCQUFnQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7VG9vbGJhck11bHRpcm93RXhhbXBsZX0gZnJvbSAnLi90b29sYmFyLW11bHRpcm93L3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2xiYXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vdG9vbGJhci1vdmVydmlldy90b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBUb29sYmFyTXVsdGlyb3dFeGFtcGxlLFxuICBUb29sYmFyT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFRvb2xiYXJNdWx0aXJvd0V4YW1wbGUsXG4gIFRvb2xiYXJPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==