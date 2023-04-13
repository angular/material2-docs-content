import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/menu";
import * as i2 from "@angular/common";
/** @title Stateful Menu with Standalone Trigger. */
class CdkMenuStandaloneStatefulMenuExample {
    constructor() {
        this.bold = false;
        this.italic = false;
        this.sizes = ['Small', 'Normal', 'Large'];
        this.selectedSize = 'Normal';
    }
    reset() {
        this.bold = false;
        this.italic = false;
        this.selectedSize = 'Normal';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: CdkMenuStandaloneStatefulMenuExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: CdkMenuStandaloneStatefulMenuExample, selector: "cdk-menu-standalone-stateful-menu-example", ngImport: i0, template: "<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-item\">Click me!</button>\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <!-- #docregion bold-item -->\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"bold\"\n        (cdkMenuItemTriggered)=\"bold = !bold\">\n      Bold\n    </button>\n    <!-- #enddocregion bold-item -->\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"italic\"\n        (cdkMenuItemTriggered)=\"italic = !italic\">\n      Italic\n    </button>\n    <hr />\n    <div cdkMenuGroup>\n      <!-- #docregion size-items -->\n      <button\n          *ngFor=\"let size of sizes\"\n          cdkMenuItemRadio\n          class=\"example-menu-item\"\n          [cdkMenuItemChecked]=\"size === selectedSize\"\n          (cdkMenuItemTriggered)=\"selectedSize = size\">\n        {{size}}\n      </button>\n      <!-- #enddocregion size-items -->\n    </div>\n    <hr />\n    <!-- #docregion reset-item -->\n    <button cdkMenuItem\n            class=\"example-menu-item\"\n            (cdkMenuItemTriggered)=\"reset()\">Reset</button>\n    <!-- #enddocregion reset-item -->\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu .example-menu-item {\n  width: 100%;\n}\n\nhr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item,\n.example-standalone-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { kind: "directive", type: i1.CdkMenuItemRadio, selector: "[cdkMenuItemRadio]", exportAs: ["cdkMenuItemRadio"] }, { kind: "directive", type: i1.CdkMenuItemCheckbox, selector: "[cdkMenuItemCheckbox]", exportAs: ["cdkMenuItemCheckbox"] }, { kind: "directive", type: i1.CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition", "cdkMenuTriggerData"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { kind: "directive", type: i1.CdkMenuGroup, selector: "[cdkMenuGroup]", exportAs: ["cdkMenuGroup"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
export { CdkMenuStandaloneStatefulMenuExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: CdkMenuStandaloneStatefulMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-standalone-stateful-menu-example', template: "<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-item\">Click me!</button>\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <!-- #docregion bold-item -->\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"bold\"\n        (cdkMenuItemTriggered)=\"bold = !bold\">\n      Bold\n    </button>\n    <!-- #enddocregion bold-item -->\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"italic\"\n        (cdkMenuItemTriggered)=\"italic = !italic\">\n      Italic\n    </button>\n    <hr />\n    <div cdkMenuGroup>\n      <!-- #docregion size-items -->\n      <button\n          *ngFor=\"let size of sizes\"\n          cdkMenuItemRadio\n          class=\"example-menu-item\"\n          [cdkMenuItemChecked]=\"size === selectedSize\"\n          (cdkMenuItemTriggered)=\"selectedSize = size\">\n        {{size}}\n      </button>\n      <!-- #enddocregion size-items -->\n    </div>\n    <hr />\n    <!-- #docregion reset-item -->\n    <button cdkMenuItem\n            class=\"example-menu-item\"\n            (cdkMenuItemTriggered)=\"reset()\">Reset</button>\n    <!-- #enddocregion reset-item -->\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu .example-menu-item {\n  width: 100%;\n}\n\nhr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item,\n.example-standalone-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDLG9EQUFvRDtBQUNwRCxNQUthLG9DQUFvQztJQUxqRDtRQU1FLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsVUFBSyxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQyxpQkFBWSxHQUF1QixRQUFRLENBQUM7S0FPN0M7SUFMQyxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7SUFDL0IsQ0FBQztxSEFYVSxvQ0FBb0M7eUdBQXBDLG9DQUFvQyxpRkNSakQsc3ZDQXlDQTs7U0RqQ2Esb0NBQW9DO2tHQUFwQyxvQ0FBb0M7a0JBTGhELFNBQVM7K0JBQ0UsMkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFN0YXRlZnVsIE1lbnUgd2l0aCBTdGFuZGFsb25lIFRyaWdnZXIuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudVN0YW5kYWxvbmVTdGF0ZWZ1bE1lbnVFeGFtcGxlIHtcbiAgYm9sZCA9IGZhbHNlO1xuICBpdGFsaWMgPSBmYWxzZTtcblxuICBzaXplcyA9IFsnU21hbGwnLCAnTm9ybWFsJywgJ0xhcmdlJ107XG4gIHNlbGVjdGVkU2l6ZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJ05vcm1hbCc7XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5ib2xkID0gZmFsc2U7XG4gICAgdGhpcy5pdGFsaWMgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkU2l6ZSA9ICdOb3JtYWwnO1xuICB9XG59XG4iLCI8YnV0dG9uIFtjZGtNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgY2xhc3M9XCJleGFtcGxlLXN0YW5kYWxvbmUtaXRlbVwiPkNsaWNrIG1lITwvYnV0dG9uPlxuXG48bmctdGVtcGxhdGUgI21lbnU+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxuICAgIDwhLS0gI2RvY3JlZ2lvbiBib2xkLWl0ZW0gLS0+XG4gICAgPGJ1dHRvblxuICAgICAgICBjZGtNZW51SXRlbUNoZWNrYm94XG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIlxuICAgICAgICBbY2RrTWVudUl0ZW1DaGVja2VkXT1cImJvbGRcIlxuICAgICAgICAoY2RrTWVudUl0ZW1UcmlnZ2VyZWQpPVwiYm9sZCA9ICFib2xkXCI+XG4gICAgICBCb2xkXG4gICAgPC9idXR0b24+XG4gICAgPCEtLSAjZW5kZG9jcmVnaW9uIGJvbGQtaXRlbSAtLT5cbiAgICA8YnV0dG9uXG4gICAgICAgIGNka01lbnVJdGVtQ2hlY2tib3hcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiXG4gICAgICAgIFtjZGtNZW51SXRlbUNoZWNrZWRdPVwiaXRhbGljXCJcbiAgICAgICAgKGNka01lbnVJdGVtVHJpZ2dlcmVkKT1cIml0YWxpYyA9ICFpdGFsaWNcIj5cbiAgICAgIEl0YWxpY1xuICAgIDwvYnV0dG9uPlxuICAgIDxociAvPlxuICAgIDxkaXYgY2RrTWVudUdyb3VwPlxuICAgICAgPCEtLSAjZG9jcmVnaW9uIHNpemUtaXRlbXMgLS0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHNpemUgb2Ygc2l6ZXNcIlxuICAgICAgICAgIGNka01lbnVJdGVtUmFkaW9cbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCJcbiAgICAgICAgICBbY2RrTWVudUl0ZW1DaGVja2VkXT1cInNpemUgPT09IHNlbGVjdGVkU2l6ZVwiXG4gICAgICAgICAgKGNka01lbnVJdGVtVHJpZ2dlcmVkKT1cInNlbGVjdGVkU2l6ZSA9IHNpemVcIj5cbiAgICAgICAge3tzaXplfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPCEtLSAjZW5kZG9jcmVnaW9uIHNpemUtaXRlbXMgLS0+XG4gICAgPC9kaXY+XG4gICAgPGhyIC8+XG4gICAgPCEtLSAjZG9jcmVnaW9uIHJlc2V0LWl0ZW0gLS0+XG4gICAgPGJ1dHRvbiBjZGtNZW51SXRlbVxuICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiXG4gICAgICAgICAgICAoY2RrTWVudUl0ZW1UcmlnZ2VyZWQpPVwicmVzZXQoKVwiPlJlc2V0PC9idXR0b24+XG4gICAgPCEtLSAjZW5kZG9jcmVnaW9uIHJlc2V0LWl0ZW0gLS0+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==