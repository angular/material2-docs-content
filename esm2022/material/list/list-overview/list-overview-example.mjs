import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
/**
 * @title Basic list
 */
class ListOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ListOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: ListOverviewExample, selector: "list-overview-example", ngImport: i0, template: "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n", dependencies: [{ kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }] }); }
}
export { ListOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ListOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-overview-example', template: "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LW92ZXJ2aWV3L2xpc3Qtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1vdmVydmlldy9saXN0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFDSCxNQUlhLG1CQUFtQjtxSEFBbkIsbUJBQW1CO3lHQUFuQixtQkFBbUIsNkRDVGhDLDBOQUtBOztTRElhLG1CQUFtQjtrR0FBbkIsbUJBQW1CO2tCQUovQixTQUFTOytCQUNFLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgbGlzdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdE92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPG1hdC1saXN0IHJvbGU9XCJsaXN0XCI+XG4gIDxtYXQtbGlzdC1pdGVtIHJvbGU9XCJsaXN0aXRlbVwiPkl0ZW0gMTwvbWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1saXN0LWl0ZW0gcm9sZT1cImxpc3RpdGVtXCI+SXRlbSAyPC9tYXQtbGlzdC1pdGVtPlxuICA8bWF0LWxpc3QtaXRlbSByb2xlPVwibGlzdGl0ZW1cIj5JdGVtIDM8L21hdC1saXN0LWl0ZW0+XG48L21hdC1saXN0PlxuIl19