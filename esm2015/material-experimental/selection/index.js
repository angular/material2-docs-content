import { MatSelectionModule } from '@angular/material-experimental/selection';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectionColumnExample } from './mat-selection-column/mat-selection-column-example';
import { MatSelectionListExample } from './mat-selection-list/mat-selection-list-example';
import * as i0 from "@angular/core";
export { MatSelectionListExample, MatSelectionColumnExample, };
const EXAMPLES = [
    MatSelectionListExample,
    MatSelectionColumnExample,
];
export class MatSelectionExamplesModule {
}
MatSelectionExamplesModule.ɵfac = function MatSelectionExamplesModule_Factory(t) { return new (t || MatSelectionExamplesModule)(); };
MatSelectionExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MatSelectionExamplesModule });
MatSelectionExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatSelectionModule,
            MatTableModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSelectionExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatSelectionModule,
                    MatTableModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatCheckboxModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatSelectionExamplesModule, { declarations: [MatSelectionListExample,
        MatSelectionColumnExample], imports: [MatSelectionModule,
        MatTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule], exports: [MatSelectionListExample,
        MatSelectionColumnExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7O0FBRXhGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIseUJBQXlCLEdBQzFCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLHVCQUF1QjtJQUN2Qix5QkFBeUI7Q0FDMUIsQ0FBQztBQWNGLE1BQU0sT0FBTywwQkFBMEI7O29HQUExQiwwQkFBMEI7NEVBQTFCLDBCQUEwQjtnRkFYNUI7WUFDUCxrQkFBa0I7WUFDbEIsY0FBYztZQUNkLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGlCQUFpQjtTQUNsQjt1RkFJVSwwQkFBMEI7Y0FadEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsaUJBQWlCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEI7O3dGQUNZLDBCQUEwQixtQkFoQnJDLHVCQUF1QjtRQUN2Qix5QkFBeUIsYUFLdkIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixpQkFBaUIsYUFYbkIsdUJBQXVCO1FBQ3ZCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWF0U2VsZWN0aW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5cbmltcG9ydCB7TWF0U2VsZWN0aW9uQ29sdW1uRXhhbXBsZX0gZnJvbSAnLi9tYXQtc2VsZWN0aW9uLWNvbHVtbi9tYXQtc2VsZWN0aW9uLWNvbHVtbi1leGFtcGxlJztcbmltcG9ydCB7TWF0U2VsZWN0aW9uTGlzdEV4YW1wbGV9IGZyb20gJy4vbWF0LXNlbGVjdGlvbi1saXN0L21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgTWF0U2VsZWN0aW9uTGlzdEV4YW1wbGUsXG4gIE1hdFNlbGVjdGlvbkNvbHVtbkV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgTWF0U2VsZWN0aW9uTGlzdEV4YW1wbGUsXG4gIE1hdFNlbGVjdGlvbkNvbHVtbkV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0U2VsZWN0aW9uTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U2VsZWN0aW9uRXhhbXBsZXNNb2R1bGUge1xufVxuIl19