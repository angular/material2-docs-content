import { MatSelectionModule } from '@angular/material-experimental/selection';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectionColumnExample } from './mat-selection-column/mat-selection-column-example';
import { MatSelectionListExample } from './mat-selection-list/mat-selection-list-example';
import * as i0 from "@angular/core";
export { MatSelectionListExample, MatSelectionColumnExample };
const EXAMPLES = [MatSelectionListExample, MatSelectionColumnExample];
export class MatSelectionExamplesModule {
}
MatSelectionExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: MatSelectionExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MatSelectionExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: MatSelectionExamplesModule, declarations: [MatSelectionListExample, MatSelectionColumnExample], imports: [MatSelectionModule,
        MatTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule], exports: [MatSelectionListExample, MatSelectionColumnExample] });
MatSelectionExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: MatSelectionExamplesModule, imports: [[
            MatSelectionModule,
            MatTableModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: MatSelectionExamplesModule, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7O0FBRXhGLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBQyxDQUFDO0FBRTVELE1BQU0sUUFBUSxHQUFHLENBQUMsdUJBQXVCLEVBQUUseUJBQXlCLENBQUMsQ0FBQztBQWN0RSxNQUFNLE9BQU8sMEJBQTBCOzs0SEFBMUIsMEJBQTBCOzZIQUExQiwwQkFBMEIsaUJBZHJCLHVCQUF1QixFQUFFLHlCQUF5QixhQUloRSxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGlCQUFpQixhQVRILHVCQUF1QixFQUFFLHlCQUF5Qjs2SEFjdkQsMEJBQTBCLFlBWDVCO1lBQ1Asa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixpQkFBaUI7U0FDbEI7Z0dBSVUsMEJBQTBCO2tCQVp0QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3FCQUNsQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYXRTZWxlY3Rpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24nO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcblxuaW1wb3J0IHtNYXRTZWxlY3Rpb25Db2x1bW5FeGFtcGxlfSBmcm9tICcuL21hdC1zZWxlY3Rpb24tY29sdW1uL21hdC1zZWxlY3Rpb24tY29sdW1uLWV4YW1wbGUnO1xuaW1wb3J0IHtNYXRTZWxlY3Rpb25MaXN0RXhhbXBsZX0gZnJvbSAnLi9tYXQtc2VsZWN0aW9uLWxpc3QvbWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUnO1xuXG5leHBvcnQge01hdFNlbGVjdGlvbkxpc3RFeGFtcGxlLCBNYXRTZWxlY3Rpb25Db2x1bW5FeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbTWF0U2VsZWN0aW9uTGlzdEV4YW1wbGUsIE1hdFNlbGVjdGlvbkNvbHVtbkV4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0U2VsZWN0aW9uTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U2VsZWN0aW9uRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==