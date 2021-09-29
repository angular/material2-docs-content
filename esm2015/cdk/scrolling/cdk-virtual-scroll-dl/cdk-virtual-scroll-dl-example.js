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
        args: [{ selector: 'cdk-virtual-scroll-dl-example', changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\">\n  <dl class=\"example-dl\">\n    <ng-container *cdkVirtualFor=\"let state of states\">\n      <dt class=\"example-dt\">{{state.name}}</dt>\n      <dd class=\"example-dd\">{{state.capital}}</dd>\n    </ng-container>\n  </dl>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd {\n  height: 30px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2Nkay12aXJ0dWFsLXNjcm9sbC1kbC9jZGstdmlydHVhbC1zY3JvbGwtZGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWRsL2Nkay12aXJ0dWFsLXNjcm9sbC1kbC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztJQ0U3RCw2QkFBbUQ7SUFDakQsNkJBQXVCO0lBQUEsWUFBYztJQUFBLGlCQUFLO0lBQzFDLDZCQUF1QjtJQUFBLFlBQWlCO0lBQUEsaUJBQUs7SUFDL0MsMEJBQWU7OztJQUZVLGVBQWM7SUFBZCxtQ0FBYztJQUNkLGVBQWlCO0lBQWpCLHNDQUFpQjs7QURGOUMsc0NBQXNDO0FBT3RDLE1BQU0sT0FBTyx5QkFBeUI7SUFOdEM7UUFPRSxXQUFNLEdBQUc7WUFDUCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUMzQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQztZQUNwQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQztZQUNqQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBQztZQUMzQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUN0QyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ3BDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3RDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQzNDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDNUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUM7WUFDNUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUM7WUFDbEMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO1lBQzlDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1NBQ3ZDLENBQUM7S0FDSDs7a0dBckRZLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDVHRDLHNEQUFvRTtRQUNsRSw2QkFBdUI7UUFDckIsNEZBR2U7UUFDakIsaUJBQUs7UUFDUCxpQkFBOEI7O1FBTGMsZUFBUztRQUFULDRDQUFTOzt1RkRPeEMseUJBQXlCO2NBTnJDLFNBQVM7MkJBQ0UsK0JBQStCLG1CQUd4Qix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBWaXJ0dWFsIHNjcm9sbGluZyBgPGRsPmAgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC1kbC1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay12aXJ0dWFsLXNjcm9sbC1kbC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay12aXJ0dWFsLXNjcm9sbC1kbC1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbERsRXhhbXBsZSB7XG4gIHN0YXRlcyA9IFtcbiAgICB7bmFtZTogJ0FsYWJhbWEnLCBjYXBpdGFsOiAnTW9udGdvbWVyeSd9LFxuICAgIHtuYW1lOiAnQWxhc2thJywgY2FwaXRhbDogJ0p1bmVhdSd9LFxuICAgIHtuYW1lOiAnQXJpem9uYScsIGNhcGl0YWw6ICdQaG9lbml4J30sXG4gICAge25hbWU6ICdBcmthbnNhcycsIGNhcGl0YWw6ICdMaXR0bGUgUm9jayd9LFxuICAgIHtuYW1lOiAnQ2FsaWZvcm5pYScsIGNhcGl0YWw6ICdTYWNyYW1lbnRvJ30sXG4gICAge25hbWU6ICdDb2xvcmFkbycsIGNhcGl0YWw6ICdEZW52ZXInfSxcbiAgICB7bmFtZTogJ0Nvbm5lY3RpY3V0JywgY2FwaXRhbDogJ0hhcnRmb3JkJ30sXG4gICAge25hbWU6ICdEZWxhd2FyZScsIGNhcGl0YWw6ICdEb3Zlcid9LFxuICAgIHtuYW1lOiAnRmxvcmlkYScsIGNhcGl0YWw6ICdUYWxsYWhhc3NlZSd9LFxuICAgIHtuYW1lOiAnR2VvcmdpYScsIGNhcGl0YWw6ICdBdGxhbnRhJ30sXG4gICAge25hbWU6ICdIYXdhaWknLCBjYXBpdGFsOiAnSG9ub2x1bHUnfSxcbiAgICB7bmFtZTogJ0lkYWhvJywgY2FwaXRhbDogJ0JvaXNlJ30sXG4gICAge25hbWU6ICdJbGxpbm9pcycsIGNhcGl0YWw6ICdTcHJpbmdmaWVsZCd9LFxuICAgIHtuYW1lOiAnSW5kaWFuYScsIGNhcGl0YWw6ICdJbmRpYW5hcG9saXMnfSxcbiAgICB7bmFtZTogJ0lvd2EnLCBjYXBpdGFsOiAnRGVzIE1vaW5lcyd9LFxuICAgIHtuYW1lOiAnS2Fuc2FzJywgY2FwaXRhbDogJ1RvcGVrYSd9LFxuICAgIHtuYW1lOiAnS2VudHVja3knLCBjYXBpdGFsOiAnRnJhbmtmb3J0J30sXG4gICAge25hbWU6ICdMb3Vpc2lhbmEnLCBjYXBpdGFsOiAnQmF0b24gUm91Z2UnfSxcbiAgICB7bmFtZTogJ01haW5lJywgY2FwaXRhbDogJ0F1Z3VzdGEnfSxcbiAgICB7bmFtZTogJ01hcnlsYW5kJywgY2FwaXRhbDogJ0FubmFwb2xpcyd9LFxuICAgIHtuYW1lOiAnTWFzc2FjaHVzZXR0cycsIGNhcGl0YWw6ICdCb3N0b24nfSxcbiAgICB7bmFtZTogJ01pY2hpZ2FuJywgY2FwaXRhbDogJ0xhbnNpbmcnfSxcbiAgICB7bmFtZTogJ01pbm5lc290YScsIGNhcGl0YWw6ICdTdC4gUGF1bCd9LFxuICAgIHtuYW1lOiAnTWlzc2lzc2lwcGknLCBjYXBpdGFsOiAnSmFja3Nvbid9LFxuICAgIHtuYW1lOiAnTWlzc291cmknLCBjYXBpdGFsOiAnSmVmZmVyc29uIENpdHknfSxcbiAgICB7bmFtZTogJ01vbnRhbmEnLCBjYXBpdGFsOiAnSGVsZW5hJ30sXG4gICAge25hbWU6ICdOZWJyYXNrYScsIGNhcGl0YWw6ICdMaW5jb2xuJ30sXG4gICAge25hbWU6ICdOZXZhZGEnLCBjYXBpdGFsOiAnQ2Fyc29uIENpdHknfSxcbiAgICB7bmFtZTogJ05ldyBIYW1wc2hpcmUnLCBjYXBpdGFsOiAnQ29uY29yZCd9LFxuICAgIHtuYW1lOiAnTmV3IEplcnNleScsIGNhcGl0YWw6ICdUcmVudG9uJ30sXG4gICAge25hbWU6ICdOZXcgTWV4aWNvJywgY2FwaXRhbDogJ1NhbnRhIEZlJ30sXG4gICAge25hbWU6ICdOZXcgWW9yaycsIGNhcGl0YWw6ICdBbGJhbnknfSxcbiAgICB7bmFtZTogJ05vcnRoIENhcm9saW5hJywgY2FwaXRhbDogJ1JhbGVpZ2gnfSxcbiAgICB7bmFtZTogJ05vcnRoIERha290YScsIGNhcGl0YWw6ICdCaXNtYXJjayd9LFxuICAgIHtuYW1lOiAnT2hpbycsIGNhcGl0YWw6ICdDb2x1bWJ1cyd9LFxuICAgIHtuYW1lOiAnT2tsYWhvbWEnLCBjYXBpdGFsOiAnT2tsYWhvbWEgQ2l0eSd9LFxuICAgIHtuYW1lOiAnT3JlZ29uJywgY2FwaXRhbDogJ1NhbGVtJ30sXG4gICAge25hbWU6ICdQZW5uc3lsdmFuaWEnLCBjYXBpdGFsOiAnSGFycmlzYnVyZyd9LFxuICAgIHtuYW1lOiAnUmhvZGUgSXNsYW5kJywgY2FwaXRhbDogJ1Byb3ZpZGVuY2UnfSxcbiAgICB7bmFtZTogJ1NvdXRoIENhcm9saW5hJywgY2FwaXRhbDogJ0NvbHVtYmlhJ30sXG4gICAge25hbWU6ICdTb3V0aCBEYWtvdGEnLCBjYXBpdGFsOiAnUGllcnJlJ30sXG4gICAge25hbWU6ICdUZW5uZXNzZWUnLCBjYXBpdGFsOiAnTmFzaHZpbGxlJ30sXG4gICAge25hbWU6ICdUZXhhcycsIGNhcGl0YWw6ICdBdXN0aW4nfSxcbiAgICB7bmFtZTogJ1V0YWgnLCBjYXBpdGFsOiAnU2FsdCBMYWtlIENpdHknfSxcbiAgICB7bmFtZTogJ1Zlcm1vbnQnLCBjYXBpdGFsOiAnTW9udHBlbGllcid9LFxuICAgIHtuYW1lOiAnVmlyZ2luaWEnLCBjYXBpdGFsOiAnUmljaG1vbmQnfSxcbiAgICB7bmFtZTogJ1dhc2hpbmd0b24nLCBjYXBpdGFsOiAnT2x5bXBpYSd9LFxuICAgIHtuYW1lOiAnV2VzdCBWaXJnaW5pYScsIGNhcGl0YWw6ICdDaGFybGVzdG9uJ30sXG4gICAge25hbWU6ICdXaXNjb25zaW4nLCBjYXBpdGFsOiAnTWFkaXNvbid9LFxuICAgIHtuYW1lOiAnV3lvbWluZycsIGNhcGl0YWw6ICdDaGV5ZW5uZSd9LFxuICBdO1xufVxuIiwiPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCBjbGFzcz1cImV4YW1wbGUtdmlld3BvcnRcIiBpdGVtU2l6ZT1cIjYwXCI+XG4gIDxkbCBjbGFzcz1cImV4YW1wbGUtZGxcIj5cbiAgICA8bmctY29udGFpbmVyICpjZGtWaXJ0dWFsRm9yPVwibGV0IHN0YXRlIG9mIHN0YXRlc1wiPlxuICAgICAgPGR0IGNsYXNzPVwiZXhhbXBsZS1kdFwiPnt7c3RhdGUubmFtZX19PC9kdD5cbiAgICAgIDxkZCBjbGFzcz1cImV4YW1wbGUtZGRcIj57e3N0YXRlLmNhcGl0YWx9fTwvZGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGw+XG48L2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydD5cbiJdfQ==