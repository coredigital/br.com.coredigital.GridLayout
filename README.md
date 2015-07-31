# br.com.coredigital.GridLayout
GridLayout widget for Appcelerator Titanium


## Overview
This widget helps you to organize your views in grid format.

![screenshot](https://raw.github.com/coredigital/br.com.coredigital.GridLayout/master/docs/screenshot.png)

## Features

## Quick Start

## Git it

## Use it

* Add the widget to your *Alloy Code*:

	```xml
	<Widget id="gridDeals" src="br.com.coredigital.GridLayout">
	    <View backgroundColor="blue"></View>
	    <View backgroundColor="yellow"></View>
	    <View backgroundColor="green"></View>
	    <View backgroundColor="black"></View>
	    <View backgroundColor="orange"></View>
	</Widget>
	```
You can set 'columns' attribute to determine how many grid's columns.
You can set 'gap' attribute to define the distance between views

	```xml
	<Widget id="gridDeals" src="br.com.coredigital.GridLayout" columns="3" gap="5">
	    <View backgroundColor="blue"></View>
	    <View backgroundColor="yellow"></View>
	    <View backgroundColor="green"></View>
	    <View backgroundColor="black"></View>
	    <View backgroundColor="orange"></View>
	</Widget>
	```


* Add the widget to your *Controller Code*:
	```javascript

	var gridDeals = Alloy.createController('br.com.coredigital.GridLayout');
	gridDeals.addItem(Ti.UI.createView({backgroundColor: 'blue'}));
	gridDeals.addItem(Ti.UI.createView({backgroundColor: 'yellow'}));
	gridDeals.addItem(Ti.UI.createView({backgroundColor: 'green'}));
	gridDeals.addItem(Ti.UI.createView({backgroundColor: 'black'}));
	gridDeals.addItem(Ti.UI.createView({backgroundColor: 'orange'}));
	
	```
## License

<pre>
Copyright 2015 Ítalo Matos

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>


