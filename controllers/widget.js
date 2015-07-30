(function constructor(args) {
	$.gridLayout.applyProperties(_.pick(args, ["visible", "height", "top", "bottom", "left", "right", "width", "backgroundColor"]));

	var totalColumns = args.totalColumns || 2;
	var gap = args.gap || 3;
	var totalItens = 0;
	var widthView = (Ti.Platform.displayCaps.platformWidth - gap * (totalColumns + 1)) / totalColumns ;
	var heightView = (Ti.Platform.displayCaps.platformWidth - gap * (totalColumns + 1)) / totalColumns ;
	var horizontalView ;
	$.footer.height = gap;
	_.each(args.children, function(view, index) {
		addItem(view);
	});

	function addItem(view) {
		view.height = heightView;
		view.width = widthView;
		view.left = gap;
		view.top = gap;
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

	exports.removeAllItems = removeAllItems;
	exports.addItem = addItem;
})(arguments[0] || {});

