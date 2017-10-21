(function () {
    var myJQuery = $ = function (params) {
        return new Library(params);
    };
     
    var Library = function (params) {
		var selector,i=0;
            if (typeof params === 'string') {
			if(params[0] == "<"){
				var div  = document.createElement('div');
				div.innerHTML = params;
			   selector = div.firstChild;
			   console.log(selector);
			   this[0] = selector;
			   return this;
			   }	
              else  selector = document.querySelectorAll(params);
			
            } else if (params.length) { 
                selector = params;
            } else {
                selector = [params];
            }
		
		this.length = selector.length;
         
        for (; i < this.length; i++) {
            this[i] = selector[i];
        }
        return this;        
    };
	myJQuery.fn = Library.prototype =
    {       
	mouseout:function(getfunc){
		   var len = this.length;
		   while(len--){
		   if(this[len].addEventListener){
		  this[len].addEventListener('mouseout',getfunc);
			  }
		 if(this[len].attachEvent){
			  this[len].attachEvent('onmouseout',getfunc);
			 }	  }
			 return this;
		},
	mouseover:function(getfunc){
		   var len = this.length;
		   while(len--){
		   if(this[len].addEventListener){
		  this[len].addEventListener('mouseover',getfunc);
			  }
		 if(this[len].attachEvent){
			  this[len].attachEvent('onmouseover',getfunc);
			 }	  }
			 return this;
		},
	  keypress:function(getfunc){
		   var len = this.length;
		   while(len--){
		   if(this[len].addEventListener){
		  this[len].addEventListener('keypress',getfunc);
			  }
		 if(this[len].attachEvent){
			  this[len].attachEvent('onkeypress',getfunc);
			 }	  }
			 return this
		},
	 Click:function(getfunc){
		   var len = this.length;
		   while(len--){
		   if(this[len].addEventListener){
		  this[len].addEventListener('click',getfunc);
			  }
		 if(this[len].attachEvent){
			  this[len].attachEvent('onclick',getfunc);
			 }	  }
			 return this;
		},
	      hide:function(selector){
		  var len = this.length;
		  if(typeof selector == 'undefined'){
		  while(len--){
			  this[len].style.visibility = "hidden";
			  
			  }}
		else 	while(len--){
			if(this[len].getAttribute("class") == selector)
			  this[len].style.visibility = "hidden";
			  }  
			  return this;
		
		}, 
	     show: function(){
		 var len = this.length;
		   while(len--){
			   this[len].style.visibilty = "visible";
			   }
		 return this;
		},
	      remove: function(selector){
			  var len = this.length;
			  if(typeof selector == 'undefined'){
				  while(len--)
				  this[len].removeNode;
				  }
			else while(len--)
			 {
				 var children = this[len].children;
				 console.log(children);
            for (var i = 0; i < children.length; i++) {
              if(children[i].getAttribute("class") == selector)
			   children[i].removeNode;
			  }
				 }	
				 return this;  
			  },
	      prependTo: function(selector){
			 var len = this.length;
			 var obj = document.querySelectorAll(selector);
			console.log(this[0]); 
			console.log(obj[0]);
	        obj[0].insertBefore(this[0].firstChild, obj[0].childNodes[0]);
				  return this;
			 },
	     prepend: function(selector){
			 var len = this.length;
			 
			  if(typeof selector === 'string'){
				  console.log("thinks");
				  while(len--){
					 var div = document.createElement('div');
					 div.innerHTML = selector;
					 this[len].insertBefore(div.firstChild, this[len].childNodes[0]);
				  }}
			else {	
				  while(len--){
					  console.log(selector[0]);
				  this[len].insertBefore(selector, this[len].childNodes[0]);
				  }
				  }
				  return this;
			 },
	    
	     appendTo: function(selector){
			 var len = this.length;
			 var obj = document.querySelectorAll(selector);
			console.log(this[0]); 
			console.log(obj[0]);
			while(len--)
				 obj[len].appendChild(this[0]);
	
			 return this;
			 },
	     append: function(selector){
			 var len = this.length;
			 
			  if(typeof selector === 'string'){
				  console.log("thinks");
				  while(len--){
					 var div = document.createElement('div');
					 div.innerHTML = selector;
					 
					 this[len].appendChild(div.firstChild);
				  }}
			else {	
				  while(len--){
					  console.log(selector);
				  this[len].appendChild(selector);}
				  }
			 return this;
			 },
	    filter:function(selector){
		var len = this.length;
		if(typeof selector == 'undefined')
		  {  
		   while(len--){
			  objects[i] = this[len];
			  i++;
			}
			return objects;
		  }
		 else{  
		var objects = {};
		var i =0;
		while(len--){
			if(this[len].getAttribute("class") == selector)
			  objects[i] = this[len];
			 if(this[len].getAttribute("id") == selector)
			  objects[i] = this[len];
			  i++;
			}
			}
			return objects;
		},
	    children:function(selector){
		  var len = this.length;
		  var childs = {};
		  if(typeof selector == 'undefined')
		{    while(len--){
			console.log(this[len].childNodes);
			console.log(typeof 	this[len].childNodes[1]);
			var x = this[len].childNodes;
			var counter = 0;
			var i=0,j=0;
			for(i in x)
			counter++;
			for(i=0;i<counter;i++){
			if(typeof this[len].childNodes[i] == 'object'){
		 childs[j] = this[len].childNodes[i];
		 }
		 console.log(childs[j]);
		 }
		 this[len] = childs;
		 j++;
		}
		return this;		
		}
		},
	    
	    parents:function(selector){
		 var len = this.length;
		 var parents={};
		 var parent;
		 var i=0;
		 if(typeof selector == 'undefined')
		 {   
			 while(len--){
		      parent = this[len].parentNode;
			 while (true) {
				if(parent.tagName == 'BODY')
				break;
              parents[i++] = parent;
			  parent = parent.parentNode;
			   }
			   this[len] = parents;
			   i=0;
			   }
			   return this;
			   }
		else {
			   while(len--){
			     parent = this[len].parentNode;
				  while (parent.tagName == 'BODY') {
				console.log(parent);
				if(parent.tagName.toLowerCase() == selector)
				{
					parents[i++] =  parent;
					break;}
				
				}
				this[len] = parents;   
				   }
			}	   
			return this;
		},
	     parent:function(selector){
		  var len = this.length;
		if(typeof selector == 'undefined'){
		while(len--){
			this[len]  = this[len].parentNode;
			}
 			return this;
			}
		else{ while(len--){
			
			var parent = this[len].parentNode;
			console.log(parent.getAttribute("class"));
			if ( parent.getAttribute("class") == selector)
			     parents = parents + this[len].parentNode;
			 this[len] = parents;
			}
 			return this;
		}
		
		},
	    width:function(x){
			var len = this.length;
			if(typeof x == 'undefined')
			while(len--){
				if(typeof this[len].style.width != 'undefined')
			   return this[len].clientWidth;
			   }
			 else {
				 while(len--){this[len].style.width = x;}}  
			return this;
			},
	    height: function(y){
			var len = this.length;
			if(typeof y == 'undefined')
			while(len--){
				if(typeof this[len].style.height != 'undefined')
			   return this[len].clientHeight;
			   }
			 else {
				 while(len--){this[len].style.height = y;}}  
			
 			return this;
			},
	
	    attr:function(first,second){
		var len = this.length;
	    if(typeof second == 'undefined')
		  {while(len--) 
		    return this[len].getAttribute(first);}
		else while(len--)
		     this[len].setAttribute(first,second);	
		},
		css:function(first,second){
			var len = this.length;
		if(typeof second === 'undefined'){
		      	while(len--)
				return getStyle(this[len],first);
				}
			else   	{while(len--)
				this[len].style[first] = second;
			}
			
 			return this;
			},
		html:function(text){
			var len = this.length;
			if(typeof text === 'undefined')
			   while(len--)
				return this[len].innerHTML;
				else{
			while(len--){
				this[len].innerHTML = text;
				}}
			  return this
			},
        remove: function(){
			var len = this.length;
			while(len--){
				this[len].parentNode.removeChild(this[len]);
				}
				
 			return this;
			},
        hide: function () {
            var len = this.length;
            while (len--) {
                this[len].style.display = 'none';
            }
 
            return this;
        },
		show: function(){
			var len = this.length;
             while (len--) {
                this[len].style.display = 'block';
            }
 			return this;
			}
	
	
	};
	
	if(!window.myJQuery) {
        window.myJQuery = myJQuery = $;
    }
})();



function getStyle(oElm, strCssRule){
	var strValue = "";
	if(document.defaultView && document.defaultView.getComputedStyle){
		strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
	}
	else if(oElm.currentStyle){
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
			return p1.toUpperCase();
		});
		strValue = oElm.currentStyle[strCssRule];
	}
	return strValue;
}