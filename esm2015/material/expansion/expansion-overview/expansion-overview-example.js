import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/expansion";
/**
 * @title Basic expansion panel
 */
export class ExpansionOverviewExample {
    constructor() {
        this.panelOpenState = false;
    }
}
ExpansionOverviewExample.ɵfac = function ExpansionOverviewExample_Factory(t) { return new (t || ExpansionOverviewExample)(); };
ExpansionOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpansionOverviewExample, selectors: [["expansion-overview-example"]], decls: 17, vars: 1, consts: [["hideToggle", ""], [3, "opened", "closed"]], template: function ExpansionOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-accordion");
        i0.ɵɵelementStart(1, "mat-expansion-panel", 0);
        i0.ɵɵelementStart(2, "mat-expansion-panel-header");
        i0.ɵɵelementStart(3, "mat-panel-title");
        i0.ɵɵtext(4, " This is the expansion title ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-panel-description");
        i0.ɵɵtext(6, " This is a summary of the content ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "p");
        i0.ɵɵtext(8, "This is the primary content of the panel.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-expansion-panel", 1);
        i0.ɵɵlistener("opened", function ExpansionOverviewExample_Template_mat_expansion_panel_opened_9_listener() { return ctx.panelOpenState = true; })("closed", function ExpansionOverviewExample_Template_mat_expansion_panel_closed_9_listener() { return ctx.panelOpenState = false; });
        i0.ɵɵelementStart(10, "mat-expansion-panel-header");
        i0.ɵɵelementStart(11, "mat-panel-title");
        i0.ɵɵtext(12, " Self aware panel ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-panel-description");
        i0.ɵɵtext(14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "p");
        i0.ɵɵtext(16, "I'm visible because I am open");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(14);
        i0.ɵɵtextInterpolate1(" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");
    } }, directives: [i1.MatAccordion, i1.MatExpansionPanel, i1.MatExpansionPanelHeader, i1.MatExpansionPanelTitle, i1.MatExpansionPanelDescription], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpansionOverviewExample, [{
        type: Component,
        args: [{ selector: 'expansion-overview-example', template: "<mat-accordion>\n<!-- #docregion basic-panel -->\n<!-- #docregion hide-toggle -->\n  <mat-expansion-panel hideToggle>\n<!-- #enddocregion hide-toggle -->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        This is the expansion title\n      </mat-panel-title>\n      <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>This is the primary content of the panel.</p>\n  </mat-expansion-panel>\n<!-- #enddocregion basic-panel -->\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Self aware panel\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel>\n</mat-accordion>\n", styles: [".mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLW92ZXJ2aWV3L2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1vdmVydmlldy9leHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyx3QkFBd0I7SUFMckM7UUFNRSxtQkFBYyxHQUFHLEtBQUssQ0FBQztLQUN4Qjs7Z0dBRlksd0JBQXdCOzJFQUF4Qix3QkFBd0I7UUNWckMscUNBQWU7UUFHYiw4Q0FBZ0M7UUFFOUIsa0RBQTRCO1FBQzFCLHVDQUFpQjtRQUNmLDZDQUNGO1FBQUEsaUJBQWtCO1FBQ2xCLDZDQUF1QjtRQUNyQixrREFDRjtRQUFBLGlCQUF3QjtRQUMxQixpQkFBNkI7UUFDN0IseUJBQUc7UUFBQSx5REFBeUM7UUFBQSxpQkFBSTtRQUNsRCxpQkFBc0I7UUFFdEIsOENBQ3VEO1FBRGxDLHlJQUEyQixJQUFJLElBQUMsNEhBQ0wsS0FBSyxJQURBO1FBRW5ELG1EQUE0QjtRQUMxQix3Q0FBaUI7UUFDZixtQ0FDRjtRQUFBLGlCQUFrQjtRQUNsQiw4Q0FBdUI7UUFDckIsYUFDRjtRQUFBLGlCQUF3QjtRQUMxQixpQkFBNkI7UUFDN0IsMEJBQUc7UUFBQSw4Q0FBNkI7UUFBQSxpQkFBSTtRQUN0QyxpQkFBc0I7UUFDeEIsaUJBQWdCOztRQUxSLGdCQUNGO1FBREUsc0ZBQ0Y7O3VGRGRPLHdCQUF3QjtjQUxwQyxTQUFTOzJCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgZXhwYW5zaW9uIHBhbmVsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdleHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25PdmVydmlld0V4YW1wbGUge1xuICBwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xufVxuIiwiPG1hdC1hY2NvcmRpb24+XG48IS0tICNkb2NyZWdpb24gYmFzaWMtcGFuZWwgLS0+XG48IS0tICNkb2NyZWdpb24gaGlkZS10b2dnbGUgLS0+XG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsIGhpZGVUb2dnbGU+XG48IS0tICNlbmRkb2NyZWdpb24gaGlkZS10b2dnbGUgLS0+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgVGhpcyBpcyB0aGUgZXhwYW5zaW9uIHRpdGxlXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIFRoaXMgaXMgYSBzdW1tYXJ5IG9mIHRoZSBjb250ZW50XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgIDxwPlRoaXMgaXMgdGhlIHByaW1hcnkgY29udGVudCBvZiB0aGUgcGFuZWwuPC9wPlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG48IS0tICNlbmRkb2NyZWdpb24gYmFzaWMtcGFuZWwgLS0+XG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsIChvcGVuZWQpPVwicGFuZWxPcGVuU3RhdGUgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsb3NlZCk9XCJwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlXCI+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgU2VsZiBhd2FyZSBwYW5lbFxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBDdXJyZW50bHkgSSBhbSB7e3BhbmVsT3BlblN0YXRlID8gJ29wZW4nIDogJ2Nsb3NlZCd9fVxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICA8cD5JJ20gdmlzaWJsZSBiZWNhdXNlIEkgYW0gb3BlbjwvcD5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuPC9tYXQtYWNjb3JkaW9uPlxuIl19