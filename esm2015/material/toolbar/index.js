/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/toolbar/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarBasicExample } from './toolbar-basic/toolbar-basic-example';
import { ToolbarMultirowExample } from './toolbar-multirow/toolbar-multirow-example';
import { ToolbarOverviewExample } from './toolbar-overview/toolbar-overview-example';
import * as i0 from "@angular/core";
export { ToolbarBasicExample, ToolbarMultirowExample, ToolbarOverviewExample, };
/** @type {?} */
const EXAMPLES = [
    ToolbarBasicExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
];
export class ToolbarExamplesModule {
}
ToolbarExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatToolbarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            },] },
];
/** @nocollapse */ ToolbarExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ToolbarExamplesModule });
/** @nocollapse */ ToolbarExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ToolbarExamplesModule_Factory(t) { return new (t || ToolbarExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatIconModule,
            MatToolbarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ToolbarExamplesModule, { declarations: [ToolbarBasicExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample], imports: [MatButtonModule,
        MatIconModule,
        MatToolbarModule], exports: [ToolbarBasicExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatToolbarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sYmFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDOztBQUVuRixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN0QixzQkFBc0IsR0FDdkIsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtDQUN2QjtBQVlELE1BQU0sT0FBTyxxQkFBcUI7OztZQVZqQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixnQkFBZ0I7aUJBQ2pCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUI7O3lEQUNZLHFCQUFxQjt5SEFBckIscUJBQXFCLGtCQVR2QjtZQUNQLGVBQWU7WUFDZixhQUFhO1lBQ2IsZ0JBQWdCO1NBQ2pCO3dGQUtVLHFCQUFxQixtQkFmaEMsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixzQkFBc0IsYUFLcEIsZUFBZTtRQUNmLGFBQWE7UUFDYixnQkFBZ0IsYUFUbEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixzQkFBc0I7a0RBYVgscUJBQXFCO2NBVmpDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixhQUFhO29CQUNiLGdCQUFnQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7VG9vbGJhckJhc2ljRXhhbXBsZX0gZnJvbSAnLi90b29sYmFyLWJhc2ljL3Rvb2xiYXItYmFzaWMtZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2xiYXJNdWx0aXJvd0V4YW1wbGV9IGZyb20gJy4vdG9vbGJhci1tdWx0aXJvdy90b29sYmFyLW11bHRpcm93LWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sYmFyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3Rvb2xiYXItb3ZlcnZpZXcvdG9vbGJhci1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgVG9vbGJhckJhc2ljRXhhbXBsZSxcbiAgVG9vbGJhck11bHRpcm93RXhhbXBsZSxcbiAgVG9vbGJhck92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUb29sYmFyQmFzaWNFeGFtcGxlLFxuICBUb29sYmFyTXVsdGlyb3dFeGFtcGxlLFxuICBUb29sYmFyT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19