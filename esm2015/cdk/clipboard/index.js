/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/clipboard/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CdkClipboardOverviewExample } from './cdk-clipboard-overview/cdk-clipboard-overview-example';
import * as i0 from "@angular/core";
export { CdkClipboardOverviewExample };
/** @type {?} */
const EXAMPLES = [CdkClipboardOverviewExample];
export class CdkClipboardExamplesModule {
}
CdkClipboardExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [ClipboardModule, FormsModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ CdkClipboardExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkClipboardExamplesModule });
/** @nocollapse */ CdkClipboardExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkClipboardExamplesModule_Factory(t) { return new (t || CdkClipboardExamplesModule)(); }, imports: [[ClipboardModule, FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkClipboardExamplesModule, { declarations: [CdkClipboardOverviewExample], imports: [ClipboardModule, FormsModule], exports: [CdkClipboardOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkClipboardExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [ClipboardModule, FormsModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvY2xpcGJvYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDOztBQUVwRyxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsQ0FBQzs7TUFFL0IsUUFBUSxHQUFHLENBQUMsMkJBQTJCLENBQUM7QUFPOUMsTUFBTSxPQUFPLDBCQUEwQjs7O1lBTHRDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDO2dCQUN2QyxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEI7OzhEQUNZLDBCQUEwQjttSUFBMUIsMEJBQTBCLGtCQUo1QixDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUM7d0ZBSTVCLDBCQUEwQixtQkFQckIsMkJBQTJCLGFBR2pDLGVBQWUsRUFBRSxXQUFXLGFBSHRCLDJCQUEyQjtrREFPaEMsMEJBQTBCO2NBTHRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDO2dCQUN2QyxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q2xpcGJvYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvY2xpcGJvYXJkJztcbmltcG9ydCB7Q2RrQ2xpcGJvYXJkT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXcvY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtDZGtDbGlwYm9hcmRPdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtDZGtDbGlwYm9hcmRPdmVydmlld0V4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2xpcGJvYXJkTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtDbGlwYm9hcmRFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=