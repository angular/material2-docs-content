import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { CdkTableBasicFlexExample } from './cdk-table-basic-flex/cdk-table-basic-flex-example';
import { CdkTableBasicExample } from './cdk-table-basic/cdk-table-basic-example';
export { CdkTableBasicExample, CdkTableBasicFlexExample, };
var EXAMPLES = [
    CdkTableBasicExample,
    CdkTableBasicFlexExample,
];
var CdkTableExamplesModule = /** @class */ (function () {
    function CdkTableExamplesModule() {
    }
    CdkTableExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CdkTableModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return CdkTableExamplesModule;
}());
export { CdkTableExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90YWJsZS9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFFL0UsT0FBTyxFQUNMLG9CQUFvQixFQUNwQix3QkFBd0IsR0FDekIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2Ysb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUN6QixDQUFDO0FBRUY7SUFBQTtJQVFBLENBQUM7O2dCQVJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOztJQUVELDZCQUFDO0NBQUEsQUFSRCxJQVFDO1NBRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtUYWJsZUJhc2ljRmxleEV4YW1wbGV9IGZyb20gJy4vY2RrLXRhYmxlLWJhc2ljLWZsZXgvY2RrLXRhYmxlLWJhc2ljLWZsZXgtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1RhYmxlQmFzaWNFeGFtcGxlfSBmcm9tICcuL2Nkay10YWJsZS1iYXNpYy9jZGstdGFibGUtYmFzaWMtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENka1RhYmxlQmFzaWNFeGFtcGxlLFxuICBDZGtUYWJsZUJhc2ljRmxleEV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrVGFibGVCYXNpY0V4YW1wbGUsXG4gIENka1RhYmxlQmFzaWNGbGV4RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1RhYmxlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19