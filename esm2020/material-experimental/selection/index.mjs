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
MatSelectionExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: MatSelectionExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MatSelectionExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: MatSelectionExamplesModule, declarations: [MatSelectionListExample, MatSelectionColumnExample], imports: [MatSelectionModule,
        MatTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule], exports: [MatSelectionListExample, MatSelectionColumnExample] });
MatSelectionExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: MatSelectionExamplesModule, imports: [MatSelectionModule,
        MatTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: MatSelectionExamplesModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7O0FBRXhGLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBQyxDQUFDO0FBRTVELE1BQU0sUUFBUSxHQUFHLENBQUMsdUJBQXVCLEVBQUUseUJBQXlCLENBQUMsQ0FBQztBQWN0RSxNQUFNLE9BQU8sMEJBQTBCOzt1SEFBMUIsMEJBQTBCO3dIQUExQiwwQkFBMEIsaUJBZHJCLHVCQUF1QixFQUFFLHlCQUF5QixhQUloRSxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGlCQUFpQixhQVRILHVCQUF1QixFQUFFLHlCQUF5Qjt3SEFjdkQsMEJBQTBCLFlBVm5DLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsaUJBQWlCOzJGQUtSLDBCQUEwQjtrQkFadEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGlCQUFpQjtxQkFDbEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWF0U2VsZWN0aW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5cbmltcG9ydCB7TWF0U2VsZWN0aW9uQ29sdW1uRXhhbXBsZX0gZnJvbSAnLi9tYXQtc2VsZWN0aW9uLWNvbHVtbi9tYXQtc2VsZWN0aW9uLWNvbHVtbi1leGFtcGxlJztcbmltcG9ydCB7TWF0U2VsZWN0aW9uTGlzdEV4YW1wbGV9IGZyb20gJy4vbWF0LXNlbGVjdGlvbi1saXN0L21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlJztcblxuZXhwb3J0IHtNYXRTZWxlY3Rpb25MaXN0RXhhbXBsZSwgTWF0U2VsZWN0aW9uQ29sdW1uRXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW01hdFNlbGVjdGlvbkxpc3RFeGFtcGxlLCBNYXRTZWxlY3Rpb25Db2x1bW5FeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdFNlbGVjdGlvbk1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIE1hdFNlbGVjdGlvbkV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=