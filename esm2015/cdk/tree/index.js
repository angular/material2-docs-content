/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeFlatExample } from './cdk-tree-flat/cdk-tree-flat-example';
import { CdkTreeNestedExample } from './cdk-tree-nested/cdk-tree-nested-example';
import * as i0 from "@angular/core";
export { CdkTreeFlatExample, CdkTreeNestedExample, };
/** @type {?} */
const EXAMPLES = [
    CdkTreeFlatExample,
    CdkTreeNestedExample,
];
export class CdkTreeExamplesModule {
}
CdkTreeExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CdkTreeModule,
                    MatButtonModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ CdkTreeExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkTreeExamplesModule });
/** @nocollapse */ CdkTreeExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkTreeExamplesModule_Factory(t) { return new (t || CdkTreeExamplesModule)(); }, imports: [[
            CdkTreeModule,
            MatButtonModule,
            MatIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkTreeExamplesModule, { declarations: [CdkTreeFlatExample,
        CdkTreeNestedExample], imports: [CdkTreeModule,
        MatButtonModule,
        MatIconModule], exports: [CdkTreeFlatExample,
        CdkTreeNestedExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTreeExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkTreeModule,
                    MatButtonModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFL0UsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixvQkFBb0IsR0FDckIsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3JCO0FBV0QsTUFBTSxPQUFPLHFCQUFxQjs7O1lBVGpDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixlQUFlO29CQUNmLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCOzt5REFDWSxxQkFBcUI7eUhBQXJCLHFCQUFxQixrQkFSdkI7WUFDUCxhQUFhO1lBQ2IsZUFBZTtZQUNmLGFBQWE7U0FDZDt3RkFJVSxxQkFBcUIsbUJBYmhDLGtCQUFrQjtRQUNsQixvQkFBb0IsYUFLbEIsYUFBYTtRQUNiLGVBQWU7UUFDZixhQUFhLGFBUmYsa0JBQWtCO1FBQ2xCLG9CQUFvQjtrREFZVCxxQkFBcUI7Y0FUakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1RyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtDZGtUcmVlRmxhdEV4YW1wbGV9IGZyb20gJy4vY2RrLXRyZWUtZmxhdC9jZGstdHJlZS1mbGF0LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtUcmVlTmVzdGVkRXhhbXBsZX0gZnJvbSAnLi9jZGstdHJlZS1uZXN0ZWQvY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBDZGtUcmVlRmxhdEV4YW1wbGUsXG4gIENka1RyZWVOZXN0ZWRFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka1RyZWVGbGF0RXhhbXBsZSxcbiAgQ2RrVHJlZU5lc3RlZEV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2RrVHJlZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=