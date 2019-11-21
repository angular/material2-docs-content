import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeFlatExample } from './cdk-tree-flat/cdk-tree-flat-example';
import { CdkTreeNestedExample } from './cdk-tree-nested/cdk-tree-nested-example';
import * as i0 from "@angular/core";
export { CdkTreeFlatExample, CdkTreeNestedExample, };
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
                        MatButtonModule,
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    CdkTreeExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkTreeExamplesModule });
    CdkTreeExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkTreeExamplesModule_Factory(t) { return new (t || CdkTreeExamplesModule)(); }, imports: [[
                CdkTreeModule,
                MatButtonModule,
                MatIconModule,
            ]] });
    return CdkTreeExamplesModule;
}());
export { CdkTreeExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkTreeExamplesModule, { declarations: [CdkTreeFlatExample,
        CdkTreeNestedExample], imports: [CdkTreeModule,
        MatButtonModule,
        MatIconModule], exports: [CdkTreeFlatExample,
        CdkTreeNestedExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTreeExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkTreeModule,
                    MatButtonModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOztBQUUvRSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLG9CQUFvQixHQUNyQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3JCLENBQUM7QUFFRjtJQUFBO0tBVUM7O2dCQVZBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7NkRBQ1kscUJBQXFCOzZIQUFyQixxQkFBcUIsa0JBUnZCO2dCQUNQLGFBQWE7Z0JBQ2IsZUFBZTtnQkFDZixhQUFhO2FBQ2Q7Z0NBdEJIO0NBMkJDLEFBVkQsSUFVQztTQURZLHFCQUFxQjt3RkFBckIscUJBQXFCLG1CQWJoQyxrQkFBa0I7UUFDbEIsb0JBQW9CLGFBS2xCLGFBQWE7UUFDYixlQUFlO1FBQ2YsYUFBYSxhQVJmLGtCQUFrQjtRQUNsQixvQkFBb0I7a0RBWVQscUJBQXFCO2NBVGpDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixlQUFlO29CQUNmLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtUcmVlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7Q2RrVHJlZUZsYXRFeGFtcGxlfSBmcm9tICcuL2Nkay10cmVlLWZsYXQvY2RrLXRyZWUtZmxhdC1leGFtcGxlJztcbmltcG9ydCB7Q2RrVHJlZU5lc3RlZEV4YW1wbGV9IGZyb20gJy4vY2RrLXRyZWUtbmVzdGVkL2Nkay10cmVlLW5lc3RlZC1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrVHJlZUZsYXRFeGFtcGxlLFxuICBDZGtUcmVlTmVzdGVkRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtUcmVlRmxhdEV4YW1wbGUsXG4gIENka1RyZWVOZXN0ZWRFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1RyZWVNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUcmVlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19