import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeFlatExample } from './cdk-tree-flat/cdk-tree-flat-example';
import { CdkTreeNestedExample } from './cdk-tree-nested/cdk-tree-nested-example';
import * as i0 from "@angular/core";
export { CdkTreeFlatExample, CdkTreeNestedExample };
const EXAMPLES = [CdkTreeFlatExample, CdkTreeNestedExample];
export class CdkTreeExamplesModule {
}
CdkTreeExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: CdkTreeExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkTreeExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: CdkTreeExamplesModule, declarations: [CdkTreeFlatExample, CdkTreeNestedExample], imports: [CdkTreeModule, MatButtonModule, MatIconModule], exports: [CdkTreeFlatExample, CdkTreeNestedExample] });
CdkTreeExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: CdkTreeExamplesModule, imports: [[CdkTreeModule, MatButtonModule, MatIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: CdkTreeExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkTreeModule, MatButtonModule, MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOztBQUUvRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQztBQUVsRCxNQUFNLFFBQVEsR0FBRyxDQUFDLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFPNUQsTUFBTSxPQUFPLHFCQUFxQjs7eUhBQXJCLHFCQUFxQjswSEFBckIscUJBQXFCLGlCQVBoQixrQkFBa0IsRUFBRSxvQkFBb0IsYUFHOUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxhQUFhLGFBSHZDLGtCQUFrQixFQUFFLG9CQUFvQjswSEFPN0MscUJBQXFCLFlBSnZCLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUM7a0dBSTdDLHFCQUFxQjtrQkFMakMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQztvQkFDeEQsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrVHJlZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0Nka1RyZWVGbGF0RXhhbXBsZX0gZnJvbSAnLi9jZGstdHJlZS1mbGF0L2Nkay10cmVlLWZsYXQtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1RyZWVOZXN0ZWRFeGFtcGxlfSBmcm9tICcuL2Nkay10cmVlLW5lc3RlZC9jZGstdHJlZS1uZXN0ZWQtZXhhbXBsZSc7XG5cbmV4cG9ydCB7Q2RrVHJlZUZsYXRFeGFtcGxlLCBDZGtUcmVlTmVzdGVkRXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW0Nka1RyZWVGbGF0RXhhbXBsZSwgQ2RrVHJlZU5lc3RlZEV4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2RrVHJlZU1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWVFeGFtcGxlc01vZHVsZSB7fVxuIl19