import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkSelectionListExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CdkSelectionListExample, isStandalone: true, selector: "cdk-selection-list-example", ngImport: i0, template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  @for (item of data; track item) {\n    <li>\n      <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\n        [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n      {{item}}\n    </li>\n  }\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  @for (item of data; track item) {\n    <li>\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n      {{item}}\n    </li>\n  }\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  @for (item of data; track item) {\n    <li>\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n      {{item}}\n    </li>\n  }\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  @for (item of data; track trackByFn($index)) {\n    <li>\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"$index\"></mat-checkbox>\n      {{item}}\n    </li>\n  }\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n", dependencies: [{ kind: "ngmodule", type: CdkSelectionModule }, { kind: "directive", type: i1.CdkSelection, selector: "[cdkSelection]", inputs: ["dataSource", "trackBy", "cdkSelectionMultiple"], outputs: ["cdkSelectionChange"], exportAs: ["cdkSelection"] }, { kind: "directive", type: i1.CdkSelectionToggle, selector: "[cdkSelectionToggle]", inputs: ["cdkSelectionToggleValue", "cdkSelectionToggleIndex"], exportAs: ["cdkSelectionToggle"] }, { kind: "directive", type: i1.CdkSelectAll, selector: "[cdkSelectAll]", exportAs: ["cdkSelectAll"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkSelectionListExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-selection-list-example', standalone: true, imports: [CdkSelectionModule, MatCheckboxModule, AsyncPipe], template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  @for (item of data; track item) {\n    <li>\n      <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\n        [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n      {{item}}\n    </li>\n  }\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  @for (item of data; track item) {\n    <li>\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n      {{item}}\n    </li>\n  }\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  @for (item of data; track item) {\n    <li>\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n      {{item}}\n    </li>\n  }\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  @for (item of data; track trackByFn($index)) {\n    <li>\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"$index\"></mat-checkbox>\n      {{item}}\n    </li>\n  }\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQWtCLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFFN0Q7O0dBRUc7QUFPSCxNQUFNLE9BQU8sdUJBQXVCO0lBTnBDO1FBT0UsU0FBSSxHQUFHLGFBQWEsQ0FBQztRQUNyQixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQWEsRUFBRSxDQUFDO0tBaUIxQjtJQWZDLGtCQUFrQixDQUFDLEtBQThCO1FBQy9DLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs4R0FyQlUsdUJBQXVCO2tHQUF2Qix1QkFBdUIsc0ZDZHBDLGt4RUFxREEsMkNEekNZLGtCQUFrQiw4ZkFBRSxpQkFBaUIseVdBQUUsU0FBUzs7MkZBRS9DLHVCQUF1QjtrQkFObkMsU0FBUzsrQkFDRSw0QkFBNEIsY0FFMUIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxDQUFDOztBQTBCN0QsTUFBTSxhQUFhLEdBQUc7SUFDcEIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1YsTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osUUFBUTtJQUNSLFVBQVU7SUFDVixPQUFPO0lBQ1AsV0FBVztJQUNYLFNBQVM7Q0FDVixDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUc7SUFDdEIsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixHQUFHO0lBQ0gsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osR0FBRztJQUNILElBQUk7Q0FDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBc3luY1BpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1NlbGVjdGlvbkNoYW5nZSwgQ2RrU2VsZWN0aW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbic7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5cbi8qKlxuICogQHRpdGxlIENESyBTZWxlY3Rpb24gb24gYSBzaW1wbGUgbGlzdC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1zZWxlY3Rpb24tbGlzdC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrU2VsZWN0aW9uTW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSwgQXN5bmNQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrU2VsZWN0aW9uTGlzdEV4YW1wbGUge1xuICBkYXRhID0gRUxFTUVOVF9OQU1FUztcbiAgc2VsZWN0ZWQxOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDI6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkMzogc3RyaW5nW10gPSBbXTtcbiAgc2VsZWN0ZWQ0OiBzdHJpbmdbXSA9IFtdO1xuXG4gIGdldEN1cnJlbnRTZWxlY3RlZChldmVudDogU2VsZWN0aW9uQ2hhbmdlPHN0cmluZz4pIHtcbiAgICByZXR1cm4gZXZlbnQuYWZ0ZXIubWFwKHNlbGVjdCA9PiBzZWxlY3QudmFsdWUpO1xuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBjaGFuZ2VFbGVtZW50TmFtZSgpIHtcbiAgICB0aGlzLmRhdGEgPSBFTEVNRU5UX1NZTUJPTFM7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRhdGEgPSBFTEVNRU5UX05BTUVTO1xuICB9XG59XG5cbmNvbnN0IEVMRU1FTlRfTkFNRVMgPSBbXG4gICdIeWRyb2dlbicsXG4gICdIZWxpdW0nLFxuICAnTGl0aGl1bScsXG4gICdCZXJ5bGxpdW0nLFxuICAnQm9yb24nLFxuICAnQ2FyYm9uJyxcbiAgJ05pdHJvZ2VuJyxcbiAgJ094eWdlbicsXG4gICdGbHVvcmluZScsXG4gICdOZW9uJyxcbiAgJ1NvZGl1bScsXG4gICdNYWduZXNpdW0nLFxuICAnQWx1bWludW0nLFxuICAnU2lsaWNvbicsXG4gICdQaG9zcGhvcnVzJyxcbiAgJ1N1bGZ1cicsXG4gICdDaGxvcmluZScsXG4gICdBcmdvbicsXG4gICdQb3Rhc3NpdW0nLFxuICAnQ2FsY2l1bScsXG5dO1xuXG5jb25zdCBFTEVNRU5UX1NZTUJPTFMgPSBbXG4gICdIJyxcbiAgJ0hlJyxcbiAgJ0xpJyxcbiAgJ0JlJyxcbiAgJ0InLFxuICAnQycsXG4gICdOJyxcbiAgJ08nLFxuICAnRicsXG4gICdOZScsXG4gICdOYScsXG4gICdNZycsXG4gICdBbCcsXG4gICdTaScsXG4gICdQJyxcbiAgJ1MnLFxuICAnQ2wnLFxuICAnQXInLFxuICAnSycsXG4gICdDYScsXG5dO1xuIiwiPGgzPjxjb2RlPm5hdGl2ZSBpbnB1dDwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQxfX1cbjx1bCBjZGtTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFtjZGtTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgKGNka1NlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDEgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2RrU2VsZWN0QWxsICNhbGxUb2dnbGVyPVwiY2RrU2VsZWN0QWxsXCJcbiAgICAgIFtjaGVja2VkXT1cImFsbFRvZ2dsZXIuY2hlY2tlZCB8IGFzeW5jXCJcbiAgICAgIFtpbmRldGVybWluYXRlXT1cImFsbFRvZ2dsZXIuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCJcbiAgICAgIChjbGljayk9XCJhbGxUb2dnbGVyLnRvZ2dsZSgkZXZlbnQpXCI+XG4gIEBmb3IgKGl0ZW0gb2YgZGF0YTsgdHJhY2sgaXRlbSkge1xuICAgIDxsaT5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjZGtTZWxlY3Rpb25Ub2dnbGUgI3RvZ2dsZXI9XCJjZGtTZWxlY3Rpb25Ub2dnbGVcIiBbY2RrU2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiXG4gICAgICAgIFtjaGVja2VkXT1cInRvZ2dsZXIuY2hlY2tlZCB8IGFzeW5jXCIgKGNsaWNrKT1cInRvZ2dsZXIudG9nZ2xlKClcIj5cbiAgICAgIHt7aXRlbX19XG4gICAgPC9saT5cbiAgfVxuPC91bD5cblxuPGgzPjxjb2RlPm1hdC1jaGVja2JveDwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQyfX1cbjx1bCBjZGtTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFtjZGtTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgKGNka1NlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDIgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdEFsbCAjdG9nZ2xlMT1cImNka1NlbGVjdEFsbFwiIFtpbmRldGVybWluYXRlXT1cInRvZ2dsZTEuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCI+PC9tYXQtY2hlY2tib3g+XG4gIEBmb3IgKGl0ZW0gb2YgZGF0YTsgdHJhY2sgaXRlbSkge1xuICAgIDxsaT5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2RrU2VsZWN0aW9uVG9nZ2xlIFtjZGtTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCI+PC9tYXQtY2hlY2tib3g+XG4gICAgICB7e2l0ZW19fVxuICAgIDwvbGk+XG4gIH1cbjwvdWw+XG5cbjxoMz48Y29kZT5TaW5nbGUgc2VsZWN0IHdpdGggbWF0LWNoZWNrYm94PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDN9fVxuPHVsIGNka1NlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW2Nka1NlbGVjdGlvbk11bHRpcGxlXT1cImZhbHNlXCIgKGNka1NlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDMgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICBAZm9yIChpdGVtIG9mIGRhdGE7IHRyYWNrIGl0ZW0pIHtcbiAgICA8bGk+XG4gICAgICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdGlvblRvZ2dsZSBbY2RrU2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiPjwvbWF0LWNoZWNrYm94PlxuICAgICAge3tpdGVtfX1cbiAgICA8L2xpPlxuICB9XG48L3VsPlxuXG48aDM+PGNvZGU+d2l0aCB0cmFja0J5PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDR9fVxuPHVsIGNka1NlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW2Nka1NlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiBbdHJhY2tCeV09XCJ0cmFja0J5Rm5cIiAoY2RrU2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkNCA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxtYXQtY2hlY2tib3ggY2RrU2VsZWN0QWxsICN0b2dnbGUyPVwiY2RrU2VsZWN0QWxsXCIgW2luZGV0ZXJtaW5hdGVdPVwidG9nZ2xlMi5pbmRldGVybWluYXRlIHwgYXN5bmNcIj48L21hdC1jaGVja2JveD5cbiAgQGZvciAoaXRlbSBvZiBkYXRhOyB0cmFjayB0cmFja0J5Rm4oJGluZGV4KSkge1xuICAgIDxsaT5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2RrU2VsZWN0aW9uVG9nZ2xlIFtjZGtTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCIgW2Nka1NlbGVjdGlvblRvZ2dsZUluZGV4XT1cIiRpbmRleFwiPjwvbWF0LWNoZWNrYm94PlxuICAgICAge3tpdGVtfX1cbiAgICA8L2xpPlxuICB9XG48L3VsPlxuXG48YnV0dG9uIChjbGljayk9XCJjaGFuZ2VFbGVtZW50TmFtZSgpXCI+Q2hhbmdlIGVsZW1lbnQgbmFtZXMgYW5kIHRoZSBhbHJlYWR5IHNlbGVjdGVkIHN0YXlzPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJyZXNldCgpXCI+cmVzZXQ8L2J1dHRvbj5cbiJdfQ==