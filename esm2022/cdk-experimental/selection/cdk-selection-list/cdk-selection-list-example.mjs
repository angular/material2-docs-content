import { Component } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { CdkSelectionModule } from '@angular/cdk-experimental/selection';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/selection";
import * as i2 from "@angular/material/checkbox";
/**
 * @title CDK Selection on a simple list.
 */
export class CdkSelectionListExample {
    constructor() {
        this.data = ELEMENT_NAMES;
        this.selected1 = [];
        this.selected2 = [];
        this.selected3 = [];
        this.selected4 = [];
    }
    getCurrentSelected(event) {
        return event.after.map(select => select.value);
    }
    trackByFn(index) {
        return index;
    }
    changeElementName() {
        this.data = ELEMENT_SYMBOLS;
    }
    reset() {
        this.data = ELEMENT_NAMES;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: CdkSelectionListExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: CdkSelectionListExample, isStandalone: true, selector: "cdk-selection-list-example", ngImport: i0, template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n", dependencies: [{ kind: "ngmodule", type: CdkSelectionModule }, { kind: "directive", type: i1.CdkSelection, selector: "[cdkSelection]", inputs: ["dataSource", "trackBy", "cdkSelectionMultiple"], outputs: ["cdkSelectionChange"], exportAs: ["cdkSelection"] }, { kind: "directive", type: i1.CdkSelectionToggle, selector: "[cdkSelectionToggle]", inputs: ["cdkSelectionToggleValue", "cdkSelectionToggleIndex"], exportAs: ["cdkSelectionToggle"] }, { kind: "directive", type: i1.CdkSelectAll, selector: "[cdkSelectAll]", exportAs: ["cdkSelectAll"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: CdkSelectionListExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-selection-list-example', standalone: true, imports: [CdkSelectionModule, NgFor, MatCheckboxModule, AsyncPipe], template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n" }]
        }] });
const ELEMENT_NAMES = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
    'Boron',
    'Carbon',
    'Nitrogen',
    'Oxygen',
    'Fluorine',
    'Neon',
    'Sodium',
    'Magnesium',
    'Aluminum',
    'Silicon',
    'Phosphorus',
    'Sulfur',
    'Chlorine',
    'Argon',
    'Potassium',
    'Calcium',
];
const ELEMENT_SYMBOLS = [
    'H',
    'He',
    'Li',
    'Be',
    'B',
    'C',
    'N',
    'O',
    'F',
    'Ne',
    'Na',
    'Mg',
    'Al',
    'Si',
    'P',
    'S',
    'Cl',
    'Ar',
    'K',
    'Ca',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFrQixrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDOzs7O0FBRTdEOztHQUVHO0FBT0gsTUFBTSxPQUFPLHVCQUF1QjtJQU5wQztRQU9FLFNBQUksR0FBRyxhQUFhLENBQUM7UUFDckIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFhLEVBQUUsQ0FBQztLQWlCMUI7SUFmQyxrQkFBa0IsQ0FBQyxLQUE4QjtRQUMvQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUNyQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO0lBQzVCLENBQUM7OEdBckJVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLHNGQ2RwQyxzc0VBNkNBLDJDRGpDWSxrQkFBa0IsK2ZBQUUsS0FBSyxrSEFBRSxpQkFBaUIsNEtBQUUsU0FBUzs7MkZBRXRELHVCQUF1QjtrQkFObkMsU0FBUzsrQkFDRSw0QkFBNEIsY0FFMUIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsQ0FBQzs7QUEwQnBFLE1BQU0sYUFBYSxHQUFHO0lBQ3BCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLFFBQVE7SUFDUixVQUFVO0lBQ1YsT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0NBQ1YsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHO0lBQ3RCLEdBQUc7SUFDSCxJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osR0FBRztJQUNILEdBQUc7SUFDSCxJQUFJO0lBQ0osSUFBSTtJQUNKLEdBQUc7SUFDSCxJQUFJO0NBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3IsIEFzeW5jUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7U2VsZWN0aW9uQ2hhbmdlLCBDZGtTZWxlY3Rpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvc2VsZWN0aW9uJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcblxuLyoqXG4gKiBAdGl0bGUgQ0RLIFNlbGVjdGlvbiBvbiBhIHNpbXBsZSBsaXN0LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstc2VsZWN0aW9uLWxpc3QtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtTZWxlY3Rpb25Nb2R1bGUsIE5nRm9yLCBNYXRDaGVja2JveE1vZHVsZSwgQXN5bmNQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrU2VsZWN0aW9uTGlzdEV4YW1wbGUge1xuICBkYXRhID0gRUxFTUVOVF9OQU1FUztcbiAgc2VsZWN0ZWQxOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDI6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkMzogc3RyaW5nW10gPSBbXTtcbiAgc2VsZWN0ZWQ0OiBzdHJpbmdbXSA9IFtdO1xuXG4gIGdldEN1cnJlbnRTZWxlY3RlZChldmVudDogU2VsZWN0aW9uQ2hhbmdlPHN0cmluZz4pIHtcbiAgICByZXR1cm4gZXZlbnQuYWZ0ZXIubWFwKHNlbGVjdCA9PiBzZWxlY3QudmFsdWUpO1xuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBjaGFuZ2VFbGVtZW50TmFtZSgpIHtcbiAgICB0aGlzLmRhdGEgPSBFTEVNRU5UX1NZTUJPTFM7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRhdGEgPSBFTEVNRU5UX05BTUVTO1xuICB9XG59XG5cbmNvbnN0IEVMRU1FTlRfTkFNRVMgPSBbXG4gICdIeWRyb2dlbicsXG4gICdIZWxpdW0nLFxuICAnTGl0aGl1bScsXG4gICdCZXJ5bGxpdW0nLFxuICAnQm9yb24nLFxuICAnQ2FyYm9uJyxcbiAgJ05pdHJvZ2VuJyxcbiAgJ094eWdlbicsXG4gICdGbHVvcmluZScsXG4gICdOZW9uJyxcbiAgJ1NvZGl1bScsXG4gICdNYWduZXNpdW0nLFxuICAnQWx1bWludW0nLFxuICAnU2lsaWNvbicsXG4gICdQaG9zcGhvcnVzJyxcbiAgJ1N1bGZ1cicsXG4gICdDaGxvcmluZScsXG4gICdBcmdvbicsXG4gICdQb3Rhc3NpdW0nLFxuICAnQ2FsY2l1bScsXG5dO1xuXG5jb25zdCBFTEVNRU5UX1NZTUJPTFMgPSBbXG4gICdIJyxcbiAgJ0hlJyxcbiAgJ0xpJyxcbiAgJ0JlJyxcbiAgJ0InLFxuICAnQycsXG4gICdOJyxcbiAgJ08nLFxuICAnRicsXG4gICdOZScsXG4gICdOYScsXG4gICdNZycsXG4gICdBbCcsXG4gICdTaScsXG4gICdQJyxcbiAgJ1MnLFxuICAnQ2wnLFxuICAnQXInLFxuICAnSycsXG4gICdDYScsXG5dO1xuIiwiPGgzPjxjb2RlPm5hdGl2ZSBpbnB1dDwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQxfX1cbjx1bCBjZGtTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFtjZGtTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgKGNka1NlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDEgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2RrU2VsZWN0QWxsICNhbGxUb2dnbGVyPVwiY2RrU2VsZWN0QWxsXCJcbiAgICAgIFtjaGVja2VkXT1cImFsbFRvZ2dsZXIuY2hlY2tlZCB8IGFzeW5jXCJcbiAgICAgIFtpbmRldGVybWluYXRlXT1cImFsbFRvZ2dsZXIuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCJcbiAgICAgIChjbGljayk9XCJhbGxUb2dnbGVyLnRvZ2dsZSgkZXZlbnQpXCI+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhXCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNka1NlbGVjdGlvblRvZ2dsZSAjdG9nZ2xlcj1cImNka1NlbGVjdGlvblRvZ2dsZVwiIFtjZGtTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCJcbiAgICAgIFtjaGVja2VkXT1cInRvZ2dsZXIuY2hlY2tlZCB8IGFzeW5jXCIgKGNsaWNrKT1cInRvZ2dsZXIudG9nZ2xlKClcIj5cbiAgICB7e2l0ZW19fVxuICA8L2xpPlxuPC91bD5cblxuPGgzPjxjb2RlPm1hdC1jaGVja2JveDwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQyfX1cbjx1bCBjZGtTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFtjZGtTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgKGNka1NlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDIgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdEFsbCAjdG9nZ2xlMT1cImNka1NlbGVjdEFsbFwiIFtpbmRldGVybWluYXRlXT1cInRvZ2dsZTEuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCI+PC9tYXQtY2hlY2tib3g+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhXCI+XG4gICAgPG1hdC1jaGVja2JveCBjZGtTZWxlY3Rpb25Ub2dnbGUgW2Nka1NlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIj48L21hdC1jaGVja2JveD5cbiAgICB7e2l0ZW19fVxuICA8L2xpPlxuPC91bD5cblxuPGgzPjxjb2RlPlNpbmdsZSBzZWxlY3Qgd2l0aCBtYXQtY2hlY2tib3g8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkM319XG48dWwgY2RrU2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbY2RrU2VsZWN0aW9uTXVsdGlwbGVdPVwiZmFsc2VcIiAoY2RrU2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkMyA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhXCI+XG4gICAgPG1hdC1jaGVja2JveCBjZGtTZWxlY3Rpb25Ub2dnbGUgW2Nka1NlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIj48L21hdC1jaGVja2JveD5cbiAgICB7e2l0ZW19fVxuICA8L2xpPlxuPC91bD5cblxuPGgzPjxjb2RlPndpdGggdHJhY2tCeTwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQ0fX1cbjx1bCBjZGtTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFtjZGtTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgW3RyYWNrQnldPVwidHJhY2tCeUZuXCIgKGNka1NlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDQgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdEFsbCAjdG9nZ2xlMj1cImNka1NlbGVjdEFsbFwiIFtpbmRldGVybWluYXRlXT1cInRvZ2dsZTIuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCI+PC9tYXQtY2hlY2tib3g+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhOyBpbmRleCBhcyBpOyB0cmFja0J5OiB0cmFja0J5Rm5cIj5cbiAgICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdGlvblRvZ2dsZSBbY2RrU2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiIFtjZGtTZWxlY3Rpb25Ub2dnbGVJbmRleF09XCJpXCI+PC9tYXQtY2hlY2tib3g+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxidXR0b24gKGNsaWNrKT1cImNoYW5nZUVsZW1lbnROYW1lKClcIj5DaGFuZ2UgZWxlbWVudCBuYW1lcyBhbmQgdGhlIGFscmVhZHkgc2VsZWN0ZWQgc3RheXM8L2J1dHRvbj5cbjxidXR0b24gKGNsaWNrKT1cInJlc2V0KClcIj5yZXNldDwvYnV0dG9uPlxuIl19