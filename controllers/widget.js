(function constructor(args) {
	var totalItens = 0;
	var widthView = Ti.Platform.displayCaps.platformWidth / 3 ;
	var heightView = Ti.Platform.displayCaps.platformWidth / 3 ;
	var horizontalView ;

	_.each(args.children, function(view, index) {
		addItem(view);
	});

	function addItem(view) {
		view.height = heightView;
		view.width = widthView;
		if (totalItens % 3 == 0) {
			horizontalView = Ti.UI.createView({
				layout: 'horizontal',
				height: heightView
			});
			$.gridLayout.add(horizontalView);
		} 
		horizontalView.add(view);
		totalItens ++ ;
	}

	function removeAllItems() {
		$.gridLayout.removeAllChildren();
		totalItens = 0;
	}

	exports.removeAllItems = removeAllItems;
	exports.addItem = addItem;
})(arguments[0] || {});

