(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/scrolling'), require('@angular/core'), require('tslib'), require('@angular/cdk/collections'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/scrolling', ['exports', '@angular/cdk/scrolling', '@angular/core', 'tslib', '@angular/cdk/collections', 'rxjs'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.scrolling = {}), global.ng.cdk.scrolling, global.ng.core, global.tslib, global.ng.cdk.collections, global.rxjs));
}(this, (function (exports, i1, i0, tslib, collections, rxjs) { 'use strict';

    function CdkVirtualScrollContextExample_div_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 2);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 2);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 2);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 2);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 2);
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 2);
        i0.ɵɵtext(14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r1 = ctx.$implicit;
        var index_r2 = ctx.index;
        var count_r3 = ctx.count;
        var first_r4 = ctx.first;
        var last_r5 = ctx.last;
        var even_r6 = ctx.even;
        var odd_r7 = ctx.odd;
        i0.ɵɵclassProp("example-alternate", odd_r7);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Item: ", item_r1, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Index: ", index_r2, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Count: ", count_r3, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("First: ", first_r4 ? "Yes" : "No", "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Last: ", last_r5 ? "Yes" : "No", "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Even: ", even_r6 ? "Yes" : "No", "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Odd: ", odd_r7 ? "Yes" : "No", "");
    } }
    /** @title Virtual scroll context variables */
    var CdkVirtualScrollContextExample = /** @class */ (function () {
        function CdkVirtualScrollContextExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        CdkVirtualScrollContextExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cdk-virtual-scroll-context-example',
                        styleUrls: ['cdk-virtual-scroll-context-example.css'],
                        templateUrl: 'cdk-virtual-scroll-context-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        CdkVirtualScrollContextExample.ɵfac = function CdkVirtualScrollContextExample_Factory(t) { return new (t || CdkVirtualScrollContextExample)(); };
        CdkVirtualScrollContextExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollContextExample, selectors: [["cdk-virtual-scroll-context-example"]], decls: 2, vars: 2, consts: [[1, "example-viewport", 3, "itemSize"], [3, "example-alternate", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item-detail"]], template: function CdkVirtualScrollContextExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0.ɵɵtemplate(1, CdkVirtualScrollContextExample_div_1_Template, 15, 8, "div", 1);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("itemSize", 18 * 7);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
            } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item-detail[_ngcontent-%COMP%] {\n  height: 18px;\n}\n\n.example-alternate[_ngcontent-%COMP%] {\n  background: rgba(127, 127, 127, 0.3);\n}"], changeDetection: 0 });
        return CdkVirtualScrollContextExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollContextExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-virtual-scroll-context-example',
                    styleUrls: ['cdk-virtual-scroll-context-example.css'],
                    templateUrl: 'cdk-virtual-scroll-context-example.html',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                }]
        }], null, null); })();

    function CdkVirtualScrollCustomStrategyExample_div_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 2);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r9 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r9);
    } }
    var CustomVirtualScrollStrategy = /** @class */ (function (_super) {
        tslib.__extends(CustomVirtualScrollStrategy, _super);
        function CustomVirtualScrollStrategy() {
            return _super.call(this, 50, 250, 500) || this;
        }
        return CustomVirtualScrollStrategy;
    }(i1.FixedSizeVirtualScrollStrategy));
    /** @title Virtual scroll with a custom strategy */
    var CdkVirtualScrollCustomStrategyExample = /** @class */ (function () {
        function CdkVirtualScrollCustomStrategyExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        CdkVirtualScrollCustomStrategyExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cdk-virtual-scroll-custom-strategy-example',
                        styleUrls: ['cdk-virtual-scroll-custom-strategy-example.css'],
                        templateUrl: 'cdk-virtual-scroll-custom-strategy-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        providers: [{ provide: i1.VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
                    },] },
        ];
        CdkVirtualScrollCustomStrategyExample.ɵfac = function CdkVirtualScrollCustomStrategyExample_Factory(t) { return new (t || CdkVirtualScrollCustomStrategyExample)(); };
        CdkVirtualScrollCustomStrategyExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollCustomStrategyExample, selectors: [["cdk-virtual-scroll-custom-strategy-example"]], features: [i0.ɵɵProvidersFeature([{ provide: i1.VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }])], decls: 2, vars: 1, consts: [[1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollCustomStrategyExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0.ɵɵtemplate(1, CdkVirtualScrollCustomStrategyExample_div_1_Template, 2, 1, "div", 1);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
            } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
        return CdkVirtualScrollCustomStrategyExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollCustomStrategyExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-virtual-scroll-custom-strategy-example',
                    styleUrls: ['cdk-virtual-scroll-custom-strategy-example.css'],
                    templateUrl: 'cdk-virtual-scroll-custom-strategy-example.html',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: i1.VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
                }]
        }], null, null); })();

    function CdkVirtualScrollDataSourceExample_div_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 2);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r11 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r11 || "Loading...");
    } }
    /** @title Virtual scroll with a custom data source */
    var CdkVirtualScrollDataSourceExample = /** @class */ (function () {
        function CdkVirtualScrollDataSourceExample() {
            this.ds = new MyDataSource();
        }
        CdkVirtualScrollDataSourceExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cdk-virtual-scroll-data-source-example',
                        styleUrls: ['cdk-virtual-scroll-data-source-example.css'],
                        templateUrl: 'cdk-virtual-scroll-data-source-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        CdkVirtualScrollDataSourceExample.ɵfac = function CdkVirtualScrollDataSourceExample_Factory(t) { return new (t || CdkVirtualScrollDataSourceExample)(); };
        CdkVirtualScrollDataSourceExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollDataSourceExample, selectors: [["cdk-virtual-scroll-data-source-example"]], decls: 2, vars: 1, consts: [["itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollDataSourceExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0.ɵɵtemplate(1, CdkVirtualScrollDataSourceExample_div_1_Template, 2, 1, "div", 1);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkVirtualForOf", ctx.ds);
            } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
        return CdkVirtualScrollDataSourceExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollDataSourceExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-virtual-scroll-data-source-example',
                    styleUrls: ['cdk-virtual-scroll-data-source-example.css'],
                    templateUrl: 'cdk-virtual-scroll-data-source-example.html',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                }]
        }], null, null); })();
    var MyDataSource = /** @class */ (function (_super) {
        tslib.__extends(MyDataSource, _super);
        function MyDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._length = 100000;
            _this._pageSize = 100;
            _this._cachedData = Array.from({ length: _this._length });
            _this._fetchedPages = new Set();
            _this._dataStream = new rxjs.BehaviorSubject(_this._cachedData);
            _this._subscription = new rxjs.Subscription();
            return _this;
        }
        MyDataSource.prototype.connect = function (collectionViewer) {
            var _this = this;
            this._subscription.add(collectionViewer.viewChange.subscribe(function (range) {
                var startPage = _this._getPageForIndex(range.start);
                var endPage = _this._getPageForIndex(range.end - 1);
                for (var i = startPage; i <= endPage; i++) {
                    _this._fetchPage(i);
                }
            }));
            return this._dataStream;
        };
        MyDataSource.prototype.disconnect = function () {
            this._subscription.unsubscribe();
        };
        MyDataSource.prototype._getPageForIndex = function (index) {
            return Math.floor(index / this._pageSize);
        };
        MyDataSource.prototype._fetchPage = function (page) {
            var _this = this;
            if (this._fetchedPages.has(page)) {
                return;
            }
            this._fetchedPages.add(page);
            // Use `setTimeout` to simulate fetching data from server.
            setTimeout(function () {
                var _a;
                (_a = _this._cachedData).splice.apply(_a, tslib.__spread([page * _this._pageSize, _this._pageSize], Array.from({ length: _this._pageSize })
                    .map(function (_, i) { return "Item #" + (page * _this._pageSize + i); })));
                _this._dataStream.next(_this._cachedData);
            }, Math.random() * 1000 + 200);
        };
        return MyDataSource;
    }(collections.DataSource));

    function CdkVirtualScrollDlExample_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "dt", 3);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "dd", 4);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var state_r13 = ctx.$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(state_r13.name);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(state_r13.capital);
    } }
    /** @title Virtual scrolling `<dl>` */
    var CdkVirtualScrollDlExample = /** @class */ (function () {
        function CdkVirtualScrollDlExample() {
            this.states = [
                { name: 'Alabama', capital: 'Montgomery' },
                { name: 'Alaska', capital: 'Juneau' },
                { name: 'Arizona', capital: 'Phoenix' },
                { name: 'Arkansas', capital: 'Little Rock' },
                { name: 'California', capital: 'Sacramento' },
                { name: 'Colorado', capital: 'Denver' },
                { name: 'Connecticut', capital: 'Hartford' },
                { name: 'Delaware', capital: 'Dover' },
                { name: 'Florida', capital: 'Tallahassee' },
                { name: 'Georgia', capital: 'Atlanta' },
                { name: 'Hawaii', capital: 'Honolulu' },
                { name: 'Idaho', capital: 'Boise' },
                { name: 'Illinois', capital: 'Springfield' },
                { name: 'Indiana', capital: 'Indianapolis' },
                { name: 'Iowa', capital: 'Des Moines' },
                { name: 'Kansas', capital: 'Topeka' },
                { name: 'Kentucky', capital: 'Frankfort' },
                { name: 'Louisiana', capital: 'Baton Rouge' },
                { name: 'Maine', capital: 'Augusta' },
                { name: 'Maryland', capital: 'Annapolis' },
                { name: 'Massachusetts', capital: 'Boston' },
                { name: 'Michigan', capital: 'Lansing' },
                { name: 'Minnesota', capital: 'St. Paul' },
                { name: 'Mississippi', capital: 'Jackson' },
                { name: 'Missouri', capital: 'Jefferson City' },
                { name: 'Montana', capital: 'Helena' },
                { name: 'Nebraska', capital: 'Lincoln' },
                { name: 'Nevada', capital: 'Carson City' },
                { name: 'New Hampshire', capital: 'Concord' },
                { name: 'New Jersey', capital: 'Trenton' },
                { name: 'New Mexico', capital: 'Santa Fe' },
                { name: 'New York', capital: 'Albany' },
                { name: 'North Carolina', capital: 'Raleigh' },
                { name: 'North Dakota', capital: 'Bismarck' },
                { name: 'Ohio', capital: 'Columbus' },
                { name: 'Oklahoma', capital: 'Oklahoma City' },
                { name: 'Oregon', capital: 'Salem' },
                { name: 'Pennsylvania', capital: 'Harrisburg' },
                { name: 'Rhode Island', capital: 'Providence' },
                { name: 'South Carolina', capital: 'Columbia' },
                { name: 'South Dakota', capital: 'Pierre' },
                { name: 'Tennessee', capital: 'Nashville' },
                { name: 'Texas', capital: 'Austin' },
                { name: 'Utah', capital: 'Salt Lake City' },
                { name: 'Vermont', capital: 'Montpelier' },
                { name: 'Virginia', capital: 'Richmond' },
                { name: 'Washington', capital: 'Olympia' },
                { name: 'West Virginia', capital: 'Charleston' },
                { name: 'Wisconsin', capital: 'Madison' },
                { name: 'Wyoming', capital: 'Cheyenne' },
            ];
        }
        CdkVirtualScrollDlExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cdk-virtual-scroll-dl-example',
                        styleUrls: ['cdk-virtual-scroll-dl-example.css'],
                        templateUrl: 'cdk-virtual-scroll-dl-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        CdkVirtualScrollDlExample.ɵfac = function CdkVirtualScrollDlExample_Factory(t) { return new (t || CdkVirtualScrollDlExample)(); };
        CdkVirtualScrollDlExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollDlExample, selectors: [["cdk-virtual-scroll-dl-example"]], decls: 3, vars: 1, consts: [["itemSize", "60", 1, "example-viewport"], [1, "example-dl"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-dt"], [1, "example-dd"]], template: function CdkVirtualScrollDlExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0.ɵɵelementStart(1, "dl", 1);
                i0.ɵɵtemplate(2, CdkVirtualScrollDlExample_ng_container_2_Template, 5, 2, "ng-container", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("cdkVirtualForOf", ctx.states);
            } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt[_ngcontent-%COMP%] {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd[_ngcontent-%COMP%] {\n  height: 30px;\n}"], changeDetection: 0 });
        return CdkVirtualScrollDlExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollDlExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-virtual-scroll-dl-example',
                    styleUrls: ['cdk-virtual-scroll-dl-example.css'],
                    templateUrl: 'cdk-virtual-scroll-dl-example.html',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                }]
        }], null, null); })();

    function CdkVirtualScrollFixedBufferExample_div_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 2);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r15 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r15);
    } }
    /** @title Fixed size virtual scroll with custom buffer parameters */
    var CdkVirtualScrollFixedBufferExample = /** @class */ (function () {
        function CdkVirtualScrollFixedBufferExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        CdkVirtualScrollFixedBufferExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cdk-virtual-scroll-fixed-buffer-example',
                        styleUrls: ['cdk-virtual-scroll-fixed-buffer-example.css'],
                        templateUrl: 'cdk-virtual-scroll-fixed-buffer-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        CdkVirtualScrollFixedBufferExample.ɵfac = function CdkVirtualScrollFixedBufferExample_Factory(t) { return new (t || CdkVirtualScrollFixedBufferExample)(); };
        CdkVirtualScrollFixedBufferExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollFixedBufferExample, selectors: [["cdk-virtual-scroll-fixed-buffer-example"]], decls: 2, vars: 1, consts: [["itemSize", "50", "minBufferPx", "200", "maxBufferPx", "400", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollFixedBufferExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0.ɵɵtemplate(1, CdkVirtualScrollFixedBufferExample_div_1_Template, 2, 1, "div", 1);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
            } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
        return CdkVirtualScrollFixedBufferExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollFixedBufferExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-virtual-scroll-fixed-buffer-example',
                    styleUrls: ['cdk-virtual-scroll-fixed-buffer-example.css'],
                    templateUrl: 'cdk-virtual-scroll-fixed-buffer-example.html',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                }]
        }], null, null); })();

    function CdkVirtualScrollHorizontalExample_div_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 3);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r17 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r17);
    } }
    /** @title Horizontal virtual scroll */
    var CdkVirtualScrollHorizontalExample = /** @class */ (function () {
        function CdkVirtualScrollHorizontalExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        CdkVirtualScrollHorizontalExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cdk-virtual-scroll-horizontal-example',
                        styleUrls: ['cdk-virtual-scroll-horizontal-example.css'],
                        templateUrl: 'cdk-virtual-scroll-horizontal-example.html',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        CdkVirtualScrollHorizontalExample.ɵfac = function CdkVirtualScrollHorizontalExample_Factory(t) { return new (t || CdkVirtualScrollHorizontalExample)(); };
        CdkVirtualScrollHorizontalExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollHorizontalExample, selectors: [["cdk-virtual-scroll-horizontal-example"]], decls: 3, vars: 1, consts: [[1, "cdk-virtual-scroll-data-source-example"], ["orientation", "horizontal", "itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollHorizontalExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "cdk-virtual-scroll-viewport", 1);
                i0.ɵɵtemplate(2, CdkVirtualScrollHorizontalExample_div_2_Template, 2, 1, "div", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
            } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".cdk-virtual-scroll-data-source-example .example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n}\n\n.cdk-virtual-scroll-data-source-example .example-item {\n  width: 50px;\n  height: 100%;\n  writing-mode: vertical-lr;\n}\n"], encapsulation: 2, changeDetection: 0 });
        return CdkVirtualScrollHorizontalExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollHorizontalExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-virtual-scroll-horizontal-example',
                    styleUrls: ['cdk-virtual-scroll-horizontal-example.css'],
                    templateUrl: 'cdk-virtual-scroll-horizontal-example.html',
                    encapsulation: i0.ViewEncapsulation.None,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                }]
        }], null, null); })();

    function CdkVirtualScrollOverviewExample_div_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 2);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r19 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r19);
    } }
    /** @title Basic virtual scroll */
    var CdkVirtualScrollOverviewExample = /** @class */ (function () {
        function CdkVirtualScrollOverviewExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        CdkVirtualScrollOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cdk-virtual-scroll-overview-example',
                        styleUrls: ['cdk-virtual-scroll-overview-example.css'],
                        templateUrl: 'cdk-virtual-scroll-overview-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        CdkVirtualScrollOverviewExample.ɵfac = function CdkVirtualScrollOverviewExample_Factory(t) { return new (t || CdkVirtualScrollOverviewExample)(); };
        CdkVirtualScrollOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollOverviewExample, selectors: [["cdk-virtual-scroll-overview-example"]], decls: 2, vars: 1, consts: [["itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0.ɵɵtemplate(1, CdkVirtualScrollOverviewExample_div_1_Template, 2, 1, "div", 1);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
            } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
        return CdkVirtualScrollOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollOverviewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-virtual-scroll-overview-example',
                    styleUrls: ['cdk-virtual-scroll-overview-example.css'],
                    templateUrl: 'cdk-virtual-scroll-overview-example.html',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                }]
        }], null, null); })();

    function CdkVirtualScrollTemplateCacheExample_div_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 2);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r21 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r21);
    } }
    /** @title Virtual scroll with no template caching */
    var CdkVirtualScrollTemplateCacheExample = /** @class */ (function () {
        function CdkVirtualScrollTemplateCacheExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        CdkVirtualScrollTemplateCacheExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cdk-virtual-scroll-template-cache-example',
                        styleUrls: ['cdk-virtual-scroll-template-cache-example.css'],
                        templateUrl: 'cdk-virtual-scroll-template-cache-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        CdkVirtualScrollTemplateCacheExample.ɵfac = function CdkVirtualScrollTemplateCacheExample_Factory(t) { return new (t || CdkVirtualScrollTemplateCacheExample)(); };
        CdkVirtualScrollTemplateCacheExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollTemplateCacheExample, selectors: [["cdk-virtual-scroll-template-cache-example"]], decls: 2, vars: 2, consts: [["itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTemplateCacheSize"], [1, "example-item"]], template: function CdkVirtualScrollTemplateCacheExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0.ɵɵtemplate(1, CdkVirtualScrollTemplateCacheExample_div_1_Template, 2, 1, "div", 1);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkVirtualForOf", ctx.items)("cdkVirtualForTemplateCacheSize", 0);
            } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
        return CdkVirtualScrollTemplateCacheExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollTemplateCacheExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-virtual-scroll-template-cache-example',
                    styleUrls: ['cdk-virtual-scroll-template-cache-example.css'],
                    templateUrl: 'cdk-virtual-scroll-template-cache-example.html',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                }]
        }], null, null); })();

    var EXAMPLES = [
        CdkVirtualScrollContextExample,
        CdkVirtualScrollCustomStrategyExample,
        CdkVirtualScrollDataSourceExample,
        CdkVirtualScrollDlExample,
        CdkVirtualScrollFixedBufferExample,
        CdkVirtualScrollHorizontalExample,
        CdkVirtualScrollOverviewExample,
        CdkVirtualScrollTemplateCacheExample,
    ];
    var CdkScrollingExamplesModule = /** @class */ (function () {
        function CdkScrollingExamplesModule() {
        }
        CdkScrollingExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.ScrollingModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        CdkScrollingExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkScrollingExamplesModule });
        CdkScrollingExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkScrollingExamplesModule_Factory(t) { return new (t || CdkScrollingExamplesModule)(); }, imports: [[
                    i1.ScrollingModule,
                ]] });
        return CdkScrollingExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkScrollingExamplesModule, { declarations: [CdkVirtualScrollContextExample,
            CdkVirtualScrollCustomStrategyExample,
            CdkVirtualScrollDataSourceExample,
            CdkVirtualScrollDlExample,
            CdkVirtualScrollFixedBufferExample,
            CdkVirtualScrollHorizontalExample,
            CdkVirtualScrollOverviewExample,
            CdkVirtualScrollTemplateCacheExample], imports: [i1.ScrollingModule], exports: [CdkVirtualScrollContextExample,
            CdkVirtualScrollCustomStrategyExample,
            CdkVirtualScrollDataSourceExample,
            CdkVirtualScrollDlExample,
            CdkVirtualScrollFixedBufferExample,
            CdkVirtualScrollHorizontalExample,
            CdkVirtualScrollOverviewExample,
            CdkVirtualScrollTemplateCacheExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkScrollingExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.ScrollingModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.CdkScrollingExamplesModule = CdkScrollingExamplesModule;
    exports.CdkVirtualScrollContextExample = CdkVirtualScrollContextExample;
    exports.CdkVirtualScrollCustomStrategyExample = CdkVirtualScrollCustomStrategyExample;
    exports.CdkVirtualScrollDataSourceExample = CdkVirtualScrollDataSourceExample;
    exports.CdkVirtualScrollDlExample = CdkVirtualScrollDlExample;
    exports.CdkVirtualScrollFixedBufferExample = CdkVirtualScrollFixedBufferExample;
    exports.CdkVirtualScrollHorizontalExample = CdkVirtualScrollHorizontalExample;
    exports.CdkVirtualScrollOverviewExample = CdkVirtualScrollOverviewExample;
    exports.CdkVirtualScrollTemplateCacheExample = CdkVirtualScrollTemplateCacheExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-scrolling.umd.js.map
