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
    CdkTreeExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CdkTreeModule,
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return CdkTreeExamplesModule;
}());
export { CdkTreeExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90cmVlL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFFL0UsSUFBTSxRQUFRLEdBQUc7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3JCLENBQUM7QUFFRjtJQUFBO0lBU0EsQ0FBQzs7Z0JBVEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7SUFFRCw0QkFBQztDQUFBLEFBVEQsSUFTQztTQURZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrVHJlZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtDZGtUcmVlRmxhdEV4YW1wbGV9IGZyb20gJy4vY2RrLXRyZWUtZmxhdC9jZGstdHJlZS1mbGF0LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtUcmVlTmVzdGVkRXhhbXBsZX0gZnJvbSAnLi9jZGstdHJlZS1uZXN0ZWQvY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUnO1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrVHJlZUZsYXRFeGFtcGxlLFxuICBDZGtUcmVlTmVzdGVkRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDZGtUcmVlTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUcmVlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19