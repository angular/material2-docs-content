import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/chips";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/autocomplete";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/core";
var _c0 = ["fruitInput"];
var _c1 = ["auto"];
function ChipsAutocompleteExample_mat_chip_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 11);
    i0.ɵɵtext(1, "cancel");
    i0.ɵɵelementEnd();
} }
function ChipsAutocompleteExample_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 9);
    i0.ɵɵlistener("removed", function ChipsAutocompleteExample_mat_chip_3_Template_mat_chip_removed_0_listener($event) { i0.ɵɵrestoreView(_r8); var fruit_r5 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.remove(fruit_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ChipsAutocompleteExample_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var fruit_r5 = ctx.$implicit;
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fruit_r5, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.removable);
} }
function ChipsAutocompleteExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var fruit_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", fruit_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fruit_r9, " ");
} }
/**
 * @title Chips Autocomplete
 */
var ChipsAutocompleteExample = /** @class */ (function () {
    function ChipsAutocompleteExample() {
        var _this = this;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl();
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map(function (fruit) { return fruit ? _this._filter(fruit) : _this.allFruits.slice(); }));
    }
    ChipsAutocompleteExample.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.fruitCtrl.setValue(null);
    };
    ChipsAutocompleteExample.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsAutocompleteExample.prototype.selected = function (event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    };
    ChipsAutocompleteExample.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allFruits.filter(function (fruit) { return fruit.toLowerCase().indexOf(filterValue) === 0; });
    };
    ChipsAutocompleteExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-autocomplete-example',
                    templateUrl: 'chips-autocomplete-example.html',
                    styleUrls: ['chips-autocomplete-example.css'],
                },] },
    ];
    /** @nocollapse */
    ChipsAutocompleteExample.ctorParameters = function () { return []; };
    ChipsAutocompleteExample.propDecorators = {
        fruitInput: [{ type: ViewChild, args: ['fruitInput',] }],
        matAutocomplete: [{ type: ViewChild, args: ['auto',] }]
    };
    ChipsAutocompleteExample.ɵfac = function ChipsAutocompleteExample_Factory(t) { return new (t || ChipsAutocompleteExample)(); };
    ChipsAutocompleteExample.ɵcmp = i0.ɵɵdefineComponent({ type: ChipsAutocompleteExample, selectors: [["chips-autocomplete-example"]], viewQuery: function ChipsAutocompleteExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fruitInput = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.matAutocomplete = _t.first);
        } }, decls: 10, vars: 8, consts: [[1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["fruitInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"]], template: function ChipsAutocompleteExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-chip-list", 1, 2);
            i0.ɵɵtemplate(3, ChipsAutocompleteExample_mat_chip_3_Template, 3, 4, "mat-chip", 3);
            i0.ɵɵelementStart(4, "input", 4, 5);
            i0.ɵɵlistener("matChipInputTokenEnd", function ChipsAutocompleteExample_Template_input_matChipInputTokenEnd_4_listener($event) { return ctx.add($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-autocomplete", 6, 7);
            i0.ɵɵlistener("optionSelected", function ChipsAutocompleteExample_Template_mat_autocomplete_optionSelected_6_listener($event) { return ctx.selected($event); });
            i0.ɵɵtemplate(8, ChipsAutocompleteExample_mat_option_8_Template, 2, 2, "mat-option", 8);
            i0.ɵɵpipe(9, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(2);
            var _r3 = i0.ɵɵreference(7);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.fruits);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControl", ctx.fruitCtrl)("matAutocomplete", _r3)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 6, ctx.filteredFruits));
        } }, directives: [i1.MatFormField, i2.MatChipList, i3.NgForOf, i4.DefaultValueAccessor, i5.MatAutocompleteTrigger, i2.MatChipInput, i4.NgControlStatus, i4.FormControlDirective, i5.MatAutocomplete, i2.MatChip, i3.NgIf, i6.MatIcon, i2.MatChipRemove, i7.MatOption], pipes: [i3.AsyncPipe], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return ChipsAutocompleteExample;
}());
export { ChipsAutocompleteExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChipsAutocompleteExample, [{
        type: Component,
        args: [{
                selector: 'chips-autocomplete-example',
                templateUrl: 'chips-autocomplete-example.html',
                styleUrls: ['chips-autocomplete-example.css'],
            }]
    }], function () { return []; }, { fruitInput: [{
            type: ViewChild,
            args: ['fruitInput']
        }], matAutocomplete: [{
            type: ViewChild,
            args: ['auto']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUErQixlQUFlLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc3RixPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7SUNFeEMsb0NBQTBDO0lBQUEsc0JBQU07SUFBQSxpQkFBVzs7OztJQU43RCxtQ0FLRTtJQURBLDZPQUF5QjtJQUN6QixZQUNBO0lBQUEsK0ZBQTBDO0lBQzVDLGlCQUFXOzs7O0lBTFQsOENBQXlCLCtCQUFBO0lBR3pCLGVBQ0E7SUFEQSx5Q0FDQTtJQUF3QixlQUFpQjtJQUFqQix1Q0FBaUI7OztJQVkzQyxzQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjRDLGdDQUFlO0lBQ3RFLGVBQ0Y7SUFERSx5Q0FDRjs7QURkSjs7R0FFRztBQUNIO0lBa0JFO1FBQUEsaUJBSUM7UUFo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QUFDO1lBUHRDLGlCQVFGO1lBQUEsaUJBQWdCO1lBQ2hCLDhDQUNFO1lBRHdDLHVJQUFrQixvQkFBZ0IsSUFBQztZQUMzRSx1RkFDRTs7WUFFSixpQkFBbUI7WUFDckIsaUJBQWlCOzs7O1lBckJYLGVBQTRCO1lBQTVCLG9DQUE0QjtZQVU1QixlQUF5QjtZQUF6QiwyQ0FBeUIsd0JBQUEsd0JBQUEseURBQUE7WUFPZixlQUE0QztZQUE1QyxrRUFBNEM7O21DRHBCNUQ7Q0F1RUMsQUE1REQsSUE0REM7U0F2RFksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDOztrQkFXRSxTQUFTO21CQUFDLFlBQVk7O2tCQUN0QixTQUFTO21CQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NPTU1BLCBFTlRFUn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50LCBNYXRBdXRvY29tcGxldGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQge01hdENoaXBJbnB1dEV2ZW50fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHN0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEB0aXRsZSBDaGlwcyBBdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWF1dG9jb21wbGV0ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzQXV0b2NvbXBsZXRlRXhhbXBsZSB7XG4gIHZpc2libGUgPSB0cnVlO1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgcmVtb3ZhYmxlID0gdHJ1ZTtcbiAgc2VwYXJhdG9yS2V5c0NvZGVzOiBudW1iZXJbXSA9IFtFTlRFUiwgQ09NTUFdO1xuICBmcnVpdEN0cmwgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgZmlsdGVyZWRGcnVpdHM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBmcnVpdHM6IHN0cmluZ1tdID0gWydMZW1vbiddO1xuICBhbGxGcnVpdHM6IHN0cmluZ1tdID0gWydBcHBsZScsICdMZW1vbicsICdMaW1lJywgJ09yYW5nZScsICdTdHJhd2JlcnJ5J107XG5cbiAgQFZpZXdDaGlsZCgnZnJ1aXRJbnB1dCcpIGZydWl0SW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2F1dG8nKSBtYXRBdXRvY29tcGxldGU6IE1hdEF1dG9jb21wbGV0ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbHRlcmVkRnJ1aXRzID0gdGhpcy5mcnVpdEN0cmwudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgbWFwKChmcnVpdDogc3RyaW5nIHwgbnVsbCkgPT4gZnJ1aXQgPyB0aGlzLl9maWx0ZXIoZnJ1aXQpIDogdGhpcy5hbGxGcnVpdHMuc2xpY2UoKSkpO1xuICB9XG5cbiAgYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcblxuICAgIC8vIEFkZCBvdXIgZnJ1aXRcbiAgICBpZiAoKHZhbHVlIHx8ICcnKS50cmltKCkpIHtcbiAgICAgIHRoaXMuZnJ1aXRzLnB1c2godmFsdWUudHJpbSgpKTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCB0aGUgaW5wdXQgdmFsdWVcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5mcnVpdEN0cmwuc2V0VmFsdWUobnVsbCk7XG4gIH1cblxuICByZW1vdmUoZnJ1aXQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mcnVpdHMuaW5kZXhPZihmcnVpdCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5mcnVpdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RlZChldmVudDogTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZnJ1aXRzLnB1c2goZXZlbnQub3B0aW9uLnZpZXdWYWx1ZSk7XG4gICAgdGhpcy5mcnVpdElucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB0aGlzLmZydWl0Q3RybC5zZXRWYWx1ZShudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLmFsbEZydWl0cy5maWx0ZXIoZnJ1aXQgPT4gZnJ1aXQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbHVlKSA9PT0gMCk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtY2hpcC1saXN0XCI+XG4gIDxtYXQtY2hpcC1saXN0ICNjaGlwTGlzdCBhcmlhLWxhYmVsPVwiRnJ1aXQgc2VsZWN0aW9uXCI+XG4gICAgPG1hdC1jaGlwXG4gICAgICAqbmdGb3I9XCJsZXQgZnJ1aXQgb2YgZnJ1aXRzXCJcbiAgICAgIFtzZWxlY3RhYmxlXT1cInNlbGVjdGFibGVcIlxuICAgICAgW3JlbW92YWJsZV09XCJyZW1vdmFibGVcIlxuICAgICAgKHJlbW92ZWQpPVwicmVtb3ZlKGZydWl0KVwiPlxuICAgICAge3tmcnVpdH19XG4gICAgICA8bWF0LWljb24gbWF0Q2hpcFJlbW92ZSAqbmdJZj1cInJlbW92YWJsZVwiPmNhbmNlbDwvbWF0LWljb24+XG4gICAgPC9tYXQtY2hpcD5cbiAgICA8aW5wdXRcbiAgICAgIHBsYWNlaG9sZGVyPVwiTmV3IGZydWl0Li4uXCJcbiAgICAgICNmcnVpdElucHV0XG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZnJ1aXRDdHJsXCJcbiAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiXG4gICAgICBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCJcbiAgICAgIFttYXRDaGlwSW5wdXRTZXBhcmF0b3JLZXlDb2Rlc109XCJzZXBhcmF0b3JLZXlzQ29kZXNcIlxuICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZCgkZXZlbnQpXCI+XG4gIDwvbWF0LWNoaXAtbGlzdD5cbiAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIiAob3B0aW9uU2VsZWN0ZWQpPVwic2VsZWN0ZWQoJGV2ZW50KVwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBmcnVpdCBvZiBmaWx0ZXJlZEZydWl0cyB8IGFzeW5jXCIgW3ZhbHVlXT1cImZydWl0XCI+XG4gICAgICB7e2ZydWl0fX1cbiAgICA8L21hdC1vcHRpb24+XG4gIDwvbWF0LWF1dG9jb21wbGV0ZT5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=