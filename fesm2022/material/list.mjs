import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i2 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import * as i2$1 from '@angular/forms';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @title Basic list
 */
class ListOverviewExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: ListOverviewExample, isStandalone: true, selector: "list-overview-example", ngImport: i0, template: "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-overview-example', imports: [MatListModule], template: "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n" }]
        }] });

/**
 * @title List with sections
 */
class ListSectionsExample {
    folders = [
        {
            name: 'Photos',
            updated: new Date('1/1/16'),
        },
        {
            name: 'Recipes',
            updated: new Date('1/17/16'),
        },
        {
            name: 'Work',
            updated: new Date('1/28/16'),
        },
    ];
    notes = [
        {
            name: 'Vacation Itinerary',
            updated: new Date('2/20/16'),
        },
        {
            name: 'Kitchen Remodel',
            updated: new Date('1/18/16'),
        },
    ];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListSectionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.0", type: ListSectionsExample, isStandalone: true, selector: "list-sections-example", ngImport: i0, template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  @for (folder of folders; track folder) {\n    <mat-list-item>\n      <mat-icon matListItemIcon>folder</mat-icon>\n      <div matListItemTitle>{{folder.name}}</div>\n      <div matListItemLine>{{folder.updated | date}}</div>\n    </mat-list-item>\n  }\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  @for (note of notes; track note) {\n    <mat-list-item>\n      <mat-icon matListItemIcon>note</mat-icon>\n      <div matListItemTitle>{{note.name}}</div>\n      <div matListItemLine>{{note.updated | date}}</div>\n    </mat-list-item>\n  }\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"], dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatDividerModule }, { kind: "pipe", type: DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListSectionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-sections-example', imports: [MatListModule, MatIconModule, MatDividerModule, DatePipe], template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  @for (folder of folders; track folder) {\n    <mat-list-item>\n      <mat-icon matListItemIcon>folder</mat-icon>\n      <div matListItemTitle>{{folder.name}}</div>\n      <div matListItemLine>{{folder.updated | date}}</div>\n    </mat-list-item>\n  }\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  @for (note of notes; track note) {\n    <mat-list-item>\n      <mat-icon matListItemIcon>note</mat-icon>\n      <div matListItemTitle>{{note.name}}</div>\n      <div matListItemLine>{{note.updated | date}}</div>\n    </mat-list-item>\n  }\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"] }]
        }] });

/**
 * @title List with selection
 */
class ListSelectionExample {
    typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.0", type: ListSelectionExample, isStandalone: true, selector: "list-selection-example", ngImport: i0, template: "<mat-selection-list #shoes>\n  @for (shoe of typesOfShoes; track shoe) {\n    <mat-list-option>{{shoe}}</mat-list-option>\n  }\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i1.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-selection-example', imports: [MatListModule], template: "<mat-selection-list #shoes>\n  @for (shoe of typesOfShoes; track shoe) {\n    <mat-list-option>{{shoe}}</mat-list-option>\n  }\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n" }]
        }] });

/**
 * @title List with single selection using Reactive Forms
 */
class ListSingleSelectionExample {
    form;
    shoes = [
        { value: 'boots', name: 'Boots' },
        { value: 'clogs', name: 'Clogs' },
        { value: 'loafers', name: 'Loafers' },
        { value: 'moccasins', name: 'Moccasins' },
        { value: 'sneakers', name: 'Sneakers' },
    ];
    shoesControl = new FormControl();
    constructor() {
        this.form = new FormGroup({
            clothes: this.shoesControl,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListSingleSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.0", type: ListSingleSelectionExample, isStandalone: true, selector: "list-single-selection-example", ngImport: i0, template: "<form [formGroup]=\"form\">\n  <mat-selection-list #shoesList [formControl]=\"shoesControl\" name=\"shoes\" [multiple]=\"false\">\n    @for (shoe of shoes; track shoe) {\n      <mat-list-option [value]=\"shoe.value\">{{shoe.name}}</mat-list-option>\n    }\n  </mat-selection-list>\n  <p>\n     Option selected: {{shoesControl.value ? shoesControl.value[0] : 'None'}} \n  </p>\n</form>", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i1.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListSingleSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-single-selection-example', imports: [MatListModule, FormsModule, ReactiveFormsModule], template: "<form [formGroup]=\"form\">\n  <mat-selection-list #shoesList [formControl]=\"shoesControl\" name=\"shoes\" [multiple]=\"false\">\n    @for (shoe of shoes; track shoe) {\n      <mat-list-option [value]=\"shoe.value\">{{shoe.name}}</mat-list-option>\n    }\n  </mat-selection-list>\n  <p>\n     Option selected: {{shoesControl.value ? shoesControl.value[0] : 'None'}} \n  </p>\n</form>" }]
        }], ctorParameters: () => [] });

/**
 * @title List with single selection using Reactive forms
 */
class ListSingleSelectionReactiveFormExample {
    form;
    shoes = [
        { value: 'boots', name: 'Boots' },
        { value: 'clogs', name: 'Clogs' },
        { value: 'loafers', name: 'Loafers' },
        { value: 'moccasins', name: 'Moccasins' },
        { value: 'sneakers', name: 'Sneakers' },
    ];
    shoesControl = new FormControl();
    constructor() {
        this.form = new FormGroup({
            clothes: this.shoesControl,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListSingleSelectionReactiveFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.0", type: ListSingleSelectionReactiveFormExample, isStandalone: true, selector: "list-single-selection-reactive-form-example", ngImport: i0, template: "<form [formGroup]=\"form\">\n  <mat-selection-list #shoesList [formControl]=\"shoesControl\" name=\"shoes\" [multiple]=\"false\">\n    @for (shoe of shoes; track shoe) {\n      <mat-list-option [value]=\"shoe.value\">{{shoe.name}}</mat-list-option>\n    }\n  </mat-selection-list>\n  <p>\n     Option selected: {{shoesControl.value ? shoesControl.value[0] : 'None'}} \n  </p>\n</form> ", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i1.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListSingleSelectionReactiveFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-single-selection-reactive-form-example', imports: [MatListModule, FormsModule, ReactiveFormsModule], template: "<form [formGroup]=\"form\">\n  <mat-selection-list #shoesList [formControl]=\"shoesControl\" name=\"shoes\" [multiple]=\"false\">\n    @for (shoe of shoes; track shoe) {\n      <mat-list-option [value]=\"shoe.value\">{{shoe.name}}</mat-list-option>\n    }\n  </mat-selection-list>\n  <p>\n     Option selected: {{shoesControl.value ? shoesControl.value[0] : 'None'}} \n  </p>\n</form> " }]
        }], ctorParameters: () => [] });

/**
 * @title Testing with MatListHarness
 */
class ListHarnessExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: ListHarnessExample, isStandalone: true, selector: "list-harness-example", ngImport: i0, template: "<mat-list>\n  <mat-list-item>\n    <div matListItemTitle>Item </div>\n    <div matListItemLine>1</div>\n    <div matListItemIcon>icon</div>\n    <div matListItemAvatar>Avatar</div>\n  </mat-list-item>\n  <div matSubheader>Section 1</div>\n  <a mat-list-item>\n    <span>Item 2</span>\n  </a>\n  <button mat-list-item>Item 3</button>\n  <div matSubheader>Section 2</div>\n</mat-list>\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemAvatar, selector: "[matListItemAvatar]" }, { kind: "directive", type: i1.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-harness-example', imports: [MatListModule], template: "<mat-list>\n  <mat-list-item>\n    <div matListItemTitle>Item </div>\n    <div matListItemLine>1</div>\n    <div matListItemIcon>icon</div>\n    <div matListItemAvatar>Avatar</div>\n  </mat-list-item>\n  <div matSubheader>Section 1</div>\n  <a mat-list-item>\n    <span>Item 2</span>\n  </a>\n  <button mat-list-item>Item 3</button>\n  <div matSubheader>Section 2</div>\n</mat-list>\n" }]
        }] });

/**
 * @title List variants
 */
class ListVariantsExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListVariantsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: ListVariantsExample, isStandalone: true, selector: "list-variants-example", ngImport: i0, template: "<h3>Single line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>This is the title</span>\n  </mat-list-item>\n  <mat-list-item>Also the title</mat-list-item>\n</mat-list>\n\n<h3>Two line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span>Second line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    Second line\n  </mat-list-item>\n</mat-list>\n\n<h3>Three line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line</span>\n    <span matListItemLine>Third line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line. This line will truncate.</span>\n    <span>Third line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line. This line will truncate.</span>\n    Third line\n  </mat-list-item>\n</mat-list>\n\n<h3>Three line list with secondary text wrapping</h3>\n<mat-list class=\"example-list-wrapping\">\n  <mat-list-item lines=\"3\">\n    <span matListItemTitle>Title</span>\n    <span>\n      Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text\n      inside of a `matListItemTitle` or `matListItemLine` will never wrap.\n    </span>\n  </mat-list-item>\n  <mat-list-item lines=\"3\">\n    <span matListItemTitle>Title</span>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est\n  </mat-list-item>\n</mat-list>\n", styles: [".example-list-wrapping {\n  max-width: 500px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ListVariantsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-variants-example', imports: [MatListModule], template: "<h3>Single line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>This is the title</span>\n  </mat-list-item>\n  <mat-list-item>Also the title</mat-list-item>\n</mat-list>\n\n<h3>Two line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span>Second line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    Second line\n  </mat-list-item>\n</mat-list>\n\n<h3>Three line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line</span>\n    <span matListItemLine>Third line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line. This line will truncate.</span>\n    <span>Third line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line. This line will truncate.</span>\n    Third line\n  </mat-list-item>\n</mat-list>\n\n<h3>Three line list with secondary text wrapping</h3>\n<mat-list class=\"example-list-wrapping\">\n  <mat-list-item lines=\"3\">\n    <span matListItemTitle>Title</span>\n    <span>\n      Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text\n      inside of a `matListItemTitle` or `matListItemLine` will never wrap.\n    </span>\n  </mat-list-item>\n  <mat-list-item lines=\"3\">\n    <span matListItemTitle>Title</span>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est\n  </mat-list-item>\n</mat-list>\n", styles: [".example-list-wrapping {\n  max-width: 500px;\n}\n"] }]
        }] });

export { ListHarnessExample, ListOverviewExample, ListSectionsExample, ListSelectionExample, ListSingleSelectionExample, ListSingleSelectionReactiveFormExample, ListVariantsExample };
//# sourceMappingURL=list.mjs.map
