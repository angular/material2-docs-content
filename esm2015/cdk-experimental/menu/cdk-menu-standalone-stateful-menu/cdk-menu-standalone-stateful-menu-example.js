import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/menu";
function CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "button", 4);
    i0.ɵɵlistener("cdkMenuItemToggled", function CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template_button_cdkMenuItemToggled_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.bold = !ctx_r2.bold; });
    i0.ɵɵtext(2, " Bold ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("cdkMenuItemToggled", function CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template_button_cdkMenuItemToggled_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.italic = !ctx_r4.italic; });
    i0.ɵɵtext(4, " Italic ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "hr");
    i0.ɵɵelementStart(6, "div", 5);
    i0.ɵɵlistener("change", function CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template_div_change_6_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onSizeChange($event); });
    i0.ɵɵelementStart(7, "button", 6);
    i0.ɵɵtext(8, "Small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 6);
    i0.ɵɵtext(10, " Normal ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 6);
    i0.ɵɵtext(12, "Large");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(3);
    i0.ɵɵproperty("cdkMenuPanel", _r0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r1.bold);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r1.italic);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("checked", ctx_r1.size === "Small");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r1.size === "Normal");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r1.size === "Large");
} }
/** @title Stateful Menu with Standalone Trigger. */
export class CdkMenuStandaloneStatefulMenuExample {
    constructor() {
        this.bold = true;
        this.italic = false;
        this.size = 'Normal';
    }
    onSizeChange(item) {
        var _a;
        this.size = (_a = item._elementRef.nativeElement.textContent) === null || _a === void 0 ? void 0 : _a.trim();
    }
}
CdkMenuStandaloneStatefulMenuExample.ɵfac = function CdkMenuStandaloneStatefulMenuExample_Factory(t) { return new (t || CdkMenuStandaloneStatefulMenuExample)(); };
CdkMenuStandaloneStatefulMenuExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkMenuStandaloneStatefulMenuExample, selectors: [["cdk-menu-standalone-stateful-menu-example"]], decls: 4, vars: 1, consts: [["cdkMenuItem", "", 1, "example-standalone-item", 3, "cdkMenuTriggerFor"], ["cdkMenuPanel", ""], ["menu", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItemCheckbox", "", 1, "example-menu-item", 3, "checked", "cdkMenuItemToggled"], ["cdkMenuGroup", "", 3, "change"], ["cdkMenuItemRadio", "", 1, "example-menu-item", 3, "checked"]], template: function CdkMenuStandaloneStatefulMenuExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Click me!");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template, 13, 6, "ng-template", 1, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        i0.ɵɵproperty("cdkMenuTriggerFor", _r0);
    } }, directives: [i1.CdkMenuItem, i1.CdkMenuItemTrigger, i1.CdkMenuPanel, i1.CdkMenu, i1.CdkMenuItemCheckbox, i1.CdkMenuGroup, i1.CdkMenuItemRadio], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nhr[_ngcontent-%COMP%] {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item[_ngcontent-%COMP%], .example-standalone-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item[_ngcontent-%COMP%] {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'][_ngcontent-%COMP%] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'][_ngcontent-%COMP%] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'][_ngcontent-%COMP%] {\n  background-color: rgb(225, 225, 225);\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuStandaloneStatefulMenuExample, [{
        type: Component,
        args: [{
                selector: 'cdk-menu-standalone-stateful-menu-example',
                styleUrls: ['cdk-menu-standalone-stateful-menu-example.css'],
                templateUrl: 'cdk-menu-standalone-stateful-menu-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL21lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS9jZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDR3RDLDhCQUF3RDtJQUN0RCxpQ0FLQztJQUZDLGlQQUFtQztJQUduQyxzQkFDRjtJQUFBLGlCQUFTO0lBQ1QsaUNBS0M7SUFGQyxxUEFBdUM7SUFHdkMsd0JBQ0Y7SUFBQSxpQkFBUztJQUNULHFCQUFNO0lBQ04sOEJBQWtEO0lBQWhDLDZOQUErQjtJQUMvQyxpQ0FBZ0Y7SUFBQSxxQkFBSztJQUFBLGlCQUFTO0lBQzlGLGlDQUFpRjtJQUMvRSx5QkFDRjtJQUFBLGlCQUFTO0lBQ1Qsa0NBQWdGO0lBQUEsc0JBQUs7SUFBQSxpQkFBUztJQUNoRyxpQkFBTTtJQUNSLGlCQUFNOzs7O0lBekI0QixrQ0FBcUI7SUFHbkQsZUFBZ0I7SUFBaEIscUNBQWdCO0lBUWhCLGVBQWtCO0lBQWxCLHVDQUFrQjtJQVFnQixlQUE0QjtJQUE1QixpREFBNEI7SUFDNUIsZUFBNkI7SUFBN0Isa0RBQTZCO0lBRzdCLGVBQTRCO0lBQTVCLGlEQUE0Qjs7QUR2QnBFLG9EQUFvRDtBQU1wRCxNQUFNLE9BQU8sb0NBQW9DO0lBTGpEO1FBTUUsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixTQUFJLEdBQXVCLFFBQVEsQ0FBQztLQUtyQztJQUhDLFlBQVksQ0FBQyxJQUFpQjs7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsMENBQUUsSUFBSSxFQUFFLENBQUM7SUFDakUsQ0FBQzs7d0hBUlUsb0NBQW9DO3VGQUFwQyxvQ0FBb0M7UUNUakQsaUNBQStFO1FBQUEseUJBQVM7UUFBQSxpQkFBUztRQUVqRyxvSUEyQmM7OztRQTdCTSx1Q0FBMEI7O3VGRFNqQyxvQ0FBb0M7Y0FMaEQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQ0FBMkM7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLCtDQUErQyxDQUFDO2dCQUM1RCxXQUFXLEVBQUUsZ0RBQWdEO2FBQzlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtNZW51SXRlbX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9tZW51JztcblxuLyoqIEB0aXRsZSBTdGF0ZWZ1bCBNZW51IHdpdGggU3RhbmRhbG9uZSBUcmlnZ2VyLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVTdGFuZGFsb25lU3RhdGVmdWxNZW51RXhhbXBsZSB7XG4gIGJvbGQgPSB0cnVlO1xuICBpdGFsaWMgPSBmYWxzZTtcblxuICBzaXplOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAnTm9ybWFsJztcblxuICBvblNpemVDaGFuZ2UoaXRlbTogQ2RrTWVudUl0ZW0pIHtcbiAgICB0aGlzLnNpemUgPSBpdGVtLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ/LnRyaW0oKTtcbiAgfVxufVxuIiwiPGJ1dHRvbiBjZGtNZW51SXRlbSBbY2RrTWVudVRyaWdnZXJGb3JdPVwibWVudVwiIGNsYXNzPVwiZXhhbXBsZS1zdGFuZGFsb25lLWl0ZW1cIj5DbGljayBtZSE8L2J1dHRvbj5cblxuPG5nLXRlbXBsYXRlIGNka01lbnVQYW5lbCAjbWVudT1cImNka01lbnVQYW5lbFwiPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudSBbY2RrTWVudVBhbmVsXT1cIm1lbnVcIj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCJcbiAgICAgIFtjaGVja2VkXT1cImJvbGRcIlxuICAgICAgKGNka01lbnVJdGVtVG9nZ2xlZCk9XCJib2xkID0gIWJvbGRcIlxuICAgICAgY2RrTWVudUl0ZW1DaGVja2JveFxuICAgID5cbiAgICAgIEJvbGRcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCJcbiAgICAgIFtjaGVja2VkXT1cIml0YWxpY1wiXG4gICAgICAoY2RrTWVudUl0ZW1Ub2dnbGVkKT1cIml0YWxpYyA9ICFpdGFsaWNcIlxuICAgICAgY2RrTWVudUl0ZW1DaGVja2JveFxuICAgID5cbiAgICAgIEl0YWxpY1xuICAgIDwvYnV0dG9uPlxuICAgIDxociAvPlxuICAgIDxkaXYgY2RrTWVudUdyb3VwIChjaGFuZ2UpPVwib25TaXplQ2hhbmdlKCRldmVudClcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIFtjaGVja2VkXT1cInNpemUgPT09ICdTbWFsbCdcIiBjZGtNZW51SXRlbVJhZGlvPlNtYWxsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBbY2hlY2tlZF09XCJzaXplID09PSAnTm9ybWFsJ1wiIGNka01lbnVJdGVtUmFkaW8+XG4gICAgICAgIE5vcm1hbFxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBbY2hlY2tlZF09XCJzaXplID09PSAnTGFyZ2UnXCIgY2RrTWVudUl0ZW1SYWRpbz5MYXJnZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=