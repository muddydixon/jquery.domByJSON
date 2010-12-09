(function(window, $){
    var _doc = window.document,
        _domByJSON = function(json){
        if($.isArray(json)){
            return $(json).map(function(i, o){
                return _domByJSON(o);
            });
        }else if(typeof json === 'object'){
            for(var tag in json){
                if(json.hasOwnProperty(tag)){
                    var _dom = _doc.createElement(tag);
                    if(typeof json[tag] === 'string'){
                        $(_dom).text(json[tag]);
                    }else if(typeof json[tag] === 'object'){
                        for(var attr in json[tag]){
                            if(json[tag].hasOwnProperty(attr)){
                                if(attr === 'childNodes'){
                                    $(_domByJSON(json[tag].childNodes)).each(function(i, o){
                                        $(_dom).append(o);
                                    });
                                }else{
                                    $(_dom).attr(attr, json[tag][attr]);
                                }
                            }
                        }
                    }
                    return _dom;
                }
            }
        }
        return document.createTextNode(json);
    },
    domByJSON = function(json){
        var _dom = _domByJSON(json);
        $(this).each(function(i, o){
            $($(_dom).clone(false)).each(function(j, e){
                $(o).append(e);
            });
        });
    };
    $.fn.domByJSON = domByJSON;
}(this, jQuery));