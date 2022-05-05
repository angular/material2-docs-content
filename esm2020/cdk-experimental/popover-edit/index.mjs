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
CdkPopoverEditExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: CdkPopoverEditExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkPopoverEditExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.0-next.16", ngImport: i0, type: CdkPopoverEditExamplesModule, declarations: [CdkPopoverEditCdkTableExample,
        CdkPopoverEditCdkTableFlexExample,
        CdkPopoverEditCellSpanVanillaTableExample,
        CdkPopoverEditTabOutVanillaTableExample,
        CdkPopoverEditVanillaTableExample], imports: [CdkPopoverEditModule, CdkTableModule, FormsModule, CommonModule], exports: [CdkPopoverEditCdkTableExample,
        CdkPopoverEditCdkTableFlexExample,
        CdkPopoverEditCellSpanVanillaTableExample,
        CdkPopoverEditTabOutVanillaTableExample,
        CdkPopoverEditVanillaTableExample] });
CdkPopoverEditExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: CdkPopoverEditExamplesModule, imports: [CdkPopoverEditModule, CdkTableModule, FormsModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: CdkPopoverEditExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkPopoverEditModule, CdkTableModule, FormsModule, CommonModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLDJFQUEyRSxDQUFDO0FBQzVILE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLGlFQUFpRSxDQUFDO0FBQzlHLE9BQU8sRUFDTCx5Q0FBeUM7QUFDekMsMkNBQTJDO0VBQzVDLE1BQU0sNkZBQTZGLENBQUM7QUFDckcsT0FBTyxFQUFDLHVDQUF1QyxFQUFDLE1BQU0seUZBQXlGLENBQUM7QUFDaEosT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0seUVBQXlFLENBQUM7O0FBRTFILE9BQU8sRUFDTCxpQ0FBaUMsRUFDakMsNkJBQTZCLEVBQzdCLHlDQUF5QyxFQUN6Qyx1Q0FBdUMsRUFDdkMsaUNBQWlDLEdBQ2xDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMseUNBQXlDO0lBQ3pDLHVDQUF1QztJQUN2QyxpQ0FBaUM7Q0FDbEMsQ0FBQztBQU9GLE1BQU0sT0FBTyw0QkFBNEI7O2lJQUE1Qiw0QkFBNEI7a0lBQTVCLDRCQUE0QixpQkFadkMsNkJBQTZCO1FBQzdCLGlDQUFpQztRQUNqQyx5Q0FBeUM7UUFDekMsdUNBQXVDO1FBQ3ZDLGlDQUFpQyxhQUl2QixvQkFBb0IsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVksYUFSekUsNkJBQTZCO1FBQzdCLGlDQUFpQztRQUNqQyx5Q0FBeUM7UUFDekMsdUNBQXVDO1FBQ3ZDLGlDQUFpQztrSUFRdEIsNEJBQTRCLFlBSjdCLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWTttR0FJOUQsNEJBQTRCO2tCQUx4QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO29CQUMxRSxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtQb3BvdmVyRWRpdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xuaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Nka1BvcG92ZXJFZGl0Q2RrVGFibGVGbGV4RXhhbXBsZX0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1mbGV4L2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWZsZXgtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1BvcG92ZXJFZGl0Q2RrVGFibGVFeGFtcGxlfSBmcm9tICcuL2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrUG9wb3ZlckVkaXRDZWxsU3BhblZhbmlsbGFUYWJsZUV4YW1wbGUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbn0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1BvcG92ZXJFZGl0VGFiT3V0VmFuaWxsYVRhYmxlRXhhbXBsZX0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LXRhYi1vdXQtdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LXRhYi1vdXQtdmFuaWxsYS10YWJsZS1leGFtcGxlJztcbmltcG9ydCB7Q2RrUG9wb3ZlckVkaXRWYW5pbGxhVGFibGVFeGFtcGxlfSBmcm9tICcuL2Nkay1wb3BvdmVyLWVkaXQtdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LXZhbmlsbGEtdGFibGUtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENka1BvcG92ZXJFZGl0Q2RrVGFibGVGbGV4RXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0Q2VsbFNwYW5WYW5pbGxhVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdFRhYk91dFZhbmlsbGFUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0VmFuaWxsYVRhYmxlRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtQb3BvdmVyRWRpdENka1RhYmxlRXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUZsZXhFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdENlbGxTcGFuVmFuaWxsYVRhYmxlRXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRUYWJPdXRWYW5pbGxhVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdFZhbmlsbGFUYWJsZUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2RrUG9wb3ZlckVkaXRNb2R1bGUsIENka1RhYmxlTW9kdWxlLCBGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1BvcG92ZXJFZGl0RXhhbXBsZXNNb2R1bGUge31cbiJdfQ==