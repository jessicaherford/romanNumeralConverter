function romanNumeralConverter(symbol){

	var valuesTable = {'I':1, 'II':2, 'III':3, 'IV':4, 'V':5, 'VI':6, 'VII':7, 'VIII':8, 'IX':9, 'X':10, 'XL':40, 'L':50 , 'XC': 90, 'C':100, 'D':500, 'M':1000};

	if(valuesTable[symbol]){
		return valuesTable[symbol];
	}
	else if(!valuesTable[symbol]){
		singleSymbol = symbol.split('');
		var total = 0;
		singleSymbol.forEach(function(item){
			total += valuesTable[item];
		});
		 return total;
		}
	else{
		return 'Error with symbol';
	}
}

romanNumeralConverter('XV');
