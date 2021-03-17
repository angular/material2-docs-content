import { CdkSelectionModule } from '@angular/cdk-experimental/selection';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CdkSelectionColumnExample } from './cdk-selection-column/cdk-selection-column-example';
import { CdkSelectionListExample } from './cdk-selection-list/cdk-selection-list-example';
import * as i0 from "@angular/core";
export { CdkSelectionColumnExample, CdkSelectionListExample, };
const EXAMPLES = [
    CdkSelectionListExample,
    CdkSelectionColumnExample,
];
export class CdkSelectionExamplesModule {
}
CdkSelectionExamplesModule.ɵfac = function CdkSelectionExamplesModule_Factory(t) { return new (t || CdkSelectionExamplesModule)(); };
CdkSelectionExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkSelectionExamplesModule });
CdkSelectionExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CdkSelectionModule,
            CdkTableModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkSelectionExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkSelectionModule,
                    CdkTableModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatCheckboxModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkSelectionExamplesModule, { declarations: [CdkSelectionListExample,
        CdkSelectionColumnExample], imports: [CdkSelectionModule,
        CdkTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule], exports: [CdkSelectionListExample,
        CdkSelectionColumnExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRTdELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDOztBQUV4RixPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHVCQUF1QixHQUN4QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZix1QkFBdUI7SUFDdkIseUJBQXlCO0NBQzFCLENBQUM7QUFlRixNQUFNLE9BQU8sMEJBQTBCOztvR0FBMUIsMEJBQTBCOzRFQUExQiwwQkFBMEI7Z0ZBWjVCO1lBQ1Asa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixpQkFBaUI7U0FFbEI7dUZBSVUsMEJBQTBCO2NBYnRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGlCQUFpQjtpQkFFbEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCOzt3RkFDWSwwQkFBMEIsbUJBakJyQyx1QkFBdUI7UUFDdkIseUJBQXlCLGFBS3ZCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsaUJBQWlCLGFBWG5CLHVCQUF1QjtRQUN2Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1NlbGVjdGlvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24nO1xuaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5cbmltcG9ydCB7Q2RrU2VsZWN0aW9uQ29sdW1uRXhhbXBsZX0gZnJvbSAnLi9jZGstc2VsZWN0aW9uLWNvbHVtbi9jZGstc2VsZWN0aW9uLWNvbHVtbi1leGFtcGxlJztcbmltcG9ydCB7Q2RrU2VsZWN0aW9uTGlzdEV4YW1wbGV9IGZyb20gJy4vY2RrLXNlbGVjdGlvbi1saXN0L2Nkay1zZWxlY3Rpb24tbGlzdC1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrU2VsZWN0aW9uQ29sdW1uRXhhbXBsZSxcbiAgQ2RrU2VsZWN0aW9uTGlzdEV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrU2VsZWN0aW9uTGlzdEV4YW1wbGUsXG4gIENka1NlbGVjdGlvbkNvbHVtbkV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2RrU2VsZWN0aW9uTW9kdWxlLFxuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtTZWxlY3Rpb25FeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=