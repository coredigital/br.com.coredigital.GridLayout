(function constructor(args) {
	$.gridLayout.applyProperties(_.pick(args, ["visible", "height", "top", "bottom", "left", "right", "width", "backgroundColor"]));

	var totalColumns = parseInt(args.columns) || 2;
	var gap = parseInt(args.gap) || 3;
	var totalItens = 0;
	var widthView = px2dpi((Ti.Platform.displayCaps.platformWidth - gap * (totalColumns + 1)) / totalColumns) ;
	var heightView = px2dpi((Ti.Platform.displayCaps.platformWidth - gap * (totalColumns + 1)) / totalColumns);
	var horizontalView ;

	$.footer.height = px2dpi(gap);
	_.each(args.children, function(view, index) {
		addItem(view);
	});

	function addItem(view) {
		view.height = heightView;
		view.width = widthView;
		view.left = px2dpi(gap);
		view.top = px2dpi(gap);
		if (totalItens % totalColumns == 0) {
			horizontalView = Ti.UI.createView({
				layout: 'horizontal',
				height: heightView
			});
			$.wrapperGridLayout.add(horizontalView);
		}
		horizontalView.add(view);
		totalItens ++ ;
	}

	function removeAllItems() {
		$.wrapperGridLayout.removeAllChildren();
		totalItens = 0;
	}

	function px2dpi(px) {
		return Math.ceil(px / (Titanium.Platform.displayCaps.dpi / 160));
	};

	function dpi2px(dpi) {
	    return Math.ceil(dpi * (Titanium.Platform.displayCaps.dpi / 160));
	};

	exports.removeAllItems = removeAllItems;
	exports.addItem = addItem;
})(arguments[0] || {});

