(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/drag-drop'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('@angular/cdk/portal')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/drag-drop', ['exports', '@angular/cdk/drag-drop', '@angular/cdk/overlay', '@angular/common', '@angular/core', '@angular/cdk/portal'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.dragDrop = {}), global.ng.cdk.dragDrop, global.ng.cdk.overlay, global.ng.common, global.ng.core, global.ng.cdk.portal));
}(this, (function (exports, i1, i1$1, i2, i0, portal) { 'use strict';

    /**
     * @title Drag&Drop position locking
     */
    var CdkDragDropAxisLockExample = /** @class */ (function () {
        function CdkDragDropAxisLockExample() {
        }
        return CdkDragDropAxisLockExample;
    }());
    CdkDragDropAxisLockExample.ɵfac = function CdkDragDropAxisLockExample_Factory(t) { return new (t || CdkDragDropAxisLockExample)(); };
    CdkDragDropAxisLockExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropAxisLockExample, selectors: [["cdk-drag-drop-axis-lock-example"]], decls: 4, vars: 0, consts: [["cdkDragLockAxis", "y", "cdkDrag", "", 1, "example-box"], ["cdkDragLockAxis", "x", "cdkDrag", "", 1, "example-box"]], template: function CdkDragDropAxisLockExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtext(1, " I can only be dragged up/down\n");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 1);
                i0.ɵɵtext(3, " I can only be dragged left/right\n");
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropAxisLockExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-axis-lock-example',
                        templateUrl: 'cdk-drag-drop-axis-lock-example.html',
                        styleUrls: ['cdk-drag-drop-axis-lock-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Drag&Drop boundary
     */
    var CdkDragDropBoundaryExample = /** @class */ (function () {
        function CdkDragDropBoundaryExample() {
        }
        return CdkDragDropBoundaryExample;
    }());
    CdkDragDropBoundaryExample.ɵfac = function CdkDragDropBoundaryExample_Factory(t) { return new (t || CdkDragDropBoundaryExample)(); };
    CdkDragDropBoundaryExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropBoundaryExample, selectors: [["cdk-drag-drop-boundary-example"]], decls: 3, vars: 0, consts: [[1, "example-boundary"], ["cdkDragBoundary", ".example-boundary", "cdkDrag", "", 1, "example-box"]], template: function CdkDragDropBoundaryExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵtext(2, " I can only be dragged within the dotted container ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-boundary[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropBoundaryExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-boundary-example',
                        templateUrl: 'cdk-drag-drop-boundary-example.html',
                        styleUrls: ['cdk-drag-drop-boundary-example.css'],
                    }]
            }], null, null);
    })();

    function CdkDragDropConnectedSortingGroupExample_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r2 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r2);
        }
    }
    function CdkDragDropConnectedSortingGroupExample_div_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r3 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r3);
        }
    }
    /**
     * @title Drag&Drop connected sorting group
     */
    var CdkDragDropConnectedSortingGroupExample = /** @class */ (function () {
        function CdkDragDropConnectedSortingGroupExample() {
            this.todo = [
                'Get to work',
                'Pick up groceries',
                'Go home',
                'Fall asleep'
            ];
            this.done = [
                'Get up',
                'Brush teeth',
                'Take a shower',
                'Check e-mail',
                'Walk dog'
            ];
        }
        CdkDragDropConnectedSortingGroupExample.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                i1.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                i1.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        return CdkDragDropConnectedSortingGroupExample;
    }());
    CdkDragDropConnectedSortingGroupExample.ɵfac = function CdkDragDropConnectedSortingGroupExample_Factory(t) { return new (t || CdkDragDropConnectedSortingGroupExample)(); };
    CdkDragDropConnectedSortingGroupExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropConnectedSortingGroupExample, selectors: [["cdk-drag-drop-connected-sorting-group-example"]], decls: 11, vars: 4, consts: [["cdkDropListGroup", ""], [1, "example-container"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropConnectedSortingGroupExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "h2");
                i0.ɵɵtext(3, "To do");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 2);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingGroupExample_Template_div_cdkDropListDropped_4_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(5, CdkDragDropConnectedSortingGroupExample_div_5_Template, 2, 1, "div", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 1);
                i0.ɵɵelementStart(7, "h2");
                i0.ɵɵtext(8, "Done");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 2);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingGroupExample_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(10, CdkDragDropConnectedSortingGroupExample_div_10_Template, 2, 1, "div", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("cdkDropListData", ctx.todo);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.todo);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("cdkDropListData", ctx.done);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.done);
            }
        }, directives: [i1.CdkDropListGroup, i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropConnectedSortingGroupExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-connected-sorting-group-example',
                        templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
                        styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
                    }]
            }], null, null);
    })();

    function CdkDragDropConnectedSortingExample_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 5);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r4 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r4);
        }
    }
    function CdkDragDropConnectedSortingExample_div_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 5);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r5 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r5);
        }
    }
    var _c0 = function (a0) { return [a0]; };
    /**
     * @title Drag&Drop connected sorting
     */
    var CdkDragDropConnectedSortingExample = /** @class */ (function () {
        function CdkDragDropConnectedSortingExample() {
            this.todo = [
                'Get to work',
                'Pick up groceries',
                'Go home',
                'Fall asleep'
            ];
            this.done = [
                'Get up',
                'Brush teeth',
                'Take a shower',
                'Check e-mail',
                'Walk dog'
            ];
        }
        CdkDragDropConnectedSortingExample.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                i1.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                i1.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        return CdkDragDropConnectedSortingExample;
    }());
    CdkDragDropConnectedSortingExample.ɵfac = function CdkDragDropConnectedSortingExample_Factory(t) { return new (t || CdkDragDropConnectedSortingExample)(); };
    CdkDragDropConnectedSortingExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropConnectedSortingExample, selectors: [["cdk-drag-drop-connected-sorting-example"]], decls: 12, vars: 10, consts: [[1, "example-container"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["todoList", "cdkDropList"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["doneList", "cdkDropList"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropConnectedSortingExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h2");
                i0.ɵɵtext(2, "To do");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 1, 2);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingExample_Template_div_cdkDropListDropped_3_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(5, CdkDragDropConnectedSortingExample_div_5_Template, 2, 1, "div", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 0);
                i0.ɵɵelementStart(7, "h2");
                i0.ɵɵtext(8, "Done");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 1, 4);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingExample_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(11, CdkDragDropConnectedSortingExample_div_11_Template, 2, 1, "div", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(4);
                var _r2 = i0.ɵɵreference(10);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("cdkDropListData", ctx.todo)("cdkDropListConnectedTo", i0.ɵɵpureFunction1(6, _c0, _r2));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.todo);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("cdkDropListData", ctx.done)("cdkDropListConnectedTo", i0.ɵɵpureFunction1(8, _c0, _r0));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.done);
            }
        }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropConnectedSortingExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-connected-sorting-example',
                        templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
                        styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
                    }]
            }], null, null);
    })();

    function CdkDragDropCustomPlaceholderExample_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 4);
        }
    }
    function CdkDragDropCustomPlaceholderExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵtemplate(1, CdkDragDropCustomPlaceholderExample_div_1_div_1_Template, 1, 0, "div", 3);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var movie_r1 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", movie_r1, " ");
        }
    }
    /**
     * @title Drag&Drop custom placeholder
     */
    var CdkDragDropCustomPlaceholderExample = /** @class */ (function () {
        function CdkDragDropCustomPlaceholderExample() {
            this.movies = [
                'Episode I - The Phantom Menace',
                'Episode II - Attack of the Clones',
                'Episode III - Revenge of the Sith',
                'Episode IV - A New Hope',
                'Episode V - The Empire Strikes Back',
                'Episode VI - Return of the Jedi',
                'Episode VII - The Force Awakens',
                'Episode VIII - The Last Jedi',
                'Episode IX – The Rise of Skywalker'
            ];
        }
        CdkDragDropCustomPlaceholderExample.prototype.drop = function (event) {
            i1.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
        };
        return CdkDragDropCustomPlaceholderExample;
    }());
    CdkDragDropCustomPlaceholderExample.ɵfac = function CdkDragDropCustomPlaceholderExample_Factory(t) { return new (t || CdkDragDropCustomPlaceholderExample)(); };
    CdkDragDropCustomPlaceholderExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropCustomPlaceholderExample, selectors: [["cdk-drag-drop-custom-placeholder-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"], ["class", "example-custom-placeholder", 4, "cdkDragPlaceholder"], [1, "example-custom-placeholder"]], template: function CdkDragDropCustomPlaceholderExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropCustomPlaceholderExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(1, CdkDragDropCustomPlaceholderExample_div_1_Template, 3, 1, "div", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.movies);
            }
        }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag, i1.CdkDragPlaceholder], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropCustomPlaceholderExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-custom-placeholder-example',
                        templateUrl: 'cdk-drag-drop-custom-placeholder-example.html',
                        styleUrls: ['cdk-drag-drop-custom-placeholder-example.css'],
                    }]
            }], null, null);
    })();

    function CdkDragDropCustomPreviewExample_div_1_img_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "img", 4);
        }
        if (rf & 2) {
            var movie_r1 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("src", movie_r1.poster, i0.ɵɵsanitizeUrl)("alt", movie_r1.title);
        }
    }
    function CdkDragDropCustomPreviewExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, CdkDragDropCustomPreviewExample_div_1_img_2_Template, 1, 2, "img", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var movie_r1 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", movie_r1.title, " ");
        }
    }
    /**
     * @title Drag&Drop custom preview
     */
    var CdkDragDropCustomPreviewExample = /** @class */ (function () {
        function CdkDragDropCustomPreviewExample() {
            // tslint:disable:max-line-length
            this.movies = [
                {
                    title: 'Episode I - The Phantom Menace',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
                },
                {
                    title: 'Episode II - Attack of the Clones',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
                },
                {
                    title: 'Episode III - Revenge of the Sith',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
                },
                {
                    title: 'Episode IV - A New Hope',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
                },
                {
                    title: 'Episode V - The Empire Strikes Back',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
                },
                {
                    title: 'Episode VI - Return of the Jedi',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
                },
                {
                    title: 'Episode VII - The Force Awakens',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
                },
                {
                    title: 'Episode VIII - The Last Jedi',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'
                },
                {
                    title: 'Episode IX – The Rise of Skywalker',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg'
                }
            ];
        }
        // tslint:enable:max-line-length
        CdkDragDropCustomPreviewExample.prototype.drop = function (event) {
            i1.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
        };
        return CdkDragDropCustomPreviewExample;
    }());
    CdkDragDropCustomPreviewExample.ɵfac = function CdkDragDropCustomPreviewExample_Factory(t) { return new (t || CdkDragDropCustomPreviewExample)(); };
    CdkDragDropCustomPreviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropCustomPreviewExample, selectors: [["cdk-drag-drop-custom-preview-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"], [3, "src", "alt", 4, "cdkDragPreview"], [3, "src", "alt"]], template: function CdkDragDropCustomPreviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropCustomPreviewExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(1, CdkDragDropCustomPreviewExample_div_1_Template, 3, 1, "div", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.movies);
            }
        }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag, i1.CdkDragPreview], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropCustomPreviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-custom-preview-example',
                        templateUrl: 'cdk-drag-drop-custom-preview-example.html',
                        styleUrls: ['cdk-drag-drop-custom-preview-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Delayed dragging
     */
    var CdkDragDropDelayExample = /** @class */ (function () {
        function CdkDragDropDelayExample() {
        }
        return CdkDragDropDelayExample;
    }());
    CdkDragDropDelayExample.ɵfac = function CdkDragDropDelayExample_Factory(t) { return new (t || CdkDragDropDelayExample)(); };
    CdkDragDropDelayExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropDelayExample, selectors: [["cdk-drag-drop-delay-example"]], decls: 2, vars: 1, consts: [["cdkDrag", "", 1, "example-box", 3, "cdkDragStartDelay"]], template: function CdkDragDropDelayExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtext(1, " Dragging starts after one second\n");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("cdkDragStartDelay", 1000);
            }
        }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropDelayExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-delay-example',
                        templateUrl: 'cdk-drag-drop-delay-example.html',
                        styleUrls: ['cdk-drag-drop-delay-example.css'],
                    }]
            }], null, null);
    })();

    function CdkDragDropDisabledSortingExample_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 5);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r2 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r2);
        }
    }
    function CdkDragDropDisabledSortingExample_div_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 5);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r3 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r3);
        }
    }
    /**
     * @title Drag&Drop disabled sorting
     */
    var CdkDragDropDisabledSortingExample = /** @class */ (function () {
        function CdkDragDropDisabledSortingExample() {
            this.items = [
                'Carrots',
                'Tomatoes',
                'Onions',
                'Apples',
                'Avocados'
            ];
            this.basket = [
                'Oranges',
                'Bananas',
                'Cucumbers'
            ];
        }
        CdkDragDropDisabledSortingExample.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                i1.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                i1.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        return CdkDragDropDisabledSortingExample;
    }());
    CdkDragDropDisabledSortingExample.ɵfac = function CdkDragDropDisabledSortingExample_Factory(t) { return new (t || CdkDragDropDisabledSortingExample)(); };
    CdkDragDropDisabledSortingExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropDisabledSortingExample, selectors: [["cdk-drag-drop-disabled-sorting-example"]], decls: 11, vars: 4, consts: [["cdkDropListGroup", ""], [1, "example-container"], ["cdkDropList", "", "cdkDropListSortingDisabled", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropDisabledSortingExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "h2");
                i0.ɵɵtext(3, "Available items");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 2);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropDisabledSortingExample_Template_div_cdkDropListDropped_4_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(5, CdkDragDropDisabledSortingExample_div_5_Template, 2, 1, "div", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 1);
                i0.ɵɵelementStart(7, "h2");
                i0.ɵɵtext(8, "Shopping basket");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 4);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropDisabledSortingExample_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(10, CdkDragDropDisabledSortingExample_div_10_Template, 2, 1, "div", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("cdkDropListData", ctx.items);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.items);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("cdkDropListData", ctx.basket);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.basket);
            }
        }, directives: [i1.CdkDropListGroup, i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropDisabledSortingExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-disabled-sorting-example',
                        templateUrl: 'cdk-drag-drop-disabled-sorting-example.html',
                        styleUrls: ['cdk-drag-drop-disabled-sorting-example.css'],
                    }]
            }], null, null);
    })();

    function CdkDragDropDisabledExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            i0.ɵɵproperty("cdkDragDisabled", item_r1.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r1.value);
        }
    }
    /**
     * @title Drag&Drop disabled
     */
    var CdkDragDropDisabledExample = /** @class */ (function () {
        function CdkDragDropDisabledExample() {
            this.items = [
                { value: 'I can be dragged', disabled: false },
                { value: 'I cannot be dragged', disabled: true },
                { value: 'I can also be dragged', disabled: false }
            ];
        }
        CdkDragDropDisabledExample.prototype.drop = function (event) {
            i1.moveItemInArray(this.items, event.previousIndex, event.currentIndex);
        };
        return CdkDragDropDisabledExample;
    }());
    CdkDragDropDisabledExample.ɵfac = function CdkDragDropDisabledExample_Factory(t) { return new (t || CdkDragDropDisabledExample)(); };
    CdkDragDropDisabledExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropDisabledExample, selectors: [["cdk-drag-drop-disabled-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "cdkDragDisabled", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragDisabled"]], template: function CdkDragDropDisabledExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropDisabledExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(1, CdkDragDropDisabledExample_div_1_Template, 2, 2, "div", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.items);
            }
        }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.example-box.cdk-drag-disabled[_ngcontent-%COMP%] {\n  background: #ccc;\n  cursor: default;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropDisabledExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-disabled-example',
                        templateUrl: 'cdk-drag-drop-disabled-example.html',
                        styleUrls: ['cdk-drag-drop-disabled-example.css'],
                    }]
            }], null, null);
    })();

    function CdkDragDropEnterPredicateExample_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var number_r2 = ctx.$implicit;
            i0.ɵɵproperty("cdkDragData", number_r2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(number_r2);
        }
    }
    function CdkDragDropEnterPredicateExample_div_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var number_r3 = ctx.$implicit;
            i0.ɵɵproperty("cdkDragData", number_r3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(number_r3);
        }
    }
    /**
     * @title Drag&Drop enter predicate
     */
    var CdkDragDropEnterPredicateExample = /** @class */ (function () {
        function CdkDragDropEnterPredicateExample() {
            this.all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            this.even = [10];
        }
        CdkDragDropEnterPredicateExample.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                i1.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                i1.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        /** Predicate function that only allows even numbers to be dropped into a list. */
        CdkDragDropEnterPredicateExample.prototype.evenPredicate = function (item) {
            return item.data % 2 === 0;
        };
        /** Predicate function that doesn't allow items to be dropped into a list. */
        CdkDragDropEnterPredicateExample.prototype.noReturnPredicate = function () {
            return false;
        };
        return CdkDragDropEnterPredicateExample;
    }());
    CdkDragDropEnterPredicateExample.ɵfac = function CdkDragDropEnterPredicateExample_Factory(t) { return new (t || CdkDragDropEnterPredicateExample)(); };
    CdkDragDropEnterPredicateExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropEnterPredicateExample, selectors: [["cdk-drag-drop-enter-predicate-example"]], decls: 10, vars: 6, consts: [[1, "example-container"], ["id", "all", "cdkDropList", "", "cdkDropListConnectedTo", "even", 1, "example-list", 3, "cdkDropListData", "cdkDropListEnterPredicate", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "cdkDragData", 4, "ngFor", "ngForOf"], ["id", "even", "cdkDropList", "", "cdkDropListConnectedTo", "all", 1, "example-list", 3, "cdkDropListData", "cdkDropListEnterPredicate", "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragData"]], template: function CdkDragDropEnterPredicateExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h2");
                i0.ɵɵtext(2, "Available numbers");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 1);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropEnterPredicateExample_Template_div_cdkDropListDropped_3_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(4, CdkDragDropEnterPredicateExample_div_4_Template, 2, 2, "div", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 0);
                i0.ɵɵelementStart(6, "h2");
                i0.ɵɵtext(7, "Even numbers");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 3);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropEnterPredicateExample_Template_div_cdkDropListDropped_8_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(9, CdkDragDropEnterPredicateExample_div_9_Template, 2, 2, "div", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("cdkDropListData", ctx.all)("cdkDropListEnterPredicate", ctx.noReturnPredicate);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.all);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("cdkDropListData", ctx.even)("cdkDropListEnterPredicate", ctx.evenPredicate);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.even);
            }
        }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropEnterPredicateExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-enter-predicate-example',
                        templateUrl: 'cdk-drag-drop-enter-predicate-example.html',
                        styleUrls: ['cdk-drag-drop-enter-predicate-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Programmatically setting the free drag position
     */
    var CdkDragDropFreeDragPositionExample = /** @class */ (function () {
        function CdkDragDropFreeDragPositionExample() {
            this.dragPosition = { x: 0, y: 0 };
        }
        CdkDragDropFreeDragPositionExample.prototype.changePosition = function () {
            this.dragPosition = { x: this.dragPosition.x + 50, y: this.dragPosition.y + 50 };
        };
        return CdkDragDropFreeDragPositionExample;
    }());
    CdkDragDropFreeDragPositionExample.ɵfac = function CdkDragDropFreeDragPositionExample_Factory(t) { return new (t || CdkDragDropFreeDragPositionExample)(); };
    CdkDragDropFreeDragPositionExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropFreeDragPositionExample, selectors: [["cdk-drag-drop-free-drag-position-example"]], decls: 5, vars: 1, consts: [[3, "click"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragFreeDragPosition"]], template: function CdkDragDropFreeDragPositionExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵelementStart(1, "button", 0);
                i0.ɵɵlistener("click", function CdkDragDropFreeDragPositionExample_Template_button_click_1_listener() { return ctx.changePosition(); });
                i0.ɵɵtext(2, "Change element position");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 1);
                i0.ɵɵtext(4, " Drag me around\n");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("cdkDragFreeDragPosition", ctx.dragPosition);
            }
        }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropFreeDragPositionExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-free-drag-position-example',
                        templateUrl: 'cdk-drag-drop-free-drag-position-example.html',
                        styleUrls: ['cdk-drag-drop-free-drag-position-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Drag&Drop with a handle
     */
    var CdkDragDropHandleExample = /** @class */ (function () {
        function CdkDragDropHandleExample() {
        }
        return CdkDragDropHandleExample;
    }());
    CdkDragDropHandleExample.ɵfac = function CdkDragDropHandleExample_Factory(t) { return new (t || CdkDragDropHandleExample)(); };
    CdkDragDropHandleExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropHandleExample, selectors: [["cdk-drag-drop-handle-example"]], decls: 6, vars: 0, consts: [["cdkDrag", "", 1, "example-box"], ["cdkDragHandle", "", 1, "example-handle"], ["width", "24px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"]], template: function CdkDragDropHandleExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtext(1, " I can only be dragged using the handle ");
                i0.ɵɵelementStart(2, "div", 1);
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(3, "svg", 2);
                i0.ɵɵelement(4, "path", 3);
                i0.ɵɵelement(5, "path", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.CdkDrag, i1.CdkDragHandle], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropHandleExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-handle-example',
                        templateUrl: 'cdk-drag-drop-handle-example.html',
                        styleUrls: ['cdk-drag-drop-handle-example.css'],
                    }]
            }], null, null);
    })();

    function CdkDragDropHorizontalSortingExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var timePeriod_r1 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(timePeriod_r1);
        }
    }
    /**
     * @title Drag&Drop horizontal sorting
     */
    var CdkDragDropHorizontalSortingExample = /** @class */ (function () {
        function CdkDragDropHorizontalSortingExample() {
            this.timePeriods = [
                'Bronze age',
                'Iron age',
                'Middle ages',
                'Early modern period',
                'Long nineteenth century'
            ];
        }
        CdkDragDropHorizontalSortingExample.prototype.drop = function (event) {
            i1.moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
        };
        return CdkDragDropHorizontalSortingExample;
    }());
    CdkDragDropHorizontalSortingExample.ɵfac = function CdkDragDropHorizontalSortingExample_Factory(t) { return new (t || CdkDragDropHorizontalSortingExample)(); };
    CdkDragDropHorizontalSortingExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropHorizontalSortingExample, selectors: [["cdk-drag-drop-horizontal-sorting-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropHorizontalSortingExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropHorizontalSortingExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(1, CdkDragDropHorizontalSortingExample_div_1_Template, 2, 1, "div", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.timePeriods);
            }
        }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropHorizontalSortingExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-horizontal-sorting-example',
                        templateUrl: 'cdk-drag-drop-horizontal-sorting-example.html',
                        styleUrls: ['cdk-drag-drop-horizontal-sorting-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Basic Drag&Drop
     */
    var CdkDragDropOverviewExample = /** @class */ (function () {
        function CdkDragDropOverviewExample() {
        }
        return CdkDragDropOverviewExample;
    }());
    CdkDragDropOverviewExample.ɵfac = function CdkDragDropOverviewExample_Factory(t) { return new (t || CdkDragDropOverviewExample)(); };
    CdkDragDropOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropOverviewExample, selectors: [["cdk-drag-drop-overview-example"]], decls: 2, vars: 0, consts: [["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtext(1, " Drag me around\n");
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-overview-example',
                        templateUrl: 'cdk-drag-drop-overview-example.html',
                        styleUrls: ['cdk-drag-drop-overview-example.css'],
                    }]
            }], null, null);
    })();

    function CdkDragDropRootElementExample_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵtext(1, " Drag the dialog around! ");
            i0.ɵɵelementEnd();
        }
    }
    /**
     * @title Drag&Drop with alternate root element
     */
    var CdkDragDropRootElementExample = /** @class */ (function () {
        function CdkDragDropRootElementExample(_overlay, _viewContainerRef) {
            this._overlay = _overlay;
            this._viewContainerRef = _viewContainerRef;
        }
        CdkDragDropRootElementExample.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._portal = new portal.TemplatePortal(this._dialogTemplate, this._viewContainerRef);
            this._overlayRef = this._overlay.create({
                positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
                hasBackdrop: true
            });
            this._overlayRef.backdropClick().subscribe(function () { return _this._overlayRef.detach(); });
        };
        CdkDragDropRootElementExample.prototype.ngOnDestroy = function () {
            this._overlayRef.dispose();
        };
        CdkDragDropRootElementExample.prototype.openDialog = function () {
            this._overlayRef.attach(this._portal);
        };
        return CdkDragDropRootElementExample;
    }());
    CdkDragDropRootElementExample.ɵfac = function CdkDragDropRootElementExample_Factory(t) { return new (t || CdkDragDropRootElementExample)(i0.ɵɵdirectiveInject(i1$1.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    CdkDragDropRootElementExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropRootElementExample, selectors: [["cdk-drag-drop-root-element-example"]], viewQuery: function CdkDragDropRootElementExample_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(i0.TemplateRef, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._dialogTemplate = _t.first);
            }
        }, decls: 3, vars: 0, consts: [[3, "click"], ["cdkDrag", "", "cdkDragRootElement", ".cdk-overlay-pane", 1, "example-dialog-content"]], template: function CdkDragDropRootElementExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function CdkDragDropRootElementExample_Template_button_click_0_listener() { return ctx.openDialog(); });
                i0.ɵɵtext(1, "Open a draggable dialog");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(2, CdkDragDropRootElementExample_ng_template_2_Template, 2, 0, "ng-template");
            }
        }, directives: [i1.CdkDrag], styles: [".example-dialog-content[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-dialog-content[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropRootElementExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-root-element-example',
                        templateUrl: 'cdk-drag-drop-root-element-example.html',
                        styleUrls: ['cdk-drag-drop-root-element-example.css'],
                    }]
            }], function () { return [{ type: i1$1.Overlay }, { type: i0.ViewContainerRef }]; }, { _dialogTemplate: [{
                    type: i0.ViewChild,
                    args: [i0.TemplateRef]
                }] });
    })();

    function CdkDragDropSortingExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var movie_r1 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(movie_r1);
        }
    }
    /**
     * @title Drag&Drop sorting
     */
    var CdkDragDropSortingExample = /** @class */ (function () {
        function CdkDragDropSortingExample() {
            this.movies = [
                'Episode I - The Phantom Menace',
                'Episode II - Attack of the Clones',
                'Episode III - Revenge of the Sith',
                'Episode IV - A New Hope',
                'Episode V - The Empire Strikes Back',
                'Episode VI - Return of the Jedi',
                'Episode VII - The Force Awakens',
                'Episode VIII - The Last Jedi',
                'Episode IX – The Rise of Skywalker'
            ];
        }
        CdkDragDropSortingExample.prototype.drop = function (event) {
            i1.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
        };
        return CdkDragDropSortingExample;
    }());
    CdkDragDropSortingExample.ɵfac = function CdkDragDropSortingExample_Factory(t) { return new (t || CdkDragDropSortingExample)(); };
    CdkDragDropSortingExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropSortingExample, selectors: [["cdk-drag-drop-sorting-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropSortingExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropSortingExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(1, CdkDragDropSortingExample_div_1_Template, 2, 1, "div", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.movies);
            }
        }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropSortingExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-sorting-example',
                        templateUrl: 'cdk-drag-drop-sorting-example.html',
                        styleUrls: ['cdk-drag-drop-sorting-example.css'],
                    }]
            }], null, null);
    })();

    function CdkDragDropSortPredicateExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var number_r1 = ctx.$implicit;
            i0.ɵɵproperty("cdkDragData", number_r1);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(number_r1);
        }
    }
    /**
     * @title Drag&Drop sort predicate
     */
    var CdkDragDropSortPredicateExample = /** @class */ (function () {
        function CdkDragDropSortPredicateExample() {
            this.numbers = [1, 2, 3, 4, 5, 6, 7, 8];
        }
        CdkDragDropSortPredicateExample.prototype.drop = function (event) {
            i1.moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
        };
        /**
         * Predicate function that only allows even numbers to be
         * sorted into even indices and odd numbers at odd indices.
         */
        CdkDragDropSortPredicateExample.prototype.sortPredicate = function (index, item) {
            return (index + 1) % 2 === item.data % 2;
        };
        return CdkDragDropSortPredicateExample;
    }());
    CdkDragDropSortPredicateExample.ɵfac = function CdkDragDropSortPredicateExample_Factory(t) { return new (t || CdkDragDropSortPredicateExample)(); };
    CdkDragDropSortPredicateExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkDragDropSortPredicateExample, selectors: [["cdk-drag-drop-sort-predicate-example"]], decls: 2, vars: 2, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListSortPredicate", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "cdkDragData", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragData"]], template: function CdkDragDropSortPredicateExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropSortPredicateExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
                i0.ɵɵtemplate(1, CdkDragDropSortPredicateExample_div_1_Template, 2, 2, "div", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("cdkDropListSortPredicate", ctx.sortPredicate);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.numbers);
            }
        }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  width: 400px;\n  max-width: 100%;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropSortPredicateExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-drag-drop-sort-predicate-example',
                        templateUrl: 'cdk-drag-drop-sort-predicate-example.html',
                        styleUrls: ['cdk-drag-drop-sort-predicate-example.css'],
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        CdkDragDropAxisLockExample,
        CdkDragDropBoundaryExample,
        CdkDragDropConnectedSortingExample,
        CdkDragDropConnectedSortingGroupExample,
        CdkDragDropCustomPlaceholderExample,
        CdkDragDropCustomPreviewExample,
        CdkDragDropDelayExample,
        CdkDragDropDisabledExample,
        CdkDragDropDisabledSortingExample,
        CdkDragDropEnterPredicateExample,
        CdkDragDropFreeDragPositionExample,
        CdkDragDropHandleExample,
        CdkDragDropHorizontalSortingExample,
        CdkDragDropOverviewExample,
        CdkDragDropRootElementExample,
        CdkDragDropSortingExample,
        CdkDragDropSortPredicateExample,
    ];
    var CdkDragDropExamplesModule = /** @class */ (function () {
        function CdkDragDropExamplesModule() {
        }
        return CdkDragDropExamplesModule;
    }());
    CdkDragDropExamplesModule.ɵfac = function CdkDragDropExamplesModule_Factory(t) { return new (t || CdkDragDropExamplesModule)(); };
    CdkDragDropExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkDragDropExamplesModule });
    CdkDragDropExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
                i1.DragDropModule,
                i1$1.OverlayModule,
                i2.CommonModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.DragDropModule,
                            i1$1.OverlayModule,
                            i2.CommonModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkDragDropExamplesModule, { declarations: [CdkDragDropAxisLockExample,
                CdkDragDropBoundaryExample,
                CdkDragDropConnectedSortingExample,
                CdkDragDropConnectedSortingGroupExample,
                CdkDragDropCustomPlaceholderExample,
                CdkDragDropCustomPreviewExample,
                CdkDragDropDelayExample,
                CdkDragDropDisabledExample,
                CdkDragDropDisabledSortingExample,
                CdkDragDropEnterPredicateExample,
                CdkDragDropFreeDragPositionExample,
                CdkDragDropHandleExample,
                CdkDragDropHorizontalSortingExample,
                CdkDragDropOverviewExample,
                CdkDragDropRootElementExample,
                CdkDragDropSortingExample,
                CdkDragDropSortPredicateExample], imports: [i1.DragDropModule,
                i1$1.OverlayModule,
                i2.CommonModule], exports: [CdkDragDropAxisLockExample,
                CdkDragDropBoundaryExample,
                CdkDragDropConnectedSortingExample,
                CdkDragDropConnectedSortingGroupExample,
                CdkDragDropCustomPlaceholderExample,
                CdkDragDropCustomPreviewExample,
                CdkDragDropDelayExample,
                CdkDragDropDisabledExample,
                CdkDragDropDisabledSortingExample,
                CdkDragDropEnterPredicateExample,
                CdkDragDropFreeDragPositionExample,
                CdkDragDropHandleExample,
                CdkDragDropHorizontalSortingExample,
                CdkDragDropOverviewExample,
                CdkDragDropRootElementExample,
                CdkDragDropSortingExample,
                CdkDragDropSortPredicateExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkDragDropAxisLockExample = CdkDragDropAxisLockExample;
    exports.CdkDragDropBoundaryExample = CdkDragDropBoundaryExample;
    exports.CdkDragDropConnectedSortingExample = CdkDragDropConnectedSortingExample;
    exports.CdkDragDropConnectedSortingGroupExample = CdkDragDropConnectedSortingGroupExample;
    exports.CdkDragDropCustomPlaceholderExample = CdkDragDropCustomPlaceholderExample;
    exports.CdkDragDropCustomPreviewExample = CdkDragDropCustomPreviewExample;
    exports.CdkDragDropDelayExample = CdkDragDropDelayExample;
    exports.CdkDragDropDisabledExample = CdkDragDropDisabledExample;
    exports.CdkDragDropDisabledSortingExample = CdkDragDropDisabledSortingExample;
    exports.CdkDragDropEnterPredicateExample = CdkDragDropEnterPredicateExample;
    exports.CdkDragDropExamplesModule = CdkDragDropExamplesModule;
    exports.CdkDragDropFreeDragPositionExample = CdkDragDropFreeDragPositionExample;
    exports.CdkDragDropHandleExample = CdkDragDropHandleExample;
    exports.CdkDragDropHorizontalSortingExample = CdkDragDropHorizontalSortingExample;
    exports.CdkDragDropOverviewExample = CdkDragDropOverviewExample;
    exports.CdkDragDropRootElementExample = CdkDragDropRootElementExample;
    exports.CdkDragDropSortPredicateExample = CdkDragDropSortPredicateExample;
    exports.CdkDragDropSortingExample = CdkDragDropSortingExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-drag-drop.umd.js.map
