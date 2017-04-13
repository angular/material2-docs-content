/**
  * @license Angular Material v2.0.0-beta.3
  * Copyright (c) 2017 Google, Inc. https://material.angular.io/
  * License: MIT
  */
import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdDialog, MdDialogRef, MdIconRegistry, MdSnackBar } from '@angular/material/index';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { DomSanitizer } from '@angular/platform-browser';
var AutocompleteOverviewExample = (function () {
    function AutocompleteOverviewExample() {
        var _this = this;
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ];
        this.stateCtrl = new FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
    }
    /**
     * @param {?} val
     * @return {?}
     */
    AutocompleteOverviewExample.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return new RegExp("^" + val, 'gi').test(s); })
            : this.states;
    };
    return AutocompleteOverviewExample;
}());
AutocompleteOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-overview-example',
                template: "<md-input-container> <input mdInput placeholder=\"State\" [mdAutocomplete]=\"auto\" [formControl]=\"stateCtrl\"> </md-input-container> <md-autocomplete #auto=\"mdAutocomplete\"> <md-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\"> {{ state }} </md-option> </md-autocomplete>",
            },] },
];
/**
 * @nocollapse
 */
AutocompleteOverviewExample.ctorParameters = function () { return []; };
var ButtonOverviewExample = (function () {
    function ButtonOverviewExample() {
    }
    return ButtonOverviewExample;
}());
ButtonOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'button-overview-example',
                template: "<button md-button>Click me!</button> ",
            },] },
];
/**
 * @nocollapse
 */
ButtonOverviewExample.ctorParameters = function () { return []; };
var ButtonTypesExample = (function () {
    function ButtonTypesExample() {
    }
    return ButtonTypesExample;
}());
ButtonTypesExample.decorators = [
    { type: Component, args: [{
                selector: 'button-types-example',
                template: "<div class=\"example-container\"> <h3>Normal Buttons</h3> <div class=\"button-row\"> <button md-button>Flat button</button> <button md-raised-button>Raised button</button> <button md-fab><md-icon>check</md-icon></button> <button md-mini-fab><md-icon>check</md-icon></button> </div> <h3>Link Buttons</h3> <div class=\"example-button-row\"> <a md-button routerLink=\".\">Flat button</a> <a md-raised-button routerLink=\".\">Raised button</a> <a md-fab routerLink=\".\"><md-icon>check</md-icon></a> <a md-mini-fab routerLink=\".\"><md-icon>check</md-icon></a> </div> </div> ",
                styles: [".example-container { width: 500px; } .example-button-row { display: flex; align-items: center; justify-content: space-around; } "],
            },] },
];
/**
 * @nocollapse
 */
ButtonTypesExample.ctorParameters = function () { return []; };
var CheckboxOverviewExample = (function () {
    function CheckboxOverviewExample() {
    }
    return CheckboxOverviewExample;
}());
CheckboxOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-overview-example',
                template: "<md-checkbox>Check me!</md-checkbox> ",
            },] },
];
/**
 * @nocollapse
 */
CheckboxOverviewExample.ctorParameters = function () { return []; };
var SliderConfigurableExample = (function () {
    function SliderConfigurableExample() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
    }
    Object.defineProperty(SliderConfigurableExample.prototype, "tickInterval", {
        /**
         * @return {?}
         */
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : null;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this._tickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    return SliderConfigurableExample;
}());
SliderConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'slider-configurable-example',
                template: "<md-card> <md-card-content> <h2 class=\"example-h2\">Slider configuration</h2> <section class=\"example-section\"> <md-input-container class=\"example-margin\"> <input mdInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\"> </md-input-container> <md-input-container class=\"example-margin\"> <input mdInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\"> </md-input-container> <md-input-container class=\"example-margin\"> <input mdInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\"> </md-input-container> <md-input-container class=\"example-margin\"> <input mdInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\"> </md-input-container> </section> <section class=\"example-section\"> <md-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</md-checkbox> <md-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\"> Auto ticks </md-checkbox> <md-input-container class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\"> <input mdInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\"> </md-input-container> </section> <section class=\"example-section\"> <md-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</md-checkbox> </section> <section class=\"example-section\"> <md-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</md-checkbox> <md-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</md-checkbox> </section> <section class=\"example-section\"> <md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox> </section> </md-card-content> </md-card> <md-card class=\"result\"> <md-card-content> <h2 class=\"example-h2\">Result</h2> <md-slider class=\"example-margin\" [disabled]=\"disabled\" [invert]=\"invert\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [thumb-label]=\"thumbLabel\" [tick-interval]=\"tickInterval\" [value]=\"value\" [vertical]=\"vertical\"> </md-slider> </md-card-content> </md-card> ",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } .md-slider-horizontal { width: 300px; } .md-slider-vertical { height: 300px; } "],
                encapsulation: ViewEncapsulation.None,
            },] },
];
/**
 * @nocollapse
 */
SliderConfigurableExample.ctorParameters = function () { return []; };
var TabsOverviewExample = (function () {
    function TabsOverviewExample() {
    }
    return TabsOverviewExample;
}());
TabsOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tabs-overview-example',
                template: "<md-tab-group> <md-tab label=\"Tab 1\">Content 1</md-tab> <md-tab label=\"Tab 2\">Content 2</md-tab> </md-tab-group> ",
            },] },
];
/**
 * @nocollapse
 */
TabsOverviewExample.ctorParameters = function () { return []; };
var SnackBarComponentExample = (function () {
    /**
     * @param {?} snackBar
     */
    function SnackBarComponentExample(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @return {?}
     */
    SnackBarComponentExample.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 500,
        });
    };
    return SnackBarComponentExample;
}());
SnackBarComponentExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example',
                template: "<button md-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\"> Pizza party </button> ",
            },] },
];
/**
 * @nocollapse
 */
SnackBarComponentExample.ctorParameters = function () { return [
    { type: MdSnackBar, },
]; };
var PizzaPartyComponent = (function () {
    function PizzaPartyComponent() {
    }
    return PizzaPartyComponent;
}());
PizzaPartyComponent.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example-snack',
                template: "<span class=\"example-pizza-party\"> 🍕🍕🍕🍕🍕 Pizza party!!! 🍕🍕🍕🍕🍕 </span> ",
                styles: [".example-pizza-party { color: hotpink; } "],
            },] },
];
/**
 * @nocollapse
 */
PizzaPartyComponent.ctorParameters = function () { return []; };
var ProgressBarConfigurableExample = (function () {
    function ProgressBarConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    return ProgressBarConfigurableExample;
}());
ProgressBarConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-bar-configurable-example',
                template: "<md-card> <md-card-content> <h2 class=\"example-h2\">Progress bar configuration</h2> <section class=\"example-section\"> <label class=\"example-margin\">Color:</label> <md-radio-group [(ngModel)]=\"color\"> <md-radio-button class=\"example-margin\" value=\"primary\"> Primary </md-radio-button> <md-radio-button class=\"example-margin\" value=\"accent\"> Accent </md-radio-button> <md-radio-button class=\"example-margin\" value=\"warn\"> Warn </md-radio-button> </md-radio-group> </section> <section class=\"example-section\"> <label class=\"example-margin\">Mode:</label> <md-radio-group [(ngModel)]=\"mode\"> <md-radio-button class=\"example-margin\" value=\"determinate\"> Determinate </md-radio-button> <md-radio-button class=\"example-margin\" value=\"indeterminate\"> Indeterminate </md-radio-button> <md-radio-button class=\"example-margin\" value=\"buffer\"> Buffer </md-radio-button> <md-radio-button class=\"example-margin\" value=\"query\"> Query </md-radio-button> </md-radio-group> </section> <section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\"> <label class=\"example-margin\">Progress:</label> <md-slider class=\"example-margin\" [(ngModel)]=\"value\"></md-slider> </section> <section class=\"example-section\" *ngIf=\"mode == 'buffer'\"> <label class=\"example-margin\">Buffer:</label> <md-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></md-slider> </section> </md-card-content> </md-card> <md-card> <md-card-content> <h2 class=\"example-h2\">Result</h2> <section class=\"example-section\"> <md-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\"> </md-progress-bar> </section> </md-card-content> </md-card> ",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
ProgressBarConfigurableExample.ctorParameters = function () { return []; };
var DialogOverviewExample = (function () {
    /**
     * @param {?} dialog
     */
    function DialogOverviewExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogOverviewExample.prototype.openDialog = function () {
        this.dialog.open(DialogOverviewExampleDialog);
    };
    return DialogOverviewExample;
}());
DialogOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-overview-example',
                template: "<button md-button (click)=\"openDialog()\">Open dialog</button> ",
            },] },
];
/**
 * @nocollapse
 */
DialogOverviewExample.ctorParameters = function () { return [
    { type: MdDialog, },
]; };
var DialogOverviewExampleDialog = (function () {
    function DialogOverviewExampleDialog() {
    }
    return DialogOverviewExampleDialog;
}());
DialogOverviewExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-overview-example-dialog',
                template: "<p> Hi, I'm a dialog! </p> ",
            },] },
];
/**
 * @nocollapse
 */
DialogOverviewExampleDialog.ctorParameters = function () { return []; };
var RadioNgModelExample = (function () {
    function RadioNgModelExample() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    return RadioNgModelExample;
}());
RadioNgModelExample.decorators = [
    { type: Component, args: [{
                selector: 'radio-ng-model-example',
                template: "<md-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\"> <md-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\"> {{season}} </md-radio-button> </md-radio-group> <div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div> ",
                styles: [".example-radio-group { display: inline-flex; flex-direction: column; } .example-radio-button { margin: 5px; } .example-selected-value { margin: 15px 0; } "],
            },] },
];
/**
 * @nocollapse
 */
RadioNgModelExample.ctorParameters = function () { return []; };
var CardFancyExample = (function () {
    function CardFancyExample() {
    }
    return CardFancyExample;
}());
CardFancyExample.decorators = [
    { type: Component, args: [{
                selector: 'card-fancy-example',
                template: "<md-card class=\"example-card\"> <md-card-header> <div md-card-avatar class=\"example-header-image\"></div> <md-card-title>Shiba Inu</md-card-title> <md-card-subtitle>Dog Breed</md-card-subtitle> </md-card-header> <img md-card-image src=\"assets/img/examples/shiba2.jpg\"> <md-card-content> <p> The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. </p> </md-card-content> <md-card-actions> <button md-button>LIKE</button> <button md-button>SHARE</button> </md-card-actions> </md-card> ",
                styles: [".example-card { width: 400px; } .example-header-image { background-image: url('assets/img/examples/shiba1.jpg'); background-size: cover; } "],
            },] },
];
/**
 * @nocollapse
 */
CardFancyExample.ctorParameters = function () { return []; };
var ToolbarOverviewExample = (function () {
    function ToolbarOverviewExample() {
    }
    return ToolbarOverviewExample;
}());
ToolbarOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'toolbar-overview-example',
                template: "<md-toolbar>My App</md-toolbar> ",
            },] },
];
/**
 * @nocollapse
 */
ToolbarOverviewExample.ctorParameters = function () { return []; };
var ToolbarMultirowExample = (function () {
    function ToolbarMultirowExample() {
    }
    return ToolbarMultirowExample;
}());
ToolbarMultirowExample.decorators = [
    { type: Component, args: [{
                selector: 'toolbar-multirow-example',
                template: "<md-toolbar color=\"primary\"> <span>Custom Toolbar</span> <md-toolbar-row> <span>Second Line</span> <span class=\"example-spacer\"></span> <md-icon class=\"example-icon\">verified_user</md-icon> </md-toolbar-row> <md-toolbar-row> <span>Third Line</span> <span class=\"example-spacer\"></span> <md-icon class=\"example-icon\">favorite</md-icon> <md-icon class=\"example-icon\">delete</md-icon> </md-toolbar-row> </md-toolbar> ",
                styles: [".example-icon { padding: 0 14px; } .example-spacer { flex: 1 1 auto; } "],
            },] },
];
/**
 * @nocollapse
 */
ToolbarMultirowExample.ctorParameters = function () { return []; };
var MenuIconsExample = (function () {
    function MenuIconsExample() {
    }
    return MenuIconsExample;
}());
MenuIconsExample.decorators = [
    { type: Component, args: [{
                selector: 'menu-icons-example',
                template: "<button md-icon-button [mdMenuTriggerFor]=\"menu\"> <md-icon>more_vert</md-icon> </button> <md-menu #menu=\"mdMenu\"> <button md-menu-item> <md-icon>dialpad</md-icon> <span>Redial</span> </button> <button md-menu-item disabled> <md-icon>voicemail</md-icon> <span>Check voicemail</span> </button> <button md-menu-item> <md-icon>notifications_off</md-icon> <span>Disable alerts</span> </button> </md-menu> ",
            },] },
];
/**
 * @nocollapse
 */
MenuIconsExample.ctorParameters = function () { return []; };
var GridListDynamicExample = (function () {
    function GridListDynamicExample() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    return GridListDynamicExample;
}());
GridListDynamicExample.decorators = [
    { type: Component, args: [{
                selector: 'grid-list-dynamic-example',
                template: "<md-grid-list cols=\"4\" rowHeight=\"100px\"> <md-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\"> {{tile.text}} </md-grid-tile> </md-grid-list> ",
            },] },
];
/**
 * @nocollapse
 */
GridListDynamicExample.ctorParameters = function () { return []; };
var IconOverviewExample = (function () {
    function IconOverviewExample() {
    }
    return IconOverviewExample;
}());
IconOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'icon-overview-example',
                template: "<md-icon>home</md-icon> ",
            },] },
];
/**
 * @nocollapse
 */
IconOverviewExample.ctorParameters = function () { return []; };
var ProgressBarOverviewExample = (function () {
    function ProgressBarOverviewExample() {
    }
    return ProgressBarOverviewExample;
}());
ProgressBarOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-bar-overview-example',
                template: "<md-progress-bar mode=\"indeterminate\"></md-progress-bar> ",
            },] },
];
/**
 * @nocollapse
 */
ProgressBarOverviewExample.ctorParameters = function () { return []; };
var SlideToggleOverviewExample = (function () {
    function SlideToggleOverviewExample() {
    }
    return SlideToggleOverviewExample;
}());
SlideToggleOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'slide-toggle-overview-example',
                template: "<md-slide-toggle>Slide me!</md-slide-toggle> ",
            },] },
];
/**
 * @nocollapse
 */
SlideToggleOverviewExample.ctorParameters = function () { return []; };
var InputOverviewExample = (function () {
    function InputOverviewExample() {
    }
    return InputOverviewExample;
}());
InputOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'input-overview-example',
                template: "<md-input-container> <input mdInput placeholder=\"Favorite food\" value=\"Sushi\"> </md-input-container> ",
            },] },
];
/**
 * @nocollapse
 */
InputOverviewExample.ctorParameters = function () { return []; };
var MenuOverviewExample = (function () {
    function MenuOverviewExample() {
    }
    return MenuOverviewExample;
}());
MenuOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'menu-overview-example',
                template: "<button md-button [mdMenuTriggerFor]=\"menu\">Menu</button> <md-menu #menu=\"mdMenu\"> <button md-menu-item>Item 1</button> <button md-menu-item>Item 2</button> </md-menu> ",
            },] },
];
/**
 * @nocollapse
 */
MenuOverviewExample.ctorParameters = function () { return []; };
var CheckboxConfigurableExample = (function () {
    function CheckboxConfigurableExample() {
        this.checked = false;
        this.indeterminate = false;
        this.align = 'start';
        this.disabled = false;
    }
    return CheckboxConfigurableExample;
}());
CheckboxConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-configurable-example',
                template: "<md-card> <md-card-content> <h2 class=\"example-h2\">Checkbox configuration</h2> <section class=\"example-section\"> <md-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</md-checkbox> <md-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</md-checkbox> </section> <section class=\"example-section\"> <label class=\"example-margin\">Align:</label> <md-radio-group [(ngModel)]=\"align\"> <md-radio-button class=\"example-margin\" value=\"start\">Start</md-radio-button> <md-radio-button class=\"example-margin\" value=\"end\">End</md-radio-button> </md-radio-group> </section> <section class=\"example-section\"> <md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox> </section> </md-card-content> </md-card> <md-card class=\"result\"> <md-card-content> <h2 class=\"example-h2\">Result</h2> <section class=\"example-section\"> <md-checkbox class=\"example-margin\" [checked]=\"checked\" [indeterminate]=\"indeterminate\" [align]=\"align\" [disabled]=\"disabled\"> I'm a checkbox </md-checkbox> </section> </md-card-content> </md-card> ",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
CheckboxConfigurableExample.ctorParameters = function () { return []; };
var ButtonToggleExclusiveExample = (function () {
    function ButtonToggleExclusiveExample() {
    }
    return ButtonToggleExclusiveExample;
}());
ButtonToggleExclusiveExample.decorators = [
    { type: Component, args: [{
                selector: 'button-toggle-exclusive-example',
                template: "<md-button-toggle-group #group=\"mdButtonToggleGroup\"> <md-button-toggle value=\"left\"> <md-icon>format_align_left</md-icon> </md-button-toggle> <md-button-toggle value=\"center\"> <md-icon>format_align_center</md-icon> </md-button-toggle> <md-button-toggle value=\"right\"> <md-icon>format_align_right</md-icon> </md-button-toggle> <md-button-toggle value=\"justify\" disabled> <md-icon>format_align_justify</md-icon> </md-button-toggle> </md-button-toggle-group> <div class=\"example-selected-value\">Selected value: {{group.value}}</div> ",
                styles: [".example-selected-value { margin: 15px 0; } "],
            },] },
];
/**
 * @nocollapse
 */
ButtonToggleExclusiveExample.ctorParameters = function () { return []; };
var ListSectionsExample = (function () {
    function ListSectionsExample() {
        this.folders = [
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
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
    return ListSectionsExample;
}());
ListSectionsExample.decorators = [
    { type: Component, args: [{
                selector: 'list-sections-example',
                template: "<md-list> <h3 md-subheader>Folders</h3> <md-list-item *ngFor=\"let folder of folders\"> <md-icon md-list-icon>folder</md-icon> <h4 md-line>{{folder.name}}</h4> <p md-line> {{folder.updated | date}} </p> </md-list-item> <md-divider></md-divider> <h3 md-subheader>Notes</h3> <md-list-item *ngFor=\"let note of notes\"> <md-icon md-list-icon>note</md-icon> <h4 md-line>{{note.name}}</h4> <p md-line> {{note.updated | date}} </p> </md-list-item> </md-list> ",
            },] },
];
/**
 * @nocollapse
 */
ListSectionsExample.ctorParameters = function () { return []; };
var SnackBarOverviewExample = (function () {
    /**
     * @param {?} snackBar
     */
    function SnackBarOverviewExample(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    SnackBarOverviewExample.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    return SnackBarOverviewExample;
}());
SnackBarOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-overview-example',
                template: "<md-input-container> <input mdInput value=\"Disco party!\" placeholder=\"Message\" #message> </md-input-container> <md-input-container> <input mdInput value=\"Dance\" placeholder=\"Action\" #action> </md-input-container> <button md-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button> ",
            },] },
];
/**
 * @nocollapse
 */
SnackBarOverviewExample.ctorParameters = function () { return [
    { type: MdSnackBar, },
]; };
var DialogResultExample = (function () {
    /**
     * @param {?} dialog
     */
    function DialogResultExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogResultExample.prototype.openDialog = function () {
        var _this = this;
        var /** @type {?} */ dialogRef = this.dialog.open(DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    return DialogResultExample;
}());
DialogResultExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-result-example',
                template: "<button md-button (click)=\"openDialog()\">Launch dialog</button> You chose: {{selectedOption}} ",
            },] },
];
/**
 * @nocollapse
 */
DialogResultExample.ctorParameters = function () { return [
    { type: MdDialog, },
]; };
var DialogResultExampleDialog = (function () {
    /**
     * @param {?} dialogRef
     */
    function DialogResultExampleDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return DialogResultExampleDialog;
}());
DialogResultExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-result-example-dialog',
                template: "<h1 md-dialog-title>Dialog</h1> <div md-dialog-content>What would you like to do?</div> <div md-dialog-actions> <button md-button (click)=\"dialogRef.close('Option 1')\">Option 1</button> <button md-button (click)=\"dialogRef.close('Option 2')\">Option 2</button> </div> ",
            },] },
];
/**
 * @nocollapse
 */
DialogResultExampleDialog.ctorParameters = function () { return [
    { type: MdDialogRef, },
]; };
var DialogElementsExample = (function () {
    /**
     * @param {?} dialog
     */
    function DialogElementsExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogElementsExample.prototype.openDialog = function () {
        this.dialog.open(DialogElementsExampleDialog);
    };
    return DialogElementsExample;
}());
DialogElementsExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-elements-example',
                template: "<button md-button (click)=\"openDialog()\">Launch dialog</button> ",
            },] },
];
/**
 * @nocollapse
 */
DialogElementsExample.ctorParameters = function () { return [
    { type: MdDialog, },
]; };
var DialogElementsExampleDialog = (function () {
    function DialogElementsExampleDialog() {
    }
    return DialogElementsExampleDialog;
}());
DialogElementsExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-elements-example-dialog',
                template: "<h1 md-dialog-title>Dialog with elements</h1> <div md-dialog-content>This dialog showcases the title, close, content and actions elements.</div> <div md-dialog-actions> <button md-button md-dialog-close>Close</button> </div> ",
            },] },
];
/**
 * @nocollapse
 */
DialogElementsExampleDialog.ctorParameters = function () { return []; };
var TooltipOverviewExample = (function () {
    function TooltipOverviewExample() {
    }
    return TooltipOverviewExample;
}());
TooltipOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-overview-example',
                template: "<span mdTooltip=\"Tooltip!\">I have a tooltip</span> ",
            },] },
];
/**
 * @nocollapse
 */
TooltipOverviewExample.ctorParameters = function () { return []; };
var ButtonToggleOverviewExample = (function () {
    function ButtonToggleOverviewExample() {
    }
    return ButtonToggleOverviewExample;
}());
ButtonToggleOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'button-toggle-overview-example',
                template: "<md-button-toggle>Toggle me!</md-button-toggle> ",
            },] },
];
/**
 * @nocollapse
 */
ButtonToggleOverviewExample.ctorParameters = function () { return []; };
var GridListOverviewExample = (function () {
    function GridListOverviewExample() {
    }
    return GridListOverviewExample;
}());
GridListOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'grid-list-overview-example',
                styles: ["md-grid-tile { background: lightblue; } "],
                template: "<md-grid-list cols=\"2\" rowHeight=\"2:1\"> <md-grid-tile>1</md-grid-tile> <md-grid-tile>2</md-grid-tile> <md-grid-tile>3</md-grid-tile> <md-grid-tile>4</md-grid-tile> </md-grid-list> ",
            },] },
];
/**
 * @nocollapse
 */
GridListOverviewExample.ctorParameters = function () { return []; };
var TooltipPositionExample = (function () {
    function TooltipPositionExample() {
        this.position = 'before';
    }
    return TooltipPositionExample;
}());
TooltipPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-position-example',
                template: "<div class=\"example-tooltip-host\" mdTooltip=\"Tooltip!\" [mdTooltipPosition]=\"position\"> <span>Show tooltip</span> <md-select class=\"example-select\" [(ngModel)]=\"position\"> <md-option value=\"before\">Before</md-option> <md-option value=\"after\">After</md-option> <md-option value=\"above\">Above</md-option> <md-option value=\"below\">Below</md-option> <md-option value=\"left\">Left</md-option> <md-option value=\"right\">Right</md-option> </md-select> </div> ",
                styles: [".example-tooltip-host { display: inline-flex; align-items: center; margin: 50px; } .example-select { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
TooltipPositionExample.ctorParameters = function () { return []; };
var ProgressSpinnerConfigurableExample = (function () {
    function ProgressSpinnerConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
    return ProgressSpinnerConfigurableExample;
}());
ProgressSpinnerConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-spinner-configurable-example',
                template: "<md-card> <md-card-content> <h2 class=\"example-h2\">Progress spinner configuration</h2> <section class=\"example-section\"> <label class=\"example-margin\">Color:</label> <md-radio-group [(ngModel)]=\"color\"> <md-radio-button class=\"example-margin\" value=\"primary\"> Primary </md-radio-button> <md-radio-button class=\"example-margin\" value=\"accent\"> Accent </md-radio-button> <md-radio-button class=\"example-margin\" value=\"warn\"> Warn </md-radio-button> </md-radio-group> </section> <section class=\"example-section\"> <label class=\"example-margin\">Mode:</label> <md-radio-group [(ngModel)]=\"mode\"> <md-radio-button class=\"example-margin\" value=\"determinate\"> Determinate </md-radio-button> <md-radio-button class=\"example-margin\" value=\"indeterminate\"> Indeterminate </md-radio-button> </md-radio-group> </section> <section class=\"example-section\" *ngIf=\"mode == 'determinate'\"> <label class=\"example-margin\">Progress:</label> <md-slider class=\"example-margin\" [(ngModel)]=\"value\"></md-slider> </section> </md-card-content> </md-card> <md-card> <md-card-content> <h2 class=\"example-h2\">Result</h2> <md-progress-spinner class=\"example-margin\" [attr.color]=\"color\" [mode]=\"mode\" [value]=\"value\"> </md-progress-spinner> </md-card-content> </md-card> ",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
ProgressSpinnerConfigurableExample.ctorParameters = function () { return []; };
var InputFormExample = (function () {
    function InputFormExample() {
    }
    return InputFormExample;
}());
InputFormExample.decorators = [
    { type: Component, args: [{
                selector: 'input-form-example',
                template: "<form class=\"example-form\"> <md-input-container class=\"example-full-width\"> <input mdInput placeholder=\"Company (disabled)\" disabled value=\"Google\"> </md-input-container> <table class=\"example-full-width\" cellspacing=\"0\"><tr> <td><md-input-container class=\"example-full-width\"> <input mdInput placeholder=\"First name\"> </md-input-container></td> <td><md-input-container class=\"example-full-width\"> <input mdInput placeholder=\"Long Last Name That Will Be Truncated\"> </md-input-container></td> </tr></table> <p> <md-input-container class=\"example-full-width\"> <textarea mdInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea> </md-input-container> <md-input-container class=\"example-full-width\"> <textarea mdInput placeholder=\"Address 2\"></textarea> </md-input-container> </p> <table class=\"example-full-width\" cellspacing=\"0\"><tr> <td><md-input-container class=\"example-full-width\"> <input mdInput placeholder=\"City\"> </md-input-container></td> <td><md-input-container class=\"example-full-width\"> <input mdInput placeholder=\"State\"> </md-input-container></td> <td><md-input-container class=\"example-full-width\"> <input mdInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\"> <md-hint align=\"end\">{{postalCode.value.length}} / 5</md-hint> </md-input-container></td> </tr></table> </form> ",
                styles: [".example-form { width: 500px; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputFormExample.ctorParameters = function () { return []; };
var ListOverviewExample = (function () {
    function ListOverviewExample() {
    }
    return ListOverviewExample;
}());
ListOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'list-overview-example',
                template: "<md-list> <md-list-item>Item 1</md-list-item> <md-list-item>Item 2</md-list-item> <md-list-item>Item 3</md-list-item> </md-list> ",
            },] },
];
/**
 * @nocollapse
 */
ListOverviewExample.ctorParameters = function () { return []; };
var SliderOverviewExample = (function () {
    function SliderOverviewExample() {
    }
    return SliderOverviewExample;
}());
SliderOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'slider-overview-example',
                template: "<md-slider></md-slider> ",
                styles: ["/** No CSS for this example */ md-slider { width: 300px; } "],
            },] },
];
/**
 * @nocollapse
 */
SliderOverviewExample.ctorParameters = function () { return []; };
var SlideToggleConfigurableExample = (function () {
    function SlideToggleConfigurableExample() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
    return SlideToggleConfigurableExample;
}());
SlideToggleConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'slide-toggle-configurable-example',
                template: "<md-card> <md-card-content> <h2 class=\"example-h2\">Slider configuration</h2> <section class=\"example-section\"> <label class=\"example-margin\">Color:</label> <md-radio-group [(ngModel)]=\"color\"> <md-radio-button class=\"example-margin\" value=\"primary\"> Primary </md-radio-button> <md-radio-button class=\"example-margin\" value=\"accent\"> Accent </md-radio-button> <md-radio-button class=\"example-margin\" value=\"warn\"> Warn </md-radio-button> </md-radio-group> </section> <section class=\"example-section\"> <md-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</md-checkbox> </section> <section class=\"example-section\"> <md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox> </section> </md-card-content> </md-card> <md-card class=\"result\"> <md-card-content> <h2 class=\"example-h2\">Result</h2> <section class=\"example-section\"> <md-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\"> Slide me! </md-slide-toggle> </section> </md-card-content> </md-card> ",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
SlideToggleConfigurableExample.ctorParameters = function () { return []; };
var IconSvgExample = (function () {
    /**
     * @param {?} iconRegistry
     * @param {?} sanitizer
     */
    function IconSvgExample(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    return IconSvgExample;
}());
IconSvgExample.decorators = [
    { type: Component, args: [{
                selector: 'icon-svg-example',
                template: "<md-icon svgIcon=\"thumbs-up\"></md-icon> ",
            },] },
];
/**
 * @nocollapse
 */
IconSvgExample.ctorParameters = function () { return [
    { type: MdIconRegistry, },
    { type: DomSanitizer, },
]; };
var SidenavFabExample = (function () {
    function SidenavFabExample() {
    }
    return SidenavFabExample;
}());
SidenavFabExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-fab-example',
                template: "<md-sidenav-container class=\"example-sidenav-fab-container\"> <md-sidenav #sidenav mode=\"side\" opened=\"true\"> <button md-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\"> <md-icon>add</md-icon> </button> <div class=\"example-scrolling-content\"> Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer. </div> </md-sidenav> <button md-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\"> <md-icon>add</md-icon> </button> <div class=\"example-scrolling-content\"> Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer. </div> </md-sidenav-container> ",
                styles: [".example-sidenav-fab-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-fab-container md-sidenav { max-width: 200px; } .example-sidenav-fab-container .md-sidenav-content, .example-sidenav-fab-container md-sidenav { display: flex; overflow: visible; } .example-scrolling-content { overflow: auto; } .example-fab { position: absolute; right: 20px; bottom: 10px; } "],
                encapsulation: ViewEncapsulation.None,
            },] },
];
/**
 * @nocollapse
 */
SidenavFabExample.ctorParameters = function () { return []; };
var CardOverviewExample = (function () {
    function CardOverviewExample() {
    }
    return CardOverviewExample;
}());
CardOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'card-overview-example',
                template: "<md-card>Simple card</md-card> ",
            },] },
];
/**
 * @nocollapse
 */
CardOverviewExample.ctorParameters = function () { return []; };
var ProgressSpinnerOverviewExample = (function () {
    function ProgressSpinnerOverviewExample() {
    }
    return ProgressSpinnerOverviewExample;
}());
ProgressSpinnerOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-spinner-overview-example',
                template: "<md-spinner></md-spinner> ",
            },] },
];
/**
 * @nocollapse
 */
ProgressSpinnerOverviewExample.ctorParameters = function () { return []; };
var TabsTemplateLabelExample = (function () {
    function TabsTemplateLabelExample() {
    }
    return TabsTemplateLabelExample;
}());
TabsTemplateLabelExample.decorators = [
    { type: Component, args: [{
                selector: 'tabs-template-label-example',
                template: "More examples coming soon! ",
            },] },
];
/**
 * @nocollapse
 */
TabsTemplateLabelExample.ctorParameters = function () { return []; };
var RadioOverviewExample = (function () {
    function RadioOverviewExample() {
    }
    return RadioOverviewExample;
}());
RadioOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'radio-overview-example',
                template: "<md-radio-group> <md-radio-button value=\"1\">Option 1</md-radio-button> <md-radio-button value=\"2\">Option 2</md-radio-button> </md-radio-group> ",
            },] },
];
/**
 * @nocollapse
 */
RadioOverviewExample.ctorParameters = function () { return []; };
var SidenavOverviewExample = (function () {
    function SidenavOverviewExample() {
    }
    return SidenavOverviewExample;
}());
SidenavOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-overview-example',
                template: "<md-sidenav-container class=\"example-container\"> <md-sidenav #sidenav class=\"example-sidenav\"> Jolly good! </md-sidenav> <div class=\"example-sidenav-content\"> <button md-button (click)=\"sidenav.open()\"> Open sidenav </button> </div> </md-sidenav-container> ",
                styles: [".example-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-content { display: flex; height: 100%; align-items: center; justify-content: center; } .example-sidenav { padding: 20px; } "],
            },] },
];
/**
 * @nocollapse
 */
SidenavOverviewExample.ctorParameters = function () { return []; };
var SelectOverviewExample = (function () {
    function SelectOverviewExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    return SelectOverviewExample;
}());
SelectOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'select-overview-example',
                template: "<md-select placeholder=\"Favorite food\"> <md-option *ngFor=\"let food of foods\" [value]=\"food.value\"> {{ food.viewValue }} </md-option> </md-select> ",
            },] },
];
/**
 * @nocollapse
 */
SelectOverviewExample.ctorParameters = function () { return []; };
var ChipsOverviewExample = (function () {
    function ChipsOverviewExample() {
    }
    return ChipsOverviewExample;
}());
ChipsOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-overview-example',
                template: "<md-chip-list> <md-chip>One fish</md-chip> <md-chip>Two fish</md-chip> <md-chip color=\"primary\" selected=\"true\">Primary fish</md-chip> <md-chip color=\"accent\" selected=\"true\">Accent fish</md-chip> </md-chip-list> ",
            },] },
];
/**
 * @nocollapse
 */
ChipsOverviewExample.ctorParameters = function () { return []; };
var ChipsStackedExample = (function () {
    function ChipsStackedExample() {
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    return ChipsStackedExample;
}());
ChipsStackedExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-stacked-example',
                template: "<md-chip-list class=\"mat-chip-list-stacked\"> <md-chip *ngFor=\"let chipColor of availableColors\" selected=\"true\" color=\"{{chipColor.color}}\"> {{chipColor.name}} </md-chip> </md-chip-list> ",
                styles: ["md-chip { max-width: 200px; } "],
            },] },
];
/**
 * @nocollapse
 */
ChipsStackedExample.ctorParameters = function () { return []; };
var SelectFormExample = (function () {
    function SelectFormExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    return SelectFormExample;
}());
SelectFormExample.decorators = [
    { type: Component, args: [{
                selector: 'select-form-example',
                template: "<form> <md-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\"> <md-option *ngFor=\"let food of foods\" [value]=\"food.value\"> {{food.viewValue}} </md-option> </md-select> <p> Selected value: {{selectedValue}} </p> </form> ",
            },] },
];
/**
 * @nocollapse
 */
SelectFormExample.ctorParameters = function () { return []; };
/**
 * The list of example components.
 * Key is the example name which will be used in `material-docs-example="key"`.
 * Value is the component.
 */
var EXAMPLE_COMPONENTS = {
    'autocomplete-overview': { title: 'Basic autocomplete', component: AutocompleteOverviewExample },
    'button-overview': { title: 'Basic buttons', component: ButtonOverviewExample },
    'button-types': { title: 'Button varieties', component: ButtonTypesExample },
    'button-toggle-exclusive': {
        title: 'Exclusive selection',
        component: ButtonToggleExclusiveExample
    },
    'button-toggle-overview': { title: 'Basic button-toggles', component: ButtonToggleOverviewExample },
    'chips-overview': { title: 'Basic chips', component: ChipsOverviewExample },
    'chips-stacked': { title: 'Stacked chips', component: ChipsStackedExample },
    'card-fancy': { title: 'Card with multiple sections', component: CardFancyExample },
    'card-overview': { title: 'Basic cards', component: CardOverviewExample },
    'checkbox-configurable': { title: 'Configurable checkbox', component: CheckboxConfigurableExample },
    'checkbox-overview': { title: 'Basic checkboxes', component: CheckboxOverviewExample },
    'dialog-overview': {
        title: 'Basic dialog',
        component: DialogOverviewExample,
        additionalFiles: ['dialog-overview-example-dialog.html'],
        selectorName: 'DialogOverviewExample, DialogOverviewExampleDialog',
    },
    'dialog-result': {
        title: 'Dialog with a result',
        component: DialogResultExample,
        additionalFiles: ['dialog-result-example-dialog.html'],
        selectorName: 'DialogResultExample, DialogResultExampleDialog',
    },
    'dialog-elements': {
        title: 'Dialog elements',
        component: DialogElementsExample,
        additionalFiles: ['dialog-elements-example-dialog.html'],
        selectorName: 'DialogElementsExample, DialogElementsExampleDialog',
    },
    'grid-list-dynamic': { title: 'Dynamic grid-list', component: GridListDynamicExample },
    'grid-list-overview': { title: 'Basic grid-list', component: GridListOverviewExample },
    'icon-overview': { title: 'Basic icons', component: IconOverviewExample },
    'icon-svg': { title: 'SVG icons', component: IconSvgExample },
    'input-form': { title: 'Inputs in a form', component: InputFormExample },
    'input-overview': { title: 'Basic inputs', component: InputOverviewExample },
    'list-overview': { title: 'Basic list', component: ListOverviewExample },
    'list-sections': { title: 'List with sections', component: ListSectionsExample },
    'menu-icons': { title: 'Menu with icons', component: MenuIconsExample },
    'menu-overview': { title: 'Basic menu', component: MenuOverviewExample },
    'progress-bar-configurable': {
        title: 'Configurable progress-bar',
        component: ProgressBarConfigurableExample
    },
    'progress-bar-overview': { title: 'Basic progress-bar', component: ProgressBarOverviewExample },
    'progress-spinner-configurable': {
        title: 'Configurable progress-bar',
        component: ProgressSpinnerConfigurableExample
    },
    'progress-spinner-overview': {
        title: 'Basic progress-spinner',
        component: ProgressSpinnerOverviewExample
    },
    'radio-ng-model': { title: 'Radios with ngModel', component: RadioNgModelExample },
    'radio-overview': { title: 'Basic radios', component: RadioOverviewExample },
    'select-overview': { title: 'Basic select', component: SelectOverviewExample },
    'select-form': { title: 'Select in a form', component: SelectFormExample },
    'sidenav-fab': { title: 'Sidenav with a FAB', component: SidenavFabExample },
    'sidenav-overview': { title: 'Basic sidenav', component: SidenavOverviewExample },
    'slider-configurable': { title: 'Configurable slider', component: SliderConfigurableExample },
    'slider-overview': { title: 'Basic slider', component: SliderOverviewExample },
    'slide-toggle-configurable': {
        title: 'Configurable slide-toggle',
        component: SlideToggleConfigurableExample
    },
    'slide-toggle-overview': { title: 'Basic slide-toggles', component: SlideToggleOverviewExample },
    'snack-bar-component': {
        title: 'Snack-bar with a custom component',
        component: SnackBarComponentExample
    },
    'snack-bar-overview': { title: 'Basic snack-bar', component: SnackBarOverviewExample },
    'tabs-overview': { title: 'Basic tabs', component: TabsOverviewExample },
    'tabs-template-label': { title: 'Coming soon!', component: TabsTemplateLabelExample },
    'toolbar-multirow': { title: 'Multi-row toolbar', component: ToolbarMultirowExample },
    'toolbar-overview': { title: 'basic toolbar', component: ToolbarOverviewExample },
    'tooltip-overview': { title: 'Basic tooltip', component: TooltipOverviewExample },
    'tooltip-position': { title: 'Tooltip with custom position', component: TooltipPositionExample },
};
/**
 * The list of all example components.
 * We need to put them in both `declarations` and `entryComponents` to make them work.
 */
var EXAMPLE_LIST = [
    AutocompleteOverviewExample,
    ButtonOverviewExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonTypesExample,
    CardFancyExample,
    CardOverviewExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    DialogResultExample,
    DialogResultExampleDialog,
    DialogElementsExample,
    DialogElementsExampleDialog,
    GridListDynamicExample,
    GridListOverviewExample,
    IconOverviewExample,
    IconSvgExample,
    InputFormExample,
    InputOverviewExample,
    ListOverviewExample,
    ListSectionsExample,
    MenuIconsExample,
    MenuOverviewExample,
    ProgressBarConfigurableExample,
    ProgressBarOverviewExample,
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerOverviewExample,
    RadioNgModelExample,
    RadioOverviewExample,
    SidenavFabExample,
    SelectOverviewExample,
    SelectFormExample,
    SidenavOverviewExample,
    SliderConfigurableExample,
    SliderOverviewExample,
    SlideToggleConfigurableExample,
    SlideToggleOverviewExample,
    SnackBarComponentExample,
    PizzaPartyComponent,
    SnackBarOverviewExample,
    TabsOverviewExample,
    TabsTemplateLabelExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
    TooltipOverviewExample,
    TooltipPositionExample,
];
var ExampleModule = (function () {
    function ExampleModule() {
    }
    return ExampleModule;
}());
ExampleModule.decorators = [
    { type: NgModule, args: [{
                declarations: EXAMPLE_LIST,
                entryComponents: EXAMPLE_LIST,
                imports: [
                    MaterialModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                ]
            },] },
];
/**
 * @nocollapse
 */
ExampleModule.ctorParameters = function () { return []; };
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
var ExampleData = (function () {
    /**
     * @param {?} example
     */
    function ExampleData(example) {
        // TODO: figure out how do we get these variables.
        this.description = 'Some description for material';
        // TODO: use real example and delete the example/ folder.
        this.examplePath = '/assets/example/';
        this.exampleFiles = ['button-demo.html', 'button-demo.scss', 'button-demo.ts'];
        // TODO: extract these variables from example code.
        this.selectorName = 'button-demo';
        this.indexFilename = 'button-demo';
        this.componentName = 'ButtonDemo';
        if (example && EXAMPLE_COMPONENTS[example]) {
            this.examplePath = "/assets/plunker/examples/" + example + "/";
            // TODO(tinayuangao): Do not hard-code extensions
            this.exampleFiles = ['html', 'ts', 'css']
                .map(function (extension) { return example + "-example." + extension; });
            if (EXAMPLE_COMPONENTS[example].additionalFiles) {
                this.exampleFiles = this.exampleFiles.concat(EXAMPLE_COMPONENTS[example].additionalFiles);
            }
            this.selectorName = this.indexFilename = example + "-example";
            var exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
            if (EXAMPLE_COMPONENTS[example].title) {
                this.description = EXAMPLE_COMPONENTS[example].title;
            }
            else {
                this.description = exampleName.replace(/[\-]+/g, ' ') + ' Example';
            }
            if (EXAMPLE_COMPONENTS[example].selectorName) {
                this.componentName = EXAMPLE_COMPONENTS[example].selectorName;
            }
            else {
                this.componentName = exampleName.replace(/[\-]+/g, '') + 'Example';
            }
        }
    }
    return ExampleData;
}());
export { ExampleData, EXAMPLE_COMPONENTS, EXAMPLE_LIST, ExampleModule };
