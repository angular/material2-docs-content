/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/radio/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RadioNgModelExample } from './radio-ng-model/radio-ng-model-example';
import { RadioOverviewExample } from './radio-overview/radio-overview-example';
import * as i0 from "@angular/core";
export { RadioNgModelExample, RadioOverviewExample, };
/** @type {?} */
const EXAMPLES = [
    RadioNgModelExample,
    RadioOverviewExample,
];
export class RadioExamplesModule {
}
RadioExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatRadioModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ RadioExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: RadioExamplesModule });
/** @nocollapse */ RadioExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function RadioExamplesModule_Factory(t) { return new (t || RadioExamplesModule)(); }, imports: [[
            CommonModule,
            MatRadioModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RadioExamplesModule, { declarations: [RadioNgModelExample,
        RadioOverviewExample], imports: [CommonModule,
        MatRadioModule,
        FormsModule], exports: [RadioNgModelExample,
        RadioOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RadioExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatRadioModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7O0FBRTdFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsb0JBQW9CLEdBQ3JCLENBQUM7O01BRUksUUFBUSxHQUFHO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUNyQjtBQVdELE1BQU0sT0FBTyxtQkFBbUI7OztZQVQvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQjs7dURBQ1ksbUJBQW1CO3FIQUFuQixtQkFBbUIsa0JBUnJCO1lBQ1AsWUFBWTtZQUNaLGNBQWM7WUFDZCxXQUFXO1NBQ1o7d0ZBSVUsbUJBQW1CLG1CQWI5QixtQkFBbUI7UUFDbkIsb0JBQW9CLGFBS2xCLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVyxhQVJiLG1CQUFtQjtRQUNuQixvQkFBb0I7a0RBWVQsbUJBQW1CO2NBVC9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLFdBQVc7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7UmFkaW9OZ01vZGVsRXhhbXBsZX0gZnJvbSAnLi9yYWRpby1uZy1tb2RlbC9yYWRpby1uZy1tb2RlbC1leGFtcGxlJztcbmltcG9ydCB7UmFkaW9PdmVydmlld0V4YW1wbGV9IGZyb20gJy4vcmFkaW8tb3ZlcnZpZXcvcmFkaW8tb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFJhZGlvTmdNb2RlbEV4YW1wbGUsXG4gIFJhZGlvT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFJhZGlvTmdNb2RlbEV4YW1wbGUsXG4gIFJhZGlvT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvRXhhbXBsZXNNb2R1bGUge1xufVxuIl19