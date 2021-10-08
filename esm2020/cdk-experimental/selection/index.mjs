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
CdkSelectionExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkSelectionExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkSelectionExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkSelectionExamplesModule, declarations: [CdkSelectionListExample,
        CdkSelectionColumnExample], imports: [CdkSelectionModule,
        CdkTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule], exports: [CdkSelectionListExample,
        CdkSelectionColumnExample] });
CdkSelectionExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkSelectionExamplesModule, imports: [[
            CdkSelectionModule,
            CdkTableModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkSelectionExamplesModule, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRTdELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDOztBQUV4RixPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHVCQUF1QixHQUN4QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZix1QkFBdUI7SUFDdkIseUJBQXlCO0NBQzFCLENBQUM7QUFlRixNQUFNLE9BQU8sMEJBQTBCOzsrSEFBMUIsMEJBQTBCO2dJQUExQiwwQkFBMEIsaUJBakJyQyx1QkFBdUI7UUFDdkIseUJBQXlCLGFBS3ZCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsaUJBQWlCLGFBWG5CLHVCQUF1QjtRQUN2Qix5QkFBeUI7Z0lBZ0JkLDBCQUEwQixZQVo1QjtZQUNQLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsaUJBQWlCO1NBRWxCO21HQUlVLDBCQUEwQjtrQkFidEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGlCQUFpQjtxQkFFbEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrU2VsZWN0aW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbic7XG5pbXBvcnQge0Nka1RhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcblxuaW1wb3J0IHtDZGtTZWxlY3Rpb25Db2x1bW5FeGFtcGxlfSBmcm9tICcuL2Nkay1zZWxlY3Rpb24tY29sdW1uL2Nkay1zZWxlY3Rpb24tY29sdW1uLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtTZWxlY3Rpb25MaXN0RXhhbXBsZX0gZnJvbSAnLi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBDZGtTZWxlY3Rpb25Db2x1bW5FeGFtcGxlLFxuICBDZGtTZWxlY3Rpb25MaXN0RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtTZWxlY3Rpb25MaXN0RXhhbXBsZSxcbiAgQ2RrU2VsZWN0aW9uQ29sdW1uRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDZGtTZWxlY3Rpb25Nb2R1bGUsXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG5cbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1NlbGVjdGlvbkV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==