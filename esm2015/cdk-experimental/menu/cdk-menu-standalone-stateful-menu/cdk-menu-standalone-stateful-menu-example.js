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
CdkMenuStandaloneStatefulMenuExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkMenuStandaloneStatefulMenuExample, selectors: [["cdk-menu-standalone-stateful-menu-example"]], decls: 4, vars: 1, consts: [["cdkMenuItem", "", 1, "example-standalone-item", 3, "cdkMenuTriggerFor"], ["cdkMenuPanel", ""], ["menu", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItemCheckbox", "", 1, "example-menu-item", 3, "checked", "cdkMenuItemToggled"], ["cdkMenuGroup", "", 3, "change"], ["cdkMenuItemRadio", "", 1, "example-menu-item", 3, "checked"]], template: function CdkMenuStandaloneStatefulMenuExample_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL21lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS9jZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDR3RDLDhCQUNFO0lBQUEsaUNBTUU7SUFIQSxpUEFBbUM7SUFHbkMsc0JBQ0Y7SUFBQSxpQkFBUztJQUNULGlDQU1FO0lBSEEscVBBQXVDO0lBR3ZDLHdCQUNGO0lBQUEsaUJBQVM7SUFDVCxxQkFDQTtJQUFBLDhCQUNFO0lBRGdCLDZOQUErQjtJQUMvQyxpQ0FBZ0Y7SUFBQSxxQkFBSztJQUFBLGlCQUFTO0lBQzlGLGlDQUNFO0lBQUEseUJBQ0Y7SUFBQSxpQkFBUztJQUNULGtDQUFnRjtJQUFBLHNCQUFLO0lBQUEsaUJBQVM7SUFDaEcsaUJBQU07SUFDUixpQkFBTTs7OztJQXpCNEIsa0NBQXFCO0lBR25ELGVBQWdCO0lBQWhCLHFDQUFnQjtJQVFoQixlQUFrQjtJQUFsQix1Q0FBa0I7SUFRZ0IsZUFBNEI7SUFBNUIsaURBQTRCO0lBQzVCLGVBQTZCO0lBQTdCLGtEQUE2QjtJQUc3QixlQUE0QjtJQUE1QixpREFBNEI7O0FEdkJwRSxvREFBb0Q7QUFNcEQsTUFBTSxPQUFPLG9DQUFvQztJQUxqRDtRQU1FLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsU0FBSSxHQUF1QixRQUFRLENBQUM7S0FLckM7SUFIQyxZQUFZLENBQUMsSUFBaUI7O1FBQzVCLElBQUksQ0FBQyxJQUFJLFNBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVywwQ0FBRSxJQUFJLEVBQUUsQ0FBQztJQUNqRSxDQUFDOzt3SEFSVSxvQ0FBb0M7eUVBQXBDLG9DQUFvQztRQ1RqRCxpQ0FBK0U7UUFBQSx5QkFBUztRQUFBLGlCQUFTO1FBRWpHLG9JQTJCYzs7O1FBN0JNLHVDQUEwQjs7dUZEU2pDLG9DQUFvQztjQUxoRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJDQUEyQztnQkFDckQsU0FBUyxFQUFFLENBQUMsK0NBQStDLENBQUM7Z0JBQzVELFdBQVcsRUFBRSxnREFBZ0Q7YUFDOUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka01lbnVJdGVtfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL21lbnUnO1xuXG4vKiogQHRpdGxlIFN0YXRlZnVsIE1lbnUgd2l0aCBTdGFuZGFsb25lIFRyaWdnZXIuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudVN0YW5kYWxvbmVTdGF0ZWZ1bE1lbnVFeGFtcGxlIHtcbiAgYm9sZCA9IHRydWU7XG4gIGl0YWxpYyA9IGZhbHNlO1xuXG4gIHNpemU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICdOb3JtYWwnO1xuXG4gIG9uU2l6ZUNoYW5nZShpdGVtOiBDZGtNZW51SXRlbSkge1xuICAgIHRoaXMuc2l6ZSA9IGl0ZW0uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudD8udHJpbSgpO1xuICB9XG59XG4iLCI8YnV0dG9uIGNka01lbnVJdGVtIFtjZGtNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgY2xhc3M9XCJleGFtcGxlLXN0YW5kYWxvbmUtaXRlbVwiPkNsaWNrIG1lITwvYnV0dG9uPlxuXG48bmctdGVtcGxhdGUgY2RrTWVudVBhbmVsICNtZW51PVwiY2RrTWVudVBhbmVsXCI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51IFtjZGtNZW51UGFuZWxdPVwibWVudVwiPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIlxuICAgICAgW2NoZWNrZWRdPVwiYm9sZFwiXG4gICAgICAoY2RrTWVudUl0ZW1Ub2dnbGVkKT1cImJvbGQgPSAhYm9sZFwiXG4gICAgICBjZGtNZW51SXRlbUNoZWNrYm94XG4gICAgPlxuICAgICAgQm9sZFxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIlxuICAgICAgW2NoZWNrZWRdPVwiaXRhbGljXCJcbiAgICAgIChjZGtNZW51SXRlbVRvZ2dsZWQpPVwiaXRhbGljID0gIWl0YWxpY1wiXG4gICAgICBjZGtNZW51SXRlbUNoZWNrYm94XG4gICAgPlxuICAgICAgSXRhbGljXG4gICAgPC9idXR0b24+XG4gICAgPGhyIC8+XG4gICAgPGRpdiBjZGtNZW51R3JvdXAgKGNoYW5nZSk9XCJvblNpemVDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgW2NoZWNrZWRdPVwic2l6ZSA9PT0gJ1NtYWxsJ1wiIGNka01lbnVJdGVtUmFkaW8+U21hbGw8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIFtjaGVja2VkXT1cInNpemUgPT09ICdOb3JtYWwnXCIgY2RrTWVudUl0ZW1SYWRpbz5cbiAgICAgICAgTm9ybWFsXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIFtjaGVja2VkXT1cInNpemUgPT09ICdMYXJnZSdcIiBjZGtNZW51SXRlbVJhZGlvPkxhcmdlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==