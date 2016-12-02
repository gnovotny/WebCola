///<reference path="layout.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cola;
(function (cola) {
    var LayoutAdaptor = (function (_super) {
        __extends(LayoutAdaptor, _super);
        function LayoutAdaptor(options) {
            _super.call(this);
            // take in implementation as defined by client
            var self = this;
            var o = options;
            if (o.trigger) {
                this.trigger = o.trigger;
            }
            if (o.kick) {
                this.kick = o.kick;
            }
            if (o.drag) {
                this.drag = o.drag;
            }
            if (o.on) {
                this.on = o.on;
            }
            this.dragstart = this.dragStart = cola.Layout.dragStart;
            this.dragend = this.dragEnd = cola.Layout.dragEnd;
        }
        // dummy functions in case not defined by client
        LayoutAdaptor.prototype.trigger = function (e) { };
        ;
        LayoutAdaptor.prototype.kick = function () { };
        ;
        LayoutAdaptor.prototype.drag = function () { };
        ;
        LayoutAdaptor.prototype.on = function (eventType, listener) { return this; };
        ;
        return LayoutAdaptor;
    }(cola.Layout));
    cola.LayoutAdaptor = LayoutAdaptor;
    /**
     * provides an interface for use with any external graph system (e.g. Cytoscape.js):
     */
    function adaptor(options) {
        return new LayoutAdaptor(options);
    }
    cola.adaptor = adaptor;
})(cola || (cola = {}));
//# sourceMappingURL=adaptor.js.map