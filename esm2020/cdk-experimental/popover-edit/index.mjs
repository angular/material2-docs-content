import { CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkPopoverEditCdkTableFlexExample } from './cdk-popover-edit-cdk-table-flex/cdk-popover-edit-cdk-table-flex-example';
import { CdkPopoverEditCdkTableExample } from './cdk-popover-edit-cdk-table/cdk-popover-edit-cdk-table-example';
import { CdkPopoverEditCellSpanVanillaTableExample,
// tslint:disable-next-line:max-line-length
 } from './cdk-popover-edit-cell-span-vanilla-table/cdk-popover-edit-cell-span-vanilla-table-example';
import { CdkPopoverEditTabOutVanillaTableExample } from './cdk-popover-edit-tab-out-vanilla-table/cdk-popover-edit-tab-out-vanilla-table-example';
import { CdkPopoverEditVanillaTableExample } from './cdk-popover-edit-vanilla-table/cdk-popover-edit-vanilla-table-example';
import * as i0 from "@angular/core";
export { CdkPopoverEditCdkTableFlexExample, CdkPopoverEditCdkTableExample, CdkPopoverEditCellSpanVanillaTableExample, CdkPopoverEditTabOutVanillaTableExample, CdkPopoverEditVanillaTableExample, };
const EXAMPLES = [
    CdkPopoverEditCdkTableExample,
    CdkPopoverEditCdkTableFlexExample,
    CdkPopoverEditCellSpanVanillaTableExample,
    CdkPopoverEditTabOutVanillaTableExample,
    CdkPopoverEditVanillaTableExample,
];
export class CdkPopoverEditExamplesModule {
}
CdkPopoverEditExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CdkPopoverEditExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkPopoverEditExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CdkPopoverEditExamplesModule, declarations: [CdkPopoverEditCdkTableExample,
        CdkPopoverEditCdkTableFlexExample,
        CdkPopoverEditCellSpanVanillaTableExample,
        CdkPopoverEditTabOutVanillaTableExample,
        CdkPopoverEditVanillaTableExample], imports: [CdkPopoverEditModule, CdkTableModule, FormsModule, CommonModule], exports: [CdkPopoverEditCdkTableExample,
        CdkPopoverEditCdkTableFlexExample,
        CdkPopoverEditCellSpanVanillaTableExample,
        CdkPopoverEditTabOutVanillaTableExample,
        CdkPopoverEditVanillaTableExample] });
CdkPopoverEditExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CdkPopoverEditExamplesModule, imports: [[CdkPopoverEditModule, CdkTableModule, FormsModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CdkPopoverEditExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkPopoverEditModule, CdkTableModule, FormsModule, CommonModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLDJFQUEyRSxDQUFDO0FBQzVILE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLGlFQUFpRSxDQUFDO0FBQzlHLE9BQU8sRUFDTCx5Q0FBeUM7QUFDekMsMkNBQTJDO0VBQzVDLE1BQU0sNkZBQTZGLENBQUM7QUFDckcsT0FBTyxFQUFDLHVDQUF1QyxFQUFDLE1BQU0seUZBQXlGLENBQUM7QUFDaEosT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0seUVBQXlFLENBQUM7O0FBRTFILE9BQU8sRUFDTCxpQ0FBaUMsRUFDakMsNkJBQTZCLEVBQzdCLHlDQUF5QyxFQUN6Qyx1Q0FBdUMsRUFDdkMsaUNBQWlDLEdBQ2xDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMseUNBQXlDO0lBQ3pDLHVDQUF1QztJQUN2QyxpQ0FBaUM7Q0FDbEMsQ0FBQztBQU9GLE1BQU0sT0FBTyw0QkFBNEI7O2lJQUE1Qiw0QkFBNEI7a0lBQTVCLDRCQUE0QixpQkFadkMsNkJBQTZCO1FBQzdCLGlDQUFpQztRQUNqQyx5Q0FBeUM7UUFDekMsdUNBQXVDO1FBQ3ZDLGlDQUFpQyxhQUl2QixvQkFBb0IsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVksYUFSekUsNkJBQTZCO1FBQzdCLGlDQUFpQztRQUNqQyx5Q0FBeUM7UUFDekMsdUNBQXVDO1FBQ3ZDLGlDQUFpQztrSUFRdEIsNEJBQTRCLFlBSjlCLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7bUdBSS9ELDRCQUE0QjtrQkFMeEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztvQkFDMUUsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrUG9wb3ZlckVkaXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0JztcbmltcG9ydCB7Q2RrVGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDZGtQb3BvdmVyRWRpdENka1RhYmxlRmxleEV4YW1wbGV9IGZyb20gJy4vY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZmxleC9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1mbGV4LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtQb3BvdmVyRWRpdENka1RhYmxlRXhhbXBsZX0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1BvcG92ZXJFZGl0Q2VsbFNwYW5WYW5pbGxhVGFibGVFeGFtcGxlLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG59IGZyb20gJy4vY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtQb3BvdmVyRWRpdFRhYk91dFZhbmlsbGFUYWJsZUV4YW1wbGV9IGZyb20gJy4vY2RrLXBvcG92ZXItZWRpdC10YWItb3V0LXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC10YWItb3V0LXZhbmlsbGEtdGFibGUtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1BvcG92ZXJFZGl0VmFuaWxsYVRhYmxlRXhhbXBsZX0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBDZGtQb3BvdmVyRWRpdENka1RhYmxlRmxleEV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0Q2RrVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdENlbGxTcGFuVmFuaWxsYVRhYmxlRXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRUYWJPdXRWYW5pbGxhVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdFZhbmlsbGFUYWJsZUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0Q2RrVGFibGVGbGV4RXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRDZWxsU3BhblZhbmlsbGFUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0VGFiT3V0VmFuaWxsYVRhYmxlRXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRWYW5pbGxhVGFibGVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Nka1BvcG92ZXJFZGl0TW9kdWxlLCBDZGtUYWJsZU1vZHVsZSwgRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3BvdmVyRWRpdEV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=