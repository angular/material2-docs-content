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
                entryComponents: EXAMPLES,
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
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7O0FBRTdFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsb0JBQW9CLEdBQ3JCLENBQUM7O01BRUksUUFBUSxHQUFHO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUNyQjtBQVlELE1BQU0sT0FBTyxtQkFBbUI7OztZQVYvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUI7OzBFQUNZLG1CQUFtQjt3SUFBbkIsbUJBQW1CLGtCQVRyQjtZQUNQLFlBQVk7WUFDWixjQUFjO1lBQ2QsV0FBVztTQUNaO3dGQUtVLG1CQUFtQixtQkFkOUIsbUJBQW1CO1FBQ25CLG9CQUFvQixhQUtsQixZQUFZO1FBQ1osY0FBYztRQUNkLFdBQVcsYUFSYixtQkFBbUI7UUFDbkIsb0JBQW9CO2tEQWFULG1CQUFtQjtjQVYvQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtSYWRpb05nTW9kZWxFeGFtcGxlfSBmcm9tICcuL3JhZGlvLW5nLW1vZGVsL3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUnO1xuaW1wb3J0IHtSYWRpb092ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9yYWRpby1vdmVydmlldy9yYWRpby1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgUmFkaW9OZ01vZGVsRXhhbXBsZSxcbiAgUmFkaW9PdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgUmFkaW9OZ01vZGVsRXhhbXBsZSxcbiAgUmFkaW9PdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9FeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=