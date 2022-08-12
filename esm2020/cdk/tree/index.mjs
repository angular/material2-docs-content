import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeFlatExample } from './cdk-tree-flat/cdk-tree-flat-example';
import { CdkTreeNestedExample } from './cdk-tree-nested/cdk-tree-nested-example';
import * as i0 from "@angular/core";
export { CdkTreeFlatExample, CdkTreeNestedExample };
const EXAMPLES = [CdkTreeFlatExample, CdkTreeNestedExample];
export class CdkTreeExamplesModule {
}
CdkTreeExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CdkTreeExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkTreeExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: CdkTreeExamplesModule, declarations: [CdkTreeFlatExample, CdkTreeNestedExample], imports: [CdkTreeModule, MatLegacyButtonModule, MatIconModule], exports: [CdkTreeFlatExample, CdkTreeNestedExample] });
CdkTreeExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CdkTreeExamplesModule, imports: [CdkTreeModule, MatLegacyButtonModule, MatIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CdkTreeExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkTreeModule, MatLegacyButtonModule, MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRS9FLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBQyxDQUFDO0FBRWxELE1BQU0sUUFBUSxHQUFHLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQU81RCxNQUFNLE9BQU8scUJBQXFCOztrSEFBckIscUJBQXFCO21IQUFyQixxQkFBcUIsaUJBUGhCLGtCQUFrQixFQUFFLG9CQUFvQixhQUc5QyxhQUFhLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxhQUg3QyxrQkFBa0IsRUFBRSxvQkFBb0I7bUhBTzdDLHFCQUFxQixZQUp0QixhQUFhLEVBQUUscUJBQXFCLEVBQUUsYUFBYTsyRkFJbEQscUJBQXFCO2tCQUxqQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSxhQUFhLENBQUM7b0JBQzlELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1RyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRMZWdhY3lCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7Q2RrVHJlZUZsYXRFeGFtcGxlfSBmcm9tICcuL2Nkay10cmVlLWZsYXQvY2RrLXRyZWUtZmxhdC1leGFtcGxlJztcbmltcG9ydCB7Q2RrVHJlZU5lc3RlZEV4YW1wbGV9IGZyb20gJy4vY2RrLXRyZWUtbmVzdGVkL2Nkay10cmVlLW5lc3RlZC1leGFtcGxlJztcblxuZXhwb3J0IHtDZGtUcmVlRmxhdEV4YW1wbGUsIENka1RyZWVOZXN0ZWRFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbQ2RrVHJlZUZsYXRFeGFtcGxlLCBDZGtUcmVlTmVzdGVkRXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDZGtUcmVlTW9kdWxlLCBNYXRMZWdhY3lCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=