import { CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkPopoverEditCdkTableFlexExample } from './cdk-popover-edit-cdk-table-flex/cdk-popover-edit-cdk-table-flex-example';
import { CdkPopoverEditCdkTableExample } from './cdk-popover-edit-cdk-table/cdk-popover-edit-cdk-table-example';
import { CdkPopoverEditCellSpanVanillaTableExample } from './cdk-popover-edit-cell-span-vanilla-table/cdk-popover-edit-cell-span-vanilla-table-example';
import { CdkPopoverEditTabOutVanillaTableExample } from './cdk-popover-edit-tab-out-vanilla-table/cdk-popover-edit-tab-out-vanilla-table-example';
import { CdkPopoverEditVanillaTableExample } from './cdk-popover-edit-vanilla-table/cdk-popover-edit-vanilla-table-example';
export { CdkPopoverEditCdkTableFlexExample, CdkPopoverEditCdkTableExample, CdkPopoverEditCellSpanVanillaTableExample, CdkPopoverEditTabOutVanillaTableExample, CdkPopoverEditVanillaTableExample };
var EXAMPLES = [
    CdkPopoverEditCdkTableExample,
    CdkPopoverEditCdkTableFlexExample,
    CdkPopoverEditCellSpanVanillaTableExample,
    CdkPopoverEditTabOutVanillaTableExample,
    CdkPopoverEditVanillaTableExample,
];
var CdkPopoverEditExamplesModule = /** @class */ (function () {
    function CdkPopoverEditExamplesModule() {
    }
    CdkPopoverEditExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CdkPopoverEditModule,
                        CdkTableModule,
                        FormsModule,
                        CommonModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return CdkPopoverEditExamplesModule;
}());
export { CdkPopoverEditExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9wb3BvdmVyLWVkaXQvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sMkVBQTJFLENBQUM7QUFDNUgsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0saUVBQWlFLENBQUM7QUFDOUcsT0FBTyxFQUFDLHlDQUF5QyxFQUFDLE1BQU0sNkZBQTZGLENBQUM7QUFDdEosT0FBTyxFQUFDLHVDQUF1QyxFQUFDLE1BQU0seUZBQXlGLENBQUM7QUFDaEosT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0seUVBQXlFLENBQUM7QUFFMUgsT0FBTyxFQUNMLGlDQUFpQyxFQUNqQyw2QkFBNkIsRUFDN0IseUNBQXlDLEVBQ3pDLHVDQUF1QyxFQUN2QyxpQ0FBaUMsRUFDbEMsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyx5Q0FBeUM7SUFDekMsdUNBQXVDO0lBQ3ZDLGlDQUFpQztDQUNsQyxDQUFDO0FBRUY7SUFBQTtJQVdBLENBQUM7O2dCQVhBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOztJQUVELG1DQUFDO0NBQUEsQUFYRCxJQVdDO1NBRFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtQb3BvdmVyRWRpdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xuaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Nka1BvcG92ZXJFZGl0Q2RrVGFibGVGbGV4RXhhbXBsZX0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1mbGV4L2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWZsZXgtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1BvcG92ZXJFZGl0Q2RrVGFibGVFeGFtcGxlfSBmcm9tICcuL2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtQb3BvdmVyRWRpdENlbGxTcGFuVmFuaWxsYVRhYmxlRXhhbXBsZX0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1BvcG92ZXJFZGl0VGFiT3V0VmFuaWxsYVRhYmxlRXhhbXBsZX0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LXRhYi1vdXQtdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LXRhYi1vdXQtdmFuaWxsYS10YWJsZS1leGFtcGxlJztcbmltcG9ydCB7Q2RrUG9wb3ZlckVkaXRWYW5pbGxhVGFibGVFeGFtcGxlfSBmcm9tICcuL2Nkay1wb3BvdmVyLWVkaXQtdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LXZhbmlsbGEtdGFibGUtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENka1BvcG92ZXJFZGl0Q2RrVGFibGVGbGV4RXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0Q2VsbFNwYW5WYW5pbGxhVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdFRhYk91dFZhbmlsbGFUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0VmFuaWxsYVRhYmxlRXhhbXBsZVxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka1BvcG92ZXJFZGl0Q2RrVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdENka1RhYmxlRmxleEV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0Q2VsbFNwYW5WYW5pbGxhVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdFRhYk91dFZhbmlsbGFUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0VmFuaWxsYVRhYmxlRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDZGtQb3BvdmVyRWRpdE1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3BvdmVyRWRpdEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==