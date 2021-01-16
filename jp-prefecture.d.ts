// Type definitions for jp-prefecture.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace jpPrefecture{
	// jpPrefecture.getAll.!1
	type GetAll1 = Array<any>;
}
declare namespace jpPrefecture{
	// jpPrefecture.find.!1
	
	/**
	 * 
	 */
	interface Find1 {
	}
}
declare namespace jpPrefecture{
	// jpPrefecture.where.!1
	
	/**
	 * 
	 */
	interface Where1 {
				
		/**
		 * 
		 */
		region : number;
	}
}
declare namespace jpPrefecture{
	// jpPrefecture.getNeighbors.!ret
	type GetNeighborsRet = Array</* [? */ any> | /* ?] */ any;
}
declare namespace jpPrefecture{
	// jpPrefecture.getAllRegionInPref.!ret
	type GetAllRegionInPrefRet = Array<jpPrefecture.getAllRegionInPref.GetAllRegionInPrefRetI>;
}
declare namespace jpPrefecture.getAllRegionInPref{
	// jpPrefecture.getAllRegionInPref.!ret.<i>
	
	/**
	 * 
	 */
	interface GetAllRegionInPrefRetI {
	}
}

/**
 * jpPrefecture base object.
 * @return  
 */
declare function jpPrefecture(): /* !this */ any;

/**
 * 
 */
declare namespace jpPrefecture{
		
	/**
	 * Current Version
	 */
	export var VERSION : string;
		
	/**
	 * Get all regions or prefectures.
	 * @param {String}
	 * @param {String | Array}
	 * @return {Array}
	 * @param type 
	 * @param select 
	 * @return  
	 */
	function getAll(type : string, select : jpPrefecture.GetAll1): any;
		
	/**
	 * Alias for getAll("region").
	 * @param {String | Array}
	 * @return {Array}
	 * @param select 
	 * @return  
	 */
	function getAllRegion(select : any): any;
		
	/**
	 * Alias for getAll("pref").
	 * @param {String | Array}
	 * @return {Array}
	 * @param select 
	 * @return  
	 */
	function getAllPref(select : any): any;
		
	/**
	 * Get the single object of regional or prefectures.
	 * @param {String}
	 * @param {Object | Any}
	 * @param {String | Array}
	 * @return {Object | Any}
	 * @param type 
	 * @param value 
	 * @param select 
	 * @return  
	 */
	function find(type : string, value : jpPrefecture.Find1, select : Array<any>): any;
		
	/**
	 * CGet the single object of regional. Alias for find("region").
	 * @param {Object | Any}
	 * @param {String | Array}
	 * @return {Object | Any}
	 * @param value 
	 * @param select 
	 * @return  
	 */
	function regionFind(value : any, select : any): any;
		
	/**
	 * Get the single object of prefectures. Alias for find("pref").
	 * @param {Object | Any}
	 * @param {String | Array}
	 * @return {Object | Any}
	 * @param value 
	 * @param select 
	 * @return  
	 */
	function prefFind(value : any, select : any): any;
		
	/**
	 * By specifying the key and value, to get a single object of regional.
	 * @param {String}
	 * @param {String}
	 * @param {String | Integer}
	 * @param {String | Array}
	 * @return {Object | Any}
	 * @param type 
	 * @param key 
	 * @param value 
	 * @param select 
	 * @return  
	 */
	function findBy(type : string, key : string, value : any, select : any): any;
		
	/**
	 * Alias for findBy("region").
	 * @param {String}
	 * @param {Any}
	 * @param {String | Array}
	 * @return {Object | Any}
	 * @param key 
	 * @param value 
	 * @param select 
	 * @return  
	 */
	function regionFindBy(key : string, value : any, select : any): any;
		
	/**
	 * Alias for findBy("pref").
	 * @param {String}
	 * @param {Any}
	 * @param {String | Array}
	 * @return {Object | Any}
	 * @param key 
	 * @param value 
	 * @param select 
	 * @return  
	 */
	function prefFindBy(key : any, value : any, select : any): any;
		
	/**
	 * Get the region corresponding from prefectures.
	 * @param {Any}
	 * @param {String | Array}
	 * @return {Object | Any}
	 * @param value 
	 * @param select 
	 * @return  
	 */
	function regionFindByPref(value : any, select : any): any;
		
	/**
	 * Get the prefectures corresponding from region.
	 * @param {Any}
	 * @param {String | Array}
	 * @return {Array}
	 * @param value 
	 * @param select 
	 * @return  
	 */
	function prefFindByRegion(value : any, select : any): any;
		
	/**
	 * Get the regional or province apply to the given conditions.
	 * The return value is returned always an array.
	 * @param {String}
	 * @param {Object}
	 * @param {String | Array}
	 * @return {Array}
	 * @param type 
	 * @param attrs 
	 * @param select 
	 * @return  
	 */
	function where(type : string, attrs : jpPrefecture.Where1, select : any): any;
		
	/**
	 * Alias for where("region").
	 * @param {Object}
	 * @param {String | Array}
	 * @return {Array}
	 * @param attrs 
	 * @param select 
	 * @return  
	 */
	function regionWhere(attrs : any, select : any): any;
		
	/**
	 * Alias for where("pref").
	 * @param {Object}
	 * @param {String | Array}
	 * @return {Array}
	 * @param attrs 
	 * @param select 
	 * @return  
	 */
	function prefWhere(attrs : /* jpPrefecture.where.!1 */ any, select : any): any;
		
	/**
	 * Conversion from the specified value of the region or province to another key.
	 * @param {String}
	 * @param {Any}
	 * @param {String}
	 * @return {Any}
	 * @param type 
	 * @param value 
	 * @param key 
	 * @return  
	 */
	function convert(type : string, value : any, key : Array<any>): any;
		
	/**
	 * Alias for convert("region").
	 * @param {Any}
	 * @param {String}
	 * @return {Any}
	 * @param value 
	 * @param key 
	 * @return  
	 */
	function regionConvert(value : any, key : any): any;
		
	/**
	 * Alias for convert("pref").
	 * @param {Any}
	 * @param {String}
	 * @return {Any}
	 * @param value 
	 * @param key 
	 * @return  
	 */
	function prefConvert(value : any, key : any): any;
		
	/**
	 * Get the ones that are adjacent to a given region or province.
	 * @param {String}
	 * @param {Any}
	 * @param {String | Array}
	 * @return {Array}
	 * @param type 
	 * @param value 
	 * @param select 
	 * @return  
	 */
	function getNeighbors(type : string, value : any, select : any): jpPrefecture.GetNeighborsRet;
		
	/**
	 * Alias for getNeighbors("region").
	 * @param {Any}
	 * @param {String | Array}
	 * @return {Array}
	 * @param value 
	 * @param select 
	 * @return  
	 */
	function getRegionNeighbors(value : any, select : any): Array<any>;
		
	/**
	 * Alias for getNeighbors("pref").
	 * @param {Any}
	 * @param {String | Array}
	 * @return {Array}
	 * @param value 
	 * @param select 
	 * @return  
	 */
	function getPrefNeighbors(value : any, select : any): Array<any>;
		
	/**
	 * Determine if the specified two regions or prefectures were are adjacent.
	 * @param {String}
	 * @param {Any}
	 * @param {Any}
	 * @return {Boolean}
	 * @param type 
	 * @param val1 
	 * @param val2 
	 * @return  
	 */
	function isNeighbor(type : string, val1 : any, val2 : any): boolean;
		
	/**
	 * Alias for isNeighbor("region").
	 * @param {Any}
	 * @param {Any}
	 * @return {Boolean}
	 * @param val1 
	 * @param val2 
	 * @return  
	 */
	function isRegionNeighbor(val1 : any, val2 : any): boolean;
		
	/**
	 * Alias for isNeighbor("pref").
	 * @param {Any}
	 * @param {Any}
	 * @return {Boolean}
	 * @param val1 
	 * @param val2 
	 * @return  
	 */
	function isPrefNeighbor(val1 : any, val2 : any): boolean;
		
	/**
	 * Get the number of adjacent of the specified region.
	 * @param {String}
	 * @param {Any}
	 * @return {Integer}
	 * @param type 
	 * @param value 
	 * @return  
	 */
	function neighborSize(type : string, value : any): number;
		
	/**
	 * Alias for neighborSize("region").
	 * @param {Any}
	 * @return {Integer}
	 * @param value 
	 * @return  
	 */
	function regionNeighborSize(value : any): number;
		
	/**
	 * Alias for neighborSize("pref").
	 * @param {Any}
	 * @return {Integer}
	 * @param value 
	 * @return  
	 */
	function prefNeighborSize(value : any): number;
		
	/**
	 * Get a list of state that contains the prefectures corresponding to the region in the multidimensional array.
	 * This is useful when the loop of the list was based on the regional.
	 * @return {Array}
	 * @return  
	 */
	function getAllRegionInPref(): jpPrefecture.GetAllRegionInPrefRet;
}
