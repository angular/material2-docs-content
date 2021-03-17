import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
function CdkVirtualScrollDlExample_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "dt", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const state_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(state_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(state_r1.capital);
} }
/** @title Virtual scrolling `<dl>` */
export class CdkVirtualScrollDlExample {
    constructor() {
        this.states = [
            { name: 'Alabama', capital: 'Montgomery' },
            { name: 'Alaska', capital: 'Juneau' },
            { name: 'Arizona', capital: 'Phoenix' },
            { name: 'Arkansas', capital: 'Little Rock' },
            { name: 'California', capital: 'Sacramento' },
            { name: 'Colorado', capital: 'Denver' },
            { name: 'Connecticut', capital: 'Hartford' },
            { name: 'Delaware', capital: 'Dover' },
            { name: 'Florida', capital: 'Tallahassee' },
            { name: 'Georgia', capital: 'Atlanta' },
            { name: 'Hawaii', capital: 'Honolulu' },
            { name: 'Idaho', capital: 'Boise' },
            { name: 'Illinois', capital: 'Springfield' },
            { name: 'Indiana', capital: 'Indianapolis' },
            { name: 'Iowa', capital: 'Des Moines' },
            { name: 'Kansas', capital: 'Topeka' },
            { name: 'Kentucky', capital: 'Frankfort' },
            { name: 'Louisiana', capital: 'Baton Rouge' },
            { name: 'Maine', capital: 'Augusta' },
            { name: 'Maryland', capital: 'Annapolis' },
            { name: 'Massachusetts', capital: 'Boston' },
            { name: 'Michigan', capital: 'Lansing' },
            { name: 'Minnesota', capital: 'St. Paul' },
            { name: 'Mississippi', capital: 'Jackson' },
            { name: 'Missouri', capital: 'Jefferson City' },
            { name: 'Montana', capital: 'Helena' },
            { name: 'Nebraska', capital: 'Lincoln' },
            { name: 'Nevada', capital: 'Carson City' },
            { name: 'New Hampshire', capital: 'Concord' },
            { name: 'New Jersey', capital: 'Trenton' },
            { name: 'New Mexico', capital: 'Santa Fe' },
            { name: 'New York', capital: 'Albany' },
            { name: 'North Carolina', capital: 'Raleigh' },
            { name: 'North Dakota', capital: 'Bismarck' },
            { name: 'Ohio', capital: 'Columbus' },
            { name: 'Oklahoma', capital: 'Oklahoma City' },
            { name: 'Oregon', capital: 'Salem' },
            { name: 'Pennsylvania', capital: 'Harrisburg' },
            { name: 'Rhode Island', capital: 'Providence' },
            { name: 'South Carolina', capital: 'Columbia' },
            { name: 'South Dakota', capital: 'Pierre' },
            { name: 'Tennessee', capital: 'Nashville' },
            { name: 'Texas', capital: 'Austin' },
            { name: 'Utah', capital: 'Salt Lake City' },
            { name: 'Vermont', capital: 'Montpelier' },
            { name: 'Virginia', capital: 'Richmond' },
            { name: 'Washington', capital: 'Olympia' },
            { name: 'West Virginia', capital: 'Charleston' },
            { name: 'Wisconsin', capital: 'Madison' },
            { name: 'Wyoming', capital: 'Cheyenne' },
        ];
    }
}
CdkVirtualScrollDlExample.ɵfac = function CdkVirtualScrollDlExample_Factory(t) { return new (t || CdkVirtualScrollDlExample)(); };
CdkVirtualScrollDlExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkVirtualScrollDlExample, selectors: [["cdk-virtual-scroll-dl-example"]], decls: 3, vars: 1, consts: [["itemSize", "60", 1, "example-viewport"], [1, "example-dl"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-dt"], [1, "example-dd"]], template: function CdkVirtualScrollDlExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        i0.ɵɵelementStart(1, "dl", 1);
        i0.ɵɵtemplate(2, CdkVirtualScrollDlExample_ng_container_2_Template, 5, 2, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cdkVirtualForOf", ctx.states);
    } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt[_ngcontent-%COMP%] {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd[_ngcontent-%COMP%] {\n  height: 30px;\n}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkVirtualScrollDlExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-dl-example',
                styleUrls: ['cdk-virtual-scroll-dl-example.css'],
                templateUrl: 'cdk-virtual-scroll-dl-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2Nkay12aXJ0dWFsLXNjcm9sbC1kbC9jZGstdmlydHVhbC1zY3JvbGwtZGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWRsL2Nkay12aXJ0dWFsLXNjcm9sbC1kbC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztJQ0U3RCw2QkFBbUQ7SUFDakQsNkJBQXVCO0lBQUEsWUFBYztJQUFBLGlCQUFLO0lBQzFDLDZCQUF1QjtJQUFBLFlBQWlCO0lBQUEsaUJBQUs7SUFDL0MsMEJBQWU7OztJQUZVLGVBQWM7SUFBZCxtQ0FBYztJQUNkLGVBQWlCO0lBQWpCLHNDQUFpQjs7QURGOUMsc0NBQXNDO0FBT3RDLE1BQU0sT0FBTyx5QkFBeUI7SUFOdEM7UUFPRSxXQUFNLEdBQUc7WUFDUCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUMzQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQztZQUNwQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQztZQUNqQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBQztZQUMzQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUN0QyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ3BDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3RDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQzNDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDNUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUM7WUFDNUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUM7WUFDbEMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO1lBQzlDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1NBQ3ZDLENBQUM7S0FDSDs7a0dBckRZLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDVHRDLHNEQUFvRTtRQUNsRSw2QkFBdUI7UUFDckIsNEZBR2U7UUFDakIsaUJBQUs7UUFDUCxpQkFBOEI7O1FBTGMsZUFBUztRQUFULDRDQUFTOzt1RkRPeEMseUJBQXlCO2NBTnJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDaEQsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsaW5nIGA8ZGw+YCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsRGxFeGFtcGxlIHtcbiAgc3RhdGVzID0gW1xuICAgIHtuYW1lOiAnQWxhYmFtYScsIGNhcGl0YWw6ICdNb250Z29tZXJ5J30sXG4gICAge25hbWU6ICdBbGFza2EnLCBjYXBpdGFsOiAnSnVuZWF1J30sXG4gICAge25hbWU6ICdBcml6b25hJywgY2FwaXRhbDogJ1Bob2VuaXgnfSxcbiAgICB7bmFtZTogJ0Fya2Fuc2FzJywgY2FwaXRhbDogJ0xpdHRsZSBSb2NrJ30sXG4gICAge25hbWU6ICdDYWxpZm9ybmlhJywgY2FwaXRhbDogJ1NhY3JhbWVudG8nfSxcbiAgICB7bmFtZTogJ0NvbG9yYWRvJywgY2FwaXRhbDogJ0RlbnZlcid9LFxuICAgIHtuYW1lOiAnQ29ubmVjdGljdXQnLCBjYXBpdGFsOiAnSGFydGZvcmQnfSxcbiAgICB7bmFtZTogJ0RlbGF3YXJlJywgY2FwaXRhbDogJ0RvdmVyJ30sXG4gICAge25hbWU6ICdGbG9yaWRhJywgY2FwaXRhbDogJ1RhbGxhaGFzc2VlJ30sXG4gICAge25hbWU6ICdHZW9yZ2lhJywgY2FwaXRhbDogJ0F0bGFudGEnfSxcbiAgICB7bmFtZTogJ0hhd2FpaScsIGNhcGl0YWw6ICdIb25vbHVsdSd9LFxuICAgIHtuYW1lOiAnSWRhaG8nLCBjYXBpdGFsOiAnQm9pc2UnfSxcbiAgICB7bmFtZTogJ0lsbGlub2lzJywgY2FwaXRhbDogJ1NwcmluZ2ZpZWxkJ30sXG4gICAge25hbWU6ICdJbmRpYW5hJywgY2FwaXRhbDogJ0luZGlhbmFwb2xpcyd9LFxuICAgIHtuYW1lOiAnSW93YScsIGNhcGl0YWw6ICdEZXMgTW9pbmVzJ30sXG4gICAge25hbWU6ICdLYW5zYXMnLCBjYXBpdGFsOiAnVG9wZWthJ30sXG4gICAge25hbWU6ICdLZW50dWNreScsIGNhcGl0YWw6ICdGcmFua2ZvcnQnfSxcbiAgICB7bmFtZTogJ0xvdWlzaWFuYScsIGNhcGl0YWw6ICdCYXRvbiBSb3VnZSd9LFxuICAgIHtuYW1lOiAnTWFpbmUnLCBjYXBpdGFsOiAnQXVndXN0YSd9LFxuICAgIHtuYW1lOiAnTWFyeWxhbmQnLCBjYXBpdGFsOiAnQW5uYXBvbGlzJ30sXG4gICAge25hbWU6ICdNYXNzYWNodXNldHRzJywgY2FwaXRhbDogJ0Jvc3Rvbid9LFxuICAgIHtuYW1lOiAnTWljaGlnYW4nLCBjYXBpdGFsOiAnTGFuc2luZyd9LFxuICAgIHtuYW1lOiAnTWlubmVzb3RhJywgY2FwaXRhbDogJ1N0LiBQYXVsJ30sXG4gICAge25hbWU6ICdNaXNzaXNzaXBwaScsIGNhcGl0YWw6ICdKYWNrc29uJ30sXG4gICAge25hbWU6ICdNaXNzb3VyaScsIGNhcGl0YWw6ICdKZWZmZXJzb24gQ2l0eSd9LFxuICAgIHtuYW1lOiAnTW9udGFuYScsIGNhcGl0YWw6ICdIZWxlbmEnfSxcbiAgICB7bmFtZTogJ05lYnJhc2thJywgY2FwaXRhbDogJ0xpbmNvbG4nfSxcbiAgICB7bmFtZTogJ05ldmFkYScsIGNhcGl0YWw6ICdDYXJzb24gQ2l0eSd9LFxuICAgIHtuYW1lOiAnTmV3IEhhbXBzaGlyZScsIGNhcGl0YWw6ICdDb25jb3JkJ30sXG4gICAge25hbWU6ICdOZXcgSmVyc2V5JywgY2FwaXRhbDogJ1RyZW50b24nfSxcbiAgICB7bmFtZTogJ05ldyBNZXhpY28nLCBjYXBpdGFsOiAnU2FudGEgRmUnfSxcbiAgICB7bmFtZTogJ05ldyBZb3JrJywgY2FwaXRhbDogJ0FsYmFueSd9LFxuICAgIHtuYW1lOiAnTm9ydGggQ2Fyb2xpbmEnLCBjYXBpdGFsOiAnUmFsZWlnaCd9LFxuICAgIHtuYW1lOiAnTm9ydGggRGFrb3RhJywgY2FwaXRhbDogJ0Jpc21hcmNrJ30sXG4gICAge25hbWU6ICdPaGlvJywgY2FwaXRhbDogJ0NvbHVtYnVzJ30sXG4gICAge25hbWU6ICdPa2xhaG9tYScsIGNhcGl0YWw6ICdPa2xhaG9tYSBDaXR5J30sXG4gICAge25hbWU6ICdPcmVnb24nLCBjYXBpdGFsOiAnU2FsZW0nfSxcbiAgICB7bmFtZTogJ1Blbm5zeWx2YW5pYScsIGNhcGl0YWw6ICdIYXJyaXNidXJnJ30sXG4gICAge25hbWU6ICdSaG9kZSBJc2xhbmQnLCBjYXBpdGFsOiAnUHJvdmlkZW5jZSd9LFxuICAgIHtuYW1lOiAnU291dGggQ2Fyb2xpbmEnLCBjYXBpdGFsOiAnQ29sdW1iaWEnfSxcbiAgICB7bmFtZTogJ1NvdXRoIERha290YScsIGNhcGl0YWw6ICdQaWVycmUnfSxcbiAgICB7bmFtZTogJ1Rlbm5lc3NlZScsIGNhcGl0YWw6ICdOYXNodmlsbGUnfSxcbiAgICB7bmFtZTogJ1RleGFzJywgY2FwaXRhbDogJ0F1c3Rpbid9LFxuICAgIHtuYW1lOiAnVXRhaCcsIGNhcGl0YWw6ICdTYWx0IExha2UgQ2l0eSd9LFxuICAgIHtuYW1lOiAnVmVybW9udCcsIGNhcGl0YWw6ICdNb250cGVsaWVyJ30sXG4gICAge25hbWU6ICdWaXJnaW5pYScsIGNhcGl0YWw6ICdSaWNobW9uZCd9LFxuICAgIHtuYW1lOiAnV2FzaGluZ3RvbicsIGNhcGl0YWw6ICdPbHltcGlhJ30sXG4gICAge25hbWU6ICdXZXN0IFZpcmdpbmlhJywgY2FwaXRhbDogJ0NoYXJsZXN0b24nfSxcbiAgICB7bmFtZTogJ1dpc2NvbnNpbicsIGNhcGl0YWw6ICdNYWRpc29uJ30sXG4gICAge25hbWU6ICdXeW9taW5nJywgY2FwaXRhbDogJ0NoZXllbm5lJ30sXG4gIF07XG59XG4iLCI8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IGNsYXNzPVwiZXhhbXBsZS12aWV3cG9ydFwiIGl0ZW1TaXplPVwiNjBcIj5cbiAgPGRsIGNsYXNzPVwiZXhhbXBsZS1kbFwiPlxuICAgIDxuZy1jb250YWluZXIgKmNka1ZpcnR1YWxGb3I9XCJsZXQgc3RhdGUgb2Ygc3RhdGVzXCI+XG4gICAgICA8ZHQgY2xhc3M9XCJleGFtcGxlLWR0XCI+e3tzdGF0ZS5uYW1lfX08L2R0PlxuICAgICAgPGRkIGNsYXNzPVwiZXhhbXBsZS1kZFwiPnt7c3RhdGUuY2FwaXRhbH19PC9kZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kbD5cbjwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuIl19