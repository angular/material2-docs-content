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
CdkTreeExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: CdkTreeExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkTreeExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.0-rc.1", ngImport: i0, type: CdkTreeExamplesModule, declarations: [CdkTreeFlatExample, CdkTreeNestedExample], imports: [CdkTreeModule, MatButtonModule, MatIconModule], exports: [CdkTreeFlatExample, CdkTreeNestedExample] });
CdkTreeExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: CdkTreeExamplesModule, imports: [CdkTreeModule, MatButtonModule, MatIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: CdkTreeExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkTreeModule, MatButtonModule, MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOztBQUUvRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQztBQUVsRCxNQUFNLFFBQVEsR0FBRyxDQUFDLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFPNUQsTUFBTSxPQUFPLHFCQUFxQjs7dUhBQXJCLHFCQUFxQjt3SEFBckIscUJBQXFCLGlCQVBoQixrQkFBa0IsRUFBRSxvQkFBb0IsYUFHOUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxhQUFhLGFBSHZDLGtCQUFrQixFQUFFLG9CQUFvQjt3SEFPN0MscUJBQXFCLFlBSnRCLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYTtnR0FJNUMscUJBQXFCO2tCQUxqQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDO29CQUN4RCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtUcmVlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7Q2RrVHJlZUZsYXRFeGFtcGxlfSBmcm9tICcuL2Nkay10cmVlLWZsYXQvY2RrLXRyZWUtZmxhdC1leGFtcGxlJztcbmltcG9ydCB7Q2RrVHJlZU5lc3RlZEV4YW1wbGV9IGZyb20gJy4vY2RrLXRyZWUtbmVzdGVkL2Nkay10cmVlLW5lc3RlZC1leGFtcGxlJztcblxuZXhwb3J0IHtDZGtUcmVlRmxhdEV4YW1wbGUsIENka1RyZWVOZXN0ZWRFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbQ2RrVHJlZUZsYXRFeGFtcGxlLCBDZGtUcmVlTmVzdGVkRXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDZGtUcmVlTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=