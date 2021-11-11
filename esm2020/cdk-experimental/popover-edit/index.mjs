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
CdkPopoverEditExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkPopoverEditExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkPopoverEditExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkPopoverEditExamplesModule, declarations: [CdkPopoverEditCdkTableExample,
        CdkPopoverEditCdkTableFlexExample,
        CdkPopoverEditCellSpanVanillaTableExample,
        CdkPopoverEditTabOutVanillaTableExample,
        CdkPopoverEditVanillaTableExample], imports: [CdkPopoverEditModule, CdkTableModule, FormsModule, CommonModule], exports: [CdkPopoverEditCdkTableExample,
        CdkPopoverEditCdkTableFlexExample,
        CdkPopoverEditCellSpanVanillaTableExample,
        CdkPopoverEditTabOutVanillaTableExample,
        CdkPopoverEditVanillaTableExample] });
CdkPopoverEditExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkPopoverEditExamplesModule, imports: [[CdkPopoverEditModule, CdkTableModule, FormsModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkPopoverEditExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkPopoverEditModule, CdkTableModule, FormsModule, CommonModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLDJFQUEyRSxDQUFDO0FBQzVILE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLGlFQUFpRSxDQUFDO0FBQzlHLE9BQU8sRUFDTCx5Q0FBeUM7QUFDekMsMkNBQTJDO0VBQzVDLE1BQU0sNkZBQTZGLENBQUM7QUFDckcsT0FBTyxFQUFDLHVDQUF1QyxFQUFDLE1BQU0seUZBQXlGLENBQUM7QUFDaEosT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0seUVBQXlFLENBQUM7O0FBRTFILE9BQU8sRUFDTCxpQ0FBaUMsRUFDakMsNkJBQTZCLEVBQzdCLHlDQUF5QyxFQUN6Qyx1Q0FBdUMsRUFDdkMsaUNBQWlDLEdBQ2xDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMseUNBQXlDO0lBQ3pDLHVDQUF1QztJQUN2QyxpQ0FBaUM7Q0FDbEMsQ0FBQztBQVFGLE1BQU0sT0FBTyw0QkFBNEI7O3lIQUE1Qiw0QkFBNEI7MEhBQTVCLDRCQUE0QixpQkFidkMsNkJBQTZCO1FBQzdCLGlDQUFpQztRQUNqQyx5Q0FBeUM7UUFDekMsdUNBQXVDO1FBQ3ZDLGlDQUFpQyxhQUl2QixvQkFBb0IsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVksYUFSekUsNkJBQTZCO1FBQzdCLGlDQUFpQztRQUNqQyx5Q0FBeUM7UUFDekMsdUNBQXVDO1FBQ3ZDLGlDQUFpQzswSEFTdEIsNEJBQTRCLFlBTDlCLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7MkZBSy9ELDRCQUE0QjtrQkFOeEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztvQkFDMUUsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1BvcG92ZXJFZGl0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdCc7XG5pbXBvcnQge0Nka1RhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q2RrUG9wb3ZlckVkaXRDZGtUYWJsZUZsZXhFeGFtcGxlfSBmcm9tICcuL2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWZsZXgvY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZmxleC1leGFtcGxlJztcbmltcG9ydCB7Q2RrUG9wb3ZlckVkaXRDZGtUYWJsZUV4YW1wbGV9IGZyb20gJy4vY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUvY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtQb3BvdmVyRWRpdENlbGxTcGFuVmFuaWxsYVRhYmxlRXhhbXBsZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxufSBmcm9tICcuL2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlJztcbmltcG9ydCB7Q2RrUG9wb3ZlckVkaXRUYWJPdXRWYW5pbGxhVGFibGVFeGFtcGxlfSBmcm9tICcuL2Nkay1wb3BvdmVyLWVkaXQtdGFiLW91dC12YW5pbGxhLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtdGFiLW91dC12YW5pbGxhLXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtQb3BvdmVyRWRpdFZhbmlsbGFUYWJsZUV4YW1wbGV9IGZyb20gJy4vY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtdmFuaWxsYS10YWJsZS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUZsZXhFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdENka1RhYmxlRXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRDZWxsU3BhblZhbmlsbGFUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0VGFiT3V0VmFuaWxsYVRhYmxlRXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRWYW5pbGxhVGFibGVFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka1BvcG92ZXJFZGl0Q2RrVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdENka1RhYmxlRmxleEV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0Q2VsbFNwYW5WYW5pbGxhVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdFRhYk91dFZhbmlsbGFUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0VmFuaWxsYVRhYmxlRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDZGtQb3BvdmVyRWRpdE1vZHVsZSwgQ2RrVGFibGVNb2R1bGUsIEZvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9wb3ZlckVkaXRFeGFtcGxlc01vZHVsZSB7fVxuIl19