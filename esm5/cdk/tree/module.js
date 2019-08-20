import * as tslib_1 from "tslib";
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeFlatExample } from './cdk-tree-flat/cdk-tree-flat-example';
import { CdkTreeNestedExample } from './cdk-tree-nested/cdk-tree-nested-example';
var EXAMPLES = [
    CdkTreeFlatExample,
    CdkTreeNestedExample,
];
var CdkTreeExamplesModule = /** @class */ (function () {
    function CdkTreeExamplesModule() {
    }
    CdkTreeExamplesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CdkTreeModule,
                MatIconModule,
            ],
            declarations: EXAMPLES,
            exports: EXAMPLES,
        })
    ], CdkTreeExamplesModule);
    return CdkTreeExamplesModule;
}());
export { CdkTreeExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90cmVlL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBRS9FLElBQU0sUUFBUSxHQUFHO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUNyQixDQUFDO0FBVUY7SUFBQTtJQUNBLENBQUM7SUFEWSxxQkFBcUI7UUFSakMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGFBQWE7Z0JBQ2IsYUFBYTthQUNkO1lBQ0QsWUFBWSxFQUFFLFFBQVE7WUFDdEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztPQUNXLHFCQUFxQixDQUNqQztJQUFELDRCQUFDO0NBQUEsQUFERCxJQUNDO1NBRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtUcmVlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0Nka1RyZWVGbGF0RXhhbXBsZX0gZnJvbSAnLi9jZGstdHJlZS1mbGF0L2Nkay10cmVlLWZsYXQtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1RyZWVOZXN0ZWRFeGFtcGxlfSBmcm9tICcuL2Nkay10cmVlLW5lc3RlZC9jZGstdHJlZS1uZXN0ZWQtZXhhbXBsZSc7XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtUcmVlRmxhdEV4YW1wbGUsXG4gIENka1RyZWVOZXN0ZWRFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=