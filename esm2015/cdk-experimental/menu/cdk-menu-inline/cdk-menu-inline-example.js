import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/menu";
/** @title Gmail inline menu. */
export class CdkMenuInlineExample {
}
CdkMenuInlineExample.ɵfac = function CdkMenuInlineExample_Factory(t) { return new (t || CdkMenuInlineExample)(); };
CdkMenuInlineExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkMenuInlineExample, selectors: [["cdk-menu-inline-example"]], exportAs: ["cdkMenuInlineExample"], decls: 13, vars: 0, consts: [["cdkMenu", "", 1, "example-menu"], ["cdkMenuItem", "", 1, "example-menu-item"]], template: function CdkMenuInlineExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵtext(2, "Inbox");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵtext(4, "Snoozed");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 1);
        i0.ɵɵtext(6, "Important");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 1);
        i0.ɵɵtext(8, "Sent");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 1);
        i0.ɵɵtext(10, "Drafts");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 1);
        i0.ɵɵtext(12, "All Mail");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.CdkMenu, i1.CdkMenuItem], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuInlineExample, [{
        type: Component,
        args: [{
                selector: 'cdk-menu-inline-example',
                exportAs: 'cdkMenuInlineExample',
                styleUrls: ['cdk-menu-inline-example.css'],
                templateUrl: 'cdk-menu-inline-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL21lbnUvY2RrLW1lbnUtaW5saW5lL2Nkay1tZW51LWlubGluZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LWlubGluZS9jZGstbWVudS1pbmxpbmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4QyxnQ0FBZ0M7QUFPaEMsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FDVGpDLDhCQUNFO1FBQUEsaUNBQThDO1FBQUEscUJBQUs7UUFBQSxpQkFBUztRQUM1RCxpQ0FBOEM7UUFBQSx1QkFBTztRQUFBLGlCQUFTO1FBQzlELGlDQUE4QztRQUFBLHlCQUFTO1FBQUEsaUJBQVM7UUFDaEUsaUNBQThDO1FBQUEsb0JBQUk7UUFBQSxpQkFBUztRQUMzRCxpQ0FBOEM7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQzdELGtDQUE4QztRQUFBLHlCQUFRO1FBQUEsaUJBQVM7UUFDakUsaUJBQU07O3VGREVPLG9CQUFvQjtjQU5oQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzFDLFdBQVcsRUFBRSw4QkFBOEI7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgR21haWwgaW5saW5lIG1lbnUuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbWVudS1pbmxpbmUtZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTWVudUlubGluZUV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVJbmxpbmVFeGFtcGxlIHt9XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudT5cbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+SW5ib3g8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U25vb3plZDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5JbXBvcnRhbnQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5EcmFmdHM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+QWxsIE1haWw8L2J1dHRvbj5cbjwvZGl2PlxuIl19